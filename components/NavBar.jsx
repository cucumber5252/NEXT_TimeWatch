import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './NavBar.module.css';
import SigninButton from './SigninButton';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const { data: session, status } = useSession();
    const isLoggedIn = status === 'authenticated';
    const nickname = isLoggedIn ? session?.user?.nickname : '';
    const router = useRouter();

    const handleLogoClick = () => {
        router.push('/');
    };

    const handleAccountClick = () => {
        router.push('/account');
    };

    const handleGameClick = () => {
        router.push('/game');
    };

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}년 ${month}월 ${day}일`;
    };

    const getCurrentDay = () => {
        const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const today = new Date();
        const dayOfWeek = today.getDay();
        return daysOfWeek[dayOfWeek];
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className={styles.logo} onClick={handleLogoClick}>
                    <Image
                        src="/logo.svg"
                        alt="timewatch logo"
                        style={{ cursor: 'pointer' }}
                        width={137.55}
                        height={27.99}
                        priority
                    />
                </div>
                <div className={styles.date}>
                    오늘은 {getCurrentDate()} {getCurrentDay()}!
                </div>
            </div>
            <div className={styles.right}>
                {isLoggedIn && (
                    <>
                        <div className={styles.welcome}>{nickname} 님, 행운을 빌어요!</div>
                        <button className={styles.accountButton} onClick={handleAccountClick}>
                            내 정보
                        </button>
                    </>
                )}
                <SigninButton />
            </div>
        </div>
    );
};

export default NavBar;
