export async function GET(request) {
    const now = new Date().toISOString();
    return new Response(JSON.stringify({ vercelTime: now }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
        },
    });
}
