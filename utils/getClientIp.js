// utils/getClientIp.js
export function getClientIp(req) {
    let ip;

    // ✅ Next.js API Route (app/api)
    if (typeof req.headers.get === 'function') {
        ip = req.headers.get('x-forwarded-for')?.split(',')[0];
    }
    // ✅ Express, Node.js 환경
    else {
        ip = req.headers['x-forwarded-for']?.split(',')[0] || req.headers['x-real-ip'];
        if (!ip) {
            ip = req.connection?.remoteAddress || req.socket?.remoteAddress || null;
        }
    }

    return ip || 'unknown';
}
