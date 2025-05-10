'use client';

import styles from './SimpleWebsiteName.module.css';
import mappings from '../lib/mappings';

// 도메인을 표준화하는 함수
function normalizeDomain(domain) {
    return domain
        .replace(/^https?:\/\//i, '') // https:// 또는 http:// 제거
        .replace(/(\.[a-z]{2,})(\/.*)?$/, '$1'); // 도메인 확장자 뒤의 모든 경로 제거
}

const SimpleWebsiteName = ({ website }) => {
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

    const isDefault = website === defaultWebsiteName;
    const websiteName = website ? getMappingName(website) : defaultWebsiteName;
    const hrefUrl = website && website.startsWith('http') ? website : `https://${website}`;

    return (
        <div className={styles.infoContainer}>
            <div className={styles.websiteName}>
                {website && !isDefault ? (
                    <a href={hrefUrl} target="_blank" rel="noopener noreferrer">
                        {websiteName}
                    </a>
                ) : (
                    <span>{websiteName}</span>
                )}
                {website && <span className={styles.noNeon}>의 서버시간</span>}
            </div>
        </div>
    );
};

export default SimpleWebsiteName;
