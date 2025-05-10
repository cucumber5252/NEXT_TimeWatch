// test 경로에서 관리자 권한으로 확인 가능

'use client';
import { useEffect, useState } from 'react';

export default function VercelTimeChecker() {
    const [vercelTime, setVercelTime] = useState('');

    useEffect(() => {
        async function fetchVercelTime() {
            try {
                const response = await fetch('/api/vercel-time');
                const data = await response.json();
                setVercelTime(data.vercelTime);
            } catch (error) {
                console.error('Error fetching Vercel server time:', error);
            }
        }
        fetchVercelTime();
    }, []);

    return (
        <div>
            <h1>Vercel Server Time</h1>
            {vercelTime ? <p>{vercelTime}</p> : <p>Loading Vercel server time...</p>}
        </div>
    );
}
