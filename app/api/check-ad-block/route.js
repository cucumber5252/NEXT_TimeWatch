// app/api/check-ad-block/route.js
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { getClientIp } from '../../../utils/getClientIp';
import { getKSTDateString } from '../../../utils/dateUtils';

export async function GET(req) {
    try {
        const client = await clientPromise;
        const db = client.db('ad_protection');
        const clickLogs = db.collection('click_logs');
        const blockedIps = db.collection('blocked_ips');

        const ip = getClientIp(req);

        // utils/dateUtils.js에서 절대적인 KST 정보를 가져옴
        const { kstDate } = getKSTDateString();

        // kstDate는 이미 절대적인 KST 기준의 Date 객체이므로, 이를 사용해 30초 전을 계산
        const kst30SecondsAgo = new Date(kstDate.getTime() - 30000).toISOString().replace('Z', '');

        // ✅ 현재 IP가 차단되어 있는지 확인 (먼저 확인)
        const isBlocked = await blockedIps.findOne({ ip });
        if (isBlocked) {
            return NextResponse.json({ blocked: true });
        }

        // ✅ 최근 30초 내 클릭 횟수 확인
        const recentClicks = await clickLogs.countDocuments({
            ip,
            createdAt: { $gte: kst30SecondsAgo }, // ✅ 30초 내 클릭 확인 (문자열 비교)
        });

        console.log('🕒 [DEBUG] 최근 30초 내 클릭 횟수:', recentClicks);

        return NextResponse.json({ blocked: recentClicks >= 2 });
    } catch (error) {
        console.error('❌ MongoDB 조회 오류:', error);
        return NextResponse.json({ error: '서버 오류 발생' }, { status: 500 });
    }
}
