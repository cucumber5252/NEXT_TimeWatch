import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
        console.log('Authorization token is required');
        return NextResponse.json({ message: 'Authorization token is required' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        console.log('Authorization token is required');
        return NextResponse.json({ message: 'Authorization token is required' }, { status: 401 });
    }

    try {
        console.log('Verifying token:', token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Decoded token:', decoded);

        const userId = decoded.id;
        const client = await clientPromise;
        const db = client.db('user_data');

        const user = await db.collection('users').findOne({ _id: new ObjectId(userId) });
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ favorites: user.favorites || [] }, { status: 200 });
    } catch (error) {
        console.error('Error fetching user favorites:', error);
        if (error.name === 'JsonWebTokenError') {
            return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
        } else if (error.name === 'TokenExpiredError') {
            return NextResponse.json({ message: 'Token expired' }, { status: 401 });
        } else {
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }
    }
}
