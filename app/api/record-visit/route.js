import clientPromise from '../../../lib/mongodb';
import { v4 as uuidv4 } from 'uuid';
import cookie from 'cookie';
import { getKSTDateString } from '../../../utils/dateUtils'; // 이제 utils/dateUtils에서 KST 계산 함수 import

/**
 * POST: 방문 기록을 저장 또는 업데이트하는 API
 */
export async function POST(request) {
    let body = {};
    try {
        const text = await request.text();
        if (text) {
            body = JSON.parse(text);
        }
    } catch (error) {
        console.error('Error parsing request body:', error);
        body = {};
    }

    try {
        const client = await clientPromise;
        const db = client.db('visits');
        const dailyVisitsCollection = db.collection('dailyVisits');
        const monthlyVisitsCollection = db.collection('monthlyVisits');
        const totalVisitsCollection = db.collection('totalVisits');

        // utils/dateUtils.js의 getKSTDateString 사용
        const { kstDateString, todayString, monthString, yesterdayString } = getKSTDateString();

        console.log('오늘 날짜 record-visit:', todayString);
        console.log('어제 날짜 record-visit:', yesterdayString);

        // 쿠키 파싱
        const cookieHeader = request.headers.get('cookie') || '';
        const cookies = cookie.parse(cookieHeader);
        let visitorId = cookies.visitorId;
        const headers = new Headers();

        if (!visitorId) {
            visitorId = uuidv4();
            headers.set(
                'Set-Cookie',
                cookie.serialize('visitorId', visitorId, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 365,
                })
            );
        }

        const dailyVisitorKey = `${todayString}-${visitorId}`;
        const monthlyVisitorKey = `${monthString}-${visitorId}`;

        const existingDailyVisitor = await dailyVisitsCollection.findOne(
            { date: todayString, uniqueVisitors: dailyVisitorKey },
            { projection: { _id: 1 } }
        );
        const existingMonthlyVisitor = await monthlyVisitsCollection.findOne(
            { month: monthString, uniqueVisitors: monthlyVisitorKey },
            { projection: { _id: 1 } }
        );

        if (!existingDailyVisitor && !existingMonthlyVisitor) {
            await dailyVisitsCollection.updateOne(
                { date: todayString },
                { $addToSet: { uniqueVisitors: dailyVisitorKey } },
                { upsert: true }
            );

            await monthlyVisitsCollection.updateOne(
                { month: monthString },
                { $addToSet: { uniqueVisitors: monthlyVisitorKey } },
                { upsert: true }
            );

            await totalVisitsCollection.updateOne(
                { type: 'total' },
                {
                    $addToSet: { uniqueVisitors: dailyVisitorKey },
                    $setOnInsert: { startDate: todayString },
                },
                { upsert: true }
            );
        }

        const dailyUpdate = await dailyVisitsCollection.findOne(
            { date: todayString },
            { projection: { uniqueVisitors: 1 } }
        );
        const uniqueCount = dailyUpdate ? dailyUpdate.uniqueVisitors.length : 0;

        const responseBody = {
            message: 'Visit recorded',
            todayString,
            kstDateString,
            uniqueCount,
            sessionId: visitorId,
        };

        return new Response(JSON.stringify(responseBody), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...Object.fromEntries(headers) },
        });
    } catch (err) {
        console.error('Error recording page visit:', err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

/**
 * GET: 방문자 수(오늘 및 선택적으로 어제 방문자 수) 조회 API
 */
export async function GET(request) {
    try {
        // utils/dateUtils.js의 getKSTDateString 사용
        const { todayString, yesterdayString } = getKSTDateString();

        const client = await clientPromise;
        const db = client.db('visits');
        const dailyVisitsCollection = db.collection('dailyVisits');

        const { searchParams } = new URL(request.url);
        const getYesterday = searchParams.get('getYesterday');

        const dailyUpdate = await dailyVisitsCollection.findOne(
            { date: todayString },
            { projection: { uniqueVisitors: 1 } }
        );
        const uniqueCount = dailyUpdate ? dailyUpdate.uniqueVisitors.length : 0;

        let yesterdayUniqueCount = 0;
        if (getYesterday === 'true') {
            const yesterdayUpdate = await dailyVisitsCollection.findOne(
                { date: yesterdayString },
                { projection: { uniqueVisitors: 1 } }
            );
            yesterdayUniqueCount = yesterdayUpdate ? yesterdayUpdate.uniqueVisitors.length : 0;
        }

        const responseBody = {
            uniqueCount,
            yesterdayUniqueCount,
        };

        return new Response(JSON.stringify(responseBody), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
