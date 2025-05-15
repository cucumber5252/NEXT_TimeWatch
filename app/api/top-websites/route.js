// app/api/top-websites/route.js
import clientPromise from '../../../lib/mongodb';
import { getKSTDateString } from '../../../utils/dateUtils';

export const revalidate = 1800; // 30분마다 자동 데이터 갱신

export async function GET(request) {
    try {
        const client = await clientPromise;
        const db = client.db('servertime');
        const urlVisitsCollection = db.collection('urlVisits');

        // 공통 유틸리티에서 날짜 가져오기
        const { todayString } = getKSTDateString();

        const top10Visits = await urlVisitsCollection
            .aggregate([
                {
                    $lookup: {
                        from: 'urls',
                        localField: 'url',
                        foreignField: 'url',
                        as: 'urlInfo',
                    },
                },
                { $unwind: '$urlInfo' },
                {
                    $group: {
                        _id: '$urlInfo.pageName',
                        totalUniqueVisitors: {
                            $sum: {
                                $size: {
                                    $ifNull: [`$dailyVisits.${todayString}.uniqueVisitors`, []],
                                },
                            },
                        },
                        pageName: { $first: '$urlInfo.pageName' },
                    },
                },
                { $sort: { totalUniqueVisitors: -1 } },
                { $limit: 10 },
            ])
            .toArray();

        return new Response(JSON.stringify(top10Visits), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=59',
            },
        });
    } catch (error) {
        console.error('Failed to handle API request:', error);
        return new Response(JSON.stringify({ error: 'Failed to load data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
