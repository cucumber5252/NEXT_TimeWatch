'use client';

import { useEffect, useState } from 'react';
import styles from './ServerTimeStatus.module.css';

function ServerTimeStatus({ lastSync, isLoading }) {
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
    );
}

export default ServerTimeStatus;
