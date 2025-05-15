import clientPromise from '../../../../lib/mongodb';
import { v4 as uuidv4 } from 'uuid';
import cookie from 'cookie';

const messageCacheByUrl = new Map(); // URL별 캐시 저장: { url -> { messages, lastFetchTime } }

export async function GET(request, { params }) {
    try {
        const now = Date.now();
        const { url } = params;

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

        const cacheEntry = messageCacheByUrl.get(url);
        if (cacheEntry && now - cacheEntry.lastFetchTime < 5000) {
            return new Response(
                JSON.stringify({
                    success: true,
                    data: cacheEntry.messages,
                    userId,
                    cached: true,
                }),
                {
                    status: 200,
                    headers: { 'Content-Type': 'application/json', ...Object.fromEntries(headers) },
                }
            );
        }

        const client = await clientPromise;
        const chatDb = client.db('chats');
        const chatCollection = chatDb.collection('forUrls');
        const messages = await chatCollection.find({ url }).sort({ timestamp: 1 }).toArray();

        messageCacheByUrl.set(url, {
            messages,
            lastFetchTime: now,
        });

        return new Response(
            JSON.stringify({
                success: true,
                data: messages,
                userId,
                cached: false,
            }),
            {
                status: 200,
                headers: { 'Content-Type': 'application/json', ...Object.fromEntries(headers) },
            }
        );
    } catch (error) {
        console.error('Failed to handle GET request:', error);
        return new Response(JSON.stringify({ error: 'Failed to handle request' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
