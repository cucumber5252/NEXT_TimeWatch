// app/api/track-click/route.js
import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { getClientIp } from '../../../utils/getClientIp';
import { getKSTDateString } from '../../../utils/dateUtils';

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db('ad_protection');
        const clickLogs = db.collection('click_logs');
        const blockedIps = db.collection('blocked_ips');

        const ip = getClientIp(req);

        // 절대적인 KST 정보를 가져옴
        const { kstDate, kstDateStringWithMs, todayString } = getKSTDateString();

        // 30초 전의 KST 시간 계산 ("YYYY-MM-DD HH:mm:ss.sss" 형식)
        const kst30SecondsAgo = new Date(kstDate.getTime() - 30000).toISOString().replace('T', ' ').slice(0, 23);

        // 클라이언트가 요청 시 전달한 referer 헤더에서 전체 URL을 추출 (없으면 'unknown')
        const pagePath = req.headers.get('referer') || 'unknown';

        // JSON 본문에서 adUnit 값만 파싱 (없으면 'unknown' 사용)
        let adUnit = 'unknown';

        try {
            const body = await req.json();
            adUnit = body.adUnit || 'unknown';
        } catch (err) {
            console.error('JSON 파싱 실패, 기본값 사용:', err);
        }

        // 최근 30초 내 클릭 횟수 확인 (문자열 비교)
        const recentClicks = await clickLogs.countDocuments({
            ip,
            createdAt: { $gte: kst30SecondsAgo },
        });

        // 클릭 로그 저장 (현재 KST 시간, 밀리초 포함)와 페이지 정보 추가
        await clickLogs.insertOne({
            ip,
            createdAt: kstDateStringWithMs,
            adUnit,
            page: pagePath,
        });

        // 30초 내 2회 이상 클릭 시 차단 처리 및 blocked_ips 업데이트
        if (recentClicks >= 2) {
            // 동일 ip의 오늘 날짜에 해당하는 차단 기록 확인 (blockedAt 문자열이 오늘 날짜로 시작하는지 체크)
            const todayRegex = `^${todayString}`;
            const existingBlock = await blockedIps.findOne({
                ip,
                blockedAt: { $regex: todayRegex },
            });

            if (existingBlock) {
                // 이미 차단된 문서가 있다면 clicks 필드를 1 증가
                await blockedIps.updateOne({ _id: existingBlock._id }, { $inc: { clicks: 1 } });
            } else {
                // 없으면 새 문서 생성 (clicks는 3부터 시작)
                await blockedIps.insertOne({
                    ip,
                    blockedAt: kstDateStringWithMs,
                    clicks: 3,
                });
            }

            // 차단 처리 후 send-alert API 호출 (한번만 호출)
            fetch(`${process.env.SITE_URL}/api/send-alert`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ip }),
            }).catch((err) => console.error('❌ 이메일 전송 API 호출 실패:', err));

            return NextResponse.json({ blocked: true });
        }

        return NextResponse.json({ blocked: false });
    } catch (error) {
        console.error('MongoDB 저장 오류:', error);
        return NextResponse.json({ error: '서버 오류 발생' }, { status: 500 });
    }
}
