'use client';

import { useState, useEffect } from 'react';
import styles from './ServerTimeInfo.module.css';
import mappings from '../lib/mappings';

// 도메인을 표준화하는 함수
function normalizeDomain(domain) {
    return domain
        .replace(/^https?:\/\//i, '') // https:// 또는 http:// 제거
        .replace(/(\.[a-z]{2,})(\/.*)?$/, '$1'); // 도메인 확장자 뒤의 모든 경로 제거
}

const ServerTimeInfo = ({ website, lastSync, isLoading }) => {
    const defaultWebsiteName = '대한민국 표준시간';

    const getMappingName = (url) => {
        let pageName = url;
        for (const mapping of mappings) {
            const normalizedDomain = normalizeDomain(mapping.domain);
            if (url.includes(normalizedDomain)) {
                pageName = `${mapping.name} (${normalizedDomain})`;
                break;
            }
        }
        return pageName;
    };

    const websiteName = website ? getMappingName(website) : defaultWebsiteName;
    const hrefUrl = website.startsWith('http') ? website : `https://${website}`;

    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (lastSync) {
                const now = new Date();
                const elapsed = Math.floor((now - lastSync) / 1000);
                setElapsedSeconds(elapsed);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [lastSync]);

    return (
        <div className={styles.infoContainer}>
            <div className={styles.websiteName}>
                <a href={hrefUrl} target="_blank" rel="noopener noreferrer" id="websiteName">
                    {websiteName}
                </a>
                {website && <span className={styles.noNeon}>의 서버시간</span>}
            </div>
            <div className={`${styles.info} ${isLoading ? styles.blink : ''}`}>
                {isLoading ? (
                    <span>
                        <span className={styles.oneSecond}> timewatch</span> 알고리즘으로 서버시간을 정교하게 계산하고
                        있어요.
                        <div></div>
                        서버의 상태에 따라 시간이 걸릴 수 있어요.
                    </span>
                ) : (
                    <span>
                        <span className={styles.oneSecond}>{elapsedSeconds}초</span> 전 서버시간 오차를 보정했어요.
                        {elapsedSeconds > 300 ? ' 보정이 필요해요!' : ' 안심해도 돼요 :)'}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ServerTimeInfo;
