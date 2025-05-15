// 검색 키워드와 특정 URL에 대해 웹사이트 대체어 설정
// 더 구체적인 도메인을 기본 도메인의 위에 배치하기.

import Fuse from 'fuse.js';

export const mappings = [
    // 포털사이트 & 소셜미디어
    {
        keyword: ['타임워치', 'timewatch'],
        domain: 'https://time-watch-tau.vercel.app/',
        name: '가장 정확한 서버시간 타임워치',
    },
    {
        keyword: [],
        domain: 'https://time-watch-tau.vercel.app/',
        name: '가장 정확한 서버시간 타임워치',
    },
    {
        keyword: ['네이버폼', '네이버 폼', 'naver form'],
        domain: 'https://form.naver.com/',
        name: '네이버 폼',
    },
    {
        keyword: ['네이버예약', '네이버 예약', 'naver booking'],
        domain: 'https://booking.naver.com/',
        name: '네이버 예약',
    },
    {
        keyword: ['스마트스토어', '네이버스스', '네이버스토어'],
        domain: 'https://smartstore.naver.com/',
        name: '네이버 스마트스토어',
    },
    {
        keyword: ['네이버 메일'],
        domain: 'https://mail.naver.com',
        name: '네이버 메일',
    },
    {
        keyword: ['네이버 뉴스'],
        domain: 'https://news.naver.com',
        name: '네이버 뉴스',
    },
    {
        keyword: ['네이버 지도'],
        domain: 'https://map.naver.com',
        name: '네이버 지도',
    },
    {
        keyword: ['네이버 날씨'],
        domain: 'https://weather.naver.com',
        name: '네이버 날씨',
    },
    {
        keyword: ['네이버카페'],
        domain: 'https://cafe.naver.com',
        name: '네이버카페',
    },
    {
        keyword: ['네이버 블로그'],
        domain: 'https://blog.naver.com',
        name: '네이버 블로그',
    },
    {
        keyword: ['네이버웍스'],
        domain: 'https://naver.worksmobile.com',
        name: '네이버웍스',
    },
    {
        keyword: ['네이버 쇼핑', '네이버쇼핑'],
        domain: 'https://shopping.naver.com',
        name: '네이버 쇼핑',
    },
    {
        keyword: ['네이버 쇼핑라이브', '쇼핑라이브'],
        domain: 'https://shoppinglive.naver.com',
        name: '네이버 쇼핑라이브',
    },
    {
        keyword: ['네이버', 'ㄴㅇㅂ', 'naver', 'naver.com'],
        domain: 'https://www.naver.com',
        name: '네이버',
    },
    {
        keyword: [],
        domain: 'https://naver.com',
        name: '네이버',
    },
    {
        keyword: [],
        domain: 'https://naver.me',
        name: '네이버',
    },
    {
        keyword: ['구글캘린더'],
        domain: 'https://calendar.google.com',
        name: '구글캘린더',
    },
    {
        keyword: ['구글폼', '폼림', '폼림픽', 'googleform', 'docs.google.com'],
        domain: 'https://docs.google.com',
        name: '구글폼',
    },
    {
        keyword: ['구글밋', 'Google Meet'],
        domain: 'https://meet.google.com',
        name: 'Google Meet',
    },
    {
        keyword: ['구글맵'],
        domain: 'https://maps.google.com',
        name: '구글맵',
    },
    {
        keyword: ['구글', 'google', 'google.com'],
        domain: 'https://www.google.com',
        name: '구글',
    },
    {
        keyword: [],
        domain: 'https://google.com',
        name: '구글',
    },
    {
        keyword: ['다음카페', 'cafe.daum.net'],
        domain: 'https://cafe.daum.net',
        name: '다음카페',
    },
    {
        keyword: ['다음', 'daum', 'daum.net'],
        domain: 'https://www.daum.net',
        name: '다음',
    },
    {
        keyword: ['야후', 'yahoo', '야후재팬', 'yahoo.co.jp'],
        domain: 'https://yahoo.co.jp/',
        name: '야후 Japan',
    },
    {
        keyword: ['카카오맵'],
        domain: 'https://map.kakao.com',
        name: '카카오맵',
    },
    {
        keyword: ['카카오톡 선물하기', '카카오선물', '카톡선물', '카톡선물하기', '카톡 선물하기', 'gift.kakao.com'],
        domain: 'https://gift.kakao.com/',
        name: '카카오톡 선물하기',
    },
    {
        keyword: ['카카오톡 예약하기', '카카오예약', '카톡예약', '카톡예약하기', '카톡 예약하기', 'booking.kakao.com'],
        domain: 'https://booking.kakao.com/',
        name: '카카오톡 예약하기',
    },
    {
        keyword: ['카카오톡', '카톡', 'kakaotalk'],
        domain: 'http://www.kakaotalk.com',
        name: '카카오톡',
    },
    {
        keyword: ['트위터', 'twitter', 'x', 'ㅌㅇㅌ', 'twitter.com'],
        domain: 'https://twitter.com',
        name: '트위터',
    },
    // {
    //     keyword: ['t.co'],
    //     domain: 'https://t.co/',
    //     name: '트위터 도메인',
    // },
    {
        keyword: ['페이스북', '페북', 'facebook', 'facebook.com'],
        domain: 'https://www.facebook.com',
        name: '페이스북',
    },
    {
        keyword: ['인스타그램', '인스타', '인별', 'instagram', 'instagram.com'],
        domain: 'https://www.instagram.com',
        name: '인스타그램',
    },
    {
        keyword: ['링크드인'],
        domain: 'https://kr.linkedin.com',
        name: '링크드인',
    },
    {
        keyword: ['노션', 'notion'],
        domain: 'https://notion.so',
        name: '노션',
    },
    {
        keyword: ['유튜브', 'ㅇㅌㅂ', 'youtube', 'youtube.com'],
        domain: 'https://youtube.com',
        name: '유튜브',
    },
    {
        keyword: ['케이뱅크', '케뱅', 'kbank', 'kbanknow.com'],
        domain: 'https://kbanknow.com',
        name: '케이뱅크',
    },
    // 커뮤니티
    {
        keyword: [],
        domain: 'https://gall.dcinside.com/',
        name: '디시인사이드 갤러리',
    },
    {
        keyword: ['디시인사이드', '디시', 'dcinside', '디시갤'],
        domain: 'https://www.dcinside.com/',
        name: '디시인사이드',
    },
    {
        keyword: [],
        domain: 'https://dcinside.com/',
        name: '디시인사이드 dcinside',
    },
    {
        keyword: ['velog'],
        domain: 'https://velog.io',
        name: 'velog',
    },
    {
        keyword: ['티스토리'],
        domain: 'https://tistory.com',
        name: '티스토리',
    },
    {
        keyword: ['브런치'],
        domain: 'https://brunch.co.kr',
        name: '브런치',
    },
    {
        keyword: ['나무위키'],
        domain: 'https://namu.wiki',
        name: '나무위키',
    },
    {
        keyword: ['위키백과'],
        domain: 'https://ko.wikipedia.org',
        name: '위키백과',
    },
    {
        keyword: ['뉴닉'],
        domain: 'https://newneek.co',
        name: '뉴닉',
    },
    // 패션, 라이프스타일 브랜드 관련
    {
        keyword: ['올리브영', '올영', 'oliveyoung.co.kr', 'oliveyoung', '올영세일'],
        domain: 'https://www.oliveyoung.co.kr',
        name: '올리브영',
    },
    {
        keyword: [],
        domain: 'https://oliveyoung.co.kr',
        name: '올리브영 올영세일',
    },
    {
        keyword: [],
        domain: 'https://www.oliveyoung.com',
        name: '올리브영',
    },
    {
        keyword: [],
        domain: 'https://oliveyoung.com',
        name: '올리브영',
    },
    {
        keyword: [],
        domain: 'https://oliveyoung.co.kr',
        name: '올리브영 올영세일',
    },
    {
        keyword: ['29CM', '29cm.co.kr'],
        domain: 'https://29cm.co.kr',
        name: '29CM',
    },
    {
        keyword: ['지그재그', 'zigzag', 'zigzag.kr'],
        domain: 'https://zigzag.kr',
        name: '지그재그',
    },
    {
        keyword: ['에이블리', 'a-bly.com'],
        domain: 'https://a-bly.com',
        name: '에이블리',
    },
    {
        keyword: [],
        domain: 'https://www.a-bly.com',
        name: '에이블리',
    },
    {
        keyword: [],
        domain: 'https://m.a-bly.com',
        name: '에이블리',
    },
    {
        keyword: ['크림', 'kream', 'kream.co.kr'],
        domain: 'https://kream.co.kr/',
        name: '크림',
    },
    {
        keyword: [],
        domain: 'https://kream.com/',
        name: '크림 KREAM',
    },
    {
        keyword: ['유니클로', 'uniqlo'],
        domain: 'https://www.uniqlo.com/',
        name: '유니클로',
    },
    {
        keyword: [],
        domain: 'https://uniqlo.com/',
        name: '유니클로',
    },
    {
        keyword: ['우리모모콘', '우리 모모콘', 'momocon'],
        domain: 'https://woorimomocon.com/',
        name: '우리 모모콘',
    },
    {
        keyword: ['경탁주', 'kyungkorea', '성시경막걸리'],
        domain: 'https://kyungkorea.com/',
        name: '경탁주 공식몰 경(璄)',
    },
    {
        keyword: ['알리', '알리익스프레스', 'aliexpress'],
        domain: 'https://aliexpress.com/',
        name: '알리익스프레스',
    },
    {
        keyword: ['타오바오', 'taobao'],
        domain: 'https://www.taobao.com/',
        name: '타오바오',
    },
    {
        keyword: ['타오바오', 'taobao'],
        domain: 'https://world.taobao.com/',
        name: '타오바오 월드',
    },
    {
        keyword: [],
        domain: 'https://taobao.com/',
        name: '타오바오',
    },
    {
        keyword: ['스투시', 'ㅅㅌㅅ', 'stussy', '스투시코리아'],
        domain: 'https://kr.stussy.com/',
        name: '스투시 코리아',
    },
    {
        keyword: ['스투시재팬'],
        domain: 'https://jp.stussy.com/',
        name: '스투시 JP',
    },
    {
        keyword: ['스투시미국'],
        domain: 'https://stussy.com/',
        name: '스투시 US',
    },
    {
        keyword: ['무신사', 'ㅁㅅㅅ'],
        domain: 'https://www.musinsa.com/',
        name: '무신사',
    },
    {
        keyword: [],
        domain: 'https://musinsa.com/',
        name: '무신사',
    },
    {
        keyword: ['levis', 'levi', '리바이스', 'levi.co.kr'],
        domain: 'https://www.levi.co.kr/',
        name: '리바이스',
    },
    {
        keyword: ['asics', '아식스'],
        domain: 'https://www.asics.co.kr/',
        name: '아식스',
    },
    {
        keyword: ['supreme', '슈프림', '수프림', 'kr.supreme.com', 'supreme.com'],
        domain: 'https://kr.supreme.com/',
        name: '슈프림 KR',
    },
    {
        keyword: ['롤렉스', 'rolex', '크로노다임'],
        domain: 'https://www.chronodigmwatch.co.kr/',
        name: '크로노다임 롤렉스',
    },
    {
        keyword: [],
        domain: 'https://chronodigmwatch.co.kr/',
        name: '롤렉스 롯데백화점 본점',
    },
    {
        keyword: ['페스룸', 'pethroom'],
        domain: 'https://pethroom.com/',
        name: '페스룸',
    },
    {
        keyword: ['우노와치', 'unowatch'],
        domain: 'https://www.unowatch.co.kr/',
        name: '우노와치 롤렉스',
    },
    {
        keyword: [],
        domain: 'https://unowatch.co.kr/',
        name: '롤렉스 압구정 현대백화점',
    },
    {
        keyword: [],
        domain: 'https://www.hyundaiwatch.co.kr/rolex/',
        name: '롤렉스 현대백화점 무역센터점',
    },
    {
        keyword: ['밀리언즈', 'millions.kr', 'millions'],
        domain: 'https://millions.kr/',
        name: '밀리언즈 셀렉트샵',
    },
    {
        keyword: ['위글위글'],
        domain: 'https://wiggle-wiggle.com/',
        name: '위글위글',
    },
    {
        keyword: ['웍아', '웍스아웃', 'worksout'],
        domain: 'https://www.worksout.co.kr/',
        name: '웍스아웃',
    },
    {
        keyword: [],
        domain: 'https://worksout.co.kr/',
        name: '웍스아웃',
    },
    {
        keyword: [],
        domain: 'https://worksout.com/',
        name: '웍스아웃 월드와이드',
    },
    {
        keyword: ['thisisneverthat', '디스이즈네버댓', '디네댓'],
        domain: 'https://thisisneverthat.com/',
        name: '디스이즈네버댓',
    },
    {
        keyword: ['호에마켓', 'hoemarket'],
        domain: 'https://www.hoemarket.com/',
        name: '호에마켓',
    },
    // 각종 신청과 예약
    {
        keyword: ['한국조폐공사'],
        domain: 'https://www.koreamint.com/',
        name: '한국조폐공사 쇼핑몰',
    },
    {
        keyword: ['집대성'],
        domain: 'https://zip-ds-1st.com/',
        name: '집대성',
    },
    {
        keyword: ['숲나들이', '숲나들e', 'foresttrip.go.kr'],
        domain: 'https://foresttrip.go.kr',
        name: '숲나들이',
    },
    {
        keyword: ['병무청', 'ㅂㅁㅊ', 'mma.go.kr'],
        domain: 'https://mma.go.kr',
        name: '병무청',
    },
    {
        keyword: ['병무민원'],
        domain: 'https://mwpt.mma.go.kr/',
        name: '병무민원',
    },
    {
        keyword: ['공단기'],
        domain: 'https://gong.conects.com',
        name: '공단기',
    },
    {
        keyword: ['공단기학원'],
        domain: 'https://acagong.conects.com',
        name: '공단기 학원',
    },
    {
        keyword: [''],
        domain: 'https://event.conects.com',
        name: '공단기 이벤트',
    },
    {
        keyword: ['메가스터디'],
        domain: 'https://www.megastudy.net/',
        name: '메가스터디',
    },
    {
        keyword: [],
        domain: 'https://megastudy.net/',
        name: '메가스터디',
    },
    {
        keyword: [],
        domain: 'https://m.megastudy.net/',
        name: '메가스터디',
    },
    {
        keyword: ['FC ONLINE'],
        domain: 'https://fconline.nexon.com',
        name: 'FC ONLINE',
    },
    {
        keyword: ['키이스케이프'],
        domain: 'https://keyescape.co.kr',
        name: '키이스케이프 방탈출카페',
    },
    {
        keyword: ['포인트나인'],
        domain: 'https://point-nine.com/',
        name: '포인트나인 방탈출카페',
    },
    {
        keyword: ['넥스트에디션'],
        domain: 'https://nextedition.co.kr/',
        name: '넥스트에디션 방탈출카페',
    },
    {
        keyword: ['지구별방탈출', '지구별'],
        domain: 'https://www.xn--2e0b040a4xj.com/',
        name: '지구별방탈출',
    },
    {
        keyword: ['룸즈에이', 'rooms a', 'roomsa'],
        domain: 'https://roomsa.co.kr/',
        name: '룸즈에이 방탈출',
    },
    {
        keyword: ['마스터키', 'masterkey'],
        domain: 'https://www.master-key.co.kr/',
        name: '마스터키 방탈출',
    },
    {
        keyword: ['룸엘이스케이프'],
        domain: 'https://www.roomlescape.com/',
        name: '룸엘이스케이프',
    },
    {
        keyword: ['피파온라인4', '피온4'],
        domain: 'https://fifaonline4.nexon.com',
        name: '피파온라인4',
    },
    {
        keyword: ['피파모바일', '피파 모바일', 'fc모바일'],
        domain: 'http://fifamobile.nexon.com/',
        name: 'FC MOBILE',
    },
    {
        keyword: ['넥슨커뮤니티', '넥슨 커뮤니티'],
        domain: 'https://forum.nexon.com/',
        name: '넥슨 커뮤니티',
    },
    {
        keyword: ['T멤버십'],
        domain: 'https://sktmembership.tworld.co.kr',
        name: 'T멤버십',
    },
    {
        keyword: ['T월드'],
        domain: 'https://tworld.co.kr',
        name: 'T월드',
    },
    {
        keyword: ['캐치테이블'],
        domain: 'https://app.catchtable.co.kr',
        name: '캐치테이블',
    },
    {
        keyword: ['KBO'],
        domain: 'https://koreabaseball.com',
        name: 'KBO',
    },
    {
        keyword: ['뱅크샐러드', '뱅셀', '유전자검사', 'banksalad'],
        domain: 'https://app.banksalad.com/',
        name: '뱅크샐러드',
    },
    {
        keyword: ['광명문화재단', 'gmcf'],
        domain: 'https://www.gmcf.or.kr/',
        name: '광명문화재단',
    },
    {
        keyword: [],
        domain: 'https://gmcf.or.kr/',
        name: '광명문화재단',
    },
    {
        keyword: [
            '기아타이거즈',
            '기아 타이거즈',
            'KIA타이거즈',
            'kia tigers',
            'kiatigers',
            '기아 팀스토어',
            'teamstore.tigers.co.kr',
        ],
        domain: 'https://teamstore.tigers.co.kr/',
        name: 'KIA타이거즈 팀스토어',
    },
    {
        keyword: ['두산베어스', '두산 베어스', 'doosan bears'],
        domain: 'https://www.doosanbears.com/',
        name: '두산베어스',
    },
    {
        keyword: [],
        domain: 'https://doosanbears.com/',
        name: '두산베어스',
    },
    {
        keyword: ['해커스', 'hackers.com'],
        domain: 'https://hackers.com/',
        name: '해커스닷컴',
    },
    {
        keyword: ['춘천도시공사', 'cuc.or.kr'],
        domain: 'https://www.cuc.or.kr/',
        name: '춘천도시공사',
    },
    {
        keyword: ['천안도시공사', 'cfmc.or.kr'],
        domain: 'https://sports.cfmc.or.kr/',
        name: '천안도시공사',
    },
    {
        keyword: ['서울시 공공서비스예약', '서울특별시 공공서비스예약', '서울공공시설예약'],
        domain: 'https://yeyak.seoul.go.kr/',
        name: '서울특별시 공공서비스예약',
    },
    {
        keyword: [],
        domain: 'https://online122.youth.seoul.kr/',
        name: '서울특별시 공공서비스 예약',
    },
    {
        keyword: ['관악구시설관리공단', '관악공단', 'gwanakgongdan'],
        domain: 'https://www.gwanakgongdan.or.kr/',
        name: '관악구시설관리공단',
    },
    {
        keyword: [],
        domain: 'https://gwanakgongdan.or.kr/',
        name: '관악구시설예약',
    },
    {
        keyword: ['광진구통합예약시스템', '광진구시설관리공단'],
        domain: 'https://booking.gwangjin.or.kr/',
        name: '광진구통합예약시스템',
    },
    {
        keyword: ['서산국민체육센터'],
        domain: 'https://yeyak.seosan.go.kr/',
        name: '서산국민체육센터',
    },
    {
        keyword: ['서산국민체육센터'],
        domain: 'https://yeyak.seosan.go.kr/',
        name: '서산국민체육센터',
    },
    {
        keyword: ['인천광역시체육회'],
        domain: 'https://www.icsports.or.kr//',
        name: '인천광역시체육회',
    },
    {
        keyword: ['국민체력100'],
        domain: 'https://nfa.kspo.or.kr/',
        name: '국민체력 100',
    },
    {
        keyword: ['요고', 'yogo', 'yo-go.co.kr'],
        domain: 'https://yo-go.co.kr/',
        name: '요고 YOGO',
    },
    {
        keyword: ['씨지비', 'cgv', 'cgv.co.kr'],
        domain: 'https://cgv.co.kr/',
        name: 'CGV',
    },
    {
        keyword: ['메가박스', 'megabox'],
        domain: 'https://www.megabox.co.kr/',
        name: '메가박스',
    },
    {
        keyword: [],
        domain: 'https://megabox.co.kr/',
        name: '메가박스',
    },
    {
        keyword: ['롯데시네마', '롯시', 'lottecinema'],
        domain: 'https://www.lottecinema.co.kr/',
        name: '롯데시네마',
    },
    {
        keyword: [],
        domain: 'https://lottecinema.co.kr/',
        name: '롯데시네마',
    },
    {
        keyword: ['샤롯데씨어터'],
        domain: 'https://www.charlottetheater.co.kr/',
        name: '샤롯데씨어터',
    },
    {
        keyword: [],
        domain: 'https://charlottetheater.co.kr/',
        name: '샤롯데씨어터 뮤지컬',
    },
    {
        keyword: ['큐넷', 'qnet', 'q-net', '큐넷자격증'],
        domain: 'https://www.q-net.or.kr',
        name: '큐넷 자격증',
    },
    {
        keyword: [],
        domain: 'https://q-net.or.kr',
        name: '큐넷 자격증',
    },
    {
        keyword: ['오픽', 'opic'],
        domain: 'https://www.opic.or.kr/',
        name: '오픽',
    },
    {
        keyword: ['오픽 시험'],
        domain: 'https://opic.or.kr/',
        name: 'OPIc 시험',
    },
    {
        keyword: ['에딘버러컨트리클럽', 'edinburgh'],
        domain: 'https://edinburgh.co.kr/',
        name: '에딘버러컨트리클럽',
    },
    {
        keyword: ['나주힐스', '나주힐스CC', 'najuhills'],
        domain: 'https://najuhills.com/',
        name: '나주힐스CC 예약',
    },
    {
        keyword: ['세종문화회관'],
        domain: 'https://www.sejongpac.or.kr/',
        name: '세종문화회관',
    },
    {
        keyword: ['세종문화회관 예매'],
        domain: 'https://sejongpac.or.kr/',
        name: '세종문화회관 예매',
    },
    {
        keyword: ['다산아트홀'],
        domain: 'https://culture.nyj.go.kr/',
        name: '다산아트홀',
    },
    {
        keyword: ['LG아트센터', 'lgart'],
        domain: 'https://www.lgart.com/',
        name: 'LG아트센터 서울',
    },
    {
        keyword: [],
        domain: 'https://lgart.com/',
        name: 'LG아트센터',
    },
    {
        keyword: ['경기공유서비스'],
        domain: 'https://share.gg.go.kr/',
        name: '경기공유서비스',
    },
    {
        keyword: ['현대예술관'],
        domain: 'https://www.hhiarts.co.kr/',
        name: '현대예술관',
    },
    {
        keyword: [''],
        domain: 'https://hhiarts.co.kr/',
        name: '현대예술관',
    },
    {
        keyword: ['두산아트센터'],
        domain: 'https://www.doosanartcenter.com/',
        name: '두산아트센터',
    },
    {
        keyword: ['오디움', 'audeum', '오디오박물관'],
        domain: 'https://audeum.org/',
        name: '오디움',
    },
    {
        keyword: [],
        domain: 'https://www.audeum.org/',
        name: '오디움 오디오박물관',
    },
    {
        keyword: ['알라딘', '뮤지컬 알라딘', '뮤지컬알라딘', '알라딘뮤지컬', '알라딘 뮤지컬'],
        domain: 'https://www.aladdinthemusical.co.kr/',
        name: '뮤지컬 알라딘',
    },
    {
        keyword: [],
        domain: 'https://aladdinthemusical.co.kr/',
        name: '뮤지컬 알라딘 예매',
    },
    {
        keyword: ['대구콘서트하우스'],
        domain: 'https://www.daeguconcerthouse.or.kr/',
        name: '대구 콘서트 하우스',
    },
    {
        keyword: ['랜더스', 'ssg landers'],
        domain: 'https://app.ssglanders.com/index',
        name: 'SSG 랜더스',
    },
    {
        keyword: ['kovo', '한국배구연맹'],
        domain: 'https://kovo.co.kr',
        name: 'KOVO 한국배구연맹',
    },
    {
        keyword: ['전주청년온라인플랫폼', '전주청정지대'],
        domain: 'https://youth.jeonju.go.kr/',
        name: '전주청정지대',
    },
    {
        keyword: ['11번가', '11st'],
        domain: 'https://www.11st.co.kr/',
        name: '11번가',
    },
    {
        keyword: [],
        domain: 'https://11st.co.kr/',
        name: '11번가',
    },
    {
        keyword: ['비트포비아 던전', '비트포비아던전', '던전'],
        domain: 'https://xdungeon.net/',
        name: '비트포비아 던전',
    },
    {
        keyword: ['아모레퍼시픽', '아모레몰', 'amore'],
        domain: 'https://www.amoremall.com/',
        name: '아모레몰',
    },
    {
        keyword: [],
        domain: 'https://amoremall.com/',
        name: '아모레퍼시픽',
    },
    {
        keyword: ['칠성몰'],
        domain: 'mall.lottechilsung.co.kr',
        name: '칠성몰',
    },
    {
        keyword: ['포켓CU', 'CU'],
        domain: 'https://www.pocketcu.co.kr/',
        name: '포켓CU',
    },
    {
        keyword: ['세종에머슨', 'sejong emerson'],
        domain: 'https://www.sejongemerson.co.kr/',
        name: '세종에머슨 컨트리클럽',
    },
    // 여행사, 비행사, 기차, 숙박
    {
        keyword: [],
        domain: 'https://myrealtrip.com',
        name: '마이리얼트립',
    },
    {
        keyword: ['진에어'],
        domain: 'https://jinair.com',
        name: '진에어',
    },
    {
        keyword: ['대한항공'],
        domain: 'https://www.koreanair.com',
        name: '대한항공',
    },
    {
        keyword: ['대한항공 HANWAY', '한웨이', 'HANWAY'],
        domain: 'https://hanway.koreanair.com',
        name: '대한항공 HANWAY',
    },
    {
        keyword: ['이스타항공', 'eastarjet'],
        domain: 'https://www.eastarjet.com/',
        name: '이스타항공',
    },
    {
        keyword: [],
        domain: 'https://eastarjet.com/',
        name: '이스타항공',
    },
    {
        keyword: ['제주에어'],
        domain: 'https://jejuair.net',
        name: '제주에어',
    },
    {
        keyword: ['티웨이'],
        domain: 'https://www.twayair.com',
        name: '티웨이',
    },
    {
        keyword: ['에어부산'],
        domain: 'https://airbusan.com',
        name: '에어부산',
    },
    {
        keyword: ['에어서울'],
        domain: 'https://flyairseoul.com',
        name: '에어서울',
    },
    {
        keyword: ['코레일', '레츠코레일', 'ktx'],
        domain: 'https://www.letskorail.com/',
        name: '코레일',
    },
    {
        keyword: [],
        domain: 'https://letskorail.com/',
        name: '코레일 예매',
    },
    {
        keyword: ['코버스', '고속버스'],
        domain: 'https://kobus.co.kr',
        name: '코버스 고속버스통합예매',
    },
    {
        keyword: ['SRT', 'srail'],
        domain: 'https://etk.srail.kr',
        name: 'SRT',
    },
    {
        keyword: ['SRT 예매'],
        domain: 'https://srail.co.kr',
        name: 'SRT 예매',
    },
    {
        keyword: ['lotte hotel', 'lottehotel', '롯데호텔', '롯데리조트', '롯데호텔앤리조트'],
        domain: 'https://www.lottehotel.com/',
        name: '롯데호텔앤리조트',
    },
    {
        keyword: ['꿀스테이', 'coolstay'],
        domain: 'https://www.coolstay.co.kr/',
        name: '꿀스테이',
    },
    {
        keyword: ['KLM'],
        domain: 'https://www.klm.co.kr/',
        name: 'KLM 항공편 예약',
    },
    {
        keyword: ['에어로케이', 'aerok', 'aero k'],
        domain: 'https://www.aerok.com/',
        name: 'Aero K 에어로케이',
    },
    {
        keyword: ['트립닷컴'],
        domain: 'https://kr.trip.com/',
        name: '트립닷컴',
    },
    {
        keyword: [],
        domain: 'https://trip.com/',
        name: '트립닷컴',
    },
    // 배달앱, 음식
    {
        keyword: ['배달의민족', '배민', 'ㅂㅁ', 'baemin', 'baemin.com'],
        domain: 'https://baemin.com',
        name: '배달의민족',
    },
    {
        keyword: ['쿠팡이츠', 'coupangeats', 'ㅋㅍㅇㅊ', 'coupangeats.com'],
        domain: 'https://www.coupangeats.com',
        name: '쿠팡이츠',
    },
    {
        keyword: ['요기요', 'yogiyo', 'ㅇㄱㅇ', 'yogiyo.co.kr'],
        domain: 'https://yogiyo.co.kr',
        name: '요기요',
    },
    {
        keyword: ['포켓cu', '포켓씨유', 'cu편의점', 'pocketcu'],
        domain: 'https://pocketcu.co.kr/',
        name: '포켓CU',
    },
    {
        keyword: [],
        domain: 'https://pocketcu.com/',
        name: 'CU 멤버십',
    },
    // 티켓팅, kpop, 팬
    {
        keyword: [
            'NOL 티켓',
            'NOL티켓',
            '놀티켓',
            '인터파크 티켓',
            '인터파크티켓',
            '인티',
            '인팤',
            '인터파크',
            'ㅇㅌㅍㅋ',
            'tickets.interpark.com',
            'tickets.interpark.com',
        ],
        domain: 'https://tickets.interpark.com/',
        name: 'NOL 티켓',
    },
    {
        keyword: ['nol.interpark.com/'],
        domain: 'https://nol.interpark.com/',
        name: 'NOL 티켓(구 인터파크 티켓)',
    },
    {
        keyword: [
            '인터파크 글로벌',
            'interpark',
            'globalinterpark',
            'global interpark',
            'globalinterpark.com',
            'interpark global',
        ],
        domain: 'https://www.globalinterpark.com/',
        name: '인터파크 글로벌',
    },
    {
        keyword: [],
        domain: 'https://interpark.com',
        name: '인터파크',
    },
    {
        keyword: [],
        domain: 'https://ticket.interpark',
        name: '인터파크 티켓팅',
    },
    {
        keyword: ['예스24', '예스24티켓', '예스24 티켓', '예사', 'yes24', '예사티켓', 'ticket.yes24.com'],
        domain: 'https://ticket.yes24.com',
        name: '예스24 티켓',
    },
    {
        keyword: ['이벤트세상', '예사이벤트'],
        domain: 'https://event.yes24.com/',
        name: '예스24 이벤트세상',
    },
    {
        keyword: ['yes24.com'],
        domain: 'https://yes24.com',
        name: '예스24',
    },
    {
        keyword: ['playkfa', 'kfa', '국대', '축구', '월드컵', '팔레스타인'],
        domain: 'https://www.playkfa.com',
        name: 'PLAY KFA',
    },
    {
        keyword: ['PLAY KFA SHOP', 'shop.playkfa.com'],
        domain: 'https://shop.playkfa.com/',
        name: 'PLAY KFA SHOP',
    },
    {
        keyword: [''],
        domain: 'https://playkfa.com',
        name: 'PLAY KFA',
    },
    {
        keyword: ['ticketplus'],
        domain: 'https://ticketplus.com.tw/',
        name: 'Ticket Plus Taiwan',
    },
    {
        keyword: ['livepocket'],
        domain: 'https://t.livepocket.jp/',
        name: 'LivePocket-Ticket JP',
    },
    {
        keyword: ['라이브네이션', '라네', 'livenation'],
        domain: 'https://www.livenation.kr/',
        name: '라이브네이션',
    },
    {
        keyword: [],
        domain: 'https://livenation.kr/',
        name: '라이브네이션 티켓정보',
    },
    {
        keyword: ['멜론티켓', '멜론 티켓', '멜티', 'melonticket', 'ticket.melon.com'],
        domain: 'https://ticket.melon.com/',
        name: '멜론 티켓',
    },
    {
        keyword: ['멜론', 'melon', 'melon.com'],
        domain: 'https://melon.com',
        name: '멜론',
    },
    {
        keyword: ['쿠팡플레이', '쿠플', 'coupangplay', '토트넘', '뮌헨'],
        domain: 'https://www.coupangplay.com/',
        name: '쿠팡플레이',
    },
    {
        keyword: [],
        domain: 'https://play.coupang.com',
        name: '쿠팡플레이',
    },
    {
        keyword: ['쿠팡', 'coupang'],
        domain: 'https://coupang.com',
        name: '쿠팡',
    },
    {
        keyword: ['KBL'],
        domain: 'https://kbl.or.kr/',
        name: 'KBL 공식 홈페이지',
    },
    {
        keyword: ['티켓링크', '티링', 'ticketlink', 'ㅌㅋㄹㅋ', '최강야구', 'ticketlink.co.kr'],
        domain: 'https://ticketlink.co.kr',
        name: '티켓링크',
    },
    {
        keyword: ['위버스 팬이벤트', 'fanevent.weverse.io'],
        domain: 'https://fanevent.weverse.io',
        name: '위버스 팬이벤트',
    },
    {
        keyword: ['위버스샵', 'shop.weverse.io'],
        domain: 'https://shop.weverse.io',
        name: '위버스샵',
    },
    {
        keyword: ['위버스', 'ㅇㅂㅅ', 'ㅇㅄ', 'weverse', 'weverse.io', 'weverse.com'],
        domain: 'https://weverse.io',
        name: '위버스',
    },
    {
        keyword: ['JYP FANS', 'jypfans', 'jypfans.com'],
        domain: 'https://www.jypfans.com/',
        name: 'JYP FANS',
    },
    {
        keyword: [],
        domain: 'https://jypfans.com/',
        name: 'JYP FANS',
    },
    {
        keyword: [],
        domain: 'https://fans.jype.com/',
        name: 'JYP 공식 팬카페',
    },
    {
        keyword: ['JYP SHOP', 'JYPSHOP', 'JYP샵'],
        domain: 'https://www.thejypshop.com/',
        name: 'JYP SHOP',
    },
    {
        keyword: [],
        domain: 'https://thejypshop.com/',
        name: 'JYP샵',
    },
    {
        keyword: ['tixcraft'],
        domain: 'https://tixcraft.com',
        name: 'Tixcraft',
    },
    {
        keyword: ['artist.mnetplus.world'],
        domain: 'https://artist.mnetplus.world/',
        name: '엠넷플러스 아티스트',
    },
    {
        keyword: ['엠넷플러스', '엠플'],
        domain: 'https://www.mnetplus.world/',
        name: '엠넷플러스',
    },
    {
        keyword: ['문별', 'moonbyul', 'moonbyul.com'],
        domain: 'https://moonbyul.com/',
        name: '문별 공식 홈페이지',
    },
    {
        keyword: ['프롬스토어', '프롬 스토어', 'fromm store', 'store.frommyarti.com'],
        domain: 'https://store.frommyarti.com/',
        name: '프롬 스토어',
    },
    {
        keyword: ['프롬', 'fromm', 'frommyarti.com'],
        domain: 'https://frommyarti.com/',
        name: '프롬 fromm',
    },
    {
        keyword: ['thaiticketmajor', 'thaiticket', '태국티켓메이저', '타이티켓메이저', '태국티켓', '타이티켓'],
        domain: 'https://www.thaiticketmajor.com/',
        name: 'THAITICKETMAJOR',
    },
    {
        keyword: [],
        domain: 'https://thaiticketmajor.com/',
        name: 'THAITICKETMAJOR',
    },
    {
        keyword: ['티켓마스터', 'ticketmaster'],
        domain: 'https://www.ticketmaster.com/',
        name: '티켓마스터 Ticketmaster',
    },
    {
        keyword: ['e+', 'eplus', 'eplus.jp'],
        domain: 'https://eplus.jp/',
        name: 'e+ Japan',
    },
    {
        keyword: ['T1', '티원', '티원멤버십', '티원 멤버십'],
        domain: 'https://t1.fan/',
        name: 'T1 멤버십',
    },
    {
        keyword: ['KKTIX'],
        domain: 'https://kktix.com/',
        name: 'KKTIX',
    },
    {
        keyword: ['싸이커즈', 'xikers'],
        domain: 'https://xikers.kr/',
        name: '싸이커즈 공식 플랫폼',
    },
    {
        keyword: [],
        domain: 'https://xikers.com/',
        name: '싸이커즈',
    },
    {
        keyword: ['강다니엘', 'kangdaniel'],
        domain: 'https://kangdaniel.bstage.in/',
        name: 'KANGDANIEL 강다니엘',
    },
    {
        keyword: ['에버라인', '에버라인샵', 'everline', 'everlineshop', 'everline shop'],
        domain: 'https://www.everlineshop.com/',
        name: '에버라인',
    },
    {
        keyword: [],
        domain: 'https://everlineshop.com/',
        name: '에버라인',
    },
    {
        keyword: ['비스테이지', 'bstage', 'b.stage'],
        domain: 'https://bstage.in/',
        name: '비스테이지',
    },
    {
        keyword: ['블래스트샵', '플레이브', 'plave'],
        domain: 'https://vlastshop.com/',
        name: '블래스트샵',
    },
    {
        keyword: ['청하', 'CHUNGHA'],
        domain: 'https://chungha-official.com/',
        name: '청하 공식 웹사이트',
    },
    {
        keyword: ['ASOBI TICKET'],
        domain: 'https://asobiticket2.asobistore.jp/',
        name: 'ASOBI TICKET',
    },
    {
        keyword: ['ASOBI STORE'],
        domain: 'https://asobistore.jp/',
        name: 'ASOBI STORE',
    },
    {
        keyword: ['SMTOWN TRAVEL'],
        domain: 'https://global.smtowntravel.com/',
        name: 'SMTOWN TRAVEL',
    },
    {
        keyword: ['SMTOWN&STORE'],
        domain: 'https://smtownandstore.com/',
        name: 'SMTOWN&STORE',
    },
    {
        keyword: ['SMTOWN&STORE'],
        domain: 'https://www.smtownandstore.com/',
        name: 'SMTOWN&STORE',
    },
    {
        keyword: ['SMTOWN'],
        domain: 'https://www.smtown.com/',
        name: 'SMTOWN',
    },
    {
        keyword: ['xyz', 'xyz popup'],
        domain: 'https://www.xyzpopup.jp/',
        name: 'XYZ POPUP',
    },
    {
        keyword: ['chiikawa', 'chiikawa market'],
        domain: 'https://chiikawamarket.jp/',
        name: 'Chiikawa Market',
    },
    {
        keyword: ['kklive'],
        domain: 'https://kklivetw.kktix.cc/',
        name: 'KKLIVE Taiwan',
    },
    {
        keyword: ['에이티즈', 'ateez'],
        domain: 'https://ateez.kqent.com/',
        name: '에이티즈 공식 플랫폼',
    },
    {
        keyword: ['allticket'],
        domain: 'https://www.allticket.com/',
        name: 'All Ticket',
    },
    {
        keyword: ['konneticket'],
        domain: 'https://www.konneticket.com/',
        name: 'Konne Ticket',
    },
    {
        keyword: [],
        domain: 'https://pluschat.com/',
        name: '플러스챗',
    },
    {
        keyword: ['프렉티켓', 'PRACTICKET'],
        domain: 'https://practicket.com/',
        name: '프렉티켓',
    },
    // 서울 소재 대학교
    // {
    //     keyword: ['카이스트', 'kaist', 'kaist 서울캠퍼스'],
    //     domain: 'https://iam2.kaist.ac.kr/',
    //     name: 'KAIST 서울캠퍼스 수강신청',
    // },
    {
        keyword: ['가톨릭대학교', '가톨릭대', 'catholic university'],
        domain: 'https://uportal.catholic.ac.kr/',
        name: '가톨릭대학교 수강신청',
    },
    // {
    //     keyword: ['가톨릭대학교 성의교정', '가톨릭대 성의교정', 'catholic university 성의교정'],
    //     domain: 'https://uportal.catholic.ac.kr/',
    //     name: '가톨릭대학교 성의교정 수강신청',
    // },
    {
        keyword: ['감리교신학대학교', '감신대', 'methodist theological university'],
        domain: 'https://tis.mtu.ac.kr/',
        name: '감리교신학대학교 수강신청',
    },
    {
        keyword: ['강서대', '강서대학교', 'gangseo university'],
        domain: 'https://onestop.gangseo.ac.kr/kcu/',
        name: '강서대학교 수강신청',
    },
    {
        keyword: ['개신대학원대학교', 'kaesin graduate university'],
        domain: 'https://rts.gocampus.co.kr/stud',
        name: '개신대학원대학교 수강신청',
    },
    {
        keyword: ['건국대', '건국대학교', '건국대학교 수강신청', '건대', 'konkuk university', 'konkuk'],
        domain: 'https://sugang.konkuk.ac.kr',
        name: '건국대학교 수강신청',
    },
    // {
    //     keyword: ['경기대 서울캠퍼스', '경기대학교 서울캠퍼스', 'kyonggi university 서울캠퍼스'],
    //     domain: 'http://sugang.kyonggi.ac.kr/',
    //     name: '경기대학교 서울캠퍼스 수강신청',
    // },
    {
        keyword: ['경희대', '경희대학교', '경희대학교 수강신청', 'kyunghee university', 'kyunghee', 'khu'],
        domain: 'https://sugang.khu.ac.kr',
        name: '경희대학교 수강신청',
    },
    {
        keyword: ['경희사이버대', '경희사이버대학교', 'kyunghee cyber university'],
        domain: 'http://www.khcu.ac.kr/',
        name: '경희사이버대학교 수강신청',
    },
    {
        keyword: ['고려대', '고려대학교', '고려대학교 수강신청', '고대', 'korea university', 'korea', 'ku', '민족고대'],
        domain: 'https://sugang.korea.ac.kr/',
        name: '고려대학교 수강신청',
    },
    {
        keyword: ['고려사이버대', '고려사이버대학교', 'korea cyber university'],
        domain: 'http://www.cuk.edu/',
        name: '고려사이버대학교 수강신청',
    },
    {
        keyword: ['광운대', '광운대학교', '광운대학교 수강신청', '광대', 'kwangwoon university', 'kwangwoon', 'kw'],
        domain: 'https://klas.kw.ac.kr/',
        name: '광운대학교 수강신청',
    },
    {
        keyword: ['국민대', '국민대학교', '국민대학교 수강신청', 'kookmin university', 'kookmin'],
        domain: 'https://sugang.kookmin.ac.kr/',
        name: '국민대학교 수강신청',
    },
    {
        keyword: ['국제언어대학원대학교', 'igse', 'international graduate school of language education'],
        domain: 'https://webmail.igse.ac.kr/zmail/login_f.nvd',
        name: '국제언어대학원대학교 수강신청',
    },
    {
        keyword: ['국제예술대', '국제예술대학교', '국제예대', 'kica', 'korean international college of arts'],
        domain: 'https://www.haksa.kica.ac.kr:596/login.asp',
        name: '국제예술대학교 수강신청',
    },
    {
        keyword: ['덕성여대', '덕성여자대학교', 'duksung women’s university'],
        domain: 'https://sugang.duksung.ac.kr/sugang/lecture',
        name: '덕성여자대학교 수강신청',
    },
    {
        keyword: ['동국대', '동국대학교', '동국대학교 수강신청', '동대', 'dongguk university', 'dongguk', 'dgu'],
        domain: 'https://sugang.dongguk.ac.kr/',
        name: '동국대학교 수강신청',
    },
    {
        keyword: ['동덕여대', '동덕여자대학교', 'dongduk women’s university'],
        domain: 'http://tis.dongduk.ac.kr:8088/index_sugang.html',
        name: '동덕여자대학교 수강신청',
    },
    {
        keyword: ['동방문화대학원대', '동방문화대학원대학교', 'dongbang graduate university of culture'],
        domain: 'http://stu.dongbang.ac.kr/',
        name: '동방문화대학원대학교 수강신청',
    },
    {
        keyword: ['동양미래대', '동양미래대학교', 'dongyang', 'dongyang future college'],
        domain: 'https://portal.dongyang.ac.kr/',
        name: '동양미래대학교 수강신청',
    },
    {
        keyword: ['디지털서울문화예술대', '디지털서울문화예술대학교', 'scau'],
        domain: 'http://www.scau.ac.kr/',
        name: '디지털서울문화예술대학교 수강신청',
    },
    {
        keyword: ['명지대', '명지대학교', '명지대학교 수강신청', '명대', 'myongji university', 'myongji', 'mju'],
        domain: 'http://class.mju.ac.kr',
        name: '명지대학교 수강신청',
    },
    {
        keyword: ['명지전문대', '명지전문대학', '명전', 'myongji college'],
        domain: 'http://sugang.mjc.ac.kr',
        name: '명지전문대학 수강신청',
    },
    {
        keyword: ['배화여대', '배화여자대학교', 'baewha women’s university'],
        domain: 'https://sso.baewha.ac.kr/',
        name: '배화여자대학교 수강신청',
    },
    {
        keyword: ['백석예술대', '백석예술대학교', '백석예대', 'bau', 'baekseok arts university'],
        domain: 'https://sg.bau.ac.kr/bauv/',
        name: '백석예술대학교 수강신청',
    },
    {
        keyword: [
            '베뢰아국제대학원대',
            '베뢰아국제대학원대학교',
            'beroea international theological graduate university',
        ],
        domain: 'http://220.66.7.150:8080/BitsWeb/uat/uia/egovLoginUsr.do',
        name: '베뢰아국제대학원대학교 수강신청',
    },
    {
        keyword: ['북한대학원대', '북한대학원대학교', 'north korean graduate school'],
        domain: 'https://sugang.kyungnam.ac.kr/',
        name: '북한대학원대학교 수강신청',
    },
    {
        keyword: ['사이버한국외대', '사이버한국외국어대학교', 'cufs', 'cyber hankuk university of foreign studies'],
        domain: 'https://www.cufs.ac.kr/',
        name: '사이버한국외국어대학교 수강신청',
    },
    {
        keyword: ['삼육대', '삼육대학교', 'sahmyook university'],
        domain: 'http://sugang.suwings.syu.ac.kr/',
        name: '삼육대학교 수강신청',
    },
    {
        keyword: ['삼육보건대', '삼육보건대학교', 'sahmyook health university'],
        domain: 'https://portal.shu.ac.kr/',
        name: '삼육보건대학교 수강신청',
    },
    {
        keyword: ['상명대', '상명대학교', '상명대학교 수강신청', 'sangmyung university', 'sangmyung', 'smu'],
        domain: 'https://smsso.smu.ac.kr/',
        name: '상명대학교 수강신청',
    },
    {
        keyword: ['서강대', '서강대학교', '서강대학교 수강신청', '소강대', 'sogang university', 'sogang', 'sgu'],
        domain: 'https://sis109.sogang.ac.kr/sap/bc/bsp/sap/zcm001/',
        name: '서강대학교 수강신청',
    },
    {
        keyword: ['서경대', '서경대학교', 'seokyeong university'],
        domain: 'https://s.skuniv.ac.kr/course',
        name: '서경대학교 수강신청',
    },
    {
        keyword: ['서울과기대', '서울과학기술대학교', '과기대', 'seoultech'],
        domain: 'https://for-s.seoultech.ac.kr/',
        name: '서울과학기술대학교 수강신청',
    },
    {
        keyword: ['서울과학종합대학원대', '서울과학종합대학원대학교', 'assist'],
        domain: 'https://www.assist.ac.kr',
        name: '서울과학종합대학원대학교 수강신청',
    },
    {
        keyword: ['서울교대', '서울교육대학교', '교대', 'snue', 'seoul national university of education'],
        domain: 'https://snue.koedu.ac.kr/coueLogin',
        name: '서울교육대학교 수강신청',
    },
    {
        keyword: ['서울기독대', '서울기독대학교', '기독대', 'seoul christian university'],
        domain: 'http://haksa.scu.ac.kr/',
        name: '서울기독대학교 수강신청',
    },
    {
        keyword: ['서울대', '서울대학교', '서울대학교 수강신청', '설대', '샤대', 'seoul national university', 'snu'],
        domain: 'https://sugang.snu.ac.kr/',
        name: '서울대학교 수강신청',
    },
    {
        keyword: ['서울디지털대', '서울디지털대학교', '서디대', 'sdu', 'seoul digital university'],
        domain: 'http://www.sdu.ac.kr/',
        name: '서울디지털대학교 수강신청',
    },
    {
        keyword: ['서울미디어대학원대', '서울미디어대학원대학교', 'smit'],
        domain: 'https://portal.smit.ac.kr/',
        name: '서울미디어대학원대학교 수강신청',
    },
    {
        keyword: ['서울벤처대학원대', '서울벤처대학원대학교', 'seoul venture graduate university'],
        domain: 'http://inet.svu.ac.kr/',
        name: '서울벤처대학원대학교 수강신청',
    },
    {
        keyword: ['서울불교대학원대', '서울불교대학원대학교', 'seoul buddhist graduate university'],
        domain: 'https://sub.ac.kr/smartmode/',
        name: '서울불교대학원대학교 수강신청',
    },
    {
        keyword: ['서울사이버대', '서울사이버대학교', 'iscu', 'seoul cyber university'],
        domain: 'https://sso.iscu.ac.kr/ptl',
        name: '서울사이버대학교 수강신청',
    },
    {
        keyword: ['서울사회복지대학원대', '서울사회복지대학원대학교', 'seoul graduate school of social welfare'],
        domain: 'https://ssgu.gocampus.co.kr/stud/',
        name: '서울사회복지대학원대학교 수강신청',
    },
    {
        keyword: ['서울상담심리대학원대', '서울상담심리대학원대학교', 'seoul graduate school of counseling psychology'],
        domain: 'https://ems.sgcp.ac.kr/',
        name: '서울상담심리대학원대학교 수강신청',
    },
    {
        keyword: ['서울성경신학대학원대', '서울성경신학대학원대학교', 'seoul bible graduate school of theology'],
        domain: 'https://sb.gocampus.co.kr/stud',
        name: '서울성경신학대학원대학교 수강신청',
    },
    {
        keyword: [
            '서울시립대',
            '서울시립대학교',
            '서울시립대학교 수강신청',
            '시립대',
            '서시대',
            'university of seoul',
            'uos',
        ],
        domain: 'https://wise.uos.ac.kr/',
        name: '서울시립대학교 수강신청',
    },
    {
        keyword: ['서울여자간호대', '서울여자간호대학교', 'seoul women’s college of nursing'],
        domain: 'https://portal.snjc.ac.kr/',
        name: '서울여자간호대학교 수강신청',
    },
    {
        keyword: ['서울여대', '서울여자대학교', '설여대', 'swu', 'seoul women’s university'],
        domain: 'https://swis.swu.ac.kr/',
        name: '서울여자대학교 수강신청',
    },
    {
        keyword: ['서울외국어대학원대', '서울외국어대학원대학교', 'seoul foreign language graduate university'],
        domain: 'http://sufs.ac.kr/',
        name: '서울외국어대학원대학교 수강신청',
    },
    {
        keyword: ['서울한영대', '서울한영대학교', '한영대', 'shyu', 'seoul hanyoung university'],
        domain: 'http://person.shyu.ac.kr/',
        name: '서울한영대학교 수강신청',
    },
    {
        keyword: ['서일대', '서일대학교', 'seoil university'],
        domain: 'https://sugang.seoil.ac.kr/',
        name: '서일대학교 수강신청',
    },
    {
        keyword: ['성공회대', '성공회대학교', 'skhu', 'sungkonghoe university'],
        domain: 'https://sugang.skhu.ac.kr/',
        name: '성공회대학교 수강신청',
    },
    {
        keyword: [
            '성균관대',
            '성균관대학교',
            '성균관대학교 수강신청',
            '성대',
            'sungkyunkwan university',
            'sungkyunkwan',
            'skku',
            'skk',
        ],
        domain: 'https://sugang.skku.edu/',
        name: '성균관대학교 수강신청',
    },
    {
        keyword: ['성신여대', '성신여자대학교', 'sungshin women’s university'],
        domain: 'https://sugang.sungshin.ac.kr/',
        name: '성신여자대학교 수강신청',
    },
    {
        keyword: ['세종대', '세종대학교', '세종대학교 수강신청', '세대', 'sejong university', 'sejong', 'sju'],
        domain: 'https://portal.sejong.ac.kr/',
        name: '세종대학교 수강신청',
    },
    {
        keyword: ['세종사이버대', '세종사이버대학교', 'sjcu', 'sejong cyber university'],
        domain: 'http://home.sjcu.ac.kr/',
        name: '세종사이버대학교 수강신청',
    },
    {
        keyword: ['수도국제대학원대', '수도국제대학원대학교', 'capital international graduate university'],
        domain: 'https://ktu.gocampus.co.kr/stud',
        name: '수도국제대학원대학교 수강신청',
    },
    {
        keyword: ['숙명여대', '숙명여자대학교', '숙대', 'sookmyung women’s university'],
        domain: 'https://smap.sookmyung.ac.kr:8443/sap/bc/webdynpro/sap/zcmw2403',
        name: '숙명여자대학교 수강신청',
    },
    {
        keyword: ['순복음대학원대', '순복음대학원대학교', 'sunbokeum graduate university'],
        domain: 'http://www.sunbokeum.ac.kr/',
        name: '순복음대학원대학교 수강신청',
    },
    {
        keyword: ['숭실대', '숭실대학교', '숭실대학교 수강신청', '숭대', 'soongsil university', 'soongsil', 'ssu'],
        domain: 'https://sugang.ssu.ac.kr',
        name: '숭실대학교 수강신청',
    },
    {
        keyword: ['숭실사이버대', '숭실사이버대학교', 'soongsil cyber university'],
        domain: 'http://www.kcu.ac/',
        name: '숭실사이버대학교 수강신청',
    },
    {
        keyword: ['숭의여대', '숭의여자대학교', 'sewc', 'sungui women’s college'],
        domain: 'https://portal.sewc.ac.kr/',
        name: '숭의여자대학교 수강신청',
    },
    {
        keyword: ['연세대', '연세대학교', '연세대학교 수강신청', '연대', 'yonsei university', 'yonsei'],
        domain: 'https://ysweb.yonsei.ac.kr/',
        name: '연세대학교 수강신청',
    },
    {
        keyword: ['예명대학원대', '예명대학원대학교', 'yeomyung graduate university'],
        domain: 'http://www.ygu.ac.kr/',
        name: '예명대학원대학교 수강신청',
    },
    {
        keyword: ['육군사관학교', '육사', 'korea military academy', 'kma'],
        domain: 'http://www.kma.ac.kr/',
        name: '육군사관학교 수강신청',
    },
    {
        keyword: ['이화여대', '이화여자대학교', '이대', 'ewha womans university'],
        domain: 'https://sugang.ewha.ac.kr/',
        name: '이화여자대학교 수강신청',
    },
    {
        keyword: ['인덕대', '인덕대학교', 'induk university'],
        domain: 'http://sugang.induk.ac.kr/',
        name: '인덕대학교 수강신청',
    },
    {
        keyword: ['장로회신학대', '장로회신학대학교', 'puts', 'presbyterian university and theological seminary'],
        domain: 'https://www.puts.ac.kr/js_sis/',
        name: '장로회신학대학교 수강신청',
    },
    {
        keyword: ['정화예술대', '정화예대', '정화예술대학교'],
        domain: 'https://sso.jb.ac.kr/',
        name: '정화예술대학교 수강신청', //대학로캠퍼스
    },
    // {
    //     keyword: ['정화예술대 명동캠퍼스', '정화예술대학교 명동캠퍼스', 'jh arts college myeong-dong campus'],
    //     domain: 'https://sso.jb.ac.kr/',
    //     name: '정화예술대학교 명동캠퍼스 수강신청',
    // },
    {
        keyword: [
            '중앙대',
            '중앙대학교',
            '중앙대학교 수강신청',
            '중대',
            '앙대',
            'chung-ang university',
            'chung-ang',
            'cau',
        ],
        domain: 'https://sugang.cau.ac.kr',
        name: '중앙대학교 수강신청',
    },
    {
        keyword: ['총신대', '총신대학교', 'chongshin university'],
        domain: 'http://sugang.chongshin.ac.kr:8080',
        name: '총신대학교 수강신청',
    },
    {
        keyword: ['추계예술대', '추계예술대학교', '추계예대', 'chugye university for the arts'],
        domain: 'https://cis.chugye.ac.kr/',
        name: '추계예술대학교 수강신청',
    },
    {
        keyword: ['치유상담대학원대', '치유상담대학원대학교', 'hcg', 'healing counseling graduate university'],
        domain: 'http://haksa.hcg.ac.kr/hs/login.php/',
        name: '치유상담대학원대학교 수강신청',
    },
    {
        keyword: ['태재대', '태재대학교', 'taejae university'],
        domain: 'https://www.taejae.ac.kr/',
        name: '태재대학교 수강신청',
    },
    {
        keyword: ['한국방송통신대', '한국방송통신대학교', 'knou', '방통대', 'korea national open university'],
        domain: 'https://ep.knou.ac.kr/',
        name: '한국방송통신대학교 수강신청',
    },
    {
        keyword: ['한국상담대학원대', '한국상담대학원대학교', 'korea counseling graduate university'],
        domain: 'https://haksa.kcgu.ac.kr/smartmode/',
        name: '한국상담대학원대학교 수강신청',
    },
    {
        keyword: ['한국성서대', '한국성서대학교', 'bible university'],
        domain: 'https://kbuis.bible.ac.kr/',
        name: '한국성서대학교 수강신청',
    },
    {
        keyword: ['한국열린사이버대', '한국열린사이버대학교', 'open cyber university of korea'],
        domain: 'http://www.ocu.ac.kr',
        name: '한국열린사이버대학교 수강신청',
    },
    {
        keyword: ['한예종', '한국예술종합학교', 'korea national university of arts', 'karts'],
        domain: 'https://nuri.karts.ac.kr/nuri_course/jsp/login/login.jsp',
        name: '한국예술종합학교 수강신청',
    },
    {
        keyword: [
            '한국외대',
            '한국외국어대학교',
            '한국외국어대학교 수강신청',
            '외대',
            'hankuk university of foreign studies',
            'hankuk university',
            'hufs',
        ],
        domain: 'http://vsugang3.hufs.ac.kr:8080/sugang/jsp/basket/s_login_go.jsp',
        name: '한국외국어대학교 수강신청',
    },
    {
        keyword: ['한국체육대', '한국체육대학교', '한체대', 'knsu', 'korea national sport university'],
        domain: 'https://sugang.knsu.ac.kr/',
        name: '한국체육대학교 수강신청',
    },
    {
        keyword: ['한국폴리텍대학', '폴리텍', 'korea polytechnics'],
        domain: 'https://p.kopo.ac.kr/login.jsp',
        name: '한국폴리텍대학 수강신청', //서울강서캠퍼스
    },
    // {
    //     keyword: ['한국폴리텍대학 서울정수캠퍼스', 'korea polytechnic seoul jeong-su campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 서울정수캠퍼스 수강신청',
    // },
    {
        keyword: ['한림국제대학원대', '한림국제대학원대학교', 'hallym university of graduate studies'],
        domain: 'https://haksa.hugs.ac.kr/',
        name: '한림국제대학원대학교 수강신청',
    },
    {
        keyword: ['한반도국제대학원대', '한반도국제대학원대학교', 'korean peninsula international graduate university'],
        domain: 'http://www.kuis.ac.kr/',
        name: '한반도국제대학원대학교 수강신청',
    },
    {
        keyword: ['한성대', '한성대학교', 'hansung university'],
        domain: 'https://info.hansung.ac.kr/',
        name: '한성대학교 수강신청',
    },
    {
        keyword: ['한양대', '한양대학교', '한양대학교 수강신청', '냥대', 'hanyang university', 'hanyang', 'hyu'],
        domain: 'https://portal.hanyang.ac.kr/sugang/',
        name: '한양대학교 수강신청',
    },
    {
        keyword: [],
        domain: 'https://sugang.hanyang.ac.kr',
        name: '한양대 수강신청',
    },
    {
        keyword: ['한양사이버대', '한양사이버대학교', 'hanyang cyber university'],
        domain: 'http://www.hycu.ac.kr/',
        name: '한양사이버대학교 수강신청',
    },
    {
        keyword: ['한양여대', '한양여자대학교', 'hanyang women’s college'],
        domain: 'https://sugang.hywoman.ac.kr/',
        name: '한양여자대학교 수강신청',
    },
    {
        keyword: ['홍익대', '홍익대학교', '홍익대학교 수강신청', '홍대', 'hongik university', 'hongik'],
        domain: 'https://sugang.hongik.ac.kr/',
        name: '홍익대학교 수강신청',
    },
    {
        keyword: ['횃불트리니티신학대학원대', '횃불트리니티신학대학원대학교', 'torch trinity graduate university'],
        domain: 'https://ams.ttgu.ac.kr/',
        name: '횃불트리니티신학대학원대학교 수강신청',
    },
    // 세종 소재 대학교 수강신청
    {
        keyword: ['대전가톨릭대', '대전가톨릭대학교', 'daejeon catholic university'],
        domain: 'http://www.dcatholic.ac.kr/',
        name: '대전가톨릭대학교 수강신청',
    },
    {
        keyword: [
            'KDI국제정책대',
            'KDI국제정책대학원',
            'KDIS',
            'KDI',
            '한국개발연구원 국제정책대학원대',
            '한국개발연구원 국제정책대학원대학교',
            'kdi school of public policy and management',
            'kdis',
        ],
        domain: 'https://register.kdischool.ac.kr/',
        name: '한국개발연구원국제정책대학원대학교 수강신청',
    },
    {
        keyword: ['한국영상대', '한국영상대학교', 'korea video university'],
        domain: 'https://sso1.pro.ac.kr/',
        name: '한국영상대학교 수강신청',
    },
    // 광주 소재 대학교 수강신청
    {
        keyword: ['gist', '광주과학기술원', 'gwangju institute of science and technology'],
        domain: 'https://zeus.gist.ac.kr/sys/lecture/lecture_main.do#',
        name: 'GIST 수강신청',
    },
    {
        keyword: ['광신대', '광신대학교', 'kwangshin university'],
        domain: 'https://www.kwangshin.ac.kr/home/index.do#',
        name: '광신대학교 수강신청',
    },
    {
        keyword: ['광주교대', '광주교육대학교', 'gwangju national university of education', 'gnue'],
        domain: 'https://portal.gnue.ac.kr/',
        name: '광주교육대학교 수강신청',
    },
    {
        keyword: ['광주대', '광주대학교', 'gwangju university'],
        domain: 'http://sugang.gwangju.ac.kr/sugang',
        name: '광주대학교 수강신청',
    },
    {
        keyword: ['광주보건대', '광주보건대학교', 'gwangju health university'],
        domain: 'https://tis.ghu.ac.kr/',
        name: '광주보건대학교 수강신청',
    },
    {
        keyword: ['광주여대', '광주여자대학교', 'kwu', 'kwangju women’s university'],
        domain: 'https://sugang.kwu.ac.kr/',
        name: '광주여자대학교 수강신청',
    },
    {
        keyword: ['기독간호대', '기독간호대학교', 'christian nursing university'],
        domain: 'http://hs.ccn.ac.kr/',
        name: '기독간호대학교 수강신청',
    },
    {
        keyword: ['남부대', '남부대학교', 'nambu university'],
        domain: 'http://haksaweb.nambu.ac.kr/haksaweb/multi_browser_index.htm',
        name: '남부대학교 수강신청',
    },
    {
        keyword: ['동강대', '동강대학교', 'dongkang university'],
        domain: 'https://intra.dkc.ac.kr/',
        name: '동강대학교 수강신청',
    },
    {
        keyword: ['서영대', '서영대학교', 'seoyeong university'],
        domain: 'https://eiss.seoyeong.ac.kr/',
        name: '서영대학교 수강신청',
    },
    {
        keyword: ['송원대', '송원대학교', 'songwon university'],
        domain: 'https://sugang.songwon.ac.kr/',
        name: '송원대학교 수강신청',
    },
    {
        keyword: ['전남대', '전남대학교', 'chonnam national university', 'jnu'],
        domain: 'https://sugang.jnu.ac.kr/',
        name: '전남대학교 수강신청',
    },
    {
        keyword: ['조선간호대', '조선간호대학교', 'chosun nursing university'],
        domain: 'https://portal.cnc.ac.kr/',
        name: '조선간호대학교 수강신청',
    },
    {
        keyword: ['조선대', '조선대학교', '조대', 'chosun university'],
        domain: 'http://wing.chosun.ac.kr/',
        name: '조선대학교 수강신청',
    },
    {
        keyword: ['조선이공대', '조선이공대학교', 'chosun college of science and technology'],
        domain: 'https://ihaksa.cst.ac.kr/chosun2',
        name: '조선이공대학교 수강신청',
    },
    // {
    //     keyword: ['한국방송통신대 광주전남지역대학', 'knou 광주전남', 'korea national open university 광주전남'],
    //     domain: 'https://ep.knou.ac.kr/',
    //     name: '한국방송통신대학교 광주전남지역대학 수강신청',
    // },
    // {
    //     keyword: ['한국폴리텍대학 광주2캠퍼스', 'korea polytechnic 광주2캠퍼스'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 광주2캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['한국폴리텍대학 광주캠퍼스', 'korea polytechnic 광주캠퍼스'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 광주캠퍼스 수강신청',
    // },
    {
        keyword: ['호남대', '호남대학교', 'honam university'],
        domain: 'http://sugang.honam.ac.kr/',
        name: '호남대학교 수강신청',
    },
    {
        keyword: ['호남신학대', '호남신학대학교', 'honam theological university and seminary'],
        domain: 'http://www2.htus.ac.kr/',
        name: '호남신학대학교 수강신청',
    },
    // 대구 소재 대학교 수강신청
    {
        keyword: ['경북대', '경북대학교', 'knu', 'kyungpook national university'],
        domain: 'https://sugang.knu.ac.kr/',
        name: '경북대학교 수강신청',
    },
    {
        keyword: ['계명대', '계명대학교', 'kmcu', '계대', 'keimyung university'],
        domain: 'https://sugang.kmu.ac.kr/',
        name: '계명대학교 수강신청',
    },
    // {
    //     keyword: ['계명대 대명캠퍼스', '계명대학교 대명캠퍼스', 'kmcu daemyung campus'],
    //     domain: 'https://sugang.kmu.ac.kr/',
    //     name: '계명대학교 대명캠퍼스 수강신청',
    // },
    {
        keyword: ['계명문화대', '계명문화대학교', 'kmcu cultural university'],
        domain: 'https://sso.kmcu.ac.kr/kmcusso/iweb/login_form',
        name: '계명문화대학교 수강신청',
    },
    {
        keyword: ['대구가톨릭대', '대구가톨릭대학교', '대가대'],
        domain: 'http://sugang.cu.ac.kr/sugang/',
        name: '대구가톨릭대학교 수강신청', //루가캠퍼스
    },
    // {
    //     keyword: ['대구가톨릭대 유스티노캠퍼스', '대구가톨릭대학교 유스티노캠퍼스', 'cu justino campus'],
    //     domain: 'http://sugang.cu.ac.kr/sugang/',
    //     name: '대구가톨릭대학교 유스티노캠퍼스 수강신청',
    // },
    {
        keyword: [
            '대구경북과기원',
            '대구경북과학기술원',
            'dgist',
            'daegu gyeongbuk institute of science and technology',
        ],
        domain: 'https://sugang.dgist.ac.kr/',
        name: '대구경북과학기술원 수강신청',
    },
    {
        keyword: ['대구공업대', '대구공업대학교', '대구공대', 'ttc', 'daegu technical college'],
        domain: 'https://www.ttc.ac.kr',
        name: '대구공업대학교 수강신청',
    },
    {
        keyword: ['대구과학대', '대구과학대학교', '대과대', 'tsu', 'daegu science university'],
        domain: 'https://st.tsu.ac.kr/',
        name: '대구과학대학교 수강신청',
    },
    {
        keyword: ['대구교대', '대구교육대학교', 'dnue', 'daegu national university of education'],
        domain: 'https://dnue.koedu.ac.kr/coueLoginSSO?SSOTOKEN=',
        name: '대구교육대학교 수강신청',
    },
    // {
    //     keyword: ['대구대 대명동캠퍼스', '대구대학교 대명동캠퍼스', 'daegu university daemyung campus'],
    //     domain: 'http://203.244.128.145/index_sugang.html',
    //     name: '대구대학교 대명동캠퍼스 수강신청',
    // },
    {
        keyword: ['대구보건대', '대구보건대학교', 'dhc', 'daegu health college'],
        domain: 'https://dsso.dhc.ac.kr/portal/ssoLogin.jsp',
        name: '대구보건대학교 수강신청',
    },
    // {
    //     keyword: ['대구한의대 수성캠퍼스', '대구한의대학교 수성캠퍼스', 'dhu suseong campus'],
    //     domain: 'http://sugang.dhu.ac.kr/sugang',
    //     name: '대구한의대학교 수성캠퍼스 수강신청',
    // },
    {
        keyword: ['수성대', '수성대학교', 'sc', 'suseong college'],
        domain: 'https://sso.sc.ac.kr/',
        name: '수성대학교 수강신청',
    },
    {
        keyword: [],
        domain: 'https://portal.yu.ac.kr/',
        name: '영남대학교 포털',
    },
    {
        keyword: ['영남대 의학전문대학원', '영남대학교 의학전문대학원', 'yumc', 'yu medical school'],
        domain: 'http://yumc.yu.ac.kr/',
        name: '영남대학교 의학전문대학원 수강신청',
    },
    {
        keyword: ['영남이공대', '영남이공대학교', 'ync', 'yeungnam college of science and technology'],
        domain: 'https://yportal.ync.ac.kr/',
        name: '영남이공대학교 수강신청',
    },
    {
        keyword: ['영진사이버대', '영진사이버대학교', 'ycc', 'youngjin cyber college'],
        domain: 'http://www.ycc.ac.kr/',
        name: '영진사이버대학교 수강신청',
    },
    {
        keyword: ['영진전문대', '영진전문대학교', '영전', 'yjp', 'youngjin junior college'],
        domain: 'https://www.yjp.ac.kr/portal/main/index.jsp',
        name: '영진전문대학교 수강신청',
    },
    {
        keyword: ['한국방송통신대 대구경북지역대학', 'knou 대구경북', 'korea national open university 대구경북'],
        domain: 'https://ep.knou.ac.kr/',
        name: '한국방송통신대학교 대구경북지역대학 수강신청',
    },
    // {
    //     keyword: ['한국폴리텍대 대구캠퍼스', '한국폴리텍대학 대구캠퍼스', 'korea polytechnic daegu campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 대구캠퍼스 수강신청',
    // },
    // {
    //     keyword: [
    //         '한국폴리텍대 영남융합기술캠퍼스',
    //         '한국폴리텍대학 영남융합기술캠퍼스',
    //         'korea polytechnic yeongnam convergence technology campus',
    //     ],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 영남융합기술캠퍼스 수강신청',
    // },
    // 대전 소재 대학교 수강신청
    {
        keyword: ['카이스트', 'kaist', 'korea advanced institute of science and technology'],
        domain: 'https://iam2.kaist.ac.kr/',
        name: 'KAIST 수강신청',
    },
    // {
    //     keyword: ['카이스트 문지캠퍼스', 'kaist 문지캠퍼스', 'kaist munji campus'],
    //     domain: 'https://iam2.kaist.ac.kr/',
    //     name: 'KAIST 문지캠퍼스 수강신청',
    // },
    {
        keyword: ['건신대학원대', '건신대학원대학교', 'alu', 'all nations university'],
        domain: 'https://haksa.alu.ac.kr:446/',
        name: '건신대학원대학교 수강신청',
    },
    {
        keyword: ['건양대 대전메디컬캠퍼스', '건양대학교 대전메디컬캠퍼스', 'kyu medical campus'],
        domain: 'https://sugang.kyu.ac.kr/',
        name: '건양대학교 대전메디컬캠퍼스 수강신청',
    },
    {
        keyword: ['건양사이버대', '건양사이버대학교', 'kycu', 'kyungyang cyber university'],
        domain: 'http://www.kycu.ac.kr/',
        name: '건양사이버대학교 수강신청',
    },
    {
        keyword: ['ust', '과학기술연합대학원대', '과학기술연합대학원대학교', 'university of science and technology'],
        domain: 'https://edu.ust.ac.kr/',
        name: '과학기술연합대학원대학교 수강신청',
    },
    {
        keyword: ['국군간호사관학교', 'kafna', 'korean armed forces nursing academy'],
        domain: 'http://www.kafna.ac.kr/',
        name: '국군간호사관학교 수강신청',
    },
    {
        keyword: ['한밭대', '국립한밭대학교', 'hanbat university'],
        domain: 'https://sugang.hanbat.ac.kr/',
        name: '국립한밭대학교 수강신청',
    },
    {
        keyword: ['대덕대', '대덕대학교', 'daeduk college'],
        domain: 'https://ssoservice.ddu.ac.kr/webcrea/View/SSO/sso.jsp?v=8377',
        name: '대덕대학교 수강신청',
    },
    {
        keyword: ['대전과기대', '대전과학기술대학교', 'dst', 'daejeon science and technology university'],
        domain: 'https://portal.dst.ac.kr/',
        name: '대전과학기술대학교 수강신청',
    },
    {
        keyword: ['대전대', '대전대학교', 'dju', 'daejeon university'],
        domain: 'http://sugang.dju.ac.kr/common/login.do',
        name: '대전대학교 수강신청',
    },
    {
        keyword: ['대전보건대', '대전보건대학교', 'hit', 'daejeon health university'],
        domain: 'https://nsugang.hit.ac.kr/',
        name: '대전보건대학교 수강신청',
    },
    {
        keyword: ['대전신학대', '대전신학대학교', 'daejeon theological university'],
        domain: 'http://www.daejeon.ac.kr/',
        name: '대전신학대학교 수강신청',
    },
    {
        keyword: ['목원대', '목원대학교', '목원대학교 수강신청', 'mokwon university'],
        domain: 'http://s.mokwon.ac.kr/',
        name: '목원대학교 수강신청',
    },
    {
        keyword: ['배재대', '배재대학교', 'pcu', 'paichai university'],
        domain: 'https://tis.pcu.ac.kr/',
        name: '배재대학교 수강신청',
    },
    {
        keyword: ['우송대', '우송대학교', 'wsu', 'woosong university'],
        domain: 'https://info.wsu.ac.kr/',
        name: '우송대학교 수강신청',
    },
    {
        keyword: ['우송정보대', '우송정보대학', 'woosong college of information'],
        domain: 'https://wsinfo.wsi.ac.kr/',
        name: '우송정보대학 수강신청',
    },
    {
        keyword: ['을지대', '을지대학교', 'eulji university'],
        domain: 'http://sg.eulji.ac.kr/ejuv/',
        name: '을지대학교 수강신청',
    },
    {
        keyword: ['충남대', '충남대학교', 'cnu', 'chungnam national university'],
        domain: 'https://sugang.cnu.ac.kr/',
        name: '충남대학교 수강신청',
    },
    // {
    //     keyword: ['충남대 보운캠퍼스', '충남대학교 보운캠퍼스', 'cnu bonwoo campus'],
    //     domain: 'http://www.cnu.ac.kr/',
    //     name: '충남대학교 보운캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['한국방송통신대 대전충남지역대학', 'knou 대전충남', 'korea national open university 대전충남'],
    //     domain: 'https://ep.knou.ac.kr/',
    //     name: '한국방송통신대학교 대전충남지역대학 수강신청',
    // },
    {
        keyword: ['한국침례신학대', '한국침례신학대학교', 'kbtus', 'korea baptist theological university and seminary'],
        domain: 'https://sukang.kbtus.ac.kr/',
        name: '한국침례신학대학교 수강신청',
    },
    // {
    //     keyword: ['한국폴리텍대 대전캠퍼스', '한국폴리텍대학 대전캠퍼스', 'korea polytechnic daejeon campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 대전캠퍼스 수강신청',
    // },
    {
        keyword: ['한남대', '한남대학교', 'hannam university'],
        domain: 'http://aa.hannam.ac.kr',
        name: '한남대학교 수강신청',
    },
    // {
    //     keyword: ['한밭대 대덕산학융합캠퍼스', '한밭대학교 대덕산학융합캠퍼스', 'hanbat university daedeok campus'],
    //     domain: 'https://sugang.hanbat.ac.kr/sugang/sugang/doLogin.do',
    //     name: '한밭대학교 대덕산학융합캠퍼스 수강신청',
    // },
    // 부산 소재 대학교 수강신청
    {
        keyword: ['경남정보대', '경남정보대학교', 'kit', 'kyungnam college of information'],
        domain: 'https://k-smart.kit.ac.kr/',
        name: '경남정보대학교 수강신청',
    },
    {
        keyword: ['경성대', '경성대학교', 'ksu', 'kyungsung university'],
        domain: 'http://sugang.ks.ac.kr/',
        name: '경성대학교 수강신청',
    },
    {
        keyword: ['고신대', '고신대학교', 'kosin university'],
        domain: 'https://ssg.kosin.ac.kr/',
        name: '고신대학교 수강신청',
    },
    // {
    //     keyword: ['고신대 송도캠퍼스', '고신대학교 송도캠퍼스', 'kosin university songdo campus'],
    //     domain: 'https://ssg.kosin.ac.kr/',
    //     name: '고신대학교 송도캠퍼스 수강신청',
    // },
    {
        keyword: ['부경대', '국립부경대학교', 'pknu', 'pukyong national university'],
        domain: 'https://sugang.pknu.ac.kr/',
        name: '국립부경대학교 수강신청',
    },
    // {
    //     keyword: ['부경대 용당캠퍼스', '국립부경대학교 용당캠퍼스', 'pknu yongdang campus'],
    //     domain: 'https://sugang.pknu.ac.kr/',
    //     name: '국립부경대학교 용당캠퍼스 수강신청',
    // },
    {
        keyword: ['해양대', '국립한국해양대학교', 'kmou', 'korea maritime and ocean university'],
        domain: 'https://sugang.kmou.ac.kr/',
        name: '국립한국해양대학교 수강신청',
    },
    {
        keyword: ['대동대', '대동대학교', 'daedong university'],
        domain: 'https://ap.daedong.ac.kr/loginNormal.do',
        name: '대동대학교 수강신청',
    },
    {
        keyword: ['동명대', '동명대학교', 'tu', 'tongmyong university'],
        domain: 'https://portal.tu.ac.kr/',
        name: '동명대학교 수강신청',
    },
    {
        keyword: ['동서대', '동서대학교', 'dongseo university'],
        domain: 'http://sugang.dongseo.ac.kr',
        name: '동서대학교 수강신청',
    },
    {
        keyword: ['동아대', '동아대학교', 'donga university'],
        domain: 'https://sugang.donga.ac.kr/',
        name: '동아대학교 수강신청',
    },
    // {
    //     keyword: ['동아대 구덕캠퍼스', '동아대학교 구덕캠퍼스', 'donga university guduk campus'],
    //     domain: 'https://sugang.donga.ac.kr/Login.aspx?ReturnUrl=%2f',
    //     name: '동아대학교 구덕캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['동아대 부민캠퍼스', '동아대학교 부민캠퍼스', 'donga university bumin campus'],
    //     domain: 'https://sugang.donga.ac.kr/Login.aspx?ReturnUrl=%2f',
    //     name: '동아대학교 부민캠퍼스 수강신청',
    // },
    {
        keyword: ['동의과학대', '동의과학대학교', 'dit', 'dong eui institute of technology'],
        domain: 'https://std.dit.ac.kr/stud/',
        name: '동의과학대학교 수강신청',
    },
    {
        keyword: ['동의대', '동의대학교', 'deu', 'dong eui university'],
        domain: 'http://sugang.deu.ac.kr:8080/',
        name: '동의대학교 수강신청',
    },
    // {
    //     keyword: ['동의대 양정캠퍼스', '동의대학교 양정캠퍼스', 'deu yangjung campus'],
    //     domain: 'http://sugang.deu.ac.kr:8080/DEUSugang_Login.aspx',
    //     name: '동의대학교 양정캠퍼스 수강신청',
    // },
    {
        keyword: ['부산가톨릭대', '부산가톨릭대학교', '부가대', 'cup', 'catholic university of pusan'],
        domain: 'https://portal.cup.ac.kr/',
        name: '부산가톨릭대학교 수강신청',
    },
    // {
    //     keyword: ['부산가톨릭대 메리놀교정', '부산가톨릭대학교 메리놀교정', 'cup maryknoll campus'],
    //     domain: 'https://st.cup.ac.kr/',
    //     name: '부산가톨릭대학교 메리놀교정 수강신청',
    // },
    // {
    //     keyword: ['부산가톨릭대 신학교정', '부산가톨릭대학교 신학교정', 'cup theological campus'],
    //     domain: 'https://st.cup.ac.kr/',
    //     name: '부산가톨릭대학교 신학교정 수강신청',
    // },
    {
        keyword: ['부산경상대', '부산경상대학교', 'bsks', 'busan kyungsang college'],
        domain: 'https://ais.bsks.ac.kr/',
        name: '부산경상대학교 수강신청',
    },
    {
        keyword: ['부산과기대', '부산과학기술대학교', 'bist', 'busan institute of science and technology'],
        domain: 'http://bisthome.bist.ac.kr/pro/sukang/',
        name: '부산과학기술대학교 수강신청',
    },
    {
        keyword: ['부산교대', '부산교육대학교', 'bnue', 'busan national university of education'],
        domain: 'http://www.bnue.ac.kr/',
        name: '부산교육대학교 수강신청',
    },
    {
        keyword: ['부산대', '부산대학교', 'pusan national university', 'pnu'],
        domain: 'https://sugang.pusan.ac.kr/',
        name: '부산대학교 수강신청',
    },
    {
        keyword: ['부산디지털대', '부산디지털대학교', 'bdu', 'busan digital university'],
        domain: 'http://www.bdu.ac.kr/',
        name: '부산디지털대학교 수강신청',
    },
    {
        keyword: ['부산보건대', '부산보건대학교', 'bhu', 'busan health university'],
        domain: 'https://djms.bhu.ac.kr/',
        name: '부산보건대학교 수강신청',
    },
    {
        keyword: ['부산여대', '부산여자대학교', 'bwc', 'busan women’s university'],
        domain: 'http://www.bwc.ac.kr/',
        name: '부산여자대학교 수강신청',
    },
    {
        keyword: ['부산예술대', '부산예술대학교', '부산예대', 'pia', 'busan arts college'],
        domain: 'https://was.pia.ac.kr:8884/',
        name: '부산예술대학교 수강신청',
    },
    {
        keyword: ['부산외대', '부산외국어대학교', 'bufs', 'busan university of foreign studies'],
        domain: 'http://sugang.bufs.ac.kr/',
        name: '부산외국어대학교 수강신청',
    },
    {
        keyword: ['신라대', '신라대학교', 'silla university'],
        domain: 'https://sgsc.silla.ac.kr/',
        name: '신라대학교 수강신청',
    },
    // {
    //     keyword: ['영산대 해운대캠퍼스', '영산대학교 해운대캠퍼스', 'ysu haewoondae campus'],
    //     domain: 'https://sugang.ysu.ac.kr/',
    //     name: '영산대학교 해운대캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['인제대 부산캠퍼스', '인제대학교 부산캠퍼스', 'inje university busan campus'],
    //     domain: 'https://stud.inje.ac.kr/loginmenu.aspx?mmid=H0101',
    //     name: '인제대학교 부산캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['한국방송통신대 부산지역대학', 'knou 부산', 'korea national open university busan'],
    //     domain: 'https://ep.knou.ac.kr/',
    //     name: '한국방송통신대학교 부산지역대학 수강신청',
    // },
    // {
    //     keyword: ['한국폴리텍대 부산캠퍼스', '한국폴리텍대학 부산캠퍼스', 'korea polytechnic busan campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 부산캠퍼스 수강신청',
    // },
    {
        keyword: ['화신사이버대', '화신사이버대학교', 'hscu', 'hwashin cyber university'],
        domain: 'http://www.hscu.ac.kr/',
        name: '화신사이버대학교 수강신청',
    },
    // 울산 소재 대학교 수강신청
    {
        keyword: ['unist', '울산과학기술원', '울산과기원', 'ulsan national institute of science and technology'],
        domain: 'http://portal.unist.ac.kr',
        name: 'UNIST 수강신청',
    },
    {
        keyword: ['울산과학대', '울산과학대학교', 'uc', 'ulsan college'],
        domain: 'http://sugang.uc.ac.kr/sugang',
        name: '울산과학대학교 수강신청',
    },
    {
        keyword: ['울산과학대 서부캠퍼스', '울산과학대학교 서부캠퍼스', 'uc 서부캠퍼스'],
        domain: 'http://sugang.uc.ac.kr/sugang',
        name: '울산과학대학교 서부캠퍼스 수강신청',
    },
    {
        keyword: ['울산대', '울산대학교', 'ulsan university'],
        domain: 'https://sugang.ulsan.ac.kr/',
        name: '울산대학교 수강신청',
    },
    {
        keyword: [],
        domain: 'https://s.ulsan.ac.kr/',
        name: '울산대 수강신청',
    },
    {
        keyword: ['춘해보건대', '춘해보건대학교', 'ch', 'chunhae health college'],
        domain: 'https://job.ch.ac.kr/',
        name: '춘해보건대학교 수강신청',
    },
    // {
    //     keyword: ['한국방송통신대 울산지역대학', 'knou 울산', 'korea national open university 울산'],
    //     domain: 'https://ep.knou.ac.kr/',
    //     name: '한국방송통신대학교 울산지역대학 수강신청',
    // },
    // {
    //     keyword: ['한국폴리텍대 울산캠퍼스', '한국폴리텍대학 울산캠퍼스', 'korea polytechnic ulsan campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 울산캠퍼스 수강신청',
    // },
    // 인천 소재 대학교 수강신청
    {
        keyword: ['경인교대', '경인교육대학교', 'ginue'],
        domain: 'https://haksa.ginue.ac.kr/',
        name: '경인교육대학교 수강신청',
    },
    {
        keyword: ['경인여대', '경인여자대학교', 'kiwu'],
        domain: 'https://sso.kiwu.ac.kr/',
        name: '경인여자대학교 수강신청',
    },
    {
        keyword: ['성산효대학원', '성산효대학원대학교', 'hyo graduate school'],
        domain: 'https://hyo.eeaa.co.kr/',
        name: '성산효대학원대학교 수강신청',
    },
    // {
    //     keyword: ['안양대 강화캠퍼스', '안양대학교 강화캠퍼스', 'anyang university ganghwa campus'],
    //     domain: 'https://sugang.anyang.ac.kr/common/login.do?method=loginF',
    //     name: '안양대학교 강화캠퍼스 수강신청',
    // },
    {
        keyword: ['인천가톨릭대', '인천가톨릭대학교', '인천가대', 'iccu'],
        domain: 'https://tips3.iccu.ac.kr/sugang/',
        name: '인천가톨릭대학교 수강신청',
    },
    {
        keyword: ['인천대', '인천대학교', '인천대학교 수강신청', 'incheon university'],
        domain: 'https://sugang.inu.ac.kr/',
        name: '인천대학교 수강신청',
    },
    {
        keyword: ['인하공전', '인하공업전문대학', 'inhatc'],
        domain: 'https://portal.inhatc.ac.kr/',
        name: '인하공업전문대학 수강신청',
    },
    {
        keyword: ['인하대', '인하대학교', 'ihu', 'inha', 'inha university'],
        domain: 'https://sugang.inha.ac.kr',
        name: '인하대학교 수강신청',
    },
    {
        keyword: ['재능대', '재능대학교', 'jeiu'],
        domain: 'https://portal.jeiu.ac.kr/',
        name: '재능대학교 수강신청',
    },
    {
        keyword: ['청운대 인천캠퍼스', '청운대학교 인천캠퍼스', 'chungwoon incheon campus'],
        domain: 'https://cwuis.chungwoon.ac.kr/lecture/',
        name: '청운대학교 인천캠퍼스 수강신청',
    },
    {
        keyword: ['한국폴리텍대', '한국폴리텍대학', 'korea polytechnic'],
        domain: 'https://p.kopo.ac.kr/login.jsp',
        name: '한국폴리텍대학 수강신청',
    },
    // {
    //     keyword: ['한국폴리텍대 인천캠퍼스', '한국폴리텍대학 인천캠퍼스', 'korea polytechnic incheon campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 인천캠퍼스 수강신청',
    // },
    // 강원 소재 대학교 수강신청
    {
        keyword: ['가톨릭관동대', '가톨릭관동대학교', '가관대', 'catholic kwandong university'],
        domain: 'https://sukang.cku.ac.kr/',
        name: '가톨릭관동대학교 수강신청',
    },
    {
        keyword: ['강릉영동대', '강릉영동대학교', 'gyc'],
        domain: 'https://gyumis.gyc.ac.kr/gyumis/iwarunner.html',
        name: '강릉영동대학교 수강신청',
    },
    {
        keyword: ['강원대', '강원대학교', 'kangwon university'],
        domain: 'http://sugang.kangwon.ac.kr',
        name: '강원대학교 수강신청',
    },
    // {
    //     keyword: ['강원대 도계캠퍼스', '강원대학교 도계캠퍼스', 'kangwon university dogye campus'],
    //     domain: 'http://sugang.kangwon.ac.kr',
    //     name: '강원대학교 도계캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['강원대 삼척캠퍼스', '강원대학교 삼척캠퍼스', 'kangwon university samcheok campus'],
    //     domain: 'http://sugang.kangwon.ac.kr',
    //     name: '강원대학교 삼척캠퍼스 수강신청',
    // },
    {
        keyword: ['강원도립대', '강원도립대학교', 'gangwon provincial university'],
        domain: 'https://intra.gw.ac.kr/',
        name: '강원도립대학교 수강신청',
    },
    // {
    //     keyword: ['경동대 글로벌캠퍼스', '경동대학교 글로벌캠퍼스', 'kyungdong university global campus'],
    //     domain: 'https://sugang.kduniv.ac.kr/',
    //     name: '경동대학교 글로벌캠퍼스 수강신청',
    // },
    {
        keyword: ['경동대', '경동대학교', 'kyungdong university'],
        domain: 'https://sugang.kduniv.ac.kr/',
        name: '경동대학교 수강신청', // 메디컬캠퍼스
    },
    {
        keyword: ['강릉원주대', '국립강릉원주대학교', 'gangneung wonju national university'],
        domain: 'https://sugang.gwnu.ac.kr/',
        name: '국립강릉원주대학교 수강신청',
    },
    {
        keyword: [
            '강릉원주대 원주캠퍼스',
            '국립강릉원주대학교 원주캠퍼스',
            'gangneung wonju national university wonju campus',
        ],
        domain: 'https://sugang.gwnu.ac.kr/',
        name: '국립강릉원주대학교 원주캠퍼스 수강신청',
    },
    {
        keyword: ['상지대', '상지대학교', 'sangji university'],
        domain: 'https://sugang.sangji.ac.kr/',
        name: '상지대학교 수강신청',
    },
    // {
    //     keyword: ['서울과학종합대 춘천캠퍼스', '서울과학종합대학원대학교 춘천캠퍼스', 'assist chuncheon campus'],
    //     domain: 'https://www.assist.ac.kr',
    //     name: '서울과학종합대학원대학교 춘천캠퍼스 수강신청',
    // },
    {
        keyword: ['서울대 평창캠퍼스', '서울대학교 평창캠퍼스', 'snu pyeongchang campus'],
        domain: 'http://pyeongchang.snu.ac.kr/',
        name: '서울대학교 평창캠퍼스 수강신청',
    },
    {
        keyword: ['세경대', '세경대학교', 'saekyung university'],
        domain: 'https://sens.saekyung.ac.kr/',
        name: '세경대학교 수강신청',
    },
    {
        keyword: ['송곡대', '송곡대학교', 'songgok university'],
        domain: 'http://stud.songgok.ac.kr',
        name: '송곡대학교 수강신청',
    },
    {
        keyword: ['송호대', '송호대학교', 'songho university'],
        domain: 'https://siis.songho.kr/',
        name: '송호대학교 수강신청',
    },
    {
        keyword: ['춘천교대', '춘천교육대학교', 'cnue'],
        domain: 'https://sso.cnue.ac.kr/',
        name: '춘천교육대학교 수강신청',
    },
    {
        keyword: ['한국골프과학기술대', '한국골프과학기술대학교', 'korea golf university'],
        domain: 'https://portal.kg.ac.kr/',
        name: '한국골프과학기술대학교 수강신청',
    },
    // {
    //     keyword: ['한국방통대 강원', '한국방송통신대학교 강원지역대학', 'knou gangwon'],
    //     domain: 'https://ep.knou.ac.kr/',
    //     name: '한국방송통신대학교 강원지역대학 수강신청',
    // },
    // {
    //     keyword: ['한국폴리텍 강릉', '한국폴리텍대학 강릉캠퍼스', 'korea polytechnic gangneung'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 강릉캠퍼스 수강신청',
    // },
    {
        keyword: ['한라대', '한라대학교', 'halla university'],
        domain: 'http://sugang.halla.ac.kr:8080/',
        name: '한라대학교 수강신청',
    },
    {
        keyword: ['한림대', '한림대학교', 'hallym university'],
        domain: 'https://haksa.hallym.ac.kr/hluv',
        name: '한림대학교 수강신청',
    },
    {
        keyword: ['한림성심대', '한림성심대학교', 'hsc'],
        domain: 'https://nhis.hsc.ac.kr/',
        name: '한림성심대학교 수강신청',
    },
    // 경기 소재 대학교 수강신청
    {
        keyword: ['ICT폴리텍대학', 'ict polytechnic university'],
        domain: 'https://ais.ict.ac.kr/inc/ccr/login.jsp',
        name: 'ICT폴리텍대학 수강신청',
    },
    {
        keyword: ['가천대', '가천대학교', '가천대학교 수강신청', '가대', 'gachon university', 'gachon'],
        domain: 'https://sg.gachon.ac.kr',
        name: '가천대학교 수강신청',
    },
    {
        keyword: ['가톨릭대', '가톨릭대학교', 'catholic university of korea'],
        domain: 'https://uportal.catholic.ac.kr/',
        name: '가톨릭대학교 수강신청',
    },
    {
        keyword: ['강남대', '강남대학교', 'kangnam university'],
        domain: 'https://sugang.kangnam.ac.kr/',
        name: '강남대학교 수강신청',
    },
    {
        keyword: ['경기과학기술대', '경기과학기술대학교', 'gtec'],
        domain: 'https://sugang.gtec.ac.kr/',
        name: '경기과학기술대학교 수강신청',
    },
    {
        keyword: ['경기대', '경기대학교', 'kyonggi university'],
        domain: 'http://sugang.kyonggi.ac.kr/',
        name: '경기대학교 수강신청',
    },
    // {
    //     keyword: ['경동대 메트로폴캠퍼스', '경동대학교 메트로폴캠퍼스', 'kyungdong university metropole campus'],
    //     domain: 'https://sugang.kduniv.ac.kr/',
    //     name: '경동대학교 메트로폴캠퍼스 수강신청',
    // },
    {
        keyword: ['경민대', '경민대학교', 'kyungmin university'],
        domain: 'https://portal.kyungmin.ac.kr/',
        name: '경민대학교 수강신청',
    },
    {
        keyword: ['경복대', '경복대학교', 'kyungbok university'],
        domain: 'https://sugang.kbu.ac.kr/',
        name: '경복대학교 수강신청',
    },
    // {
    //     keyword: ['경복대 포천캠퍼스', '경복대학교 포천캠퍼스', 'kyungbok university pocheon campus'],
    //     domain: 'https://sugang.kbu.ac.kr/',
    //     name: '경복대학교 포천캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['경인교대 경기캠퍼스', '경인교육대학교 경기캠퍼스', 'ginue gyeonggi campus'],
    //     domain: 'https://haksa.ginue.ac.kr/',
    //     name: '경인교육대학교 경기캠퍼스 수강신청',
    // },
    {
        keyword: ['계약신학대학원대', '계약신학대학원대학교', 'kyeyak seminary university'],
        domain: 'http://www.kyeyak.ac.kr/',
        name: '계약신학대학원대학교 수강신청',
    },
    {
        keyword: ['계원예술대', '계원예술대학교', 'kaywon university of art and design'],
        domain: 'https://sugang.kaywon.ac.kr/Account/Login.aspx',
        name: '계원예술대학교 수강신청',
    },
    {
        keyword: ['국립암센터대학원', '국립암센터국제암대학원대학교', 'national cancer center graduate school'],
        domain: 'http://ncc-gcsp.ac.kr/',
        name: '국립암센터국제암대학원대학교 수강신청',
    },
    {
        keyword: ['국립교통대 의왕캠퍼스', '국립한국교통대학교 의왕캠퍼스', 'ut university uiwang campus'],
        domain: 'https://sugang.ut.ac.kr/',
        name: '국립한국교통대학교 의왕캠퍼스 수강신청',
    },
    {
        keyword: ['국제대', '국제대학교', 'kookje university'],
        domain: 'https://portal.kookje.ac.kr',
        name: '국제대학교 수강신청',
    },
    {
        keyword: ['김포대', '김포대학교', 'kimpo university'],
        domain: 'https://auth.kimpo.ac.kr/html/login.php',
        name: '김포대학교 수강신청',
    },
    {
        keyword: ['농협대', '농협대학교', 'nonghyup university'],
        domain: 'https://acciis.nonghyup.ac.kr/Gate/SSLogin.aspx',
        name: '농협대학교 수강신청',
    },
    {
        keyword: ['능인대학원대', '능인대학원대학교', 'niu'],
        domain: 'https://www.niu.ac.kr/school/login',
        name: '능인대학원대학교 수강신청',
    },
    {
        keyword: ['단국대', '단국대학교', '단국대학교 수강신청', '단대', 'dankook university', 'dankook', 'dku'],
        domain: 'https://sugang.dankook.ac.kr/',
        name: '단국대학교 수강신청',
    },
    // {
    //     keyword: ['대경대 남양주캠퍼스', '대경대학교 남양주캠퍼스', 'daekyung university namyangju campus'],
    //     domain: 'https://dtis.tk.ac.kr/nx/web/',
    //     name: '대경대학교 남양주캠퍼스 수강신청',
    // },
    {
        keyword: ['대림대', '대림대학교', 'daelim university'],
        domain: 'https://pt.daelim.ac.kr/',
        name: '대림대학교 수강신청',
    },
    {
        keyword: ['대진대', '대진대학교', 'daejin', 'daejin university'],
        domain: 'https://dreams2.daejin.ac.kr/',
        name: '대진대학교 수강신청',
    },
    {
        keyword: ['대한신학대학원대', '대한신학대학원대학교', 'korea reformed graduate university'],
        domain: 'https://dtu.gocampus.co.kr/stud/login.asp',
        name: '대한신학대학원대학교 수강신청',
    },
    {
        keyword: ['동남보건대', '동남보건대학교', 'dongnam health university'],
        domain: 'https://portal.dongnam.ac.kr/',
        name: '동남보건대학교 수강신청',
    },
    {
        keyword: ['동서울대', '동서울대학교', 'dong seoul university'],
        domain: 'https://portal.du.ac.kr/',
        name: '동서울대학교 수강신청',
    },
    {
        keyword: ['동아방송예술대', '동아방송예술대학교', 'dong-ah institute of media and arts'],
        domain: 'https://udimac.dima.ac.kr/',
        name: '동아방송예술대학교 수강신청',
    },
    {
        keyword: ['동양대 북서울캠퍼스', '동양대학교 북서울캠퍼스', 'dongyang university bukseoul campus'],
        domain: 'http://haksa.dyu.ac.kr/sugang_intro.html#',
        name: '동양대학교 북서울캠퍼스 수강신청',
    },
    {
        keyword: ['동원대', '동원대학교', 'dongwon university'],
        domain: 'https://tos.tw.ac.kr/svc/tk/Auth.do?ac=Y&ifa=N&id=portal',
        name: '동원대학교 수강신청',
    },
    {
        keyword: ['두원공대', '두원공과대학교', 'doowon technical university'],
        domain: 'https://sso.doowon.ac.kr/',
        name: '두원공과대학교 수강신청',
    },
    // {
    //     keyword: ['두원공대 파주캠퍼스', '두원공과대학교 파주캠퍼스', 'doowon technical university paju campus'],
    //     domain: 'http://sso.doowon.ac.kr/',
    //     name: '두원공과대학교 파주캠퍼스 수강신청',
    // },
    {
        keyword: ['루터대', '루터대학교', 'luther university'],
        domain: 'http://ltu2.jlab.co.kr/GateWeb/login.aspx',
        name: '루터대학교 수강신청',
    },
    {
        keyword: ['부천대', '부천대학교', 'bucheon university'],
        domain: 'https://sugang.bc.ac.kr/',
        name: '부천대학교 수강신청',
    },
    // {
    //     keyword: ['서영대 파주캠퍼스', '서영대학교 파주캠퍼스', 'seoyeong university paju campus'],
    //     domain: 'https://eiss.seoyeong.ac.kr/',
    //     name: '서영대학교 파주캠퍼스 수강신청',
    // },
    {
        keyword: ['서울신대', '서울신학대학교', 'seoul theological university'],
        domain: 'https://sugang.stu.ac.kr/inc/sugang/TlsnLogin.jsp',
        name: '서울신학대학교 수강신청',
    },
    {
        keyword: ['서울예대', '서울예술대학교', 'seoul institute of the arts'],
        domain: 'https://sportal.seoularts.ac.kr',
        name: '서울예술대학교 수강신청',
    },
    {
        keyword: ['서울장신대', '서울장신대학교', 'seoul jangsin university'],
        domain: 'http://int.sjs.ac.kr:8080/',
        name: '서울장신대학교 수강신청',
    },
    {
        keyword: ['서정대', '서정대학교', 'seojeong university'],
        domain: 'https://sso.seojeong.ac.kr/',
        name: '서정대학교 수강신청',
    },
    {
        keyword: ['선학UP대학원대', '선학UP대학원대학교', 'sunhak up graduate university'],
        domain: 'https://ecamp.sunhakup.ac.kr/',
        name: '선학UP대학원대학교 수강신청',
    },
    {
        keyword: ['성결대', '성결대학교', '성결대학교 수강신청', 'sungkyul university'],
        domain: 'https://sugang.sungkyul.ac.kr/',
        name: '성결대학교 수강신청',
    },
    {
        keyword: ['성서침례대학원대', '성서침례대학원대학교', 'baptist theological seminary'],
        domain: 'https://bbts.gocampus.co.kr/stud',
        name: '성서침례대학원대학교 수강신청',
    },
    {
        keyword: ['수원가톨릭대', '수원가톨릭대학교', 'suwon catholic university'],
        domain: 'http://www.suwoncatholic.ac.kr/',
        name: '수원가톨릭대학교 수강신청',
    },
    {
        keyword: ['수원과학대', '수원과학대학교', 'suwon science college'],
        domain: 'https://portal.ssc.ac.kr/enview/',
        name: '수원과학대학교 수강신청',
    },
    {
        keyword: ['수원대', '수원대학교', 'suwon university'],
        domain: 'https://sugang.suwon.ac.kr/sugang/index.html',
        name: '수원대학교 수강신청',
    },
    {
        keyword: ['수원여대', '수원여자대학교', 'suwon women university'],
        domain: 'https://ngis.swwu.ac.kr/',
        name: '수원여자대학교 수강신청',
    },
    {
        keyword: ['신구대', '신구대학교', 'shingu college'],
        domain: 'https://login.shingu.ac.kr/',
        name: '신구대학교 수강신청',
    },
    {
        keyword: ['신안산대', '신안산대학교', 'shin ansan university'],
        domain: 'http://sugang.sau.ac.kr/',
        name: '신안산대학교 수강신청',
    },
    {
        keyword: ['신한대', '신한대학교', 'shinhan university'],
        domain: 'https://stins.shinhan.ac.kr/',
        name: '신한대학교 수강신청', //동두천캠퍼스
    },
    // {
    //     keyword: ['신한대 의정부캠퍼스', '신한대학교 의정부캠퍼스', 'shinhan university uijeongbu campus'],
    //     domain: 'https://stins.shinhan.ac.kr/',
    //     name: '신한대학교 의정부캠퍼스 수강신청',
    // },
    {
        keyword: ['실천신학대학원대', '실천신학대학원대학교', 'practice theological seminary'],
        domain: 'http://www.gspt.ac.kr/',
        name: '실천신학대학원대학교 수강신청',
    },
    {
        keyword: ['아신대', '아신대학교', 'asian center for theological studies and mission'],
        domain: 'http://in.acts.ac.kr',
        name: '아신대학교 수강신청',
    },
    {
        keyword: ['아주대', '아주대학교', 'ajou university'],
        domain: 'http://sugang.ajou.ac.kr/',
        name: '아주대학교 수강신청',
    },
    {
        keyword: ['안산대', '안산대학교', 'ansan university'],
        domain: 'https://sso.ansan.ac.kr/',
        name: '안산대학교 수강신청',
    },
    {
        keyword: ['안양대', '안양대학교', 'anyang university'],
        domain: 'https://sugang.anyang.ac.kr',
        name: '안양대학교 수강신청',
    },
    {
        keyword: ['에스라성경대학원대', '에스라성경대학원대학교', 'ezra seminary'],
        domain: 'http://ezra.ac.kr/',
        name: '에스라성경대학원대학교 수강신청',
    },
    {
        keyword: ['여주대', '여주대학교', 'yeoju university'],
        domain: 'https://gw.yeojoo.ac.kr/',
        name: '여주대학교 수강신청',
    },
    {
        keyword: ['연성대', '연성대학교', 'yeonsung university'],
        domain: 'http://yuis.yeonsung.ac.kr/ccrMain.jsp',
        name: '연성대학교 수강신청',
    },
    // {
    //     keyword: ['예원예술대 양주캠퍼스', '예원예술대학교 양주캠퍼스', 'yewon arts university yangju campus'],
    //     domain: 'https://www.yewon.ac.kr/main/',
    //     name: '예원예술대학교 양주캠퍼스 수강신청',
    // },
    {
        keyword: ['오산대', '오산대학교', 'osan university'],
        domain: 'https://info.osan.ac.kr/',
        name: '오산대학교 수강신청',
    },
    {
        keyword: ['온석대학원대', '온석대학원대학교', 'onseok seminary'],
        domain: 'https://info.ctu.ac.kr/',
        name: '온석대학원대학교 수강신청',
    },
    {
        keyword: ['용인대', '용인대학교', 'yongin university'],
        domain: 'https://total.yongin.ac.kr/',
        name: '용인대학교 수강신청',
    },
    {
        keyword: ['용인예술과학대', '용인예술과학대학교', 'yongin arts and science university'],
        domain: 'http://portal.ysc.ac.kr/',
        name: '용인예술과학대학교 수강신청',
    },
    {
        keyword: ['웅지세무대', '웅지세무대학교', 'woongji accounting university'],
        domain: 'https://new-intra.wat.ac.kr/',
        name: '웅지세무대학교 수강신청',
    },
    {
        keyword: ['웨스트민스터신학대학원대', '웨스트민스터신학대학원대학교', 'westminster theological seminary'],
        domain: 'http://westminster.ac.kr/',
        name: '웨스트민스터신학대학원대학교 수강신청',
    },
    {
        keyword: ['유한대', '유한대학교', 'yuhan university'],
        domain: 'https://portal.yuhan.ac.kr/',
        name: '유한대학교 수강신청',
    },
    // {
    //     keyword: ['을지대 성남캠퍼스', '을지대학교 성남캠퍼스', 'eulji university seongnam campus'],
    //     domain: 'http://sg.eulji.ac.kr/ejuv/',
    //     name: '을지대학교 성남캠퍼스 수강신청',
    // },
    {
        keyword: ['장안대', '장안대학교', 'jangan university'],
        domain: 'https://st.jangan.ac.kr/',
        name: '장안대학교 수강신청',
    },
    // {
    //     keyword: ['중부대 고양캠퍼스', '중부대학교 고양캠퍼스', 'joongbu university goyang campus'],
    //     domain: 'https://sg.joongbu.ac.kr/',
    //     name: '중부대학교 고양캠퍼스 수강신청',
    // },
    {
        keyword: ['중앙승가대', '중앙승가대학교', 'jungang sangha university'],
        domain: 'http://www.sangha.ac.kr/',
        name: '중앙승가대학교 수강신청',
    },
    {
        keyword: ['차의과학대', '차의과학대학교', 'cha university'],
        domain: 'https://lms.cha.ac.kr/',
        name: '차의과학대학교 수강신청',
    },
    {
        keyword: ['청강문화산업대', '청강문화산업대학교', 'chungkang college of cultural industries'],
        domain: 'https://sugang.ck.ac.kr/',
        name: '청강문화산업대학교 수강신청',
    },
    // {
    //     keyword: ['총신대 양지캠퍼스', '총신대학교 양지캠퍼스', 'chongshin university yangji campus'],
    //     domain: 'http://sugang.chongshin.ac.kr:8080',
    //     name: '총신대학교 양지캠퍼스 수강신청',
    // },
    {
        keyword: ['칼빈대', '칼빈대학교', 'calvin university'],
        domain: 'http://calvin2.jlab.co.kr/',
        name: '칼빈대학교 수강신청',
    },
    {
        keyword: ['평택대', '평택대학교', 'pyeongtaek university'],
        domain: 'http://sukang1.ptu.ac.kr',
        name: '평택대학교 수강신청',
    },
    {
        keyword: ['한경국립대', '한경국립대학교', 'hankyoung national university'],
        domain: 'http://sugang.hknu.ac.kr',
        name: '한경국립대학교 수강신청',
    },
    // {
    //     keyword: [
    //         '한경국립대 평택캠퍼스',
    //         '한경국립대학교 평택캠퍼스',
    //         'hankyoung national university pyeongtaek campus',
    //     ],
    //     domain: 'http://sugang.hknu.ac.kr',
    //     name: '한경국립대학교 평택캠퍼스 수강신청',
    // },
    {
        keyword: ['한국공학대', '한국공학대학교', 'koreatech'],
        domain: 'http://sugang.tukorea.ac.kr/',
        name: '한국공학대학교 수강신청',
    },
    {
        keyword: ['한국관광대', '한국관광대학교', 'korea tourism college'],
        domain: 'http://sugang.ktc.ac.kr',
        name: '한국관광대학교 수강신청',
    },
    // {
    //     keyword: [
    //         '한국폴리텍대 반도체융합캠퍼스',
    //         '한국폴리텍대학 반도체융합캠퍼스',
    //         'kopo semiconductor fusion campus',
    //     ],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 반도체융합캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['한국폴리텍대 성남캠퍼스', '한국폴리텍대학 성남캠퍼스', 'kopo seongnam campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 성남캠퍼스 수강신청',
    // },
    {
        keyword: ['한국학중앙연구원 한국학대학원', 'academy of korean studies graduate school of korean studies'],
        domain: 'https://portal.aks.ac.kr/',
        name: '한국학중앙연구원 한국학대학원 수강신청',
    },
    {
        keyword: ['한국항공대', '한국항공대학교', 'korea aerospace university'],
        domain: 'http://su.kau.ac.kr/sugang/index.su',
        name: '한국항공대학교 수강신청',
    },
    {
        keyword: ['한세대', '한세대학교', 'hansei', 'hansei university'],
        domain: 'http://sugangnew.hansei.ac.kr:8808',
        name: '한세대학교 수강신청',
    },
    {
        keyword: ['한신대', '한신대학교', 'hanshin university'],
        domain: 'https://sugang.hs.ac.kr/',
        name: '한신대학교 수강신청',
    },
    {
        keyword: ['합동신학대학원대', '합동신학대학원대학교', 'hapdong theological seminary'],
        domain: 'http://www.hapdong.ac.kr/',
        name: '합동신학대학원대학교 수강신청',
    },
    {
        keyword: ['협성대', '협성대학교', 'hyeopseong university'],
        domain: 'https://shiis.uhs.ac.kr/',
        name: '협성대학교 수강신청',
    },
    {
        keyword: ['화성의과학대', '화성의과학대학교', 'hwasung medical science university'],
        domain: 'https://inet.hsmu.ac.kr/',
        name: '화성의과학대학교 수강신청',
    },
    // 경상 소재 대학교 수강신청
    {
        keyword: ['가야대', '가야대학교', 'kaya university'],
        domain: 'https://sugang.kaya.ac.kr/',
        name: '가야대학교 수강신청',
    },
    // {
    //     keyword: ['가야대 고령캠퍼스', '가야대학교 고령캠퍼스', 'kaya university goryeong campus'],
    //     domain: 'https://sugang.kaya.ac.kr/common/loginForm.do',
    //     name: '가야대학교 고령캠퍼스 수강신청',
    // },
    {
        keyword: ['가톨릭상지대', '가톨릭상지대학교', 'catholic sangji university'],
        domain: 'https://sso.csj.ac.kr/csjsso/login_form',
        name: '가톨릭상지대학교 수강신청',
    },
    {
        keyword: ['거제대', '거제대학교', 'geoje university'],
        domain: 'https://campus.koje.ac.kr/',
        name: '거제대학교 수강신청',
    },
    {
        keyword: ['경남대', '경남대학교', 'kyungnam university'],
        domain: 'https://sugang.kyungnam.ac.kr/',
        name: '경남대학교 수강신청',
    },
    {
        keyword: ['경남도립거창대학', '거창대학', 'geochang provincial college'],
        domain: 'http://www.gc.ac.kr/gcu.asp',
        name: '경남도립거창대학 수강신청',
    },
    {
        keyword: ['경남도립남해대학', '남해대학', 'namhae provincial college'],
        domain: 'https://haksa.namhae.ac.kr/login',
        name: '경남도립남해대학 수강신청',
    },
    {
        keyword: ['경북과학대', '경북과학대학교', 'gyeongbuk science university'],
        domain: 'http://www.kbsc.ac.kr/',
        name: '경북과학대학교 수강신청',
    },
    // {
    //     keyword: ['경북대 상주캠퍼스', '경북대학교 상주캠퍼스', 'kyungpook national university sangju campus'],
    //     domain: 'https://sugang.knu.ac.kr/',
    //     name: '경북대학교 상주캠퍼스 수강신청',
    // },
    {
        keyword: ['경북도립대', '경북도립대학교', 'gyeongbuk provincial college'],
        domain: 'https://portal.gpc.ac.kr/',
        name: '경북도립대학교 수강신청',
    },
    {
        keyword: ['경북보건대', '경북보건대학교', 'gyeongbuk health college'],
        domain: 'http://lms.gch.ac.kr/newLMS/sub06/sub06_01.asp',
        name: '경북보건대학교 수강신청',
    },
    {
        keyword: ['경북전문대', '경북전문대학교', 'gyeongbuk college'],
        domain: 'https://kpis.kbc.ac.kr:9443/',
        name: '경북전문대학교 수강신청',
    },
    {
        keyword: ['경상국립대', '경상국립대학교', 'gyeongsang national university'],
        domain: 'https://sugang.gnu.ac.kr/',
        name: '경상국립대학교 수강신청',
    },
    // {
    //     keyword: [
    //         '경상국립대 내동캠퍼스',
    //         '경상국립대학교 내동캠퍼스',
    //         'gyeongsang national university naedong campus',
    //     ],
    //     domain: 'https://sugang.gnu.ac.kr/',
    //     name: '경상국립대학교 내동캠퍼스 수강신청',
    // },
    // {
    //     keyword: [
    //         '경상국립대 창원산학캠퍼스',
    //         '경상국립대학교 창원산학캠퍼스',
    //         'gyeongsang national university changwon industrial campus',
    //     ],
    //     domain: 'https://sugang.gnu.ac.kr/',
    //     name: '경상국립대학교 창원산학캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['경상국립대 칠암캠퍼스', '경상국립대학교 칠암캠퍼스', 'gyeongsang national university chilam campus'],
    //     domain: 'https://sugang.gnu.ac.kr/',
    //     name: '경상국립대학교 칠암캠퍼스 수강신청',
    // },
    // {
    //     keyword: [
    //         '경상국립대 통영캠퍼스',
    //         '경상국립대학교 통영캠퍼스',
    //         'gyeongsang national university tongyeong campus',
    //     ],
    //     domain: 'https://sugang.gnu.ac.kr/',
    //     name: '경상국립대학교 통영캠퍼스 수강신청',
    // },
    {
        keyword: ['경안신학대학원대', '경안신학대학원대학교', 'gyeongan theological seminary'],
        domain: 'https://gtu.gocampus.co.kr/stud',
        name: '경안신학대학원대학교 수강신청',
    },
    {
        keyword: ['경운대', '경운대학교', 'kyungwoon university'],
        domain: 'https://portal.ikw.ac.kr/index.jsp',
        name: '경운대학교 수강신청',
    },
    {
        keyword: ['경일대', '경일대학교', 'kyungil university'],
        domain: 'https://kiuslo.kiu.ac.kr/portal/portal/login.htm',
        name: '경일대학교 수강신청',
    },
    {
        keyword: ['구미대', '구미대학교', 'gumi university'],
        domain: 'https://my.gumi.ac.kr/pages/school02.htm',
        name: '구미대학교 수강신청',
    },
    {
        keyword: ['금오공대', '국립금오공과대학교', 'kumoh national institute of technology'],
        domain: 'https://www.kumoh.ac.kr/_common/login/login.do',
        name: '국립금오공과대학교 수강신청',
    },
    {
        keyword: ['안동대', '국립안동대학교', 'andong national university'],
        domain: 'http://sugang.anu.ac.kr/',
        name: '국립안동대학교 수강신청',
    },
    {
        keyword: ['창원대', '국립창원대학교', 'changwon national university'],
        domain: 'https://chains.changwon.ac.kr/nonstop/suup/sugang/hakbu/index.php',
        name: '국립창원대학교 수강신청',
    },
    {
        keyword: ['김천대', '김천대학교', 'kimcheon university'],
        domain: 'http://210.119.238.54/jsp/mainPage.jsp',
        name: '김천대학교 수강신청',
    },
    {
        keyword: ['김해대', '김해대학교', 'gimhae university'],
        domain: 'https://class.gimhae.ac.kr',
        name: '김해대학교 수강신청',
    },
    {
        keyword: ['대경대', '대경대학교', 'daekyung university'],
        domain: 'https://dtis.tk.ac.kr/nx/web/',
        name: '대경대학교 수강신청',
    },
    {
        keyword: ['대구가톨릭대', '대구가톨릭대학교', 'daegu catholic university'],
        domain: 'http://sugang.cu.ac.kr/sugang/',
        name: '대구가톨릭대학교 수강신청',
    },
    {
        keyword: ['대구대', '대구대학교', 'daegu university'],
        domain: 'http://203.244.128.145/index_sugang.html',
        name: '대구대학교 수강신청',
    },
    {
        keyword: ['대구사이버대', '대구사이버대학교', 'daegu cyber university'],
        domain: 'http://sugang.dcu.ac.kr',
        name: '대구사이버대학교 수강신청',
    },
    {
        keyword: ['대구예술대', '대구예술대학교', 'daegu arts university'],
        domain: 'https://service.dgau.ac.kr/index.jsp',
        name: '대구예술대학교 수강신청',
    },
    {
        keyword: ['대구한의대', '대구한의대학교', 'daegu haanui university'],
        domain: 'http://sugang.dhu.ac.kr/sugang',
        name: '대구한의대학교 수강신청',
    },
    {
        keyword: ['대신대', '대신대학교', 'daeshin university'],
        domain: 'http://home.daeshin.ac.kr/login2016.asp?usertype=ug',
        name: '대신대학교 수강신청',
    },
    {
        keyword: ['동양대', '동양대학교', 'dongyang university'],
        domain: 'http://intra.dyu.ac.kr:9595/sugang/date_out.jsp',
        name: '동양대학교 수강신청',
    },
    {
        keyword: ['동원과학기술대', '동원과학기술대학교', 'dongwon institute of science and technology'],
        domain: 'http://ecampus.dist.ac.kr/',
        name: '동원과학기술대학교 수강신청',
    },
    {
        keyword: ['마산대', '마산대학교', 'masan university'],
        domain: 'https://www2.masan.ac.kr/',
        name: '마산대학교 수강신청',
    },
    {
        keyword: ['문경대', '문경대학교', 'mungyeong university'],
        domain: 'https://info.mkc.ac.kr/',
        name: '문경대학교 수강신청',
    },
    // {
    //     keyword: ['부산대 밀양캠퍼스', '부산대학교 밀양캠퍼스', 'pusan national university miryang campus'],
    //     domain: 'https://sugang.pusan.ac.kr/login',
    //     name: '부산대학교 밀양캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['부산대 양산캠퍼스', '부산대학교 양산캠퍼스', 'pusan national university yangsan campus'],
    //     domain: 'https://sugang.pusan.ac.kr/',
    //     name: '부산대학교 양산캠퍼스 수강신청',
    // },
    {
        keyword: ['부산장신대', '부산장신대학교', 'busan jangsin university'],
        domain: 'https://portal.bpu.ac.kr/',
        name: '부산장신대학교 수강신청',
    },
    {
        keyword: ['선린대', '선린대학교', 'sunlin university'],
        domain: 'http://portal.sunlin.ac.kr/',
        name: '선린대학교 수강신청',
    },
    {
        keyword: ['성운대', '성운대학교', 'seongwoon university'],
        domain: 'http://sub.sdc.ac.kr/sdc',
        name: '성운대학교 수강신청',
    },
    {
        keyword: ['신경주대', '신경주대학교', 'shingyeongju university'],
        domain: 'https://tiger.gu.ac.kr/',
        name: '신경주대학교 수강신청',
    },
    {
        keyword: ['안동과학대', '안동과학대학교', 'andong science college'],
        domain: 'http://sugang.asc.ac.kr',
        name: '안동과학대학교 수강신청',
    },
    {
        keyword: ['연암공대', '연암공과대학교', 'yonam institute of technology'],
        domain: 'http://portal.yc.ac.kr/',
        name: '연암공과대학교 수강신청',
    },
    {
        keyword: ['영남대', '영남대학교', 'yeungnam university'],
        domain: 'https://sugang.yu.ac.kr/',
        name: '영남대학교 수강신청',
    },
    {
        keyword: ['영남신학대', '영남신학대학교', 'yeungnam theological seminary'],
        domain: 'https://sys.ytus.ac.kr/',
        name: '영남신학대학교 수강신청',
    },
    {
        keyword: ['영남외국어대', '영남외국어대학', 'yeungnam foreign language college'],
        domain: 'http://www.yflc.ac.kr/',
        name: '영남외국어대학 수강신청',
    },
    {
        keyword: ['영산대', '영산대학교', 'yeongsan university'],
        domain: 'https://sugang.ysu.ac.kr/',
        name: '영산대학교 수강신청',
    },
    // {
    //     keyword: ['영진전문대 글로벌캠퍼스', '영진전문대학교 글로벌캠퍼스', 'yeongjin junior college global campus'],
    //     domain: 'https://www.yjp.ac.kr/portal/main/index.jsp',
    //     name: '영진전문대학교 글로벌캠퍼스 수강신청',
    // },
    {
        keyword: ['위덕대', '위덕대학교', 'woosong university'],
        domain: 'https://sugang.uu.ac.kr/',
        name: '위덕대학교 수강신청',
    },
    {
        keyword: ['육군3사관학교', 'army cadet military academy'],
        domain: 'http://www.kaay.mil.kr/',
        name: '육군3사관학교 수강신청',
    },
    {
        keyword: ['인제대', '인제대학교', 'inje university'],
        domain: 'https://stud.inje.ac.kr/loginmenu.aspx?mmid=H0101',
        name: '인제대학교 수강신청',
    },
    {
        keyword: ['진주교대', '진주교육대학교', 'jinju national university of education'],
        domain: 'https://sso1.cue.ac.kr:8443/',
        name: '진주교육대학교 수강신청',
    },
    {
        keyword: ['진주보건대', '진주보건대학교', 'jinju health college'],
        domain: 'https://inters.jhc.ac.kr/',
        name: '진주보건대학교 수강신청',
    },
    {
        keyword: ['창신대', '창신대학교', 'changshin university'],
        domain: 'http://www.cs.ac.kr/',
        name: '창신대학교 수강신청',
    },
    {
        keyword: ['창원문성대', '창원문성대학교', 'changwon moonsung university'],
        domain: 'http://www.cmu.ac.kr/main.do',
        name: '창원문성대학교 수강신청',
    },
    {
        keyword: ['포항공대', '포항공과대학교', 'postech'],
        domain: 'https://plms.postech.ac.kr/',
        name: '포항공과대학교 수강신청',
    },
    {
        keyword: ['포항대', '포항대학교', 'pohang university'],
        domain: 'http://www.pohang.ac.kr/',
        name: '포항대학교 수강신청',
    },
    {
        keyword: [
            '방송대 경남지역대',
            '한국방송통신대학교 경남지역대학',
            'korea national open university gyeongnam campus',
        ],
        domain: 'https://ep.knou.ac.kr/',
        name: '한국방송통신대학교 경남지역대학 수강신청',
    },
    {
        keyword: ['한국복지사이버대', '한국복지사이버대학교', 'korea welfare cyber university'],
        domain: 'http://www.corea.ac.kr/',
        name: '한국복지사이버대학교 수강신청',
    },
    {
        keyword: ['한국승강기대', '한국승강기대학교', 'korea lift college'],
        domain: 'http://hs.klc.ac.kr/',
        name: '한국승강기대학교 수강신청',
    },
    // {
    //     keyword: ['폴리텍대 구미캠퍼스', '한국폴리텍대학 구미캠퍼스', 'korea polytechnic university gumi campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 구미캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['폴리텍대 로봇캠퍼스', '한국폴리텍대학 로봇캠퍼스', 'korea polytechnic university robot campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 로봇캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['폴리텍대 영주캠퍼스', '한국폴리텍대학 영주캠퍼스', 'korea polytechnic university yeongju campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 영주캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['폴리텍대 창원캠퍼스', '한국폴리텍대학 창원캠퍼스', 'korea polytechnic university changwon campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 창원캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['폴리텍대 항공캠퍼스', '한국폴리텍대학 항공캠퍼스', 'korea polytechnic university aerospace campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 항공캠퍼스 수강신청',
    // },
    {
        keyword: ['한동대', '한동대학교', 'handong global university'],
        domain: 'http://sugang.handong.edu/',
        name: '한동대학교 수강신청',
    },
    {
        keyword: ['해군사관학교', 'korea naval academy'],
        domain: 'http://www.navy.ac.kr/',
        name: '해군사관학교 수강신청',
    },
    {
        keyword: ['호산대', '호산대학교', 'hosan university'],
        domain: 'http://hims.hosan.ac.kr/HSU/index.html',
        name: '호산대학교 수강신청',
    },
    // 전라 소재 대학교 수강신청
    {
        keyword: ['광양보건대', '광양보건대학교', 'gwangyang health college'],
        domain: 'https://info.gy.ac.kr:8443/iser/login.jsp',
        name: '광양보건대학교 수강신청',
    },
    {
        keyword: ['광주가톨릭대', '광주가톨릭대학교', 'gwangju catholic university'],
        domain: 'http://intragate.gjcatholic.ac.kr/',
        name: '광주가톨릭대학교 수강신청',
    },
    {
        keyword: ['군산대', '국립군산대학교', 'kunsan national university'],
        domain: 'https://tkis.kunsan.ac.kr/',
        name: '국립군산대학교 수강신청',
    },
    {
        keyword: ['목포대', '국립목포대학교', 'mokpo national university'],
        domain: 'https://mnuwb.mokpo.ac.kr/',
        name: '국립목포대학교 수강신청',
    },
    // {
    //     keyword: ['목포대 목포캠퍼스', '국립목포대학교 목포캠퍼스', 'mokpo national university mokpo campus'],
    //     domain: 'https://mnuwb.mokpo.ac.kr/uat/uia/loginForm.do',
    //     name: '국립목포대학교 목포캠퍼스 수강신청',
    // },
    {
        keyword: [
            '국립목포해양대',
            '국립목포해양대학교',
            '국립목포해양대학교 수강신청',
            'mokpo national maritime university',
        ],
        domain: 'https://intranet5.mmu.ac.kr/',
        name: '국립목포해양대학교 수강신청',
    },
    {
        keyword: ['순천대', '국립순천대학교', 'sunchon national university'],
        domain: 'https://stis5.scnu.ac.kr/',
        name: '국립순천대학교 수강신청',
    },
    {
        keyword: ['군산간호대', '군산간호대학교', 'gunsan nursing university'],
        domain: 'https://lms.kcn.ac.kr/',
        name: '군산간호대학교 수강신청',
    },
    {
        keyword: ['군장대', '군장대학교', 'kunjang college'],
        domain: 'https://portal.kunjang.ac.kr/',
        name: '군장대학교 수강신청',
    },
    {
        keyword: ['나주대', '나주대학교', 'naju university'],
        domain: 'http://haksa.kgrc.ac.kr/haksa/login/login.jsp',
        name: '나주대학교 수강신청',
    },
    {
        keyword: ['동신대', '동신대학교', 'dongshin university'],
        domain: 'http://www.dsu.ac.kr/',
        name: '동신대학교 수강신청',
    },
    {
        keyword: ['동아보건대', '동아보건대학교', 'donga health college'],
        domain: 'https://portal.duh.ac.kr/',
        name: '동아보건대학교 수강신청',
    },
    {
        keyword: ['목포가톨릭대', '목포가톨릭대학교', 'mokpo catholic university'],
        domain: 'http://www.mcu.ac.kr:8080/mcu/index.do',
        name: '목포가톨릭대학교 수강신청',
    },
    {
        keyword: ['목포과학대', '목포과학대학교', 'mokpo science university'],
        domain: 'http://portal.msu.ac.kr/',
        name: '목포과학대학교 수강신청',
    },
    {
        keyword: ['백제예술대', '백제예술대학교', 'paekche institute of arts'],
        domain: 'http://www.paekche.ac.kr/',
        name: '백제예술대학교 수강신청',
    },
    {
        keyword: ['세한대', '세한대학교', 'sehan university'],
        domain: 'https://portal.sehan.ac.kr/',
        name: '세한대학교 수강신청',
    },
    {
        keyword: ['순천제일대', '순천제일대학교', 'suncheon jeil college'],
        domain: 'https://jeil.suncheon.ac.kr/',
        name: '순천제일대학교 수강신청',
    },
    {
        keyword: ['영산선학대', '영산선학대학교', 'youngsan sunhak university'],
        domain: 'http://www.youngsan.ac.kr/',
        name: '영산선학대학교 수강신청',
    },
    {
        keyword: ['예수대', '예수대학교', 'jesus university'],
        domain: 'https://web.jesus.ac.kr/haksa/',
        name: '예수대학교 수강신청',
    },
    {
        keyword: ['예원예술대', '예원예술대학교', 'yewon arts university'],
        domain: 'https://webedu.yewon.ac.kr/yewon',
        name: '예원예술대학교 수강신청',
    },
    {
        keyword: ['우석대', '우석대학교', 'woosuk university'],
        domain: 'https://portal.woosuk.ac.kr/',
        name: '우석대학교 수강신청',
    },
    {
        keyword: ['원광대', '원광대학교', 'wonkwang university'],
        domain: 'http://course.wku.ac.kr/',
        name: '원광대학교 수강신청',
    },
    {
        keyword: ['원광디지털대', '원광디지털대학교', 'wonkwang digital university'],
        domain: 'http://www.wdu.ac.kr/',
        name: '원광디지털대학교 수강신청',
    },
    {
        keyword: ['원광보건대', '원광보건대학교', 'wonkwang health science college'],
        domain: 'https://portal.wu.ac.kr/',
        name: '원광보건대학교 수강신청',
    },
    {
        keyword: ['원불교대학원대', '원불교대학원대학교', 'wonbuddhist graduate school'],
        domain: 'http://www.wonbuddhism.ac.kr/',
        name: '원불교대학원대학교 수강신청',
    },
    {
        keyword: ['전남과학대', '전남과학대학교', 'jeonnam science university'],
        domain: 'https://cos.cntu.ac.kr/',
        name: '전남과학대학교 수강신청',
    },
    // {
    //     keyword: ['전남대 여수캠퍼스', '전남대학교 여수캠퍼스', 'jeonnam national university yeosu campus'],
    //     domain: 'https://sugang.jnu.ac.kr/',
    //     name: '전남대학교 여수캠퍼스 수강신청',
    // },
    {
        keyword: ['전남도립대', '전남도립대학교', 'jeonnam provincial university'],
        domain: 'http://web.dorip.ac.kr/',
        name: '전남도립대학교 수강신청',
    },
    {
        keyword: ['전북과학대', '전북과학대학교', 'jeonbuk science college'],
        domain: 'http://www.jbsc.ac.kr/',
        name: '전북과학대학교 수강신청',
    },
    {
        keyword: ['전북대', '전북대학교', 'jeonbuk national university'],
        domain: 'http://all.jbnu.ac.kr/jbnu/sugang',
        name: '전북대학교 수강신청',
    },
    {
        keyword: ['전주교대', '전주교육대학교', 'jeonju national university of education'],
        domain: 'https://portal.jnue.kr/',
        name: '전주교육대학교 수강신청',
    },
    {
        keyword: ['전주기전대', '전주기전대학', 'jeonju kijeon college'],
        domain: 'https://portal.kijeon.ac.kr/',
        name: '전주기전대학 수강신청',
    },
    {
        keyword: ['전주대', '전주대학교', 'jeonju university'],
        domain: 'https://instar.jj.ac.kr/',
        name: '전주대학교 수강신청',
    },
    {
        keyword: ['전주비전대', '전주비전대학교', 'jeonju vision university'],
        domain: 'https://portal.jvision.ac.kr/',
        name: '전주비전대학교 수강신청',
    },
    {
        keyword: ['청암대', '청암대학교', 'cheongam college'],
        domain: 'https://sugang.ca.ac.kr/',
        name: '청암대학교 수강신청',
    },
    {
        keyword: ['초당대', '초당대학교', 'chodang university'],
        domain: 'http://sugang.cdu.ac.kr/',
        name: '초당대학교 수강신청',
    },
    {
        keyword: ['농수산대', '한국농수산대학교', 'korea national college of agriculture and fisheries'],
        domain: 'https://eaps.af.ac.kr/',
        name: '한국농수산대학교 수강신청',
    },
    {
        keyword: [
            '방송대 전북지역대',
            '한국방송통신대학교 전북지역대학',
            'korea national open university jeonbuk campus',
        ],
        domain: 'https://ep.knou.ac.kr/',
        name: '한국방송통신대학교 전북지역대학 수강신청',
    },
    {
        keyword: ['한국에너지공대', '한국에너지공과대학교', 'korea institute of energy technology'],
        domain: 'https://www.kentech.ac.kr/',
        name: '한국에너지공과대학교 수강신청',
    },
    // {
    //     keyword: ['폴리텍대 목포캠퍼스', '한국폴리텍대학 목포캠퍼스', 'korea polytechnic university mokpo campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 목포캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['폴리텍대 순천캠퍼스', '한국폴리텍대학 순천캠퍼스', 'korea polytechnic university sunchon campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 순천캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['폴리텍대 익산캠퍼스', '한국폴리텍대학 익산캠퍼스', 'korea polytechnic university iksan campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 익산캠퍼스 수강신청',
    // },
    // {
    //     keyword: ['폴리텍대 전북캠퍼스', '한국폴리텍대학 전북캠퍼스', 'korea polytechnic university jeonbuk campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 전북캠퍼스 수강신청',
    // },
    {
        keyword: ['한영대', '한영대학교', 'hanyeong university'],
        domain: 'http://portal.hanyeong.ac.kr/',
        name: '한영대학교 수강신청',
    },
    {
        keyword: ['한일장신대', '한일장신대학교', 'hanil presbyterian theological university'],
        domain: 'http://hutis-u.hanil.ac.kr/Account/login',
        name: '한일장신대학교 수강신청',
    },
    {
        keyword: ['호원대', '호원대학교', 'howon university'],
        domain: 'http://www.howon.ac.kr/',
        name: '호원대학교 수강신청',
    },
    // 충청 소재 대학교 수강신청
    {
        keyword: ['가톨릭꽃동네대', '가톨릭꽃동네대학교', 'kkot university'],
        domain: 'https://werp.kkot.ac.kr/KKOTProj/Mybuilder/Biin/haksa_login.jsp',
        name: '가톨릭꽃동네대학교 수강신청',
    },
    {
        keyword: ['강동대', '강동대학교', 'gangdong university'],
        domain: 'https://stu.gangdong.ac.kr/',
        name: '강동대학교 수강신청',
    },
    {
        keyword: ['건양대', '건양대학교', 'konyang university'],
        domain: 'https://sugang.kyu.ac.kr/',
        name: '건양대학교 수강신청',
    },
    {
        keyword: ['경찰대', '경찰대학', 'korean national police university'],
        domain: 'https://knpu.police.ac.kr/',
        name: '경찰대학 수강신청',
    },
    // {
    //     keyword: ['고신대 천안캠퍼스', '고신대학교 천안캠퍼스', 'kosin university cheonan campus'],
    //     domain: 'https://ssg.kosin.ac.kr/',
    //     name: '고신대학교 천안캠퍼스 수강신청',
    // },
    {
        keyword: ['공군사관학교', 'air force academy'],
        domain: 'http://www.afa.ac.kr',
        name: '공군사관학교 수강신청',
    },
    {
        keyword: ['공주교대', '공주교육대학교', 'gongju national university of education'],
        domain: 'https://gjue.koedu.ac.kr/',
        name: '공주교육대학교 수강신청',
    },
    {
        keyword: ['공주대', '국립공주대학교', 'kongju national university'],
        domain: 'https://sugang.kongju.ac.kr',
        name: '국립공주대학교 수강신청',
    },
    {
        keyword: ['한국교통대', '국립한국교통대학교', 'korea national university of transportation'],
        domain: 'https://sugang.ut.ac.kr/',
        name: '국립한국교통대학교 수강신청',
    },
    {
        keyword: ['국방대', '국방대학교', 'national defense university'],
        domain: 'https://kemsp.kndu.ac.kr',
        name: '국방대학교 수강신청',
    },
    {
        keyword: ['극동대', '극동대학교', 'kdu'],
        domain: 'https://haksa.kdu.ac.kr/',
        name: '극동대학교 수강신청',
    },
    {
        keyword: ['글로벌사이버대', '글로벌사이버대학교', 'global cyber university'],
        domain: 'http://www.global.ac.kr/',
        name: '글로벌사이버대학교 수강신청',
    },
    {
        keyword: ['금강대', '금강대학교', 'geumgang university'],
        domain: 'https://certmis.ggu.ac.kr/',
        name: '금강대학교 수강신청',
    },
    {
        keyword: ['나사렛대', '나사렛대학교', 'korea nazarene university'],
        domain: 'http://was.kornu.ac.kr/sugang/',
        name: '나사렛대학교 수강신청',
    },
    {
        keyword: ['남서울대', '남서울대학교', 'namseoul university'],
        domain: 'https://biz.nsu.ac.kr/NSUSite/Login.aspx',
        name: '남서울대학교 수강신청',
    },
    {
        keyword: ['대원대', '대원대학교', 'daewon university'],
        domain: 'http://www.daewon.ac.kr/',
        name: '대원대학교 수강신청',
    },
    {
        keyword: ['백석대', '백석대학교', 'baekseok university'],
        domain: 'https://tcmssso.bu.ac.kr/svc/tk/Auth.eps?ac=Y&ifa=N&id=portal',
        name: '백석대학교 수강신청',
    },
    {
        keyword: ['백석문화대', '백석문화대학교', 'baekseok culture university'],
        domain: 'https://tcmssso.bscu.ac.kr/svc/tk/Auth.eps?ac=Y&ifa=N&id=portal',
        name: '백석문화대학교 수강신청',
    },
    {
        keyword: [],
        domain: 'https://smsso.smu.ac.kr/',
        name: '상명대학교 수강신청',
    },
    {
        keyword: ['서원대', '서원대학교', 'seowon university'],
        domain: 'https://sugangh.seowon.ac.kr/',
        name: '서원대학교 수강신청',
    },
    {
        keyword: ['선문대', '선문대학교', 'sunmoon university'],
        domain: 'https://sws.sunmoon.ac.kr/',
        name: '선문대학교 수강신청',
    },
    {
        keyword: ['세명대', '세명대학교', 'semyung university'],
        domain: 'http://portal.semyung.ac.kr/',
        name: '세명대학교 수강신청',
    },
    {
        keyword: ['순천향대', '순천향대학교', 'soonchunhyang university'],
        domain: 'https://sugang.sch.ac.kr/',
        name: '순천향대학교 수강신청',
    },
    {
        keyword: ['신성대', '신성대학교', 'shinsung university'],
        domain: 'https://ssso.shinsung.ac.kr/',
        name: '신성대학교 수강신청',
    },
    {
        keyword: ['아주자동차대', '아주자동차대학교', 'ajou motor college'],
        domain: 'https://portal.motor.ac.kr/',
        name: '아주자동차대학교 수강신청',
    },
    {
        keyword: ['연암대', '연암대학교', 'yonam college'],
        domain: 'http://portal.yonam.ac.kr/',
        name: '연암대학교 수강신청',
    },
    {
        keyword: ['유원대', '유원대학교', 'u1 university'],
        domain: 'https://student.u1.ac.kr/',
        name: '유원대학교 수강신청',
    },
    {
        keyword: ['중부대', '중부대학교', 'joongbu university'],
        domain: 'https://sg.joongbu.ac.kr/',
        name: '중부대학교 수강신청',
    },
    {
        keyword: ['중원대', '중원대학교', 'joongwon university'],
        domain: 'http://haksa.jwu.ac.kr/com/index_sugang.html',
        name: '중원대학교 수강신청',
    },
    {
        keyword: ['청운대', '청운대학교', 'chungwoon university'],
        domain: 'http://cwuis.chungwoon.ac.kr/lecture/',
        name: '청운대학교 수강신청',
    },
    {
        keyword: ['청주대', '청주대학교', '청주대학교 수강신청', 'cju', 'cheongju university'],
        domain: 'https://sugang.cju.ac.kr/',
        name: '청주대학교 수강신청',
    },
    {
        keyword: ['청주교대', '청주교육대학교', 'cheongju national university of education'],
        domain: 'http://eclass.cje.ac.kr/',
        name: '청주교육대학교 수강신청',
    },
    {
        keyword: ['충남도립대', '충남도립대학교', 'chungnam provincial university'],
        domain: 'http://tis.cnsu.ac.kr/',
        name: '충남도립대학교 수강신청',
    },
    {
        keyword: ['충북대', '충북대학교', 'chungbuk national university'],
        domain: 'http://eisa.cbnu.ac.kr/atlecLogin',
        name: '충북대학교 수강신청',
    },
    {
        keyword: ['충북보건과학대', '충북보건과학대학교', 'chungbuk health & science university'],
        domain: 'https://ctis.chsu.ac.kr/',
        name: '충북보건과학대학교 수강신청',
    },
    {
        keyword: ['충청대', '충청대학교', 'chungcheong university'],
        domain: 'https://sso.ok.ac.kr/svc/tk/Auth.do?id=portal',
        name: '충청대학교 수강신청',
    },
    {
        keyword: ['교원대', '한국교원대학교', 'korea national university of education'],
        domain: 'https://sugang.knue.ac.kr/',
        name: '한국교원대학교 수강신청',
    },
    {
        keyword: ['코리아텍', '한국기술교육대학교', 'koreatech'],
        domain: 'https://portal.koreatech.ac.kr/',
        name: '한국기술교육대학교 수강신청',
    },
    {
        keyword: ['전통문화대', '한국전통문화대학교', 'korean national university of cultural heritage'],
        domain: 'https://haksa.nuch.ac.kr/',
        name: '한국전통문화대학교 수강신청',
    },
    // {
    //     keyword: ['폴리텍 바이오캠퍼스', '한국폴리텍대학 바이오캠퍼스', 'korea polytechnic university bio campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 바이오캠퍼스 수강신청',
    // },
    {
        keyword: ['한서대', '한서대학교', 'hanseo university'],
        domain: 'https://nsugang.hanseo.ac.kr',
        name: '한서대학교 수강신청',
    },
    {
        keyword: ['호서대', '호서대학교', 'hoseo university'],
        domain: 'https://sugang.hsu.ac.kr/',
        name: '호서대학교 수강신청',
    },
    {
        keyword: ['혜전대', '혜전대학교', 'hyejeon college'],
        domain: 'https://sugang.hj.ac.kr:8443/',
        name: '혜전대학교 수강신청',
    },
    // 제주 소재 대학교 수강신청
    {
        keyword: ['제주관광대', '제주관광대학교', 'jeju tourism university'],
        domain: 'http://www.jtu.ac.kr',
        name: '제주관광대학교 수강신청',
    },
    {
        keyword: ['제주국제대', '제주국제대학교', 'jeju international university'],
        domain: 'http://www.jeju.ac.kr/',
        name: '제주국제대학교 수강신청',
    },
    {
        keyword: ['제주대', '제주대학교', 'jeju national university'],
        domain: 'https://sugang.jejunu.ac.kr/',
        name: '제주대학교 수강신청',
    },
    // {
    //     keyword: ['제주대 사라캠퍼스', '제주대학교 사라캠퍼스', 'jeju national university sara campus'],
    //     domain: 'https://sugang.jejunu.ac.kr/',
    //     name: '제주대학교 사라캠퍼스 수강신청',
    // },
    {
        keyword: ['제주한라대', '제주한라대학교', 'jeju halla university'],
        domain: 'https://sso.chu.ac.kr/jsp/sso/ip/login_form.jsp',
        name: '제주한라대학교 수강신청',
    },
    {
        keyword: ['방송대 제주', '한국방송통신대학교 제주지역대학', 'korea national open university jeju campus'],
        domain: 'https://ep.knou.ac.kr/',
        name: '한국방송통신대학교 제주지역대학 수강신청',
    },
    // {
    //     keyword: ['폴리텍 제주캠퍼스', '한국폴리텍대학 제주캠퍼스', 'korea polytechnic university jeju campus'],
    //     domain: 'https://p.kopo.ac.kr/login.jsp',
    //     name: '한국폴리텍대학 제주캠퍼스 수강신청',
    // },
    // 초중고등학교
    {
        keyword: ['대원국제중', '대원국제중학교', 'daewonms'],
        domain: 'https://daewonms.riroschool.kr/',
        name: '대원국제중 진로진학사이트',
    },
    {
        keyword: ['대일외고', '대일외국어고등학교', 'daeil'],
        domain: 'https://itmaindaeil.cafe24.com/',
        name: '대일외고 방과후학교 운영시스템',
    },
    {
        keyword: ['디비디비스쿨', '자유학기제', '방과후학교', 'dbdbschool', 'dbdbschool.kr'],
        domain: 'https://www.dbdbschool.kr/',
        name: '디비디비스쿨',
    },
    {
        keyword: ['대전고', '대전고 방과후학교', 'mydjschs.cafe24.com'],
        domain: 'https://mydjschs.cafe24.com/',
        name: '대전고등학교 방과후학교',
    },
    {
        keyword: ['진진리서치'],
        domain: 'https://u.jjrss.com/',
        name: '진진리서치',
    },
    // 대학교 관련
    {
        keyword: ['과기대 생활관'],
        domain: 'https://dormirs.seoultech.ac.kr',
        name: '서울과학기술대학교 생활관',
    },
    {
        keyword: ['고려대 도서관', '고대도서관'],
        domain: 'https://library.korea.ac.kr',
        name: '고려대학교 도서관',
    },
    {
        keyword: ['건국대학교 행정정보시스템'],
        domain: 'https://kupis.konkuk.ac.kr',
        name: '건국대학교 행정정보시스템',
    },
    {
        keyword: ['inu.ac.kr'],
        domain: 'https://www.inu.ac.kr/',
        name: '인천대학교 홈페이지',
    },
    {
        keyword: ['한양대 포털', '한양대학교 포털'],
        domain: 'https://portal.hanyang.ac.kr/',
        name: '한양대학교 포털',
    },
    {
        keyword: ['백석대 생활관'],
        domain: 'https://dormitory.bu.ac.kr/',
        name: '백석대학교 생활관',
    },
    {
        keyword: ['hannam.ac.kr'],
        domain: 'http://www.hannam.ac.kr/',
        name: '한남대학교',
    },
    {
        keyword: [],
        domain: 'https://kangwon.ac.kr/',
        name: '강원대학교',
    },
    {
        keyword: [],
        domain: 'https://kcloud.kangwon.ac.kr/',
        name: '강원대학교 통합플랫폼 K-Cloud',
    },
    {
        keyword: ['연세대입학처', '연세대 입학처', '연세대학교 입학처'],
        domain: 'https://admission.yonsei.ac.kr/',
        name: '연세대학교 입학처',
    },
    {
        keyword: ['경북대 기숙사', '경북대기숙사', '경북대학교 기숙사'],
        domain: 'https://dormt.knu.ac.kr',
        name: '경북대학교 기숙사',
    },
    {
        keyword: ['고베디자인대', 'KDU'],
        domain: 'https://portal.kobe-du.ac.jp',
        name: 'KOBE DESIGN UNIVERSITY Portal',
    },
    {
        keyword: [],
        domain: 'https://ctl.duksung.ac.kr/',
        name: '덕성여자대학교 교수학습개발센터',
    },
    // 기타
    {
        keyword: ['아이즈매거진'],
        domain: 'https://eyesmag.com',
        name: '아이즈매거진',
    },
    {
        keyword: ['업비트', 'upbit'],
        domain: 'https://www.upbit.com',
        name: '업비트',
    },
    {
        keyword: ['혁신의숲'],
        domain: 'https://www.innoforest.co.kr/',
        name: '혁신의숲',
    },
    {
        keyword: ['에이밍마켓'],
        domain: 'https://www.aimingmarket.com',
        name: '에이밍마켓',
    },
    {
        keyword: ['넷플릭스', '넷플'],
        domain: 'https://netflix.com',
        name: '넷플릭스',
    },
    {
        keyword: ['디즈니플러스'],
        domain: 'https://disneyplus.com',
        name: '디즈니플러스',
    },
    {
        keyword: ['왓챠'],
        domain: 'https://watcha.com',
        name: '왓챠',
    },
    {
        keyword: ['티빙'],
        domain: 'https://tving.com',
        name: '티빙',
    },
    {
        keyword: ['링커리어'],
        domain: 'https://linkareer.com',
        name: '링커리어',
    },
    {
        keyword: ['잡코리아'],
        domain: 'https://jobkorea.co.kr',
        name: '잡코리아',
    },
    {
        keyword: ['마켓컬리'],
        domain: 'https://kurly.com',
        name: '마켓컬리',
    },
    {
        keyword: ['지마켓', 'G마켓'],
        domain: 'https://www.gmarket.co.kr/',
        name: 'G마켓',
    },
    {
        keyword: ['쓱', 'ssg'],
        domain: 'https://ssg.com',
        name: '신세계 쓱',
    },
    {
        keyword: ['ZOOM', '줌'],
        domain: 'https://zoom.us',
        name: 'ZOOM',
    },
    {
        keyword: ['네이비즘'],
        domain: 'https://time.navyism.com',
        name: '네이비즘',
    },
    {
        keyword: [],
        domain: 'https://navyism.com',
        name: '네이비즘',
    },
    {
        keyword: ['OP.GG'],
        domain: 'https://op.gg',
        name: 'OP.GG',
    },
    {
        keyword: ['Kumo'],
        domain: 'https://kumothekat.com/',
        name: 'Kumo',
    },
    {
        keyword: ['스파크플러스', 'sparkplus'],
        domain: 'https://sparkplus.kr/',
        name: '스파크플러스',
    },
    {
        keyword: [],
        domain: 'https://www.sparkplus.co',
        name: 'SPARKPLUS',
    },
    {
        keyword: [],
        domain: 'https://sparkplus.co',
        name: 'SPARKPLUS',
    },
    {
        keyword: ['AWS'],
        domain: 'https://aws.amazon.com',
        name: 'AWS',
    },
    {
        keyword: ['아마존', 'amazon'],
        domain: 'https://www.amazon.com',
        name: '아마존',
    },
    {
        keyword: [],
        domain: 'https://amazon.com',
        name: '아마존',
    },
    {
        keyword: ['KT콘텐츠페이', 'KT 콘텐츠페이', 'ktconpay'],
        domain: 'https://ktconpay.com',
        name: 'KT콘텐츠페이',
    },
    {
        keyword: ['CNN'],
        domain: 'https://edition.cnn.com',
        name: 'CNN',
    },
    {
        keyword: [],
        domain: 'https://cnn.com',
        name: 'CNN',
    },
    {
        keyword: ['Alibaba CDN', 'alicdn'],
        domain: 'https://alicdn.com',
        name: 'Alibaba CDN',
    },
    {
        keyword: ['NICT'],
        domain: 'https://www.nict.go.jp/',
        name: 'NICT',
    },
    {
        keyword: ['왓타'],
        domain: 'https://www.whata.co.kr/',
        name: '왓타',
    },
    {
        keyword: [''],
        domain: 'https://whata.co.kr/',
        name: '왓타',
    },
    {
        keyword: ['bitly'],
        domain: 'https://bit.ly',
        name: 'bit.ly',
    },
    {
        keyword: [''],
        domain: 'https://bitly.com/',
        name: 'Bitly',
    },
    {
        keyword: ['리디', 'RIDI'],
        domain: 'https://ridibooks.com/',
        name: '리디 RIDI',
    },
    {
        keyword: ['아이디샵', 'ideeshop'],
        domain: 'https://www.ideeshop.kr/',
        name: '아이디샵',
    },
    {
        keyword: [],
        domain: 'https://ideeshop.kr/',
        name: '아이디샵',
    },
    {
        keyword: ['넥슨', 'nexon'],
        domain: 'https://www.nexon.com/',
        name: '넥슨',
    },
    {
        keyword: [],
        domain: 'https://nexon.com/',
        name: '넥슨 게임',
    },
    {
        keyword: ['KRISS', '한국표준과학연구원'],
        domain: 'https://www.kriss.re.kr/',
        name: 'KRISS 한국표준과학연구원',
    },
    {
        keyword: [],
        domain: 'https://kriss.re.kr/',
        name: '한국표준과학연구원',
    },
    {
        keyword: [],
        domain: 'https://kriss.re.kr/',
        name: '한국표준과학연구원',
    },
    {
        keyword: ['타임시커', 'timecker'],
        domain: 'https://timecker.com',
        name: '타임시커',
    },
    {
        keyword: ['세브란스 임상시험', 'crms'],
        domain: 'https://crms.yuhs.ac/',
        name: '세브란스 임상시험 포털',
    },
    {
        keyword: [],
        domain: 'https://ocr.yuhs.ac/',
        name: '세브란스 임상시험 포털',
    },
    {
        keyword: ['코인원', 'coinone'],
        domain: 'https://coinone.co.kr/',
        name: '코인원',
    },
    {
        keyword: ['동행복권', '로또', '복권'],
        domain: 'https://www.dhlottery.co.kr/',
        name: '동행복권',
    },
    {
        keyword: [],
        domain: 'https://dhlottery.co.kr/',
        name: '동행복권',
    },
    {
        keyword: ['폰디', 'fondee'],
        domain: 'https://fondee.io/',
        name: '폰디',
    },
    {
        keyword: [],
        domain: 'https://ably.com/',
        name: 'Ably',
    },
    {
        keyword: ['모트모트'],
        domain: 'https://motemote.kr/',
        name: '모트모트',
    },
    {
        keyword: [],
        domain: 'https://m.motemote.kr/',
        name: '모트모트',
    },
    {
        keyword: ['구글광고'],
        domain: 'https://www.googleadservices.com',
        name: '구글광고',
    },
    {
        keyword: ['엠넷플러스 고객센터', '엠플 고객센터'],
        domain: 'https://mnetplus.zendesk.com/',
        name: '엠넷플러스 고객센터',
    },
    {
        keyword: ['엠넷플러스 고객센터', '엠플 고객센터'],
        domain: 'https://mnetplus.zendesk.com/',
        name: '엠넷플러스 고객센터',
    },
    {
        keyword: ['제주평생교육다모아'],
        domain: 'https://damoa.jeju.kr/',
        name: '제주평생교육다모아',
    },
    {
        keyword: ['연록'],
        domain: 'https://yeonrok.shop/',
        name: '연록',
    },
    {
        keyword: ['윗치폼'],
        domain: 'https://www.witchform.com/',
        name: '윗치폼',
    },
    {
        keyword: [],
        domain: 'https://witchform.com/',
        name: '윗치폼',
    },
    {
        keyword: ['코하', 'COHA'],
        domain: 'https://coha.kr/',
        name: '코하 COHA',
    },
    {
        keyword: ['강원더몰'],
        domain: 'https://gwdmall.kr/',
        name: '강원더몰',
    },
    {
        keyword: ['TMM', '티엠엠'],
        domain: 'https://takemm.com/',
        name: 'TMM 온라인 주문서',
    },
    {
        keyword: ['뉴베러'],
        domain: 'https://nuebetter.com/',
        name: '뉴베러',
    },
    {
        keyword: ['postarchivefaction.com'],
        domain: 'https://postarchivefaction.com/',
        name: 'POST ARCHIVE FACTION',
    },
    {
        keyword: ['위메프', 'wemakeprice'],
        domain: 'https://front.wemakeprice.com/',
        name: '위메프',
    },
    {
        keyword: ['칠성몰', 'lottechilsung'],
        domain: 'https://mall.lottechilsung.co.kr/',
        name: '칠성몰',
    },
    {
        keyword: ['칠성몰', 'lottechilsung'],
        domain: 'https://mall.lottechilsung.co.kr/',
        name: '칠성몰',
    },
    {
        keyword: ['애프터디너클럽', 'afterdinnerclub'],
        domain: 'https://afterdinnerclub.kr/',
        name: '애프터디너클럽',
    },
    {
        keyword: ['제너럴아이디어'],
        domain: 'https://generalidea.co.kr/',
        name: 'GENERAL IDEA',
    },
    {
        keyword: ['마이크로소프트', '마소', 'microsoft'],
        domain: 'https://www.microsoft.com/',
        name: '마이크로소프트',
    },
    {
        keyword: ['텝스 스탭'],
        domain: 'https://staff.teps.or.kr/',
        name: '텝스 시험인력 스탭',
    },
    {
        keyword: ['텀블벅', 'tumblbug'],
        domain: 'https://tumblbug.com/',
        name: '텀블벅',
    },
    {
        keyword: ['모아폼', 'moaform'],
        domain: 'https://answer.moaform.com/',
        name: '모아폼',
    },
    {
        keyword: [],
        domain: 'https://moaform.com/',
        name: '모아폼 moaform',
    },
    {
        keyword: ['리로스쿨', 'riroschool'],
        domain: 'https://riroschool.kr/',
        name: '리로스쿨',
    },
    {
        keyword: ['롯데온', 'lotteon'],
        domain: 'https://www.lotteon.com/',
        name: '롯데온',
    },
    {
        keyword: ['캠핏', 'camfit'],
        domain: 'https://camfit.co.kr/',
        name: '캠핏',
    },
    {
        keyword: ['판판대로'],
        domain: 'https://fanfandaero.kr/',
        name: '판판대로',
    },
    {
        keyword: ['오늘의집'],
        domain: 'https://ohou.se/',
        name: '오늘의집',
    },
    {
        keyword: ['삼성카드 웨딩'],
        domain: 'https://wedding.samsungcard.com/',
        name: '삼성카드 웨딩',
    },
    {
        keyword: ['여기어때'],
        domain: 'https://www.yeogi.com/',
        name: '여기어때',
    },
    {
        keyword: ['NOL', '놀', '야놀자', 'yanolja'],
        domain: 'https://nol.yanolja.com/',
        name: 'NOL(구 야놀자)',
    },
    {
        keyword: [],
        domain: 'https://yanolja.com/',
        name: '야놀자',
    },
    {
        keyword: ['에이원CC'],
        domain: 'https://www.a-onecc.co.kr/',
        name: '에이원CC',
    },
    {
        keyword: ['수상안전 종합정보'],
        domain: 'https://imsm.kcg.go.kr/',
        name: '수상안전 종합정보',
    },
    {
        keyword: ['하이홈, SK하이홈'],
        domain: 'https://hihome.skhynix.com/',
        name: 'SK하이홈',
    },
    {
        keyword: ['데이지크, dasique'],
        domain: 'https://dasique.co.kr/',
        name: '데이지크',
    },
    {
        keyword: [],
        domain: 'https://m.dasique.co.kr/',
        name: '데이지크',
    },
    {
        keyword: ['아루마루'],
        domain: 'https://arumaru.com/',
        name: '아루마루',
    },
    {
        keyword: ['바스템', 'bathtem'],
        domain: 'https://bath2u.co.kr/',
        name: '바스템',
    },
    {
        keyword: ['소상공인정책자금'],
        domain: 'https://ols.semas.or.kr/',
        name: '소상공인정책자금',
    },
    {
        keyword: ['용산베르디움'],
        domain: 'https://ys-vertium-friends.co.kr/',
        name: '용산 베르디움 프렌즈',
    },
    {
        keyword: ['잇올 스파르타'],
        domain: 'https://www.itall.com/',
        name: '잇올 스파르타',
    },
    {
        keyword: ['롯데마트 문화센터'],
        domain: 'https://culture.lottemart.com',
        name: '롯데마트 문화센터',
    },
];

const options = {
    keys: ['keyword'],
    threshold: 0.3,
    includeScore: true,
    useExtendedSearch: true,
};

const fuse = new Fuse(mappings, options);

export const searchWithSemantic = (input) => {
    const results = fuse.search(input);
    if (results.length > 0) {
        return results[0].item;
    }
    return null;
};

export default mappings;
