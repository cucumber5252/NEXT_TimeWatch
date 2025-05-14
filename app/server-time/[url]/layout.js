import './globals.css';
import HotjarTracker from '../../../components/HotJarTracker'; // Adjust the path as needed
import mappings from '../../../lib/mappings';

// 도메인을 표준화하는 함수
function normalizeDomain(domain) {
    return domain
        .replace(/^https?:\/\//i, '') // https:// 또는 http:// 제거
        .replace(/(\.[a-z]{2,})(\/.*)?$/, '$1'); // 도메인 확장자 뒤의 모든 경로 제거
}

export async function generateMetadata({ params }) {
    const { url } = params;

    // URL에 대체어를 매핑
    let pageName = url;
    for (const mapping of mappings) {
        const normalizedDomain = normalizeDomain(mapping.domain);
        if (url.includes(normalizedDomain)) {
            pageName = mapping.name;
            break;
        }
    }
    // 기본 메타 설명
    const defaultDescription = `${pageName}${
        !pageName.includes(url) ? `(${url})` : ''
    }의 가장 정확한 서버시간을 타임워치에서 확인하세요! 티켓팅, 수강신청, 음악방송 사전녹화, 한정판 구매 등 모든 선착순 신청 전용시계, 행운을 가져다주는 서버시간 timewatch.`;

    // 특정 URL 경로에 대해 다른 메타 설명 설정
    let pageDescription = defaultDescription;
    if (url === 'weverse.io') {
        pageDescription =
            '가장 정확한 위버스 서버시간 확인하기! 인기가요 뮤직뱅크 음악중심 엠카 사전녹화 신청, 라이즈 보넥도 갓세븐 아이브 공방 사녹 생방';
    }

    const pageTitle = `${pageName} 서버시간 - timewatch 타임워치`;

    return {
        title: pageTitle,
        description: pageDescription,
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: `https://time-watch-tau.vercel.app/server-time/${url}`,
            siteName: '행운의 서버시간 timewatch 타임워치',
            images: [
                {
                    url: 'https://time-watch-tau.vercel.app/og_image.jpg',
                    width: 800,
                    height: 600,
                    alt: 'timewatch 타임워치',
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            images: ['https://time-watch-tau.vercel.app/og_image.jpg'],
        },
    };
}

export default function ServerTimeLayout({ children }) {
    return (
        <>
            <HotjarTracker /> {/* Include HotjarTracker here */}
            {children}
        </>
    );
}
