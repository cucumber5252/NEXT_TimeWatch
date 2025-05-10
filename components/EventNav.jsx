'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './EventNav.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import SchoolDropdown from './SchoolDropdown';
import Link from 'next/link';

const EventNav = () => {
    const { data: session, status } = useSession();
    const isLoggedIn = status === 'authenticated';
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const tooltipRef = useRef(null);

    const handleInfoClick = () => {
        setIsTooltipVisible(!isTooltipVisible);
    };

    const handleClickOutside = (event) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
            setIsTooltipVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.eventNavContainer}>
            <div className={styles.firstRow}>
                <Image src={`/eventnavpict.svg`} alt="eventnavpict" width={60} height={63} />
                <div className={styles.navTitle}>이벤트 일정</div>
            </div>
            <div className={styles.secondRow}>
                <div className={styles.img} onClick={handleInfoClick}>
                    <Image src={`/infocircle.svg`} alt="infocircle" width={19.2} height={19.2} />
                    {isTooltipVisible && (
                        <div className={styles.tooltip} ref={tooltipRef}>
                            <div className={styles.tooltipguide}>
                                달력 더블 클릭으로 한 주의 이벤트를 확인할 수 있어요!
                            </div>
                            <div className={styles.tooltipguide}>
                                사진을 클릭하면 서버시간이 표시되고, 사이트 이름을 클릭하면 사이트로 이동해요.
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.text}>
                    <div className={styles.guide}>왼쪽의 아이콘을 눌러 사용 방법을 알아보세요!</div>
                    {/* <div className={styles.guide}>
                            더 재밌게 lucktime을 이용하려면{' '}
                            <Link href="/blog">
                                <span className={styles.underline}>블로그</span>
                            </Link>
                            를 참고해 주세요 :)
                        </div> */}
                </div>
            </div>
            {/* <div className={styles.thirdRow}>
                <SchoolDropdown />
            </div> */}
        </div>
    );
};

export default EventNav;
