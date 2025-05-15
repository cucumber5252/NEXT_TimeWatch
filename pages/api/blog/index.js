import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import moment from 'moment-timezone';

// KST 시간을 포맷된 문자열로 반환하는 함수
function getKSTDateString() {
    return moment.tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
}

// Function to get the next postId
async function getNextPostId(db) {
    const counters = db.collection('counters');
    const result = await counters.findOneAndUpdate(
        { _id: 'postId' },
        { $inc: { seq: 1 } },
        { returnDocument: 'after', upsert: true }
    );
    return result.value.seq;
}

export default async (req, res) => {
    const { method, headers, body } = req;

    // Get database connection
    const client = await clientPromise;
    const db = client.db('blog');
    const posts = db.collection('posts');
    const userDb = client.db('user_data');
    const users = userDb.collection('users');

    // 대한민국 표준시 (KST)로 현재 날짜와 시간을 가져오기
    const kstDateString = getKSTDateString();
    const kstDate = new Date(kstDateString);

    const todayString = kstDate
        .toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .replace(/. /g, '-')
        .replace('.', '');

    switch (method) {
        case 'GET':
            try {
                const allPosts = await posts.find().toArray();
                const postsWithDate = allPosts.map((post) => ({
                    ...post,
                    todayString: new Date(post.createdAt)
                        .toLocaleDateString('ko-KR', {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                        })
                        .replace(/. /g, '-')
                        .replace('.', ''),
                }));
                return res.status(200).json({ data: postsWithDate });
            } catch (error) {
                console.error('Failed to fetch blog posts:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        case 'POST':
            try {
                // Check for authorization header
                const authorizationHeader = headers.authorization;
                if (!authorizationHeader) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                // Extract token from authorization header
                const token = authorizationHeader.split(' ')[1];
                if (!token) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                let decodedToken;
                try {
                    // Verify the token
                    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
                } catch (error) {
                    console.error('Token verification failed:', error);
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                // Check if the user role is admin
                const userId = decodedToken.id;
                const user = await users.findOne({ _id: new ObjectId(userId) });

                if (!user || user.role !== 'admin') {
                    console.error('Forbidden: User role is not admin');
                    return res.status(403).json({ message: 'Forbidden' });
                }

                // Get next postId
                const postId = await getNextPostId(db);

                // Create new post
                const newPost = await posts.insertOne({
                    ...body,
                    createdAt: kstDateString,
                    views: 0,
                    postId: postId,
                });

                return res.status(200).json({ data: newPost.ops[0] });
            } catch (error) {
                console.error('Failed to create blog post:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        case 'PUT':
            try {
                // Check for authorization header
                const authorizationHeader = headers.authorization;
                if (!authorizationHeader) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                // Extract token from authorization header
                const token = authorizationHeader.split(' ')[1];
                if (!token) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                let decodedToken;
                try {
                    // Verify the token
                    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
                } catch (error) {
                    console.error('Token verification failed:', error);
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                // Check if the user role is admin
                const userId = decodedToken.id;
                const user = await users.findOne({ _id: new ObjectId(userId) });

                if (!user || user.role !== 'admin') {
                    console.error('Forbidden: User role is not admin');
                    return res.status(403).json({ message: 'Forbidden' });
                }

                const { id, title, content, category, isPinned, imageUrl } = body;
                const updatedPost = await posts.findOneAndUpdate(
                    { _id: new ObjectId(id) },
                    { $set: { title, content, category, isPinned, imageUrl, updatedAt: kstDateString } },
                    { returnDocument: 'after' }
                );

                return res.status(200).json({ data: updatedPost.value });
            } catch (error) {
                console.error('Failed to update blog post:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        case 'DELETE':
            try {
                // Check for authorization header
                const authorizationHeader = headers.authorization;
                if (!authorizationHeader) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                // Extract token from authorization header
                const token = authorizationHeader.split(' ')[1];
                if (!token) {
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                let decodedToken;
                try {
                    // Verify the token
                    decodedToken = jwt.verify(token, process.env.JWT_SECRET);
                } catch (error) {
                    console.error('Token verification failed:', error);
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                // Check if the user role is admin
                const userId = decodedToken.id;
                const user = await users.findOne({ _id: new ObjectId(userId) });

                if (!user || user.role !== 'admin') {
                    console.error('Forbidden: User role is not admin');
                    return res.status(403).json({ message: 'Forbidden' });
                }

                const { id } = body;
                await posts.deleteOne({ _id: new ObjectId(id) });

                return res.status(200).json({ message: 'Blog post deleted successfully' });
            } catch (error) {
                console.error('Failed to delete blog post:', error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${method} Not Allowed`);
    }
};
