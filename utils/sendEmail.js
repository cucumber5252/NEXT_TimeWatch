// utils/sendEmail.js
import nodemailer from 'nodemailer';

/**
 * 이메일을 전송하는 함수
 * @param {string} ip - 부정 클릭이 발생한 사용자 IP
 */
export async function sendEmail(ip) {
    try {
        // ✅ Nodemailer 설정
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Gmail 사용 (다른 SMTP도 가능)
            auth: {
                user: process.env.EMAIL_USER, // Gmail 주소
                pass: process.env.EMAIL_PASS, // Gmail 앱 비밀번호 (일반 비밀번호 X)
            },
            secure: false, // 🚨 Vercel 환경에서는 secure: false 필요
            tls: {
                rejectUnauthorized: false, // 🚨 Vercel에서 인증 문제 해결
            },
        });

        // ✅ 여러 수신자를 쉼표(,)로 구분하여 전송
        // const recipients = 'kubshic@gmail.com';
        const recipients = 'kubshic@gmail.com, veritas628729@gmail.com, dohyun11111m@gmail.com';

        // ✅ 이메일 옵션 설정
        const mailOptions = {
            from: process.env.EMAIL_USER, // 발신자 이메일
            to: recipients, // 관리자 이메일 (여기에 알림 전송)
            subject: '🚨 애드센스 부정 클릭 감지!',
            text: `부정 클릭이 감지되었습니다.\n\nIP 주소: ${ip}\n\nMongoDB에서 ad_protection 데이터베이스 안의 click_logs 컬렉션을 확인하세요.`,
        };

        // ✅ 이메일 전송
        const info = await transporter.sendMail(mailOptions);
        console.log('📧 이메일 전송 성공:', info.response);
        return info.response; // 성공 응답 반환
    } catch (error) {
        console.error('❌ 이메일 전송 실패:', error);
        throw new Error('이메일 전송 실패'); // 명확한 에러 처리를 위해 throw 추가
    }
}
