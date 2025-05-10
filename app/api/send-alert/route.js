import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { sendEmail } from '../../../utils/sendEmail';
import { getClientIp } from '../../../utils/getClientIp';
import { getKSTDateString } from '../../../utils/dateUtils';

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db('ad_protection'); // ✅ DB 이름 설정
        const collection = db.collection('blocked_ips'); // ✅ 컬렉션 이름 설정

        const body = await req.json();
        const ip = body.ip || getClientIp(req);

        // 중앙화된 KST 계산 로직을 사용하여 절대적인 KST 시간 문자열 획득
        const { kstDateStringWithMs } = getKSTDateString();

        console.log('🕒 [DEBUG] 차단된 IP:', ip);
        console.log('🕒 [DEBUG] MongoDB에 저장될 차단 시간 (KST 문자열):', kstDateStringWithMs);

        // 이미 차단된 IP인지 확인
        const isBlocked = await collection.findOne({ ip });

        if (!isBlocked) {
            // 차단된 IP 저장
            await collection.insertOne({ ip, blockedAt: kstDateStringWithMs });
            console.log('✅ [DEBUG] MongoDB에 차단된 IP 저장 완료:', ip);

            // 관리자에게 이메일 전송 시도
            console.log('📧 [DEBUG] 이메일 전송 시작:', ip);
            try {
                const emailResponse = await sendEmail(ip);
                console.log('📧 [DEBUG] 이메일 전송 성공:', emailResponse);
            } catch (emailError) {
                console.error('❌ [DEBUG] 이메일 전송 중 오류 발생:', emailError);
            }
        }
        // } else {
        //     console.log('ℹ️ [DEBUG] 해당 IP는 이미 차단된 상태입니다:', ip);
        // }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('MongoDB 저장 또는 이메일 전송 오류:', error);
        return NextResponse.json({ error: '서버 오류 발생' }, { status: 500 });
    }
}
