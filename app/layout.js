import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers.jsx';
import ClientLayout from './ClientLayout.jsx';
import { GoogleTagManager } from '@next/third-parties/google';
export const metadata = {
    title: '지금 시간 보게? timewatch 타임워치',
    description:
        '가장 정교한 밀리초 서버시간. 티켓팅 인터파크 예스24 멜론티켓 티켓링크 쿠팡플레이, 수강신청, 구글폼, 음악방송 사전녹화 선착순 신청 전용시계',
    icons: {
        icon: '/favicon_48.svg',
    },
    openGraph: {
        title: '지금 시간 보게? timewatch 타임워치',
        description: '믿을 수 있는 가장 트렌디한 서버시간',
        url: 'https://time-watch-tau.vercel.app/',
        siteName: '지금 시간 보게? timewatch 타임워치',
        images: [
            {
                url: 'https://time-watch-tau.vercel.app/og_image.jpg',
                width: 800,
                height: 600,
                alt: '지금 시간 보게? timewatch 타임워치',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: '지금 시간 보게? timewatch 타임워치',
        description: '믿을 수 있는 가장 트렌디한 서버시간',
        images: ['https://time-watch-tau.vercel.app/og_image.jpg'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="ko">
            <head>
                {/* <GoogleTagManager gtmId="GTM-NG49ZT4P" /> */}
                <link rel="icon" href="/favicon.ico" />

                {/* 애플 메타태그 추가 */}
                <meta name="apple-mobile-web-app-title" content="timewatch" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#000000" />

                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="UTF-8" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://time-watch-tau.vercel.app/" />
                <meta name="theme-color" content="#000000" />
                <meta name="application-name" content="timewatch" />

                {/* 애플 터치 아이콘 추가 */}
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.svg" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.svg" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.svg" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.svg" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.svg" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.svg" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.svg" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.svg" />

                {/* 파비콘 및 웹 앱 관련 아이콘 추가 */}
                <link rel="icon" type="image/svg" sizes="192x192" href="/android-icon-192x192.svg" />
                <link rel="icon" type="image/svg" sizes="32x32" href="/favicon-32x32.svg" />
                <link rel="icon" type="image/svg" sizes="96x96" href="/favicon-96x96.svg" />
                <link rel="icon" type="image/svg" sizes="16x16" href="/favicon-16x16.svg" />
                <link rel="manifest" href="/manifest.json" />

                {/* 애드센스 코드 */}
                {/* <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4184585928401576"
                    crossOrigin="anonymous"
                ></script> */}
            </head>
            <body>
                {/* <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NG49ZT4P"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    ></iframe>
                </noscript> */}
                <Providers>
                    <ClientLayout>{children}</ClientLayout>
                </Providers>
                <Analytics />
            </body>
        </html>
    );
}
