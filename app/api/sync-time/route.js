import { fetchServerTime } from '../../../utils/fetchServerTime.js';

let cachedTime = null;
let lastFetchTimestamp = 0;
let lastSource = 'unknown';

export async function POST(request) {
    const now = Date.now();

    try {
        const { url } = await request.json();

        if (!url) {
            return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400 });
        }

        // 5초 이내 요청이면 캐시 반환
        if (cachedTime && now - lastFetchTimestamp < 5000) {
            return new Response(
                JSON.stringify({
                    serverTime: cachedTime.toISOString(),
                    cached: true,
                    fallback: false,
                    source: lastSource,
                }),
                { status: 200 }
            );
        }

        let resolvedTime = null;
        const { time, source } = await fetchServerTime(
            url,
            null,
            (time) => {
                resolvedTime = time;
            },
            null,
            null
        );

        if (!resolvedTime) {
            throw new Error('Failed to resolve server time');
        }

        cachedTime = resolvedTime;
        lastFetchTimestamp = now;
        lastSource = source;

        return new Response(
            JSON.stringify({
                serverTime: resolvedTime.toISOString(),
                cached: false,
                fallback: source === 'local',
                source: source,
            }),
            { status: 200 }
        );
    } catch (err) {
        console.error('POST /api/sync-time failed:', err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}

export async function GET() {
    const now = Date.now();

    try {
        // 5초 이내 요청이면 캐시 반환
        if (cachedTime && now - lastFetchTimestamp < 5000) {
            return new Response(
                JSON.stringify({
                    serverTime: cachedTime.toISOString(),
                    cached: true,
                    fallback: false,
                    source: lastSource,
                }),
                { status: 200 }
            );
        }

        let resolvedTime = null;
        let resolvedSource = 'unknown';

        const { time, source } = await fetchServerTime(
            null,
            null,
            (time) => {
                resolvedTime = time;
            },
            null,
            null
        );

        if (!resolvedTime) {
            throw new Error('Failed to resolve server time');
        }

        cachedTime = resolvedTime;
        lastFetchTimestamp = now;
        lastSource = source;

        return new Response(
            JSON.stringify({
                serverTime: resolvedTime.toISOString(),
                cached: false,
                fallback: source === 'local',
                source: source,
            }),
            { status: 200 }
        );
    } catch (err) {
        console.error('GET /api/server-time failed:', err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
}
