'use client';

import { useEffect, useState } from 'react';
import styles from './SimpleServerTimeStatus.module.css';

function SimpleServerTimeStatus({ lastSync, isLoading }) {
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
        <div className={`${styles.info} ${isLoading ? styles.blink : ''}`}>
            {isLoading ? (
                <div className={styles.loadingMessage}>
                    <span className={styles.greenText}> lucktime</span> 알고리즘으로
                    <br />
                    서버시간을 정교하게
                    <br />
                    계산하고 있어요.
                </div>
            ) : (
                <div className={styles.infoMessage}>
                    <span className={styles.greenText}>{elapsedSeconds}초</span> 전에 보정했어요.
                </div>
            )}
        </div>
    );
}

export default SimpleServerTimeStatus;
