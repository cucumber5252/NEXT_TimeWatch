import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './BroadcastList.module.css';
import Image from 'next/image';

// 도메인을 표준화하는 함수
function normalizeDomain(url) {
    return url
        .replace(/^https?:\/\//i, '') // https:// 또는 http:// 제거
        .replace(/(\.[a-z]{2,})(\/.*)?$/, '$1'); // 도메인 확장자 뒤의 모든 경로 제거
}

// 플랫폼별 URL 매핑
const platformUrls = {
    위버스: 'https://weverse.io/',
    'JYP FANS': 'https://www.jypfans.com/',
    다음카페: 'https://cafe.daum.net/',
    엠넷플러스: 'https://www.mnetplus.world/',
    비스테이지: 'https://bstage.in/',
    구글폼: 'https://docs.google.com/',
    네이버폼: 'https://form.naver.com/',
    fromm: 'https://store.frommyarti.com/',
};

const platforms = ['위버스', 'JYP FANS', '다음카페', '엠넷플러스', '비스테이지', '구글폼', '네이버폼', 'fromm'];

const BroadcastList = () => {
    const router = useRouter();

    const handleButtonClick = (platform) => {
        const url = platformUrls[platform];
        if (url) {
            const normalizedDomain = normalizeDomain(url);
            router.push(`/server-time/${normalizedDomain}`); // 동적 경로로 이동
        } else {
            console.error('No URL found for:', platform);
        }
    };

    return (
        <div className={styles.broadcastContainer}>
            <div className={styles.nav}>
                <Image className={styles.broadcastimage} src="/broadcast.svg" alt="broadcast" width={22} height={12} />
                <div>음악방송 사전녹화 참여 신청</div>
            </div>
            <div className={styles.gridContainer}>
                {platforms.map((platform, index) => (
                    <button
                        key={index}
                        className={`${styles.button} fanPlatform`}
                        onClick={() => handleButtonClick(platform)}
                    >
                        {platform}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BroadcastList;
