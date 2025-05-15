// [postId].js

import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import moment from 'moment-timezone';

// KST 시간을 포맷된 문자열로 반환하는 함수
function getKSTDateString() {
    return moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
}

export default async (req, res) => {
    const { method, query } = req;
    const { postId } = query;

    // Get database connection
    const client = await clientPromise;
    const db = client.db('blog');
    const posts = db.collection('posts');

    if (method === 'GET') {
        try {
            const blog = await posts.findOneAndUpdate(
                { postId: parseInt(postId, 10) },
                { $inc: { views: 1 } },
                { returnDocument: 'after' }
            );
            if (!blog.value) {
                return res.status(404).json({ message: 'Blog post not found' });
            }
            // Format the createdAt date without time
            const createdAt = blog.value.createdAt;
            const createdAtDateString = moment(createdAt).format('YYYY-MM-DD');
            blog.value.createdAtstring = createdAtDateString;

            return res.status(200).json({ data: blog.value });
        } catch (error) {
            console.error('Failed to fetch blog post:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }
};
