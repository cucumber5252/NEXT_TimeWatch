import clientPromise from '../../../lib/mongodb';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { ObjectId } from 'mongodb';

// 인증 로직: Authorization 헤더에서 JWT를 확인하고, DB에서 사용자를 조회
async function authenticate(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
        throw new Error('Authorization header missing');
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        throw new Error('Token missing in authorization header');
    }
    // JWT 검증
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
        throw new Error('Token verification failed');
    }
    const client = await clientPromise;
    const db = client.db('user_data');
    const users = db.collection('users');
    // decodedToken.id를 ObjectId로 변환하여 사용자를 조회
    const userId = new ObjectId(decodedToken.id);
    const user = await users.findOne({ _id: userId });
    if (!user) {
        throw new Error('User not found');
    }
    return { user, users, userId };
}

// PUT: 사용자 업데이트 (이메일, 닉네임, 또는 비밀번호 변경)
export async function PUT(request) {
    try {
        const { user, users, userId } = await authenticate(request);
        const body = await request.json();
        const { email, nickname, currentPassword, newPassword } = body;

        if (currentPassword && newPassword) {
            const isValid = await bcrypt.compare(currentPassword, user.password);
            if (!isValid) {
                return new Response(JSON.stringify({ message: 'Incorrect current password' }), {
                    status: 400,
                    headers: { 'Content-Type': 'application/json' },
                });
            }
            const hashedPassword = await bcrypt.hash(newPassword, 10);
            await users.updateOne({ _id: user._id }, { $set: { password: hashedPassword } });
        } else {
            if (email) {
                await users.updateOne({ _id: user._id }, { $set: { email } });
            }
            if (nickname) {
                await users.updateOne({ _id: user._id }, { $set: { nickname } });
            }
        }
        return new Response(JSON.stringify({ message: 'User updated successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error handling user request:', error);
        // 에러 메시지에 따라 적절한 상태 코드를 반환
        if (
            error.message === 'Authorization header missing' ||
            error.message === 'Token missing in authorization header' ||
            error.message === 'Token verification failed'
        ) {
            return new Response(JSON.stringify({ message: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        } else if (error.message === 'User not found') {
            return new Response(JSON.stringify({ message: 'User not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// DELETE: 사용자 삭제
export async function DELETE(request) {
    try {
        const { user, users, userId } = await authenticate(request);
        await users.deleteOne({ _id: userId });
        return new Response(JSON.stringify({ message: 'User deleted successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error handling user request:', error);
        if (
            error.message === 'Authorization header missing' ||
            error.message === 'Token missing in authorization header' ||
            error.message === 'Token verification failed'
        ) {
            return new Response(JSON.stringify({ message: 'Unauthorized' }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' },
            });
        } else if (error.message === 'User not found') {
            return new Response(JSON.stringify({ message: 'User not found' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// 기타 메소드는 허용되지 않음 (예: GET)
export async function GET(request) {
    return new Response(JSON.stringify({ message: `Method GET not allowed` }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', Allow: 'PUT, DELETE' },
    });
}
