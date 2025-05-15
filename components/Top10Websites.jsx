'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Top10Websites.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import mappings from '../lib/mappings';

// 도메인을 표준화하는 함수
function normalizeDomain(domain) {
    return domain
        .replace(/^https?:\/\//i, '') // https:// 또는 http:// 제거
        .replace(/(\.[a-z]{2,})(\/.*)?$/, '$1') // 도메인 확장자 뒤의 모든 경로 제거
        .replace(/^m\./i, ''); // 모바일 m. 제거
}

const Top10Websites = () => {
    const [topWebsites, setTopWebsites] = useState([]);
    const [isColumn, setIsColumn] = useState(false);
    const router = useRouter();

    // 반응형 처리 useEffect
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                setIsColumn(window.innerWidth <= 1024);
            };

            handleResize(); // 초기 렌더링 시 실행
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    // 데이터 로딩 useEffect
    useEffect(() => {
        const loadTopWebsites = async () => {
            try {
                const { data } = await axios.get('/api/top-websites');
                setTopWebsites(data);
            } catch (error) {
                console.error('Error loading top websites:', error);
            }
        };

        loadTopWebsites();
    }, []);

    const handleButtonClick = (pageName) => {
        // 매핑된 도메인을 찾음
        const mapping = mappings.find((mapping) => mapping.name === pageName);
        if (mapping) {
            const normalizedDomain = normalizeDomain(mapping.domain);
            router.push(`/server-time/${normalizedDomain}`);
        } else {
            // pageName이 도메인 그 자체인 경우 처리
            if (pageName.includes('.')) {
                router.push(`/server-time/${pageName}`);
            } else {
                console.error('No mapping found for:', pageName);
            }
        }
    };

    // 제외할 도메인 또는 페이지 이름 목록 배열
    const excludedIdentifiers = ['wdwd3.com', '네이비즘'];

    const filteredWebsites = topWebsites.filter((site) => {
        const mapping = mappings.find((mapping) => mapping.name === site.pageName);
        let identifier = '';
        if (mapping) {
            // mapping이 있으면 도메인을 표준화하여 사용
            identifier = normalizeDomain(mapping.domain);
        } else {
            // mapping이 없을 경우, pageName이 도메인 형식이면 표준화하고, 그렇지 않으면 그대로 사용
            identifier = site.pageName.includes('.') ? normalizeDomain(site.pageName) : site.pageName;
        }
        return !excludedIdentifiers.includes(identifier);
    });

    return (
        <div className={styles.top10Container}>
            {/* <div className={`${styles.top10container} ${isColumn ? styles.columnHeight : ''}`}> */}
            <div className={styles.nav}>
                <Image className={styles.topimage} src="/top10.svg" alt="Top10" width={22} height={12} />
                <div>실시간 서버시간 조회 순위</div>
            </div>

            <div className={styles.topWebsitesList}>
                {filteredWebsites.map((site, index) => (
                    <div key={index} className={styles.topwebsites}>
                        <div className={index < 3 ? styles.top3 : styles.top7}>{index + 1}</div>
                        <button
                            className={`${styles.pageNameButton} ranking`}
                            onClick={() => handleButtonClick(site.pageName)}
                        >
                            {site.pageName}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Top10Websites;
