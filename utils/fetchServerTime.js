import axios from 'axios';

// 자체적인 서버 딜레이 일단 0.2초로 설정, sentry 트래킹 후 변동 가능
const PROCESSING_DELAY_MS = 200;

const fetchExternalServerTimeWithPrecision = async (url) => {
    try {
        url = 'https://' + url;

        const res1 = await axios.get(url, { timeout: 3000 });
        const headerTime1 = new Date(res1.headers?.date);
        console.log(headerTime1);

        const res2 = await axios.get(url, { timeout: 3000 });
        const headerTime2 = new Date(res2.headers?.date);
        console.log(headerTime2);

        const isSameSecond =
            headerTime1.getUTCSeconds() === headerTime2.getUTCSeconds() &&
            headerTime1.getUTCMinutes() === headerTime2.getUTCMinutes() &&
            headerTime1.getUTCHours() === headerTime2.getUTCHours();

        const baseTime = isSameSecond ? headerTime1 : headerTime2;
        const estimated = new Date(baseTime);
        estimated.setMilliseconds(isSameSecond ? 500 : 0);

        const result = {
            time: estimated,
            strategy: isSameSecond ? 'external-url-precision(.500)' : 'external-url-precision(.000)',
            header1: headerTime1.toISOString(),
            header2: headerTime2.toISOString(),
            estimated: estimated.toISOString(),
        };

        if (process.env.NODE_ENV === 'development') {
            console.log('[Precision Fetch Time] External URL Precision:', url, result);
        }

        return result;
    } catch (err) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('[Precision Fetch Error]', err.message);
        }
        return null;
    }
};

const getSafeHeaders = () => {
    const headers = {
        'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
        Referer: `https://luckti.me/${Math.floor(Math.random() * 10000)}`,
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
    };

    return headers;
};

const checkUrlExists = async (url) => {
    if (!url) return false;
    try {
        await axios.get(url, {
            timeout: 5000,
            validateStatus: (status) => status < 500,
        });
        return true;
    } catch {
        return false;
    }
};

const fetchServerTime = async (url, onSelect, onServerTimeChange, setHasError, onUrlStatus) => {
    let kstDate = null;
    let usedSource = 'local-time';

    // STEP 1: 실제 URL 정밀 요청
    if (!kstDate && url) {
        try {
            const result = await fetchExternalServerTimeWithPrecision(url);
            if (result?.time) {
                kstDate = result.time;
                usedSource = result.strategy;
            }
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('[external-url] Failed:', err.message);
            }
        }
    }

    // STEP 2: timeapi.io
    try {
        const res = await axios.get('https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul', {
            timeout: 3000,
        });
        // UTC 기준으로 해석되도록 "+ Z"
        const timeString = res.data?.dateTime + 'Z';
        if (timeString) {
            kstDate = new Date(timeString);
            kstDate = new Date(kstDate.getTime() - 9 * 60 * 60 * 1000);
            usedSource = 'timeapi.io';
        }
    } catch (err) {
        if (process.env.NODE_ENV === 'development') {
            console.warn('[timeapi.io] Failed:', err.message);
        }
    }

    // STEP 3: worldtimeapi.org
    if (!kstDate) {
        try {
            const res = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Seoul', {
                timeout: 3000,
            });
            const timeString = res.data?.datetime;
            if (timeString) {
                kstDate = new Date(timeString);
                kstDate = new Date(kstDate.getTime() - 9 * 60 * 60 * 1000);
                usedSource = 'worldtimeapi.org';
            }
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('[worldtimeapi.org] Failed:', err.message);
            }
        }
    }

    // STEP 4: google.com/generate_204
    if (!kstDate) {
        try {
            const res = await axios.get('https://www.google.com/generate_204', {
                timeout: 3000,
            });
            const dateHeader = res.headers?.date;
            if (dateHeader) {
                kstDate = new Date(dateHeader);
                usedSource = 'google.com';
            }
        } catch (err) {
            if (process.env.NODE_ENV === 'development') {
                console.warn('[google.com] Failed:', err.message);
            }
        }
    }

    // STEP 5: fallback to local
    if (!kstDate) {
        kstDate = new Date();
        usedSource = 'local-time';
    }

    // 개발 로그
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Time Source Used]: ${usedSource} → ${kstDate.toISOString()}`);
    }

    // 유효성 체크 및 콜백
    if (onUrlStatus) checkUrlExists(url).then((exists) => onUrlStatus(exists));
    if (onServerTimeChange) onServerTimeChange(kstDate);
    if (onSelect) onSelect(url, kstDate.toISOString());
    if (setHasError) setHasError(false);

    const sourceTypeMap = {
        'external-url-precision(.500)': 1,
        'external-url-precision(.000)': 2,
        'timeapi.io': 3,
        'worldtimeapi.org': 4,
        'google.com': 5,
        'local-time': 6,
    };
    usedSource = sourceTypeMap[usedSource] || 0;

    return { time: kstDate, source: usedSource };
};

export { fetchServerTime };
