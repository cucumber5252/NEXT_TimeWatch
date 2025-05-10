import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import clientPromise from './mongodb.mjs';

const JWT_SECRET = process.env.JWT_SECRET; // Use the JWT secret from environment variables
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

export async function getUserByUsername(username) {
    try {
        const client = await clientPromise;
        const db = client.db('user_data');
        const user = await db.collection('users').findOne({ username });
        return user;
    } catch (error) {
        console.error('Error in getUserByUsername:', error);
        throw error;
    }
}

export async function signIn({ username, password }) {
    try {
        const user = await getUserByUsername(username);
        if (!user) {
            throw new AuthError('CredentialsSignin', 'Invalid credentials');
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);
        if (!passwordsMatch) {
            throw new AuthError('CredentialsSignin', 'Invalid credentials');
        }

        // 토큰 생성 시 로그 추가
        console.log('Generating tokens for user:', user._id);
        const payload = { id: user._id, username: user.username }; // Add payload definition
        const accessToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '1000000000d' });
        console.log('Access token:', accessToken);
        const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '1000000000d' });
        console.log('Refresh token:', refreshToken);

        return { accessToken, refreshToken, username: user.username, name: user.nickname };
    } catch (error) {
        console.error('Error in signIn:', error);
        throw error;
    }
}

export class AuthError extends Error {
    constructor(type, message) {
        super(message);
        this.type = type;
        this.name = 'AuthError';
    }
}
