import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export async function POST(request) {
    const authHeader = request.headers.get('authorization');
    if (!authHeader) {
        return NextResponse.json({ message: 'Authorization token is required' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return NextResponse.json({ message: 'Authorization token is required' }, { status: 401 });
    }

    const body = await request.json();
    const { event } = body;
    if (!event) {
        return NextResponse.json({ message: 'Event data is required' }, { status: 400 });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        const client = await clientPromise;
        const db = client.db('user_data');

        const result = await db
            .collection('users')
            .updateOne({ _id: new ObjectId(userId) }, { $addToSet: { favorites: event } });

        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Event added to favorites' }, { status: 200 });
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return NextResponse.json({ message: 'Token expired' }, { status: 401 });
        }
        console.error('Error adding event to favorites:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
