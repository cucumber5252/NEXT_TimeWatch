'use client';

// import Script from 'next/script';
import { useEffect, useCallback } from 'react';

const MainAd = () => {
    useEffect(() => {
        // if (typeof window !== 'undefined' && window.adsbygoogle) {
        if (typeof window !== 'undefined') {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error('AdSense error:', e);
            }
        }
    }, []);

    // 클릭 시 IP 수집 API 호출 함수
    const handleClick = useCallback(async () => {
        try {
            await fetch('/api/track-click', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ adUnit: 'main_ad' }),
            });
        } catch (error) {
            console.error('IP 수집 API 호출 오류:', error);
        }
    }, []);

    // const handleAdLoad = () => {
    //     try {
    //         if (window.adsbygoogle && window.adsbygoogle.push) {
    //             window.adsbygoogle.push({});
    //         }
    //     } catch (error) {
    //         console.error('Ads initialization error:', error);
    //     }
    // };

    return (
        <>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4184585928401576"
                crossOrigin="anonymous"
            ></script>
            <div onClick={handleClick}>
                <ins
                    className="adsbygoogle"
                    style={{ display: 'inline-block', width: '728px', height: '90px' }}
                    data-ad-client="ca-pub-4184585928401576"
                    data-ad-slot="5337898330"
                    // data-ad-format="auto"
                    // data-full-width-responsive="true"
                ></ins>
            </div>
        </>
    );
};

export default MainAd;
