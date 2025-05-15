import clientPromise from '../../../../lib/mongodb';
import { v4 as uuidv4 } from 'uuid';
import cookie from 'cookie';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../../api/auth/[...nextauth]/route';
import { getClientIp } from '../../../../utils/getClientIp';
import { getKSTDateString } from '../../../../utils/dateUtils';

let cachedMessages = null;
let lastFetchTime = 0;

export async function GET(request) {
    try {
        const now = Date.now();
        const cookieHeader = request.headers.get('cookie') || '';
        const cookies = cookie.parse(cookieHeader);
        let userId = cookies.userId;
        const headers = new Headers();

        if (!userId) {
            userId = uuidv4();
            headers.set(
                'Set-Cookie',
                cookie.serialize('userId', userId, {
                    path: '/',
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 365,
                })
            );
        }

        if (cachedMessages && now - lastFetchTime < 5000) {
            return new Response(JSON.stringify({ success: true, data: cachedMessages, userId, cached: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...Object.fromEntries(headers) },
            });
        }

        const client = await clientPromise;
        const chatDb = client.db('chats');
        const chatCollection = chatDb.collection('forHome');
        const messages = await chatCollection.find({}).sort({ timestamp: 1 }).toArray();

        cachedMessages = messages;
        lastFetchTime = now;

        return new Response(JSON.stringify({ success: true, data: cachedMessages, userId, cached: false }), {
            status: 200,
            headers: { 'Content-Type': 'application/json', ...Object.fromEntries(headers) },
        });
    } catch (error) {
        console.error('Failed to handle GET request:', error);
        return new Response(JSON.stringify({ error: 'Failed to handle request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// POST: 새 메시지 등록
export async function POST(request) {
    try {
        const client = await clientPromise;
        const chatDb = client.db('chats');
        const chatCollection = chatDb.collection('forHome');

        // 쿠키 파싱
        const cookieHeader = request.headers.get('cookie') || '';
        const cookies = cookie.parse(cookieHeader);
        let userId = cookies.userId;
        if (!userId) {
            userId = uuidv4();
        }

        // 세션을 먼저 가져온다
        const session = await getServerSession(authOptions);

        // 클라이언트에서 전송된 JSON 데이터 파싱
        const body = await request.json();
        const { content, username: clientUsername } = body;

        // username 우선순위: 세션 > 클라이언트 > 기본값
        const username = session?.user?.username || clientUsername || 'not a member';

        // KST 날짜 계산 (utils 함수 사용)
        const { kstDate } = getKSTDateString();

        // 클라이언트 IP 주소 추출 (utils 함수 사용)
        const ipAddress = getClientIp(request);

        const newMessage = {
            userId,
            ipAddress,
            username,
            content,
            timestamp: kstDate,
        };

        if (process.env.NODE_ENV === 'development') {
            console.log('New message object:', newMessage);
        }

        await chatCollection.insertOne(newMessage);

        return new Response(JSON.stringify({ success: true, data: newMessage }), {
            status: 201,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Failed to handle POST request:', error);
        return new Response(JSON.stringify({ error: 'Failed to handle request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// DELETE: 메시지 삭제
export async function DELETE(request) {
    try {
        const client = await clientPromise;
        const chatDb = client.db('chats');
        const chatCollection = chatDb.collection('forHome');

        // 요청 본문 파싱
        const body = await request.json();
        const { messageId, isAdmin } = body;

        // 쿠키 파싱하여 userId 획득
        const cookieHeader = request.headers.get('cookie') || '';
        const cookies = cookie.parse(cookieHeader);
        let userId = cookies.userId;

        const filter = isAdmin ? { _id: new ObjectId(messageId) } : { _id: new ObjectId(messageId), userId };

        const result = await chatCollection.deleteOne(filter);

        if (result.deletedCount === 1) {
            return new Response(JSON.stringify({ success: true }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ success: false, message: 'Message not found or not authorized' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error('Failed to handle DELETE request:', error);
        return new Response(JSON.stringify({ error: 'Failed to handle request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
