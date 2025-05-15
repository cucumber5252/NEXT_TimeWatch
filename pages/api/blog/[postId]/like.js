import clientPromise from '../../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import { parseCookies, setCookie } from 'nookies';

export default async (req, res) => {
    const { method, query } = req;
    const { postId } = query;

    if (method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${method} Not Allowed`);
    }

    const client = await clientPromise;
    const db = client.db('blog');
    const posts = db.collection('posts');

    const cookies = parseCookies({ req });
    const hasLiked = cookies[`liked_${postId}`] === 'true';

    try {
        const post = await posts.findOne({ postId: parseInt(postId, 10) });

        if (!post) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        const currentLikes = post.likes || 0; // likes가 없으면 0으로 초기화
        const newLikes = hasLiked ? currentLikes - 1 : currentLikes + 1;

        await posts.updateOne({ postId: parseInt(postId, 10) }, { $set: { likes: newLikes } });

        setCookie({ res }, `liked_${postId}`, !hasLiked, {
            maxAge: 365 * 24 * 60 * 60,
            path: '/',
        });

        return res.status(200).json({ likes: newLikes, hasLiked: !hasLiked });
    } catch (error) {
        console.error('Failed to update likes:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
