'use client';

import styles from './CoupangNotice.module.css';

const CoupangNotice = () => {
    return (
        <div className={styles.notice}>
            <span>쿠팡 파트너스 활동을 통해 일정액의 수수료를 제공받을 수 있습니다.</span>
        </div>
    );
};

export default CoupangNotice;
