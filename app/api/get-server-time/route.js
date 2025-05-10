import axios from 'axios';

export async function GET(request) {
    // URL 객체를 사용하여 쿼리 스트링에서 url 값을 추출
    const { searchParams } = new URL(request.url);
    const url = searchParams.get('url');

    if (!url) {
        return new Response(JSON.stringify({ error: 'URL is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        console.log(`Making HEAD request to URL: ${url}`);
        const response = await axios.head(url);

        const serverTime = response.headers.date;
        console.log(`Server Time from URL: ${url} is ${serverTime}`);

        if (serverTime) {
            return new Response(JSON.stringify({ serverTime }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } else {
            return new Response(JSON.stringify({ error: 'Could not retrieve server time' }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } catch (error) {
        console.error('Error fetching server time:', error.message);
        console.error('Error details:', error.response ? error.response.data : 'No response data');
        return new Response(JSON.stringify({ error: 'Error fetching server time' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
