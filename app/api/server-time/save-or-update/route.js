import clientPromise from '../../../../lib/mongodb';
import { generateMetadata } from '../../../server-time/[url]/layout';
import { getKSTDateString } from '../../../../utils/dateUtils'; // utils/dateUtils.js의 getKSTDateString 함수 import

// POST 메소드: URL 데이터를 저장 또는 업데이트하는 API
export async function POST(request) {
    try {
        const body = await request.json();
        const { url } = body;

        if (!url) {
            return new Response(JSON.stringify({ error: 'URL is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const client = await clientPromise;
        const db = client.db('servertime');
        const urlsCollection = db.collection('urls');
        const urlVisitsCollection = db.collection('urlVisits');

        // Modified time handling (synchronous now)
        const { kstDateString } = getKSTDateString();

        // generateMetadata를 사용하여 metadata 생성
        const metadata = await generateMetadata({ params: { url } });
        const pageName = metadata.title.replace(' 서버시간 - lucktime 럭타임', '');
        const pageTitle = metadata.title;
        const pageDescription = metadata.description;

        // urls 컬렉션 업데이트 또는 삽입 (upsert)
        await urlsCollection.updateOne(
            { url },
            {
                $set: {
                    pageName,
                    pageTitle,
                    pageDescription,
                    lastModified: kstDateString,
                },
            },
            { upsert: true }
        );

        // urlVisits 컬렉션에서도 pageName 업데이트 (새 문서 생성을 방지)
        await urlVisitsCollection.updateMany({ url }, { $set: { pageName } });

        return new Response(JSON.stringify({ message: 'URL data saved or updated successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error saving or updating URL data:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
