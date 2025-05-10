// components/GameMobileAd.jsx

'use client';

import { useEffect, useCallback, useRef } from 'react';

const GameMobileAd = () => {
    const adRef = useRef(null);

    const pushAds = useCallback(() => {
        if (typeof window !== 'undefined' && adRef.current) {
            const containerWidth = adRef.current.offsetWidth;
            if (containerWidth > 0) {
                try {
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) {
                    console.error('AdSense error:', e);
                }
            } else {
                console.warn('광고 컨테이너의 너비가 0입니다. 다시 시도합니다.');
            }
        }
    }, []);

    useEffect(() => {
        // 초기 렌더링 후 약간의 딜레이를 주어 레이아웃이 확정되도록 함
        const timeoutId = setTimeout(pushAds, 100);
        // 창 크기 변경 시에도 광고를 다시 로드하도록 이벤트 리스너 추가
        window.addEventListener('resize', pushAds);
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', pushAds);
        };
    }, [pushAds]);

    // 클릭 시 IP 수집 API 호출 함수
    const handleClick = useCallback(async () => {
        try {
            await fetch('/api/track-click', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ adUnit: 'game_mobile_ad' }),
            });
        } catch (error) {
            console.error('IP 수집 API 호출 오류:', error);
        }
    }, []);

    return (
        <>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4184585928401576"
                crossOrigin="anonymous"
            ></script>
            <div onClick={handleClick} style={{ width: '100%' }}>
                <ins
                    ref={adRef}
                    className="adsbygoogle"
                    style={{ display: 'inline-block', width: '100%', height: '250px' }}
                    data-ad-client="ca-pub-4184585928401576"
                    data-ad-slot="5882238837"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
            </div>
        </>
    );
};

export default GameMobileAd;
