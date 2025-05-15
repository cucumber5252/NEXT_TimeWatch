import clientPromise from '../../../lib/mongodb';

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('user_data');
        const usersCollection = db.collection('users');
        const totalSignupsCollection = db.collection('totalSignups');

        // 총 사용자 수 계산
        const userCount = await usersCollection.countDocuments();

        // Total Signups 컬렉션 업데이트 (userCount 필드 추가 또는 업데이트)
        await totalSignupsCollection.updateOne({ type: 'total' }, { $set: { userCount } }, { upsert: true });

        return new Response(JSON.stringify({ message: 'userCount updated', userCount }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function GET(request) {
    return new Response(JSON.stringify({ message: 'Method GET not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', Allow: 'POST' },
    });
}
