// app/api/get-client-ip/route.js
import { NextResponse } from 'next/server';
import { getClientIp } from '../../../utils/getClientIp';

export async function GET(req) {
    const ip = getClientIp(req);
    return NextResponse.json({ ip });
}
