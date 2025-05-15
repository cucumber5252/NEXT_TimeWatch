'use client';

import { useState } from 'react';
import styles from './ServerTimeFetcher.module.css';

const ServerTimeFetcher = ({ onServerTimeChange, onError, onLastSyncChange, onFetchingChange }) => {
    const [isFetching, setIsFetching] = useState(false);

    const fetchServerTime = async () => {
        setIsFetching(true);
        onFetchingChange?.(true);

        try {
            const res = await fetch('/api/sync-time');
            const data = await res.json();

            if (res.ok && data.serverTime) {
                onServerTimeChange?.(data.serverTime);
                onLastSyncChange?.(new Date());
                onError?.(null);

                if (process.env.NODE_ENV === 'development') {
                    console.log(`서버 시간: ${data.serverTime}, 출처: ${data.source}, 캐시: ${data.cached}`);
                }
            } else {
                onError?.('시간 정보를 가져오는 데 실패했습니다.');
            }
        } catch (err) {
            console.error('[Client] Error fetching server time:', err);
            onError?.('서버와 통신 중 오류가 발생했습니다.');
        } finally {
            setIsFetching(false);
            onFetchingChange?.(false);
        }
    };

    return (
        <div className={`fetcher ${styles.button}`}>
            <button onClick={fetchServerTime} disabled={isFetching}>
                보정하기
            </button>
        </div>
    );
};

export default ServerTimeFetcher;
