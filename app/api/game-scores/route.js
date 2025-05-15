// app/api/game-scores/route.js
import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import { getClientIp } from '../../../utils/getClientIp';
import { getKSTDateString } from '../../../utils/dateUtils';
import cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../api/auth/[...nextauth]/route';

// CORS 설정 함수
function setCORSHeaders(response) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
    return response;
}

// 점수 유효성 검사 함수
function isScoreValid(score) {
    // 0 이상 200,000 이하의 정수만 허용
    return typeof score === 'number' && isFinite(score) && Number.isInteger(score) && score >= 0 && score <= 200000;
}

// OPTIONS 요청 처리
export async function OPTIONS() {
    const res = new NextResponse(null, { status: 200 });
    return setCORSHeaders(res);
}

// POST 요청 처리
export async function POST(req) {
    const cookieHeader = req.headers.get('cookie') || '';
    const cookies = cookie.parse(cookieHeader);
    let userId = cookies.userId;

    const res = new NextResponse(); // 응답 객체 생성

    // userId가 없으면 생성하고 Set-Cookie 헤더에 추가
    if (!userId) {
        userId = uuidv4();
        res.headers.set(
            'Set-Cookie',
            cookie.serialize('userId', userId, {
                path: '/',
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 365,
            })
        );
    }

    try {
        // 1. 세션을 먼저 가져온다 (공식 권장 방식)
        const session = await getServerSession(authOptions);

        // 2. body 파싱
        const body = await req.json();
        const clientUsername = body.username;
        const { nickname, score } = body;

        // 3. username 우선순위: 세션 > 클라이언트 > 기본값
        const username = session?.user?.username || clientUsername || 'not a member';

        if (!nickname || score == null) {
            return setCORSHeaders(NextResponse.json({ error: '닉네임과 점수가 필요합니다' }, { status: 400 }));
        }

        // 4. 서버 유효성 검증
        if (!nickname || score == null) {
            return setCORSHeaders(NextResponse.json({ error: '닉네임과 점수가 필요합니다' }, { status: 400 }));
        }
        if (!isScoreValid(score)) {
            return setCORSHeaders(NextResponse.json({ error: '비정상적인 점수입니다.' }, { status: 400 }));
        }

        const client = await clientPromise;
        const db = client.db('game');
        const collection = db.collection('scores');
        const clientIp = getClientIp(req);
        const { kstDate } = getKSTDateString();

        // 5. 등록 빈도 제한 - 최근 등록 기록 조회
        const lastScore = await collection.findOne({ userId }, { sort: { createdAt: -1 } });
        if (lastScore) {
            const lastTime = new Date(lastScore.createdAt).getTime();
            const nowTime = new Date(kstDate).getTime();
            if (nowTime - lastTime < 10 * 1000) {
                // 10초 이내
                return setCORSHeaders(
                    NextResponse.json({ error: '점수 등록은 10초에 한 번만 가능합니다.' }, { status: 429 })
                );
            }
        }

        // 6. 점수 기록
        await collection.insertOne({ userId, username, nickname, score, clientIp, createdAt: kstDate });

        return setCORSHeaders(NextResponse.json({ message: '점수가 성공적으로 저장되었습니다' }, { status: 201 }));
    } catch (error) {
        console.error('데이터베이스 오류:', error);
        return setCORSHeaders(NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 }));
    }
}

export async function GET(req) {
    try {
        // MongoDB client/collection 정의
        const client = await clientPromise;
        const db = client.db('game');
        const collection = db.collection('scores');
        // 원하는 개수만큼 TOP N으로 잘라서 보내도 좋습니다 (예: TOP 5)
        const scores = await collection.find().sort({ score: -1 }).limit(5).toArray();

        // 점수 데이터를 반환
        const res = NextResponse.json(scores, { status: 200 });
        return setCORSHeaders(res);
    } catch (error) {
        console.error('데이터베이스 오류:', error);
        return setCORSHeaders(NextResponse.json({ error: '서버 오류가 발생했습니다' }, { status: 500 }));
    }
}
