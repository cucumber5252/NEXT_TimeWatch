// app/api/kst/route.js
import { getKSTDateString } from '../../../utils/dateUtils';

export const revalidate = 60; // 1분마다 데이터 재검증

export async function GET(request) {
    try {
        const kstData = getKSTDateString();
        return new Response(JSON.stringify(kstData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching KST time:', error);
        return new Response(JSON.stringify({ error: 'Failed to fetch KST time' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
