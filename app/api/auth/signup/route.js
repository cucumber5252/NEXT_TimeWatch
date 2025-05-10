import { NextResponse } from 'next/server';
import clientPromise from '../../../../lib/mongodb';
import bcrypt from 'bcrypt';
import moment from 'moment-timezone';

// KST 시간을 포맷된 문자열로 반환하는 함수
function getKSTDateString() {
    return moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
}

export async function POST(request) {
    const body = await request.json();
    const { nickname, email, username, password } = body;

    if (!email || !username || !nickname || !password) {
        return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    try {
        const client = await clientPromise;
        const db = client.db('user_data');
        const users = db.collection('users');

        // 대한민국 표준시 (KST)로 현재 날짜와 시간을 가져오기
        const kstDateString = getKSTDateString();

        // 이메일, 사용자명 및 닉네임 중복 확인
        const existingUser = await users.findOne({
            $or: [{ email }, { username }, { nickname }],
        });

        if (existingUser) {
            if (existingUser.email === email) {
                return NextResponse.json({ message: '이미 가입한 이메일입니다.' }, { status: 400 });
            }
            if (existingUser.username === username) {
                return NextResponse.json({ message: '이미 가입한 아이디입니다.' }, { status: 400 });
            }
            if (existingUser.nickname === nickname) {
                return NextResponse.json({ message: '이미 사용 중인 닉네임입니다.' }, { status: 400 });
            }
        }

        // 비밀번호 해시화
        const hashedPassword = await bcrypt.hash(password, 10);

        // 새로운 사용자 생성
        await users.insertOne({
            nickname,
            email,
            username,
            password: hashedPassword,
            createdAt: kstDateString,
        });

        return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
        return NextResponse.json({ message: 'Error creating user' }, { status: 500 });
    }
}
