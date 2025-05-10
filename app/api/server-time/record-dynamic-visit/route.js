import clientPromise from '../../../../lib/mongodb';
import { v4 as uuidv4 } from 'uuid';
import cookie from 'cookie';
import mappings from '../../../../lib/mappings';
import { getKSTDateString } from '../../../../utils/dateUtils'; // utils/dateUtils.js의 getKSTDateString 함수 import

// POST 메소드: 방문 기록을 저장 또는 업데이트
export async function POST(request) {
    try {
        // 요청 본문 파싱
        const body = await request.json();
        const { url } = body;
        if (!url) {
            return new Response(JSON.stringify({ error: 'URL is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const client = await clientPromise;
        const db = client.db('servertime');
        const visitsCollection = db.collection('urlVisits');

        // utils/dateUtils.js를 활용하여 절대적인 KST 시간 정보 획득
        const { kstDateString, todayString, monthString, yearString } = getKSTDateString();

        // URL에 대한 매핑 적용: 매핑된 도메인이 있으면 해당 이름 사용
        let pageName = url;
        for (const mapping of mappings) {
            if (url.includes(mapping.domain)) {
                pageName = mapping.name;
                break;
            }
        }

        // 쿠키 파싱 및 visitorId 확인
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

        // 방문자 키 생성
        const dailyVisitorKey = `${todayString}-${visitorId}`;
        const monthlyVisitorKey = `${monthString}-${visitorId}`;
        const annualVisitorKey = `${yearString}-${visitorId}`;

        // 기존 방문자가 기록되어 있는지 확인
        const existingVisit = await visitsCollection.findOne({
            url,
            pageName,
            $or: [
                { [`dailyVisits.${todayString}.uniqueVisitors`]: dailyVisitorKey },
                { [`monthlyVisits.${monthString}.uniqueVisitors`]: monthlyVisitorKey },
                { [`annualVisits.${yearString}.uniqueVisitors`]: annualVisitorKey },
            ],
        });

        if (!existingVisit) {
            // 방문자가 기록되지 않은 경우, 방문 수 증가 및 uniqueVisitors 업데이트
            await visitsCollection.updateOne(
                { url },
                {
                    $set: { pageName },
                    $inc: {
                        [`dailyVisits.${todayString}.count`]: 1,
                        [`monthlyVisits.${monthString}.count`]: 1,
                        [`annualVisits.${yearString}.count`]: 1,
                        totalVisits: 1,
                    },
                    $addToSet: {
                        [`dailyVisits.${todayString}.uniqueVisitors`]: dailyVisitorKey,
                        [`monthlyVisits.${monthString}.uniqueVisitors`]: monthlyVisitorKey,
                        [`annualVisits.${yearString}.uniqueVisitors`]: annualVisitorKey,
                        uniqueVisitors: visitorId,
                    },
                },
                { upsert: true }
            );
        } else {
            // 이미 방문 기록이 있는 경우 pageName만 업데이트
            await visitsCollection.updateOne({ url }, { $set: { pageName } });
        }

        const responseBody = { message: 'Dynamic Visit recorded', todayString, kstDateString };
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
