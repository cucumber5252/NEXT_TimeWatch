import clientPromise from '../../../lib/mongodb';
import { getKSTDateString } from '../../../utils/dateUtils';

// POST 메소드: 회원가입 기록(Signup)을 저장 또는 업데이트하는 API
export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('user_data');
        const dailySignupsCollection = db.collection('dailySignups');
        const monthlySignupsCollection = db.collection('monthlySignups');
        const totalSignupsCollection = db.collection('totalSignups');

        // 대한민국 표준시(KST)로 현재 날짜와 시간을 가져오기 (절대적인 KST)
        const { kstDateString, todayString, monthString } = getKSTDateString();

        // Daily Signups 업데이트: 오늘 날짜 기준 signupCount 증가, 문서 없으면 생성 (upsert)
        await dailySignupsCollection.updateOne({ date: todayString }, { $inc: { signupCount: 1 } }, { upsert: true });

        // Monthly Signups 업데이트: 이번 달 기준 signupCount 증가, 문서 없으면 생성 (upsert)
        await monthlySignupsCollection.updateOne(
            { month: monthString },
            { $inc: { signupCount: 1 } },
            { upsert: true }
        );

        // Total Signups 업데이트: 전체 signupCount 증가 및 최초 등록일 설정 (upsert)
        await totalSignupsCollection.updateOne(
            { type: 'total' },
            { $inc: { signupCount: 1 }, $setOnInsert: { startDate: todayString } },
            { upsert: true }
        );

        return new Response(JSON.stringify({ message: 'Signup recorded', todayString, kstDateString }), {
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
