'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import styles from './SigninButton.module.css';

const SigninButton = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const pathname = usePathname(); // 현재 경로를 확인

    // 현재 경로가 로그인 페이지나 회원가입 페이지인지 확인
    const isAuthPage = pathname === '/signin' || pathname === '/signup';

    if (status === 'loading') {
        return <p className={styles.loading}>로딩 중...</p>;
    }

    // 로그인 페이지나 회원가입 페이지에서는 버튼을 렌더링하지 않음
    if (isAuthPage) {
        return null;
    }

    return session ? (
        <div className={styles.button} onClick={() => signOut()} ㄴ>
            <button>로그아웃</button>
        </div>
    ) : (
        <div className={styles.button} onClick={() => router.push('/signin')}>
            <button>로그인</button>
        </div>
    );
};

export default SigninButton;
