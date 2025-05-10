// pages/index.js (또는 테스트 페이지)
'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import DummyAdButton from '../../components/DummyAdButton';
import VercelTimeChecker from '../../components/VercelTimeChecker';

export default function Home() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [accessDenied, setAccessDenied] = useState(false);
    const [isBlocked, setIsBlocked] = useState(false);

    useEffect(() => {
        if (status === 'loading') return; // 세션 로딩 중일 때 아무것도 하지 않음

        if (!session) {
            router.push('/signin'); // 로그인되지 않은 경우 /signin으로 이동
        } else if (session.user.role !== 'admin') {
            setAccessDenied(true); // 관리자 권한이 없으면 접근 거부
        }
    }, [session, status, router]);

    // 페이지 로드 시 사용자의 차단 상태를 확인
    useEffect(() => {
        async function checkBlockStatus() {
            try {
                const res = await fetch('/api/check-ad-block');
                const data = await res.json();
                if (data.blocked) {
                    setIsBlocked(true);
                }
            } catch (error) {
                console.error('차단 상태 확인 에러:', error);
            }
        }
        checkBlockStatus();
    }, []);

    if (status === 'loading') {
        return <p>로딩 중...</p>;
    }

    if (accessDenied) {
        return <p>관리자만 접속 가능합니다.</p>;
    }

    return (
        <div>
            <h1>애드센스 부정 클릭 테스트</h1>
            {!isBlocked && <DummyAdButton />}
            <VercelTimeChecker />
        </div>
    );
}
