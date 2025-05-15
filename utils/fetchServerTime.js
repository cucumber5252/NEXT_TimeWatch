import axios from 'axios';

const fetchServerTime = async (url, onSelect, onServerTimeChange, setHasError, onUrlStatus) => {
    const TIME_API_SOURCES = [
        {
            name: 'timeapi.io',
            url: 'https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul',
            parse: (res) => res.data?.dateTime,
        },
        {
            name: 'worldtimeapi.org',
            url: 'http://worldtimeapi.org/api/timezone/Asia/Seoul',
            parse: (res) => res.data?.datetime,
        },
        {
            name: 'google.com',
            url: 'https://www.google.com/generate_204',
            parse: (res) => {
                const dateHeader = res.headers?.date || res.headers?.get?.('date');
                return dateHeader ? new Date(dateHeader).toISOString() : null;
            },
        },
    ];

    const checkUrlExists = async (url) => {
        if (!url) return false;
        try {
            const response = await axios.get(url, {
                timeout: 5000,
                validateStatus: (status) => status < 500,
            });
            return true;
        } catch {
            return false;
        }
    };

    try {
        let urlExists = true;
        const urlCheckPromise = url ? checkUrlExists(url) : Promise.resolve(true);
        let kstDate = null;
        let usedSource = 'local';
        let lastError = null;

        for (const api of TIME_API_SOURCES) {
            try {
                const res = await axios.get(api.url, { timeout: 3000 });
                const timeString = api.parse(res);
                if (timeString) {
                    kstDate = new Date(timeString);
                    usedSource = api.name;
                    if (process.env.NODE_ENV === 'development') {
                        console.log(`[KST] Time from ${api.name}:`, kstDate.toISOString());
                    }
                    break;
                }
                throw new Error(`Invalid structure from ${api.name}`);
            } catch (err) {
                lastError = err;
                if (process.env.NODE_ENV === 'development') {
                    console.warn(`[KST] Failed from ${api.name}:`, err.message);
                }
            }
        }

        if (!kstDate) {
            kstDate = new Date();
            usedSource = 'local';
            if (process.env.NODE_ENV === 'development') {
                console.warn('[KST] Fallback to local time:', kstDate.toISOString());
            }
        }

        urlExists = await urlCheckPromise;
        if (onUrlStatus) onUrlStatus(urlExists);
        if (onServerTimeChange) onServerTimeChange(kstDate);
        if (onSelect) onSelect(url, kstDate.toISOString());
        if (setHasError) setHasError(false);

        return { time: kstDate, source: usedSource };
    } catch (err) {
        console.error('Error fetching server time:', err);
        if (onServerTimeChange) onServerTimeChange(null);
        if (setHasError) setHasError(true);
        return { time: null, source: 'error' };
    }
};

export { fetchServerTime };

const fetchExternalServerTimeWithPrecision = async (url) => {
    try {
        // 첫 번째 요청
        const t0 = Date.now();
        const res1 = await axios.get(url, { timeout: 3000 });
        const t1 = Date.now();

        const headerTime1 = new Date(res1.headers?.date);
        if (!headerTime1) throw new Error('No Date header in first request');

        // 약간의 지연 후 두 번째 요청
        await new Promise((resolve) => setTimeout(resolve, 200));
        const t2 = Date.now();
        const res2 = await axios.get(url, { timeout: 3000 });
        const t3 = Date.now();

        const headerTime2 = new Date(res2.headers?.date);
        if (!headerTime2) throw new Error('No Date header in second request');

        // RTT 계산
        const rtt1 = t1 - t0;
        const rtt2 = t3 - t2;

        // 중간점 기준 밀리초 예측
        const midpoint1 = Math.floor((t0 + t1) / 2);
        const midpoint2 = Math.floor((t2 + t3) / 2);

        const offset1 = headerTime1.getTime() - midpoint1;
        const offset2 = headerTime2.getTime() - midpoint2;

        // 최종 기준은 두 번째 요청
        const estimatedBase = new Date(Date.now() + offset2);

        // 보정: 두 요청이 같은 초면 .500초, 아니면 .000초로 맞추기
        const sameSecond = headerTime1.getSeconds() === headerTime2.getSeconds();
        estimatedBase.setMilliseconds(sameSecond ? 500 : 0);

        return {
            time: estimatedBase,
            header1: headerTime1.toISOString(),
            header2: headerTime2.toISOString(),
            rtt: { rtt1, rtt2 },
            offset: { offset1, offset2 },
            final: estimatedBase.toISOString(),
            strategy: sameSecond ? 'same-second → .500' : 'diff-second → .000',
        };
    } catch (err) {
        console.error('[Time Fetch Error]', err.message);
        return {
            time: null,
            error: err.message,
            strategy: 'fallback-local',
        };
    }
};

export { fetchExternalServerTimeWithPrecision };
