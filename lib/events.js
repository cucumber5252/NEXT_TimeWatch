// 파리올림픽 7/26 - 8/11 이 기간 동안 음방 x
// 현재 마지막 id 708번 (여기 계속 마지막 id 업데이트 해주기!!)
// 이벤트 추가할 때 id 순서가 아닌 '시간 순서'로 넣기

const events = {
    '2024-07-01': [
        {
            id: 1,
            time: '19:00',
            title: '양홍원 단독 콘서트 [오보에] 1회차 예매',
            link: 'http://ticket.yes24.com/',
            img: '/oboe_concert.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/50192',
                },
                {
                    name: 'KREAM',
                    link: 'https://kream.co.kr/',
                },
            ],
            category: '예매',
        },
        {
            id: 2,
            time: '20:00',
            title: '2024 Red Velvet FANCON TOUR 〈HAPPINESS：My Dear，ReVe1uv〉 in SEOUL 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0701redvelvet.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210009',
                },
            ],
            category: '예매',
        },
        {
            id: 3,
            time: '20:00',
            title: '2024 KIM SUNG KYU CONCERT [LV3 : Let`s Vacay] 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0701kimsungkyu.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/50692',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-02': [],
    '2024-07-03': [
        {
            id: 5,
            time: '20:00',
            title: '2024 Red Velvet FANCON TOUR 〈HAPPINESS：My Dear，ReVe1uv〉 in SEOUL 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0701redvelvet.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210009',
                },
            ],
            category: '예매',
        },
        {
            id: 6,
            time: '20:00',
            title: '2024 KIM SUNG KYU CONCERT [LV3 : Let`s Vacay] 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0701kimsungkyu.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/50692',
                },
            ],
            category: '예매',
        },
        {
            id: 102,
            time: '20:00',
            title: '2024 K．WILL FANMEETING 〈케엠핑〉 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0703kwill.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210062',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-04': [
        {
            id: 9,
            time: '19:00',
            title: '양홍원 단독 콘서트 [오보에] 2회차 예매',
            link: 'http://ticket.yes24.com/',
            img: '/oboe_concert.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/50192',
                },
                {
                    name: 'KREAM',
                    link: 'https://kream.co.kr/',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-05': [],
    '2024-07-06': [],
    '2024-07-08': [
        {
            id: 103,
            time: '20:00',
            title: '2024 K．WILL FANMEETING 〈케엠핑〉 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0703kwill.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210062',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-09': [
        {
            id: 15,
            time: '20:00',
            title: 'BoA LIVE TOUR－BoA：One’s Own 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0709boa.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210061',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-10': [
        {
            id: 17,
            time: '14:00',
            title: '2024 최강야구 최강 몬스터즈 vs 연세대학교',
            link: 'https://www.ticketlink.co.kr/sports/',
            img: '/최강야구.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/sports/',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-11': [
        {
            id: 20,
            time: '20:00',
            title: '2024 박재범 팬미팅 [Jay Park Season 3: Dedicated 2 U]',
            link: 'https://tickets.interpark.com/',
            img: '/jaypark_fanmeet.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009219',
                },
            ],
            category: '예매',
        },
        {
            id: 21,
            time: '20:00',
            title: '2024 Red Velvet FANCON TOUR 〈HAPPINESS：My Dear，ReVe1uv〉 in SEOUL 추가 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0701redvelvet.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210009',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-12': [
        {
            id: 24,
            time: '18:00',
            title: '키코 코스타디노브 X 아식스 Gel-Flamme 발매',
            link: 'https://asics.co.kr/',
            img: '/0712kiko.svg',
            companies: [
                {
                    name: 'Asics',
                    link: 'https://asics.co.kr/',
                },
            ],
            category: '발매',
        },
    ],
    '2024-07-13': [
        {
            id: 27,
            time: '11:00',
            title: 'N.HOOLYWOOD x INVINCIBLE x NEW BALANCE 1906U',
            link: 'https://www.nbkorea.com',
            img: '/0713newbal.svg',
            companies: [
                {
                    name: 'New Balance',
                    link: 'https://www.nbkorea.com',
                },
            ],
            category: '발매',
        },
    ],
    '2024-07-15': [
        {
            id: 32,
            time: '11:00',
            title: '[망그러진 곰과 비밀의 다락방] 더현대 팝업',
            link: 'https://booking.kakao.com',
            img: '/0715manggom.svg',
            companies: [
                {
                    name: '카카오 예약하기',
                    link: 'https://booking.kakao.com/short/TVQU9zmi3e',
                },
            ],
            category: '신청',
        },
        {
            id: 33,
            time: '17:00',
            title: '쿠팡이츠 배스킨라빈스 던킨도너츠 선착순 13,500원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0715-0721coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 34,
            time: '20:00',
            title: 'BABYMONSTER SEE YOU THERE FINALE IN SEOUL',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0715baby.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/50926',
                },
            ],
            category: '예매',
        },
        {
            id: 35,
            time: '20:00',
            title: '2024 (G)I-DLE WORLD TOUR [iDOL] IN SEOUL 추가 좌석 오픈',
            link: 'https://ticket.melon.com/',
            img: '/gidle_concert.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=209948',
                },
            ],
            category: '예매',
        },
        {
            id: 36,
            time: '20:00',
            title: 'LIVE ON BTOB X N.Flying 라이브온 비투비 x 엔플라잉',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0715liveon.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/50999',
                },
            ],
            category: '예매',
        },
        {
            id: 37,
            time: '20:00',
            title: '2024 LEE GIKWANG SOLO CONCERT ［OBSESSED］ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0715leegikwang.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009570',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-16': [
        {
            id: 39,
            time: '10:00',
            title: '2024 진에어 올해 마지막 항공권 세일 진MARKET',
            link: 'https://www.jinair.com/HOM/jinmarket.html',
            img: '/0716jinair.svg',
            companies: [
                {
                    name: '진에어',
                    link: 'https://www.jinair.com/promotion/eventView?evntSeq=13374&cid=PaidSearch_naver_TKT-Sales_jinmarket24_brand_teaser_20240710_selcpb',
                },
            ],
            category: '예매',
        },
        {
            id: 40,
            time: '17:00',
            title: '쿠팡이츠 배스킨라빈스 던킨도너츠 선착순 13,500원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0715-0721coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 41,
            time: '20:00',
            title: '2024 RIIZE FAN－CON ‘RIIZING DAY’ FINALE in SEOUL',
            link: 'https://ticket.melon.com/',
            img: '/0716riize.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210031',
                },
            ],
            category: '예매',
        },
        {
            id: 42,
            time: '20:00',
            title: 'BABYMONSTER SEE YOU THERE FINALE IN SEOUL',
            link: 'https://tickets.interpark.com/',
            img: '/0715baby.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009578',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-17': [
        {
            id: 44,
            time: '10:00',
            title: '2024 진에어 국제선 임박편 할인 진MARKET 기간 한정',
            link: 'https://www.jinair.com/HOM/jinmarket.html',
            img: '/0717jinair.svg',
            companies: [
                {
                    name: '진에어',
                    link: 'https://www.jinair.com',
                },
            ],
            category: '예매',
        },
        {
            id: 45,
            time: '12:00',
            title: 'TAEYANG 2024 TOUR ［THE LIGHT YEAR］ IN SEOUL',
            link: 'https://tickets.interpark.com/',
            img: '/0717taeyang.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010220?',
                },
            ],
            category: '예매',
        },
        {
            id: 46,
            time: '17:00',
            title: '쿠팡이츠 배스킨라빈스 던킨도너츠 선착순 13,500원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0715-0721coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 47,
            time: '20:00',
            title: '2024 박재범 팬미팅 [Jay Park Season 3: Dedicated 2 U] 추가회차 예매',
            link: 'https://tickets.interpark.com/',
            img: '/jaypark_fanmeet.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009219',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-18': [
        {
            id: 50,
            time: '00:00',
            title: '아 마 마니에르 x 에어 조던 3 버건디 크러쉬 발매',
            link: 'https://www.nike.com/kr/launch',
            img: '/0718jordan.svg',
            companies: [
                {
                    name: 'Nike',
                    link: 'https://www.nike.com/kr/launch',
                },
            ],
            category: '발매',
        },
        {
            id: 51,
            time: '13:00',
            title: 'AAA TOUR BY HYUKOH ＆ SUNSET ROLLERCOASTER',
            link: 'https://tickets.interpark.com/',
            img: '/0718hyukoh.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010289',
                },
            ],
            category: '예매',
        },
        {
            id: 52,
            time: '17:00',
            title: '쿠팡이츠 배스킨라빈스 던킨도너츠 선착순 13,500원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0715-0721coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 53,
            time: '20:00',
            title: '잔나비 콘서트 < 판타스틱 올드 패션드 2024 : MOVIE STAR RISING > - 서울 1주차',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0718jannabi.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/51059',
                },
            ],
            category: '예매',
        },
        {
            id: 54,
            time: '20:00',
            title: '2024 LEE GIKWANG SOLO CONCERT ［OBSESSED］ 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0715leegikwang.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009570',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-19': [
        {
            id: 57,
            time: '09:00',
            title: '스투시x나이키 2024 가을 협업 컬렉션',
            link: 'https://www.nike.com/jp/launch',
            img: '/2024fall_nikestussy.svg',
            companies: [
                {
                    name: 'Nike JP',
                    link: 'https://www.nike.com/jp/launch',
                },
            ],
            category: '발매',
        },
        {
            id: 58,
            time: '10:00',
            title: '스투시x나이키 2024 가을 협업 컬렉션',
            link: 'https://www.nike.com/kr/launch',
            img: '/2024fall_nikestussy.svg',
            companies: [
                {
                    name: 'Nike KR',
                    link: 'https://www.nike.com/kr/launch',
                },
            ],
            category: '발매',
        },
        {
            id: 59,
            time: '17:00',
            title: '쿠팡이츠 배스킨라빈스 던킨도너츠 선착순 13,500원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0715-0721coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 60,
            time: '20:00',
            title: 'BABYMONSTER SEE YOU THERE FINALE IN SEOUL 시야제한석',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0715baby.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/50926',
                },
            ],
            category: '예매',
        },
        {
            id: 61,
            time: '20:00',
            title: 'BABYMONSTER SEE YOU THERE FINALE IN SEOUL 시야제한석',
            link: 'https://tickets.interpark.com/',
            img: '/0715baby.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009578',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-20': [
        {
            id: 64,
            time: '17:00',
            title: '쿠팡이츠 배스킨라빈스 던킨도너츠 선착순 13,500원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0715-0721coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-07-21': [
        {
            id: 65,
            time: '17:00',
            title: '쿠팡이츠 배스킨라빈스 던킨도너츠 선착순 13,500원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0715-0721coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-07-22': [
        {
            id: 84,
            time: '17:00',
            title: '쿠팡이츠 네네치킨 선착순 18,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0722-0728coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 66,
            time: '20:00',
            title: 'IVE THE 1ST WORLD TOUR ‘SHOW WHAT I HAVE’－ENCORE 시야제한석',
            link: 'https://ticket.melon.com/',
            img: '/0722ivetour.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=209989',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-23': [
        {
            id: 85,
            time: '17:00',
            title: '쿠팡이츠 네네치킨 선착순 18,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0722-0728coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 67,
            time: '20:00',
            title: '2024 TAEMIN WORLD TOUR [ Ephemeral Gaze ] IN INCHEON 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0726taemin.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010307',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-24': [
        {
            id: 86,
            time: '17:00',
            title: '쿠팡이츠 네네치킨 선착순 18,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0722-0728coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 69,
            time: '19:00',
            title: '잔나비 콘서트 < 판타스틱 올드 패션드 2024 : MOVIE STAR RISING > - 부산',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0718jannabi.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/51165',
                },
            ],
            category: '예매',
        },
        {
            id: 70,
            time: '20:00',
            title: '잔나비 콘서트 < 판타스틱 올드 패션드 2024 : MOVIE STAR RISING > - 서울 2주차',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0718jannabi.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/51059',
                },
            ],
            category: '예매',
        },
        {
            id: 71,
            time: '20:00',
            title: '2024 B-day PARTY - XIAOJUN [SING TO YOU] 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0724xiaojun.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50367',
                },
            ],
            category: '예매',
        },
        {
            id: 72,
            time: '20:00',
            title: '2024 STAYC FANMEETING [STAYC MOVIE CLUB] 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0724stayc.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009404',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-25': [
        {
            id: 91,
            time: '14:00',
            title: '뮤지컬 〈시카고〉 TOPING & 신시컴퍼니 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0725chicago.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24005266',
                },
                {
                    name: '신시컴퍼니',
                    link: 'https://www.iseensee.com/Home/Perf/MakingDetail.aspx?IdPerf=1190',
                },
            ],
            category: '예매',
        },
        {
            id: 92,
            time: '15:00',
            title: '뮤지컬 〈시카고〉 TOPING & 신시컴퍼니 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0725chicago.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24005266',
                },
                {
                    name: '신시컴퍼니',
                    link: 'https://www.iseensee.com/Home/Perf/MakingDetail.aspx?IdPerf=1190',
                },
            ],
            category: '예매',
        },
        {
            id: 87,
            time: '17:00',
            title: '쿠팡이츠 네네치킨 선착순 18,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0722-0728coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 73,
            time: '20:00',
            title: '2024 B-day PARTY - XIAOJUN [SING TO YOU] 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0724xiaojun.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50367',
                },
            ],
            category: '예매',
        },
        {
            id: 74,
            time: '20:00',
            title: '2024 STAYC FANMEETING [STAYC MOVIE CLUB] 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0724stayc.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009404',
                },
            ],
            category: '예매',
        },
        {
            id: 75,
            time: '20:00',
            title: '2024 B.A.P 방정유문 THE LAST FAN-CON [CURTAIN CALL] 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0725bap.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010201',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-26': [
        {
            id: 88,
            time: '17:00',
            title: '쿠팡이츠 네네치킨 선착순 18,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0722-0728coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 76,
            time: '20:00',
            title: '2024 TAEMIN WORLD TOUR [ Ephemeral Gaze ] IN INCHEON 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0726taemin.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010307',
                },
            ],
            category: '예매',
        },
        {
            id: 97,
            time: '20:00',
            title: '2024 울산서머페스티벌－쇼！음악중심',
            link: 'https://ticket.melon.com/',
            img: '/0726ulsan.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210163',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-27': [
        {
            id: 89,
            time: '17:00',
            title: '쿠팡이츠 네네치킨 선착순 18,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0722-0728coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-07-28': [
        {
            id: 90,
            time: '17:00',
            title: '쿠팡이츠 네네치킨 선착순 18,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0722-0728coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-07-29': [
        {
            id: 105,
            time: '15:00',
            title: '극장총집편 봇치 더 록! QWER 무대인사 & 함께 상영회',
            link: 'https://www.cgv.co.kr/',
            img: '/0729qwer.svg',
            companies: [
                {
                    name: 'CGV',
                    link: 'http://www.cgv.co.kr/culture-event/event/detailViewUnited.aspx?seq=41333',
                },
            ],
            category: '예매',
        },
        {
            id: 95,
            time: '19:00',
            title: 'dingo music concert <Killing Voice>',
            link: 'https://tickets.interpark.com/',
            img: '/0729dingo.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010728',
                },
            ],
            category: '예매',
        },
        {
            id: 77,
            time: '20:00',
            title: '2024 B.A.P 방정유문 THE LAST FAN-CON [CURTAIN CALL] 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0725bap.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010201',
                },
            ],
            category: '예매',
        },
        {
            id: 80,
            time: '20:00',
            title: 'Ye & Ty Dolla $ign VULTURES LISTENING EXPERIENCE 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0729ye.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210164',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-30': [
        {
            id: 78,
            time: '19:00',
            title: '2024 god Concert 〈Chapter 0〉 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0730god.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010361',
                },
            ],
            category: '예매',
        },
        {
            id: 81,
            time: '20:00',
            title: 'Ye & Ty Dolla $ign VULTURES LISTENING EXPERIENCE 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0729ye.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210164',
                },
            ],
            category: '예매',
        },
        {
            id: 96,
            time: '20:00',
            title: 'Stray Kids World Tour 〈dominATE SEOUL〉',
            link: 'http://ticket.yes24.com/',
            img: '/0730straykids.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50301',
                },
            ],
            category: '예매',
        },
    ],
    '2024-07-31': [
        {
            id: 79,
            time: '19:00',
            title: '2024 god Concert 〈Chapter 0〉 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0730god.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010361',
                },
            ],
            category: '예매',
        },
        {
            id: 106,
            time: '20:00',
            title: '2024 NCT 127 8th ANNIVERSARY FANMEETING〈8ECRET INVITATION〉 추가오픈',
            link: 'http://ticket.yes24.com/',
            img: '/0731nct127.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/49959',
                },
            ],
            category: '예매',
        },
        {
            id: 100,
            time: '20:00',
            title: '2024 KEYLAND ON：AND ON 〈＃〉 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0731key.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210185',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-01': [
        {
            id: 82,
            time: '20:00',
            title: '2024 ＆TEAM CONCERT TOUR ‘SECOND TO NONE’ IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0801&team.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009992',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-02': [
        {
            id: 94,
            time: '14:00',
            title: 'BLACKPINK WORLD TOUR [BORN PINK] IN CINEMAS 무대인사 참여',
            link: 'https://www.cgv.co.kr/',
            img: '/0802blackpink.svg',
            companies: [
                {
                    name: 'CGV',
                    link: 'https://www.cgv.co.kr/',
                },
            ],
            category: '예매',
        },
        {
            id: 83,
            time: '20:00',
            title: '2024 ＆TEAM CONCERT TOUR ‘SECOND TO NONE’ IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0801&team.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009992',
                },
            ],
            category: '예매',
        },
        {
            id: 101,
            time: '20:00',
            title: '2024 KEYLAND ON：AND ON 〈＃〉 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0731key.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210185',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-05': [
        {
            id: 128,
            time: '11:00',
            title: '쿠팡이츠 버거킹 쿠폰 선착순 12,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0805coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 93,
            time: '20:00',
            title: '2024 2NE1 CONCERT [WELCOME BACK] IN SEOUL',
            link: 'https://tickets.interpark.com/',
            img: '/0805투애니원.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011096',
                },
            ],
            category: '예매',
        },
        {
            id: 104,
            time: '20:00',
            title: '2024 RIIZE FAN－CON ‘RIIZING DAY’ FINALE in SEOUL 추가오픈',
            link: 'https://ticket.melon.com/',
            img: '/0716riize.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210031',
                },
            ],
            category: '예매',
        },
        {
            id: 149,
            time: '20:00',
            title: 'NMIXX 2ND FAN CONCERT NMIXX CHANGE UP : MIXX LAB 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0805nmixx.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50237',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-06': [
        {
            id: 129,
            time: '11:00',
            title: '쿠팡이츠 버거킹 쿠폰 선착순 12,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0805coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 107,
            time: '20:00',
            title: '2024 성시경 with friends [자, 오늘은]',
            link: 'https://tickets.interpark.com/',
            img: '/0806ssk.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011164',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-07': [
        {
            id: 130,
            time: '11:00',
            title: '쿠팡이츠 버거킹 쿠폰 선착순 12,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0805coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 117,
            time: '14:00',
            title: '2024 최강야구 최강 몬스터즈 vs 동의대학교',
            link: 'https://www.ticketlink.co.kr/sports/',
            img: '/최강야구.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/sports/137/planning-event/2cad705e-c663-4ae6-9638-6d7ff872f972?_gl=1*1fvwvu3*_ga*MTA5NzI3OTEyNS4xNzE4MDgwNTI3*_ga_PVZX56STJJ*MTcyMzA1NjQ5OS4yOC4xLjE3MjMwNTY3OTYuNTQuMC4w&isAgreed=true',
                },
            ],
            category: '예매',
        },
        {
            id: 98,
            time: '20:00',
            title: '2024 CHANYEOL LIVE TOUR : 都市風景 (City-scape) in SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0807chanyeol.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011174',
                },
            ],
            category: '예매',
        },
        {
            id: 114,
            time: '20:00',
            title: '2024 정준일 콘서트 ‘어떤 무엇도 아닌’',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0807jungjoonil.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/51318',
                },
            ],
            category: '예매',
        },
        {
            id: 118,
            time: '20:00',
            title: '2024 ZEROBASEONE THE FIRST TOUR ［TIMELESS WORLD］ IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0807zb1.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010841',
                },
            ],
            category: '예매',
        },
        {
            id: 150,
            time: '20:00',
            title: 'NMIXX 2ND FAN CONCERT NMIXX CHANGE UP : MIXX LAB 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0805nmixx.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50237',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-08': [
        {
            id: 131,
            time: '11:00',
            title: '쿠팡이츠 버거킹 쿠폰 선착순 12,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0805coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 120,
            time: '16:00',
            title: 'BoA LIVE TOUR－BoA：One’s Own 추가 오픈',
            link: 'https://ticket.melon.com/',
            img: '/0709boa.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210061',
                },
            ],
            category: '예매',
        },
        {
            id: 99,
            time: '20:00',
            title: '2024 CHANYEOL LIVE TOUR : 都市風景 (City-scape) in SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0807chanyeol.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011174',
                },
            ],
            category: '예매',
        },
        {
            id: 119,
            time: '20:00',
            title: '2024 ZEROBASEONE THE FIRST TOUR ［TIMELESS WORLD］ IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0807zb1.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010841',
                },
            ],
            category: '예매',
        },
        {
            id: 141,
            time: '20:00',
            title: '2024 CNBLUE LIVE－VOYAGE into X 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0808cnblue.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210224',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-09': [
        {
            id: 132,
            time: '11:00',
            title: '쿠팡이츠 버거킹 쿠폰 선착순 12,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0805coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 136,
            time: '18:00',
            title: '2024 ＆TEAM CONCERT TOUR ‘SECOND TO NONE’ IN SEOUL 추가 오픈',
            link: 'https://tickets.interpark.com/',
            img: '/0801&team.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24009992',
                },
            ],
            category: '예매',
        },
        {
            id: 137,
            time: '20:00',
            title: '싸이흠뻑쇼 SUMMERSWAG2024 - 과천',
            link: 'https://tickets.interpark.com/',
            img: '/0809psy.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24007166',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-10': [
        {
            id: 133,
            time: '11:00',
            title: '쿠팡이츠 버거킹 쿠폰 선착순 12,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0805coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-08-11': [
        {
            id: 134,
            time: '11:00',
            title: '쿠팡이츠 버거킹 쿠폰 선착순 12,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0805coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-08-12': [
        {
            id: 121,
            time: '20:00',
            title: '2024 IU HEREH WORLD TOUR CONCERT ENCORE：THE WINNING 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0812iu.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210230',
                },
            ],
            category: '예매',
        },
        {
            id: 143,
            time: '12:00',
            title: 'LUCY 1st WORLD TOUR written by FLOWER ENCORE in SEOUL',
            link: 'https://tickets.interpark.com/',
            img: '/0812lucy.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24010956',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-13': [
        {
            id: 127,
            time: '10:00',
            title: '2024 추석 명절 고속버스 특별수송 예매',
            link: 'https://kobus.co.kr',
            img: '/0813kobus.svg',
            companies: [
                {
                    name: '코버스',
                    link: 'https://kobus.co.kr',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-14': [
        {
            id: 122,
            time: '20:00',
            title: '2024 IU HEREH WORLD TOUR CONCERT ENCORE：THE WINNING 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0812iu.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210230',
                },
            ],
            category: '예매',
        },
        {
            id: 142,
            time: '20:00',
            title: '2024 CNBLUE LIVE－VOYAGE into X 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0808cnblue.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210224',
                },
            ],
            category: '예매',
        },
        {
            id: 151,
            time: '20:00',
            title: '2024 SUPER JUNIOR-D&E WORLD TOUR：ECLIPSE 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0814superjunior.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50319',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-15': [],
    '2024-08-16': [
        {
            id: 179,
            time: '10:00',
            title: 'STÜSSY FALL 2024 컬렉션 발매',
            link: 'https://kr.stussy.com/',
            img: '/0816stussy.svg',
            companies: [
                {
                    name: '스투시',
                    link: 'https://kr.stussy.com/collections/new-arrivals',
                },
            ],
            category: '발매',
        },
        {
            id: 144,
            time: '20:00',
            title: '2024 온앤오프(ONF) CONCERT ［SPOTLIGHT:THE HIDDEN SHADOW］ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0816onf.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011165',
                },
            ],
            category: '예매',
        },
        {
            id: 152,
            time: '20:00',
            title: '2024 SUPER JUNIOR-D&E WORLD TOUR：ECLIPSE 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0814superjunior.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50319',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-17': [],
    '2024-08-19': [
        {
            id: 182,
            time: '11:00',
            title: '쿠팡이츠 맥도날드 쿠폰 선착순 14,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0819coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 135,
            time: '12:00',
            title: '2024 오피셜히게단디즘(OFFICIAL HIGE DANDISM) 내한공연',
            link: 'https://tickets.interpark.com/',
            img: '/0819hige.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011642',
                },
            ],
            category: '예매',
        },
        {
            id: 177,
            time: '14:00',
            title: '빈지노 단독 콘서트 NOWITZKI LIVE',
            link: 'https://tickets.interpark.com/',
            img: '/0819beenzino.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011914',
                },
            ],
            category: '예매',
        },
        {
            id: 145,
            time: '20:00',
            title: '2024 온앤오프(ONF) CONCERT ［SPOTLIGHT:THE HIDDEN SHADOW］ 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0816onf.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011165',
                },
            ],
            category: '예매',
        },
        {
            id: 146,
            time: '20:00',
            title: '2024 Jang Wooyoung Fan Meeting 〈Be Young〉 in BUSAN 장우영 팬클럽 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0819jwy.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011829',
                },
            ],
            category: '예매',
        },
        {
            id: 178,
            time: '20:00',
            title: 'Yuuri Live in Seoul 2024',
            link: 'http://ticket.yes24.com/',
            img: '/0819yuuri.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/50645',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-20': [
        {
            id: 183,
            time: '11:00',
            title: '쿠팡이츠 맥도날드 쿠폰 선착순 14,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0819coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 202,
            time: '15:00',
            title: '2024 LCK 서머 결승 진출전',
            link: 'https://tickets.interpark.com/',
            img: '/2024lcksummer.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07032&TeamCode=PE015',
                },
            ],
            category: '예매',
        },
        {
            id: 203,
            time: '17:00',
            title: '2024 LCK 서머 결승전',
            link: 'https://tickets.interpark.com/',
            img: '/2024lcksummer.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/Contents/Sports/GoodsInfo?SportsCode=07032&TeamCode=PE015',
                },
            ],
            category: '예매',
        },
        {
            id: 188,
            time: '18:00',
            title: '로스트아크 X 더현대 서울 팝업스토어 사전예약',
            link: 'https://booking.kakao.com',
            img: '/0820lostark.svg',
            companies: [
                {
                    name: '카카오톡',
                    link: 'https://booking.kakao.com/short/4bsrfGgVyM',
                },
            ],
            category: '신청',
        },
        {
            id: 147,
            time: '20:00',
            title: '2024 Jang Wooyoung Fan Meeting 〈Be Young〉 in BUSAN HOTTEST 9기 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0819jwy.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011829',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-21': [
        {
            id: 123,
            time: '07:00',
            title: '2024년 추석 코레일 열차 승차권 예매 (경부·경전·동해·대구·충북·중부내륙·경북선)',
            link: 'https://www.letskorail.com/',
            img: '/0821korail.svg',
            companies: [
                {
                    name: '코레일',
                    link: 'https://www.letskorail.com/',
                },
            ],
            category: '예매',
        },
        {
            id: 184,
            time: '11:00',
            title: '쿠팡이츠 맥도날드 쿠폰 선착순 14,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0819coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 138,
            time: '19:00',
            title: '2026 북중미 월드컵 3차 예선 대한민국 vs. 팔레스타인 더 레드 선예매',
            link: 'https://www.playkfa.com/',
            img: '/0821kfa.svg',
            companies: [
                {
                    name: 'PLAY KFA',
                    link: 'https://shop.playkfa.com/ticket/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20vs%20%ED%8C%94%EB%A0%88%EC%8A%A4%ED%83%80%EC%9D%B8',
                },
            ],
            category: '예매',
        },
        {
            id: 176,
            time: '20:00',
            title: '2024 2NE1 CONCERT [WELCOME BACK] IN SEOUL 추가회차',
            link: 'https://tickets.interpark.com/',
            img: '/0805투애니원.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011096',
                },
            ],
            category: '예매',
        },
        {
            id: 139,
            time: '20:00',
            title: '2026 북중미 월드컵 3차 예선 대한민국 vs. 팔레스타인 블랙 선예매',
            link: 'https://www.playkfa.com/',
            img: '/0821kfa.svg',
            companies: [
                {
                    name: 'PLAY KFA',
                    link: 'https://shop.playkfa.com/ticket/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20vs%20%ED%8C%94%EB%A0%88%EC%8A%A4%ED%83%80%EC%9D%B8',
                },
            ],
            category: '예매',
        },
        {
            id: 180,
            time: '20:00',
            title: '2024 NAM WOO HYUN CONCERT <식목일4 - TREEWORLD> 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0821namwoohyun.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/51557',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-22': [
        {
            id: 124,
            time: '07:00',
            title: '2024년 추석 코레일 열차 승차권 예매 (호남·전라·강릉·장항·중앙·태백·영동·경춘선)',
            link: 'https://www.letskorail.com/',
            img: '/0821korail.svg',
            companies: [
                {
                    name: '코레일',
                    link: 'https://www.letskorail.com/',
                },
            ],
            category: '예매',
        },
        {
            id: 189,
            time: '11:00',
            title: '리바이스® X 키코 첫 협업 컬렉션',
            link: 'https://www.levi.co.kr/',
            img: '/0822levis.svg',
            companies: [
                {
                    name: '리바이스',
                    link: 'https://www.levi.co.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 185,
            time: '11:00',
            title: '쿠팡이츠 맥도날드 쿠폰 선착순 14,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0819coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 140,
            time: '19:00',
            title: '2026 북중미 월드컵 3차 예선 대한민국 vs. 팔레스타인 일반예매',
            link: 'https://www.playkfa.com/',
            img: '/0821kfa.svg',
            companies: [
                {
                    name: 'PLAY KFA',
                    link: 'https://shop.playkfa.com/ticket/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20vs%20%ED%8C%94%EB%A0%88%EC%8A%A4%ED%83%80%EC%9D%B8',
                },
            ],
            category: '예매',
        },
        {
            id: 148,
            time: '20:00',
            title: '2024 Jang Wooyoung Fan Meeting 〈Be Young〉 in BUSAN 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0819jwy.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011829',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-23': [
        {
            id: 187,
            time: '10:00',
            title: '망그러진 곰 X 두산베어스 하반기 콜라보 어센틱/레플리카 발매',
            link: 'https://gift.kakao.com/',
            img: '/0823manggom.svg',
            companies: [
                {
                    name: '카카오톡',
                    link: 'https://gift.kakao.com/',
                },
            ],
            category: '발매',
        },
        {
            id: 186,
            time: '11:00',
            title: '쿠팡이츠 맥도날드 쿠폰 선착순 14,000원',
            link: 'https://www.coupangeats.com/',
            img: '/0819coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 181,
            time: '20:00',
            title: '2024 NAM WOO HYUN CONCERT <식목일4 - TREEWORLD> 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0821namwoohyun.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/51557',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-24': [
        {
            id: 190,
            time: '11:00',
            title: '슈프림 2024 F/W 컬렉션 1주차',
            link: 'https://kr.supreme.com/',
            img: '/0824supreme.svg',
            companies: [
                {
                    name: '슈프림 KR',
                    link: 'https://kr.supreme.com/',
                },
            ],
            category: '발매',
        },
    ],
    '2024-08-26': [
        {
            id: 209,
            time: '17:00',
            title: '쿠팡이츠 BBQ 선착순 15,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0826coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-08-27': [
        {
            id: 108,
            time: '10:00',
            title: '2024 LAST CONCERT 고마웠습니다! 대전 나훈아',
            link: 'http://ticket.yes24.com/',
            img: '/2024nahoona.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/50584',
                },
            ],
            category: '예매',
        },
        {
            id: 210,
            time: '17:00',
            title: '쿠팡이츠 BBQ 선착순 15,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0826coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 201,
            time: '20:00',
            title: 'Ne-Yo Champagne ＆ Roses 2024 in SEOUL',
            link: 'http://ticket.yes24.com/',
            img: '/0827neyo.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50795',
                },
            ],
            category: '예매',
        },
        {
            id: 197,
            time: '20:00',
            title: '2024 SF9 FAN－CON ‘My 8antasia’ 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0827sf9.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210312',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-28': [
        {
            id: 125,
            time: '07:00',
            title: '2024 명절 SRT 열차 승차권 예약 (경부·경전·동해선)',
            link: 'https://etk.srail.kr/main.do',
            img: '/0828srt.svg',
            companies: [
                {
                    name: 'SRT',
                    link: 'https://etk.srail.kr/main.do',
                },
            ],
            category: '예매',
        },
        {
            id: 204,
            time: '16:00',
            title: '2024 이적 콘서트 〈이적의 노래들〉',
            link: 'https://tickets.interpark.com/',
            img: '/0828leejuck.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/P0003997',
                },
            ],
            category: '예매',
        },
        {
            id: 211,
            time: '17:00',
            title: '쿠팡이츠 BBQ 선착순 15,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0826coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 193,
            time: '20:00',
            title: 'DAY6 3RD WORLD TOUR 〈FOREVER YOUNG〉 in INCHEON 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0828day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50577',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-29': [
        {
            id: 126,
            time: '07:00',
            title: '2024 명절 SRT 열차 승차권 예약 (호남·전라선)',
            link: 'https://etk.srail.kr/main.do',
            img: '/0828srt.svg',
            companies: [
                {
                    name: 'SRT',
                    link: 'https://etk.srail.kr/main.do',
                },
            ],
            category: '예매',
        },
        {
            id: 212,
            time: '17:00',
            title: '쿠팡이츠 BBQ 선착순 15,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0826coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 194,
            time: '20:00',
            title: 'DAY6 3RD WORLD TOUR 〈FOREVER YOUNG〉 in INCHEON 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0828day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50577',
                },
            ],
            category: '예매',
        },
    ],
    '2024-08-30': [
        {
            id: 224,
            time: '10:00',
            title: '올영세일 선착순 100원 특가 - 웨이크메이크',
            link: 'https://www.oliveyoung.co.kr/',
            img: '/0830oliveyoung.svg',
            companies: [
                {
                    name: '올리브영',
                    link: 'https://www.oliveyoung.co.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 213,
            time: '17:00',
            title: '쿠팡이츠 BBQ 선착순 15,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0826coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-08-31': [
        {
            id: 214,
            time: '17:00',
            title: '쿠팡이츠 BBQ 선착순 15,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0826coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-01': [
        {
            id: 215,
            time: '17:00',
            title: '쿠팡이츠 BBQ 선착순 15,000원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0826coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-02': [
        {
            id: 225,
            time: '10:00',
            title: '올영세일 선착순 100원 특가 - CKD',
            link: 'https://www.oliveyoung.co.kr/',
            img: '/0830oliveyoung.svg',
            companies: [
                {
                    name: '올리브영',
                    link: 'https://www.oliveyoung.co.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 207,
            time: '12:00',
            title: '제6회 슬로우 라이프 슬로우 라이브 2024',
            link: 'http://ticket.yes24.com/',
            img: '/0902slowslow.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/50886',
                },
            ],
            category: '예매',
        },
        {
            id: 195,
            time: '20:00',
            title: 'DOH KYUNG SOO ASIA FAN CONCERT TOUR BLOOM THE FINAL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0902do.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012301',
                },
            ],
            category: '예매',
        },
        {
            id: 198,
            time: '20:00',
            title: '2024 SF9 FAN－CON ‘My 8antasia’ 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0827sf9.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210312',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-03': [
        {
            id: 109,
            time: '10:00',
            title: '2024 LAST CONCERT 고마웠습니다! 강릉 나훈아',
            link: 'http://ticket.yes24.com/',
            img: '/2024nahoona.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50585',
                },
            ],
            category: '예매',
        },
        {
            id: 200,
            time: '18:00',
            title: '에그고등학교 4학년 9반 - 나영석 첫 번째 팬미팅',
            link: 'https://tickets.interpark.com/',
            img: '/0903nys.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012058',
                },
            ],
            category: '예매',
        },
        {
            id: 205,
            time: '20:00',
            title: '2024 2NE1 CONCERT [WELCOME BACK] IN SEOUL 시야제한석',
            link: 'https://tickets.interpark.com/',
            img: '/0805투애니원.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011096',
                },
            ],
            category: '예매',
        },
        {
            id: 206,
            time: '20:00',
            title: '2024 온앤오프(ONF) CONCERT ［SPOTLIGHT:THE HIDDEN SHADOW］ 시야제한석',
            link: 'https://tickets.interpark.com/',
            img: '/0816onf.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011165',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-04': [
        {
            id: 221,
            time: '14:00',
            title: '망곰이의 베어스 탐방기 사전예약',
            link: 'https://tickets.interpark.com/',
            img: '/0904manggom.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012653',
                },
            ],
            category: '신청',
        },
        {
            id: 196,
            time: '20:00',
            title: 'DOH KYUNG SOO ASIA FAN CONCERT TOUR BLOOM THE FINAL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0902do.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012301',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-05': [
        {
            id: 226,
            time: '10:00',
            title: '올영세일 선착순 100원 특가 - 비플레인',
            link: 'https://www.oliveyoung.co.kr/',
            img: '/0830oliveyoung.svg',
            companies: [
                {
                    name: '올리브영',
                    link: 'https://www.oliveyoung.co.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 216,
            time: '18:00',
            title: 'PLAVE FAN CONCERT ‘Hello, Asterum!’ ENCORE 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0905plave.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011918',
                },
            ],
            category: '예매',
        },
        {
            id: 191,
            time: '20:00',
            title: '2024 ONEW FAN CONCERT ‘Hola！’ 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0905onew.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210310',
                },
            ],
            category: '예매',
        },
        {
            id: 218,
            time: '20:00',
            title: 'ENHYPEN WORLD TOUR ‘WALK THE LINE’ IN GOYANG 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0905enhypen.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011847',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-06': [
        {
            id: 208,
            time: '10:00',
            title: 'UNIQLO : C 2024 가을 겨울 컬렉션 발매',
            link: 'https://www.uniqlo.com',
            img: '/0906uniqlo.svg',
            companies: [
                {
                    name: '유니클로',
                    link: 'https://www.uniqlo.com/kr/ko/contents/collaboration/uniqlo-c/24fw/',
                },
            ],
            category: '발매',
        },
        {
            id: 217,
            time: '18:00',
            title: 'PLAVE FAN CONCERT ‘Hello, Asterum!’ ENCORE 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0905plave.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011918',
                },
            ],
            category: '예매',
        },
        {
            id: 199,
            time: '20:00',
            title: 'YOASOBI ASIA TOUR 2024-2025 LIVE IN KOREA',
            link: 'https://ticket.melon.com/',
            img: '/0906yoasobi.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210316',
                },
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/51651',
                },
            ],
            category: '예매',
        },
        {
            id: 192,
            time: '20:00',
            title: '2024 ONEW FAN CONCERT ‘Hola！’ 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0905onew.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210310',
                },
            ],
            category: '예매',
        },
        {
            id: 219,
            time: '20:00',
            title: 'ENHYPEN WORLD TOUR ‘WALK THE LINE’ IN GOYANG 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0905enhypen.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011847',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-09': [
        {
            id: 220,
            time: '20:00',
            title: '에그고등학교 4학년 9반 - 나영석 첫 번째 팬미팅 추가회차',
            link: 'https://tickets.interpark.com/',
            img: '/0903nys.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012058',
                },
            ],
            category: '예매',
        },
        {
            id: 233,
            time: '20:00',
            title: 'NMIXX 2ND FAN CONCERT NMIXX CHANGE UP : MIXX LAB 추가오픈',
            link: 'http://ticket.yes24.com/',
            img: '/0805nmixx.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50237',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-10': [
        {
            id: 110,
            time: '10:00',
            title: '2024 LAST CONCERT 고마웠습니다! 안동 나훈아',
            link: 'http://ticket.yes24.com/',
            img: '/2024nahoona.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/50586',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-11': [
        {
            id: 227,
            time: '18:00',
            title: '2024 죠지 콘서트 [yayuday]',
            link: 'https://tickets.interpark.com/',
            img: '/0911george.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013156',
                },
            ],
            category: '예매',
        },
        {
            id: 115,
            time: '20:00',
            title: 'SEVENTEEN [RIGHT HERE] WORLD TOUR IN GOYANG 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0911svt.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011622',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-12': [
        {
            id: 250,
            time: '15:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 251,
            time: '18:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 231,
            time: '20:00',
            title: 'DAY6 3RD WORLD TOUR 〈FOREVER YOUNG〉 in INCHEON 추가오픈',
            link: 'http://ticket.yes24.com/',
            img: '/0828day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50577',
                },
            ],
            category: '예매',
        },
        {
            id: 252,
            time: '21:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-13': [
        {
            id: 253,
            time: '15:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 254,
            time: '18:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 116,
            time: '20:00',
            title: 'SEVENTEEN [RIGHT HERE] WORLD TOUR IN GOYANG 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0911svt.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011622',
                },
            ],
            category: '예매',
        },
        {
            id: 228,
            time: '20:00',
            title: '2024 CRAVITY FAN－CON 〈BEYOND YOUR MEMORIES〉 추가오픈',
            link: 'https://ticket.melon.com/',
            img: '/0913cravity.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210188',
                },
            ],
            category: '예매',
        },
        {
            id: 232,
            time: '20:00',
            title: 'QWER 2nd Mini Album ‘Algorithm’s Blossom’ Showcase',
            link: 'http://ticket.yes24.com/',
            img: '/0913qwer.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/50976',
                },
            ],
            category: '예매',
        },
        {
            id: 255,
            time: '21:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-14': [
        {
            id: 236,
            time: '10:00',
            title: '망곰 베어스 데이 사전예약',
            link: 'https://tickets.interpark.com/',
            img: '/0914manggom.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013279',
                },
            ],
            category: '신청',
        },
        {
            id: 241,
            time: '12:00',
            title: '2024 오피셜히게단디즘(OFFICIAL HIGE DANDISM) 내한공연 추가회차 선예매',
            link: 'https://fc.higedan.com/',
            img: '/0819hige.svg',
            companies: [
                {
                    name: '히게단',
                    link: 'https://fc.higedan.com/feature/higedan_asiatour2024rejoice_seoul2_fce?lang=ko',
                },
            ],
            category: '예매',
        },
        {
            id: 256,
            time: '15:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 257,
            time: '18:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 258,
            time: '21:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-15': [
        {
            id: 259,
            time: '15:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 260,
            time: '18:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 261,
            time: '21:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-16': [
        {
            id: 262,
            time: '15:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 263,
            time: '18:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 264,
            time: '21:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-17': [
        {
            id: 265,
            time: '15:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 266,
            time: '18:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 267,
            time: '21:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-18': [
        {
            id: 268,
            time: '15:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 269,
            time: '18:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 270,
            time: '21:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-19': [
        {
            id: 271,
            time: '15:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 272,
            time: '18:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 237,
            time: '19:00',
            title: '2024 KISS OF LIFE 1ST WORLD TOUR ［KISS ROAD］ IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0919kissoflife.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013254',
                },
            ],
            category: '예매',
        },
        {
            id: 229,
            time: '20:00',
            title: '2024 DOYOUNG CONCERT［Dearest Youth，］ 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0919doyoung.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210341',
                },
            ],
            category: '예매',
        },
        {
            id: 273,
            time: '21:00',
            title: '에이블리 추석맞이 선착순 1만원 쿠폰',
            link: 'https://a-bly.com/',
            img: '/0912ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'https://m.a-bly.com/events/4106ffca?block_id=cTVHaVCjgX',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-20': [
        {
            id: 279,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 242,
            time: '19:00',
            title: '2024 오피셜히게단디즘(OFFICIAL HIGE DANDISM) 내한공연 추가회차 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0819hige.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011642',
                },
            ],
            category: '예매',
        },
        {
            id: 238,
            time: '19:00',
            title: '2024 KISS OF LIFE 1ST WORLD TOUR ［KISS ROAD］ IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0919kissoflife.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013254',
                },
            ],
            category: '예매',
        },
        {
            id: 230,
            time: '20:00',
            title: '2024 DOYOUNG CONCERT［Dearest Youth，］ 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0919doyoung.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210341',
                },
            ],
            category: '예매',
        },
        {
            id: 240,
            time: '20:00',
            title: '하나은행 자선축구대회 with 임영웅 기성용',
            link: 'https://www.coupangplay.com/',
            img: '/0920hana.svg',
            companies: [
                {
                    name: '쿠팡플레이',
                    link: 'https://www.coupangplay.com/titles/b9653ef2-ee7b-4c44-8446-4ec63a3068b4/event?titleType=live&sourceType=p_cdp',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-21': [
        {
            id: 280,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-22': [
        {
            id: 281,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-23': [
        {
            id: 282,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 247,
            time: '14:00',
            title: '2024 황찬성（2PM）팬미팅［CHANIE’S BEAR MUSEUM］ 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0923chansung.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51009',
                },
            ],
            category: '예매',
        },
        {
            id: 239,
            time: '17:00',
            title: '제 30회 드림콘서트 @ 고양종합운동장',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0923dreamcon.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/52169',
                },
            ],
            category: '예매',
        },
        {
            id: 243,
            time: '18:00',
            title: '2024 윤하 연말 콘서트 〈GROWTH THEORY〉 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0923younha.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013649',
                },
            ],
            category: '예매',
        },
        {
            id: 245,
            time: '20:00',
            title: '2024 Happy JOY Day [The Reason for Existence.] 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0923joy.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012782',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-24': [
        {
            id: 111,
            time: '10:00',
            title: '2024 LAST CONCERT 고마웠습니다! 진주 나훈아',
            link: 'http://ticket.yes24.com/',
            img: '/2024nahoona.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50587',
                },
            ],
            category: '예매',
        },
        {
            id: 283,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 275,
            time: '12:00',
            title: '콜드플레이 내한공연 아티스트 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0924coldplay.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013437',
                },
            ],
            category: '예매',
        },
        {
            id: 244,
            time: '18:00',
            title: '2024 윤하 연말 콘서트 〈GROWTH THEORY〉 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0923younha.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013649',
                },
            ],
            category: '예매',
        },
        {
            id: 246,
            time: '20:00',
            title: '2024 Happy JOY Day [The Reason for Existence.] 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0923joy.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012782',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-25': [
        {
            id: 284,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 276,
            time: '12:00',
            title: '콜드플레이 내한공연 아티스트 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0924coldplay.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013437',
                },
            ],
            category: '예매',
        },
        {
            id: 248,
            time: '14:00',
            title: '2024 황찬성（2PM）팬미팅［CHANIE’S BEAR MUSEUM］ 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0923chansung.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51009',
                },
            ],
            category: '예매',
        },
        {
            id: 274,
            time: '14:00',
            title: '2024 최강야구 최강 몬스터즈 vs 연천 미라클 독립구단',
            link: 'https://www.ticketlink.co.kr/sports/',
            img: '/최강야구.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/sports/',
                },
            ],
            category: '예매',
        },
        {
            id: 278,
            time: '20:00',
            title: '2024 DOYOUNG CONCERT［Dearest Youth，］ 시야제한석',
            link: 'https://ticket.melon.com/',
            img: '/0919doyoung.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210341',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-26': [
        {
            id: 285,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 249,
            time: '18:00',
            title: '2024 알렌워커(Alan Walker) 내한공연',
            link: 'https://tickets.interpark.com/',
            img: '/0926alanwalker.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013378',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-27': [
        {
            id: 286,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 277,
            time: '12:00',
            title: '콜드플레이 내한공연 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0924coldplay.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013437',
                },
            ],
            category: '예매',
        },
        {
            id: 234,
            time: '20:00',
            title: 'JX 2024 CONCERT < IDENTITY > in Seoul​ 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0927jx.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/52132',
                },
            ],
            category: '예매',
        },
        {
            id: 297,
            time: '20:00',
            title: '2024 TWICE FANMEETING［HOME 9ROUND］ 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0927twice.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51057',
                },
            ],
            category: '예매',
        },
    ],
    '2024-09-28': [
        {
            id: 287,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-29': [
        {
            id: 288,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-09-30': [
        {
            id: 289,
            time: '11:00',
            title: '쿠팡이츠 신한카드 선착순 1만원 쿠폰',
            link: 'https://www.coupangeats.com/',
            img: '/0920coupangeats.svg',
            companies: [
                {
                    name: '쿠팡이츠',
                    link: 'https://www.coupangeats.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 290,
            time: '11:00',
            title: '뮤지컬 지킬앤하이드 (Jekyll & Hyde) - 20주년',
            link: 'https://tickets.interpark.com/',
            img: '/0930jekyll.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013928',
                },
            ],
            category: '예매',
        },
        {
            id: 291,
            time: '12:00',
            title: '콜드플레이 내한공연 아티스트 추가 오픈',
            link: 'https://tickets.interpark.com/',
            img: '/0924coldplay.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013437',
                },
            ],
            category: '예매',
        },
        // 에이블리 이벤트 추가
        {
            id: 299,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 300,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 222,
            time: '20:00',
            title: 'TOMORROW X TOGETHER WORLD TOUR 〈ACT : PROMISE〉 ENCORE IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0930txt.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012385',
                },
            ],
            category: '예매',
        },
        {
            id: 235,
            time: '20:00',
            title: 'JX 2024 CONCERT < IDENTITY > in Seoul​ 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0927jx.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/52132',
                },
            ],
            category: '예매',
        },
        {
            id: 298,
            time: '20:00',
            title: '2024 TWICE FANMEETING［HOME 9ROUND］ 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0927twice.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51057',
                },
            ],
            category: '예매',
        },
        {
            id: 301,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 373,
            time: '23:00',
            title: '2024 KBO리그 5위 결정전 SSG VS KT',
            link: 'https://www.ticketlink.co.kr/',
            img: '/0930tiebreak.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/sports/baseball/62#reservation',
                },
            ],
            category: '예매',
        },
    ],
    '2024-10-01': [
        {
            id: 112,
            time: '10:00',
            title: '2024 LAST CONCERT 고마웠습니다! 광주 나훈아',
            link: 'http://ticket.yes24.com/',
            img: '/2024nahoona.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50588',
                },
            ],
            category: '예매',
        },
        // 에이블리 이벤트 추가
        {
            id: 302,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 303,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 296,
            time: '20:00',
            title: '2024 MINHYUK Fan Event 〈Let’s GO!5rae〉',
            link: 'http://ticket.yes24.com/',
            img: '/1001minhyuk.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51059',
                },
            ],
            category: '예매',
        },
        {
            id: 304,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 374,
            time: '22:00',
            title: '2024 KBO리그 WC 1차전 두산 VS KT',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
    ],
    '2024-10-02': [
        {
            id: 305,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 306,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 307,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 375,
            time: '22:00',
            title: '2024 KBO리그 WC 2차전 두산 VS KT',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
    ],
    '2024-10-03': [
        {
            id: 308,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 309,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 310,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-04': [
        {
            id: 376,
            time: '14:00',
            title: '2024 KBO리그 준PO 1차전 LG VS KT',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 389,
            time: '14:00',
            title: 'PLAVE FAN CONCERT ‘Hello, Asterum!’ ENCORE 추가오픈',
            link: 'https://tickets.interpark.com/',
            img: '/0905plave.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24011918',
                },
            ],
            category: '예매',
        },
        {
            id: 377,
            time: '15:00',
            title: '2024 KBO리그 준PO 2차전 LG VS KT',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 311,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 378,
            time: '16:00',
            title: '2024 KBO리그 준PO 3차전 KT VS LG',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 379,
            time: '17:00',
            title: '2024 KBO리그 준PO 4차전 KT VS LG',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 312,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 380,
            time: '18:00',
            title: '2024 KBO리그 준PO 5차전 LG VS KT',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 223,
            time: '20:00',
            title: 'TOMORROW X TOGETHER WORLD TOUR 〈ACT : PROMISE〉 ENCORE IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0930txt.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012385',
                },
            ],
            category: '예매',
        },
        {
            id: 294,
            time: '20:00',
            title: '2024 JAEHYUN FAN－CON 〈Mute〉 선예매',
            link: 'https://ticket.melon.com/',
            img: '/1004jaehyun.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210441',
                },
            ],
            category: '예매',
        },
        {
            id: 417,
            time: '20:00',
            title: 'ITZY The 3rd Fan Meeting 있지 믿지, 날자! “믿지의 세포들” 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/1010itzy.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51058',
                },
            ],
            category: '예매',
        },
        {
            id: 313,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-05': [
        // 에이블리 이벤트 추가
        {
            id: 314,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 315,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 316,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-06': [
        // 에이블리 이벤트 추가
        {
            id: 317,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 318,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 319,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-07': [
        // 에이블리 이벤트 추가
        {
            id: 320,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 295,
            time: '18:00',
            title: '2024 JAEHYUN FAN－CON 〈Mute〉 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/1004jaehyun.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210441',
                },
            ],
            category: '예매',
        },
        {
            id: 321,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 381,
            time: '19:00',
            title: '2026 FIFA 월드컵 3차 예선 대한민국 vs. 이라크 더 레드 선예매',
            link: 'http://playkfa.com/',
            img: '/1007worldcup.svg',
            companies: [
                {
                    name: 'PLAY KFA',
                    link: 'https://shop.playkfa.com/ticket/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20vs%20%EC%9D%B4%EB%9D%BC%ED%81%AC',
                },
            ],
            category: '예매',
        },
        {
            id: 382,
            time: '20:00',
            title: '2026 FIFA 월드컵 3차 예선 대한민국 vs. 이라크 블랙 선예매',
            link: 'http://playkfa.com/',
            img: '/1007worldcup.svg',
            companies: [
                {
                    name: 'PLAY KFA',
                    link: 'https://shop.playkfa.com/ticket/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20vs%20%EC%9D%B4%EB%9D%BC%ED%81%AC',
                },
            ],
            category: '예매',
        },
        {
            id: 418,
            time: '20:00',
            title: 'ITZY The 3rd Fan Meeting 있지 믿지, 날자! “믿지의 세포들” 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/1010itzy.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51058',
                },
            ],
            category: '예매',
        },
        {
            id: 292,
            time: '20:00',
            title: '2024 LEE SEUNGHOON FAN CONCERT [OFFLINE LIVE] 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1007leeseunghoon.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013938',
                },
            ],
            category: '예매',
        },
        {
            id: 322,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-08': [
        {
            id: 113,
            time: '10:00',
            title: '2024 LAST CONCERT 고마웠습니다! 대구 나훈아',
            link: 'http://ticket.yes24.com/',
            img: '/2024nahoona.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/50589',
                },
            ],
            category: '예매',
        },
        // 에이블리 이벤트 추가
        {
            id: 323,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 371,
            time: '18:00',
            title: '2024 MINHO CONCERT 〈MEAN：of my first〉 선예매',
            link: 'https://ticket.melon.com/',
            img: '/1008minho.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210448',
                },
            ],
            category: '예매',
        },
        {
            id: 324,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 383,
            time: '19:00',
            title: '2026 FIFA 월드컵 3차 예선 대한민국 vs. 이라크 일반예매',
            link: 'http://playkfa.com/',
            img: '/1007worldcup.svg',
            companies: [
                {
                    name: 'PLAY KFA',
                    link: 'https://shop.playkfa.com/ticket/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD%20vs%20%EC%9D%B4%EB%9D%BC%ED%81%AC',
                },
            ],
            category: '예매',
        },
        {
            id: 387,
            time: '20:00',
            title: '2024 TWICE FANMEETING［HOME 9ROUND］ 추가오픈',
            link: 'http://ticket.yes24.com/',
            img: '/0927twice.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51057',
                },
            ],
            category: '예매',
        },
        {
            id: 325,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-09': [
        // 에이블리 이벤트 추가
        {
            id: 326,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 327,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 328,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-10': [
        {
            id: 384,
            time: '12:00',
            title: '시가렛 애프터 섹스 내한공연 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1010cigarettesaftersex.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24014570',
                },
            ],
            category: '예매',
        },
        {
            id: 422,
            time: '14:00',
            title: '2024 최강야구 최강 몬스터즈 vs 덕수고',
            link: 'https://www.ticketlink.co.kr/sports/',
            img: '/최강야구.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/sports/',
                },
            ],
            category: '예매',
        },
        {
            id: 329,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 372,
            time: '18:00',
            title: '2024 MINHO CONCERT 〈MEAN：of my first〉 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/1008minho.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210448',
                },
            ],
            category: '예매',
        },
        {
            id: 330,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 388,
            time: '19:00',
            title: 'NO:EL 1ST CONCERT IN SEOUL',
            link: 'http://ticket.yes24.com/',
            img: '/1010noel.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51236',
                },
            ],
            category: '예매',
        },
        {
            id: 293,
            time: '20:00',
            title: '2024 LEE SEUNGHOON FAN CONCERT [OFFLINE LIVE] 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1007leeseunghoon.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24013938',
                },
            ],
            category: '예매',
        },
        {
            id: 416,
            time: '20:00',
            title: 'ITZY The 3rd Fan Meeting 있지 믿지, 날자! “믿지의 세포들” 추가오픈',
            link: 'http://ticket.yes24.com/',
            img: '/1010itzy.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51058',
                },
            ],
            category: '예매',
        },
        {
            id: 331,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-11': [
        {
            id: 385,
            time: '12:00',
            title: '시가렛 애프터 섹스 내한공연 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1010cigarettesaftersex.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24014570',
                },
            ],
            category: '예매',
        },
        {
            id: 332,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 394,
            time: '18:00',
            title: '2024 JAEHYUN FAN－CON 〈Mute〉 추가오픈',
            link: 'https://ticket.melon.com/',
            img: '/1004jaehyun.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210441',
                },
            ],
            category: '예매',
        },
        {
            id: 333,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 334,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-12': [
        {
            id: 398,
            time: '14:00',
            title: '2024 KBO리그 플레이오프 1차전 LG VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/Contents/Sports',
                },
            ],
            category: '예매',
        },
        {
            id: 335,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 399,
            time: '15:00',
            title: '2024 KBO리그 플레이오프 2차전 LG VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/Contents/Sports',
                },
            ],
            category: '예매',
        },
        {
            id: 400,
            time: '16:00',
            title: '2024 KBO리그 플레이오프 3차전 LG VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/Contents/Sports',
                },
            ],
            category: '예매',
        },
        {
            id: 401,
            time: '17:00',
            title: '2024 KBO리그 플레이오프 4차전 LG VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/Contents/Sports',
                },
            ],
            category: '예매',
        },
        {
            id: 336,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 402,
            time: '18:00',
            title: '2024 KBO리그 플레이오프 5차전 LG VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/Contents/Sports',
                },
            ],
            category: '예매',
        },
        {
            id: 337,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-13': [
        // 에이블리 이벤트 추가
        {
            id: 338,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 339,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 340,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-14': [
        {
            id: 390,
            time: '12:00',
            title: '요네즈 켄시 내한공연 2025 WORLD TOUR [JUNK] 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1014yonezukenshi.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24014669',
                },
            ],
            category: '예매',
        },
        {
            // 에이블리 이벤트 추가
            id: 341,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 342,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 414,
            time: '20:00',
            title: '2024 다이나믹 듀오 단독 콘서트 “가끔씩 오래 보자” - 서울',
            link: 'https://tickets.interpark.com/',
            img: '/1014dynamicduo.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24014696',
                },
            ],
            category: '예매',
        },
        {
            id: 343,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-15': [
        {
            id: 113,
            time: '10:00',
            title: '2024 LAST CONCERT 고마웠습니다! 부산 나훈아',
            link: 'http://ticket.yes24.com/',
            img: '/2024nahoona.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/50590',
                },
            ],
            category: '예매',
        },
        {
            id: 391,
            time: '12:00',
            title: '요네즈 켄시 내한공연 2025 WORLD TOUR [JUNK] 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1014yonezukenshi.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24014669',
                },
            ],
            category: '예매',
        },
        {
            id: 344,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 345,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 392,
            time: '20:00',
            title: '2024 NCT DREAM WORLD TOUR <THE DREAM SHOW 3 : DREAMSCAPE> FINALE in SEOUL 선예매',
            link: 'https://ticket.melon.com/',
            img: '/1015nctdream.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210470',
                },
            ],
            category: '예매',
        },
        {
            id: 346,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-16': [
        {
            id: 395,
            time: '12:00',
            title: '찰리푸스 내한공연 아티스트 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1016charlieputh.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012056',
                },
            ],
            category: '예매',
        },
        {
            id: 415,
            time: '14:00',
            title: '2024 다이나믹 듀오 단독 콘서트 “가끔씩 오래 보자” - 부산',
            link: 'https://tickets.interpark.com/',
            img: '/1014dynamicduo.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24014696',
                },
            ],
            category: '예매',
        },
        {
            id: 347,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 348,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 349,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-17': [
        {
            id: 396,
            time: '12:00',
            title: '찰리푸스 내한공연 라이브네이션 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1016charlieputh.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012056',
                },
            ],
            category: '예매',
        },
        {
            id: 350,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 351,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 393,
            time: '20:00',
            title: '2024 NCT DREAM WORLD TOUR <THE DREAM SHOW 3 : DREAMSCAPE> FINALE in SEOUL 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/1015nctdream.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210470',
                },
            ],
            category: '예매',
        },
        {
            id: 352,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-18': [
        {
            id: 397,
            time: '12:00',
            title: '찰리푸스 내한공연 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1016charlieputh.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012056',
                },
            ],
            category: '예매',
        },
        {
            id: 353,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 354,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 355,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-19': [
        // 에이블리 이벤트 추가
        {
            id: 356,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 357,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 358,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-20': [
        {
            id: 403,
            time: '14:00',
            title: '2024 KBO리그 한국시리즈 1차전 KIA VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 359,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 404,
            time: '15:00',
            title: '2024 KBO리그 한국시리즈 2차전 KIA VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 405,
            time: '16:00',
            title: '2024 KBO리그 한국시리즈 3차전 KIA VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 406,
            time: '17:00',
            title: '2024 KBO리그 한국시리즈 4차전 KIA VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 360,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 361,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-21': [
        {
            id: 407,
            time: '14:00',
            title: '2024 KBO리그 한국시리즈 5차전 KIA VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 362,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 408,
            time: '15:00',
            title: '2024 KBO리그 한국시리즈 6차전 KIA VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 409,
            time: '16:00',
            title: '2024 KBO리그 한국시리즈 7차전 KIA VS 삼성',
            link: 'https://tickets.interpark.com/',
            img: '/1001wildcard.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/special/sports/promotion?seq=43',
                },
            ],
            category: '예매',
        },
        {
            id: 363,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 461,
            time: '20:00',
            title: '오아시스 내한공연 (OASIS Live ’25 SOUTH KOREA)',
            link: 'https://tickets.interpark.com',
            img: '/1021oasis.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24016943',
                },
            ],
            category: '예매',
        },
        {
            id: 364,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-22': [
        // 에이블리 이벤트 추가
        {
            id: 365,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 366,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },

        {
            id: 367,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-23': [
        // 에이블리 이벤트 추가
        {
            id: 368,
            time: '15:00',
            title: '에이블리 MEGA SALE 1만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 421,
            time: '18:00',
            title: 'IVE 1ST WORLD TOUR in CINEMA 앵콜 무대인사',
            link: 'https://www.lottecinema.co.kr/',
            img: '/1023ive.svg',
            companies: [
                {
                    name: '롯데시네마',
                    link: 'https://www.lottecinema.co.kr/',
                },
            ],
            category: '예매',
        },
        {
            id: 369,
            time: '18:00',
            title: '에이블리 MEGA SALE 2만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 411,
            time: '20:00',
            title: '2024 성시경 연말 콘서트 〈성시경〉 팬클럽 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1023sungsikyung.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015329',
                },
            ],
            category: '예매',
        },
        {
            id: 370,
            time: '21:00',
            title: '에이블리 MEGA SALE 5만원 선착순 쿠폰',
            link: 'http://a-bly.com/',
            img: '/0930ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-10-24': [
        {
            id: 418,
            time: '18:00',
            title: '2024 Wave to Earth 단독공연 ［play with earth! Seoul］',
            link: 'https://tickets.interpark.com/',
            img: '/1024wavetoearth.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015393',
                },
            ],
            category: '예매',
        },
        {
            id: 413,
            time: '20:00',
            title: 'ZICO LIVE : JOIN THE PARADE',
            link: 'https://tickets.interpark.com/',
            img: '/1024zico.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015300',
                },
            ],
            category: '예매',
        },
    ],
    '2024-10-28': [
        {
            id: 410,
            time: '12:00',
            title: '찰리푸스 내한공연 추가회차',
            link: 'https://tickets.interpark.com/',
            img: '/1016charlieputh.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24012056',
                },
            ],
            category: '예매',
        },
        {
            id: 412,
            time: '20:00',
            title: '2024 성시경 연말 콘서트 〈성시경〉 팬클럽 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1023sungsikyung.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015329',
                },
            ],
            category: '예매',
        },
        {
            id: 419,
            time: '20:00',
            title: 'INFINITE 15TH ANNIVERSARY CONCERT : LIMITED EDITION 팬클럽 선예매',
            link: 'https://www.ticketlink.co.kr',
            img: '/1028infinite.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/52808',
                },
            ],
            category: '예매',
        },
    ],
    '2024-10-29': [
        {
            id: 386,
            time: '10:00',
            title: '2024 LAST CONCERT 고마웠습니다! 서울 나훈아',
            link: 'http://ticket.yes24.com/',
            img: '/2024nahoona.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51189',
                },
            ],
            category: '예매',
        },
        {
            id: 420,
            time: '20:00',
            title: 'INFINITE 15TH ANNIVERSARY CONCERT : LIMITED EDITION 일반예매',
            link: 'https://www.ticketlink.co.kr',
            img: '/1028infinite.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/52808',
                },
            ],
            category: '예매',
        },
    ],
    '2024-10-30': [
        {
            id: 423,
            time: '20:00',
            title: 'JX 2024 CONCERT < IDENTITY > in Seoul​ 추가오픈',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0927jx.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/52132',
                },
            ],
            category: '예매',
        },
    ],
    '2024-10-31': [
        {
            id: 441,
            time: '19:00',
            title: '2024 코리아 그랜드 뮤직 어워즈（KGMA） 1차',
            link: 'https://ticket.yes24.com',
            img: '/1031kgma.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51188',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-01': [
        {
            id: 442,
            time: '14:00',
            title: '2024 코리아 그랜드 뮤직 어워즈（KGMA） 2차',
            link: 'https://ticket.yes24.com',
            img: '/1031kgma.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51188',
                },
            ],
            category: '예매',
        },
        {
            id: 424,
            time: '21:00',
            title: '에이블리 매일 아우터 선착순 990원!',
            link: 'http://a-bly.com/',
            img: '/1101ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-11-02': [
        {
            id: 425,
            time: '21:00',
            title: '에이블리 매일 아우터 선착순 990원!',
            link: 'http://a-bly.com/',
            img: '/1101ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-11-03': [
        {
            id: 426,
            time: '21:00',
            title: '에이블리 매일 아우터 선착순 990원!',
            link: 'http://a-bly.com/',
            img: '/1101ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-11-04': [
        {
            id: 427,
            time: '21:00',
            title: '에이블리 매일 아우터 선착순 990원!',
            link: 'http://a-bly.com/',
            img: '/1101ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-11-05': [
        {
            id: 428,
            time: '21:00',
            title: '에이블리 매일 아우터 선착순 990원!',
            link: 'http://a-bly.com/',
            img: '/1101ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-11-06': [
        {
            id: 429,
            time: '21:00',
            title: '에이블리 매일 아우터 선착순 990원!',
            link: 'http://a-bly.com/',
            img: '/1101ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2024-11-07': [
        {
            id: 430,
            time: '21:00',
            title: '에이블리 매일 아우터 선착순 990원!',
            link: 'http://a-bly.com/',
            img: '/1101ably.svg',
            companies: [
                {
                    name: '에이블리',
                    link: 'http://a-bly.com/',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 437,
            time: '19:00',
            title: 'KYUHYUN 10th Anniversary Asia Tour ［COLORS］ in SEOUL 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1107kyuhyun.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015567',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-11': [
        {
            id: 431,
            time: '18:00',
            title: '2024 B-day PARTY - CHANYEOL [OFF THE RECORD] 선예매',
            link: 'https://ticket.melon.com',
            img: '/1111chanyeol.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210619',
                },
            ],
            category: '예매',
        },
        {
            id: 432,
            time: '20:00',
            title: '2024 ONEW B-Day Party ‘O! NEW DAY’ 선예매',
            link: 'https://ticket.melon.com',
            img: '/1111onew.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210584',
                },
            ],
            category: '예매',
        },
        {
            id: 438,
            time: '19:00',
            title: 'KYUHYUN 10th Anniversary Asia Tour ［COLORS］ in SEOUL 일반예매',
            link: 'https://tickets.interpark.com',
            img: '/1107kyuhyun.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015567',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-12': [
        {
            id: 433,
            time: '18:00',
            title: '2024 B-day PARTY - CHANYEOL [OFF THE RECORD] 일반예매',
            link: 'https://ticket.melon.com',
            img: '/1111chanyeol.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210619',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-13': [
        {
            id: 439,
            time: '20:00',
            title: '2025 DAVICHI CONCERT 〈A Stitch in Time〉 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1113davichi.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24016415',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-14': [
        {
            id: 434,
            time: '20:00',
            title: '2024 ONEW B-Day Party ‘O! NEW DAY’ 일반예매',
            link: 'https://ticket.melon.com',
            img: '/1111onew.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210584',
                },
            ],
            category: '예매',
        },
        {
            id: 486,
            time: '20:00',
            title: 'LUCY DAYS',
            link: 'https://ticket.yes24.com',
            img: '/1113lucy.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51604',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-15': [
        {
            id: 455,
            time: '20:00',
            title: 'NCT 127 4TH TOUR ‘NEO CITY : SEOUL - THE MOMENTUM’ 선예매',
            link: 'https://ticket.melon.com',
            img: '/1115nct127.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210629',
                },
            ],
            category: '예매',
        },
        {
            id: 440,
            time: '20:00',
            title: '2025 DAVICHI CONCERT 〈A Stitch in Time〉 일반예매',
            link: 'https://tickets.interpark.com',
            img: '/1113davichi.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24016415',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-19': [
        {
            id: 452,
            time: '18:00',
            title: '양홍원 단독 콘서트 〈VOL.2〉',
            link: 'https://ticket.yes24.com',
            img: '/1119yanghongwon.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51742',
                },
            ],
            category: '예매',
        },
        {
            id: 456,
            time: '20:00',
            title: 'NCT 127 4TH TOUR ‘NEO CITY : SEOUL - THE MOMENTUM’ 일반예매',
            link: 'https://ticket.melon.com',
            img: '/1115nct127.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210629',
                },
            ],
            category: '예매',
        },
        {
            id: 445,
            time: '20:00',
            title: '2024 DAY6 Special Concert ‘The Present’ 선예매',
            link: 'https://ticket.yes24.com',
            img: '/1119day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51582',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-20': [
        {
            id: 436,
            time: '20:00',
            title: '임영웅 리사이틀 [RE:CITAL]',
            link: 'https://tickets.interpark.com',
            img: '/1120limyoungwoong.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24016627',
                },
            ],
            category: '예매',
        },
        {
            id: 446,
            time: '20:00',
            title: '2024 DAY6 Special Concert ‘The Present’ 일반예매',
            link: 'https://ticket.yes24.com',
            img: '/1119day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51582',
                },
            ],
            category: '예매',
        },
        {
            id: 454,
            time: '20:00',
            title: '2024 2am Concert 〈2am is coming to town〉-Seoul',
            link: 'https://ticket.melon.com',
            img: '/11202am.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210679',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-22': [
        {
            id: 435,
            time: '20:00',
            title: 'SMTOWN LIVE 2025 in SEOUL 선예매',
            link: 'https://ticket.melon.com',
            img: '/1122smtownlive.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210649',
                },
            ],
            category: '예매',
        },
        {
            id: 450,
            time: '19:00',
            title: '2024 정용화 팬미팅 ＇용화와 시간을 맞출게요＇ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1122jungyonghwa.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015816',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-25': [
        {
            id: 435,
            time: '20:00',
            title: 'SMTOWN LIVE 2025 in SEOUL 일반예매',
            link: 'https://ticket.melon.com',
            img: '/1122smtownlive.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210649',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-26': [
        {
            id: 449,
            time: '19:00',
            title: '2024 BTOB CONCERT 〈BE ALRIGHT〉',
            link: 'https://tickets.interpark.com/',
            img: '/1126btob.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24016952',
                },
            ],
            category: '예매',
        },
        {
            id: 451,
            time: '19:00',
            title: '2024 정용화 팬미팅 ＇용화와 시간을 맞출게요＇ 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1122jungyonghwa.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015816',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-28': [
        {
            id: 443,
            time: '20:00',
            title: '2025 YESUNG CONCERT [It’s Complicated] IN SEOUL 선예매',
            link: 'https://ticket.yes24.com',
            img: '/1128yesung.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51547',
                },
            ],
            category: '예매',
        },
    ],
    '2024-11-29': [
        {
            id: 444,
            time: '20:00',
            title: '2025 YESUNG CONCERT [It’s Complicated] IN SEOUL 일반예매',
            link: 'https://ticket.yes24.com',
            img: '/1128yesung.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51547',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-02': [
        {
            id: 487,
            time: '19:00',
            title: 'LUCY DAYS 시야제한석',
            link: 'https://ticket.yes24.com',
            img: '/1113lucy.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51604',
                },
            ],
            category: '예매',
        },
        {
            id: 464,
            time: '20:00',
            title: '2025 이준호 FAN-CON 〈Midnight Sun〉 in INCHEON 개인 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1202leejunho.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017510',
                },
            ],
            category: '예매',
        },
        {
            id: 484,
            time: '20:00',
            title: '2025 ONG SEONG-WU FANMEETING 〈COMEONG〉 선예매',
            link: 'https://ticket.yes24.com',
            img: '/1202ongseongwu.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51804',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-03': [
        {
            id: 447,
            time: '20:00',
            title: '2025 BABYMONSTER 1st WORLD TOUR〈HELLO MONSTERS〉IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1203babymonster.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017335',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-04': [
        {
            id: 471,
            time: '18:00',
            title: '2024 B-day PARTY - MINHO [MEAN : of my birthday] 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1204minho.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24016726',
                },
            ],
            category: '예매',
        },
        {
            id: 465,
            time: '20:00',
            title: '2025 이준호 FAN-CON 〈Midnight Sun〉 in INCHEON HOTTEST 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1202leejunho.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017510',
                },
            ],
            category: '예매',
        },
        {
            id: 457,
            time: '20:00',
            title: '2025 SUHO CONCERT 〈SU:HOMME〉 ENCORE 선예매',
            link: 'https://ticket.melon.com',
            img: '/1204suho.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210741',
                },
            ],
            category: '예매',
        },
        {
            id: 485,
            time: '20:00',
            title: '2025 ONG SEONG-WU FANMEETING 〈COMEONG〉 일반예매',
            link: 'https://ticket.yes24.com',
            img: '/1202ongseongwu.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51804',
                },
            ],
            category: '예매',
        },
        {
            id: 503,
            time: '20:00',
            title: '2024 SUPER JUNIOR - D&E FAN PARTY < Jingle Jingle! > 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/1204superjunior.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/53566',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-05': [
        {
            id: 472,
            time: '18:00',
            title: '2024 B-day PARTY - MINHO [MEAN : of my birthday] 일반예매',
            link: 'https://tickets.interpark.com',
            img: '/1204minho.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24016726',
                },
            ],
            category: '예매',
        },
        {
            id: 473,
            time: '19:00',
            title: 'KYUHYUN 10th Anniversary Asia Tour ［COLORS］ in SEOUL',
            link: 'https://tickets.interpark.com',
            img: '/1205kyuhyun.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24015567',
                },
            ],
            category: '예매',
        },
        {
            id: 491,
            time: '19:00',
            title: '2024 ONEW B-Day Party ‘O! NEW DAY’ 시야제한석',
            link: 'https://ticket.melon.com/',
            img: '/1111onew.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210584',
                },
            ],
            category: '예매',
        },
        {
            id: 462,
            time: '20:00',
            title: '2025 김우빈 팬미팅 〈Woobin’s Diary〉 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1205kimwoobin.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017316',
                },
            ],
            category: '예매',
        },
        {
            id: 504,
            time: '20:00',
            title: '2024 SUPER JUNIOR - D&E FAN PARTY <Jingle Jingle!> 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/1204superjunior.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/53566',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-06': [
        {
            id: 448,
            time: '18:00',
            title: '2025 BABYMONSTER 1st WORLD TOUR〈HELLO MONSTERS〉IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1203babymonster.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017335',
                },
            ],
            category: '예매',
        },
        {
            id: 481,
            time: '19:00',
            title: '82MAJOR 3rd CONCERT 〈82MAJOR BOOM (에투메붐)〉',
            link: 'https://ticket.yes24.com',
            img: '/120682major.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51920',
                },
            ],
            category: '예매',
        },
        {
            id: 467,
            time: '20:00',
            title: '볼빨간사춘기 단독 콘서트 ‘Bloom’ After Party 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1206bol4.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017618',
                },
            ],
            category: '예매',
        },
        {
            id: 466,
            time: '20:00',
            title: '2025 이준호 FAN-CON 〈Midnight Sun〉 in INCHEON HOTTEST 일반예매',
            link: 'https://tickets.interpark.com',
            img: '/1202leejunho.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017510',
                },
            ],
            category: '예매',
        },
        {
            id: 458,
            time: '20:00',
            title: '2025 SUHO CONCERT 〈SU:HOMME〉 ENCORE 일반예매',
            link: 'https://ticket.melon.com',
            img: '/1204suho.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210741',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-09': [
        {
            id: 488,
            time: '20:00',
            title: 'GFRIEND 10th Anniversary < Season of Memories >',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/1209gfriend.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/53578?_gl=1*hwt16d*_ga*MTcwMzQ5NjQ0OC4xNzI1NjIwMDM2*_ga_PVZX56STJJ*MTczMzg0MTk5OC4xMS4xLjE3MzM4NDIwNjcuNjAuMC4w',
                },
            ],
            category: '예매',
        },
        {
            id: 468,
            time: '20:00',
            title: '볼빨간사춘기 단독 콘서트 ‘Bloom’ After Party 일반예매',
            link: 'https://tickets.interpark.com',
            img: '/1206bol4.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017618',
                },
            ],
            category: '예매',
        },
        {
            id: 459,
            time: '20:00',
            title: '2025 CHANYEOL LIVE TOUR : 都市風景 (City-scape)│Epilogue 선예매',
            link: 'https://ticket.melon.com',
            img: '/1209chanyeol.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210741',
                },
            ],
            category: '예매',
        },
        {
            id: 463,
            time: '20:00',
            title: '2025 김우빈 팬미팅 〈Woobin’s Diary〉 일반예매',
            link: 'https://tickets.interpark.com',
            img: '/1205kimwoobin.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017316',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-11': [
        {
            id: 453,
            time: '14:00',
            title: '2025 R.B.R DAY FOR NEW YEAR 선예매(당첨인증)',
            link: 'https://ticket.melon.com',
            img: '/1211riize.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210720',
                },
            ],
            category: '예매',
        },
        {
            id: 469,
            time: '20:00',
            title: '2024 백현 크리스마스 팬미팅 〈큥망진창 대환장파티〉 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1211baekhyun.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017706',
                },
            ],
            category: '예매',
        },
        {
            id: 460,
            time: '20:00',
            title: '2025 CHANYEOL LIVE TOUR : 都市風景 (City-scape)│Epilogue 선예매',
            link: 'https://ticket.melon.com',
            img: '/1209chanyeol.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210741',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-12': [
        {
            id: 470,
            time: '20:00',
            title: '2024 백현 크리스마스 팬미팅 〈큥망진창 대환장파티〉 일반예매',
            link: 'https://tickets.interpark.com',
            img: '/1211baekhyun.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017706',
                },
            ],
            category: '예매',
        },
        {
            id: 476,
            time: '20:00',
            title: '2025 WEi SHOW-CON 〈The Feelings〉 선예매',
            link: 'https://ticket.yes24.com',
            img: '/1212wei.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51892',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-13': [
        {
            id: 478,
            time: '19:00',
            title: 'BANG&JUNG&YOO&MOON ENCORE CONCERT [Farewell, Earth] 선예매',
            link: 'https://ticket.yes24.com',
            img: '/1213bangjungyoomoon.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51902',
                },
            ],
            category: '예매',
        },
        {
            id: 480,
            time: '20:00',
            title: 'I.M WORLD TOUR 〈Off The Beat〉 FINAL IN SEOUL',
            link: 'https://ticket.yes24.com',
            img: '/1213im.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51821',
                },
            ],
            category: '예매',
        },
        {
            id: 482,
            time: '20:00',
            title: 'H1-KEY 1ST FAN CONCERT [Find my KEY] 선예매',
            link: 'https://ticket.yes24.com',
            img: '/1213h1key.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51874',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-16': [
        {
            id: 474,
            time: '20:00',
            title: '2025 WayV CONCERT [ON THE Way] FINAL IN SEOUL 선예매',
            link: 'https://tickets.interpark.com',
            img: '/1216wayv.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017829',
                },
            ],
            category: '예매',
        },
        {
            id: 477,
            time: '20:00',
            title: '2025 WEi SHOW-CON 〈The Feelings〉 일반예매',
            link: 'https://ticket.yes24.com',
            img: '/1212wei.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51892',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-17': [
        {
            id: 479,
            time: '19:00',
            title: 'BANG&JUNG&YOO&MOON ENCORE CONCERT [Farewell, Earth] 일반예매',
            link: 'https://ticket.yes24.com',
            img: '/1213bangjungyoomoon.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/51902',
                },
            ],
            category: '예매',
        },
        {
            id: 475,
            time: '20:00',
            title: '2025 WayV CONCERT [ON THE Way] FINAL IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com',
            img: '/1216wayv.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24017829',
                },
            ],
            category: '예매',
        },
        {
            id: 483,
            time: '20:00',
            title: 'H1-KEY 1ST FAN CONCERT [Find my KEY] 일반예매',
            link: 'https://ticket.yes24.com',
            img: '/1213h1key.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51874',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-18': [
        {
            id: 505,
            time: '20:00',
            title: 'GFRIEND 10th Anniversary < Season of Memories > 추가회차',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/1209gfriend.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/53578?_gl=1*hwt16d*_ga*MTcwMzQ5NjQ0OC4xNzI1NjIwMDM2*_ga_PVZX56STJJ*MTczMzg0MTk5OC4xMS4xLjE3MzM4NDIwNjcuNjAuMC4w',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-19': [
        {
            id: 502,
            time: '10:00',
            title: '82MAJOR 3rd CONCERT 〈82MAJOR BOOM (에투메붐)〉 추가오픈',
            link: 'https://ticket.yes24.com',
            img: '/120682major.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/51920',
                },
            ],
            category: '예매',
        },
        {
            id: 498,
            time: '20:00',
            title: '2025 KIM JAE JOONG Asia Tour Concert J-Party "Home" in Seoul 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1219kimjaejoong.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24018089',
                },
            ],
            category: '예매',
        },
        {
            id: 490,
            time: '20:00',
            title: '2025 유연석 FANMEETING 〈The Secret Code : Y〉 IN SEOUL',
            link: 'https://ticket.melon.com/',
            img: '/1219yooyeonseok.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210804',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-20': [
        {
            id: 496,
            time: '20:00',
            title: '2025 Kep1er FAN-CON TOUR ［BEYOND THE STAR］in SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/1220kep1er.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24018161',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-23': [
        {
            id: 499,
            time: '20:00',
            title: '2025 KIM JAE JOONG Asia Tour Concert J-Party "Home" in Seoul 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1219kimjaejoong.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24018089',
                },
            ],
            category: '예매',
        },
        {
            id: 497,
            time: '20:00',
            title: '2025 Kep1er FAN-CON TOUR ［BEYOND THE STAR］in SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/1220kep1er.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24018161',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-26': [
        {
            id: 501,
            time: '10:00',
            title: '2025 JOY콘서트 보이스 오브 스프링(Voice of spring)',
            link: 'https://ticket.yes24.com',
            img: '/1226joyconcert.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Notice/NoticeMain.aspx#id=15333',
                },
            ],
            category: '예매',
        },
        {
            id: 489,
            time: '19:00',
            title: 'ONEUS 2ND WORLD TOUR ‘La Dolce Vita’ Final in Seoul 선예매',
            link: 'https://ticket.melon.com/',
            img: '/1226oneus.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210827',
                },
            ],
            category: '예매',
        },
    ],
    '2024-12-30': [
        {
            id: 500,
            time: '20:00',
            title: 'QWER The 1st Fan Concert [1, 2, QWER!]',
            link: 'https://ticket.yes24.com',
            img: '/1230qwer.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52054',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-07': [
        {
            id: 492,
            time: '20:00',
            title: 'TAEYANG 2025 TOUR [THE LIGHT YEAR] ENCORE 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0108taeyang.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24018375',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-08': [
        {
            id: 506,
            time: '19:00',
            title: '2025 검정치마 단독공연 “SONGS TO BRING YOU HOME” ',
            link: 'https://tickets.interpark.com/',
            img: '/0108theblackskirts.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&no=53915',
                },
            ],
            category: '예매',
        },
        {
            id: 518,
            time: '19:00',
            title: '2025 BABYMONSTER 1st WORLD TOUR〈HELLO MONSTERS〉 IN SEOUL',
            link: 'https://tickets.interpark.com/',
            img: '/0108babymonster.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000149',
                },
            ],
            category: '예매',
        },
        {
            id: 493,
            time: '20:00',
            title: 'TAEYANG 2025 TOUR [THE LIGHT YEAR] ENCORE 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0108taeyang.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24018375',
                },
            ],
            category: '예매',
        },
        {
            id: 507,
            time: '20:00',
            title: 'DAY6 3RD WORLD TOUR 〈FOREVER YOUNG〉 in BUSAN 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0828day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Notice/NoticeMain.aspx#id=15367',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-09': [
        {
            id: 508,
            time: '20:00',
            title: 'DAY6 3RD WORLD TOUR 〈FOREVER YOUNG〉 in BUSAN 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0828day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Notice/NoticeMain.aspx#id=15367',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-13': [
        {
            id: 514,
            time: '18:00',
            title: '2025 윤하 앵콜 콘서트 〈GROWTH THEORY : Final Edition〉 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0113younha.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000432',
                },
            ],
            category: '예매',
        },
        {
            id: 511,
            time: '19:00',
            title: '2025 LEECHANGSUB SOLO CONCERT 〈The Wayfarer〉 ENCORE 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0113leechangsub.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000325',
                },
            ],
            category: '예매',
        },
        {
            id: 525,
            time: '20:00',
            title: '2025 NCT WISH ASIA TOUR LOG in SEOUL 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0113nctwish.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210865',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-14': [
        {
            id: 515,
            time: '18:00',
            title: '2025 윤하 앵콜 콘서트 〈GROWTH THEORY : Final Edition〉 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0113younha.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000432',
                },
            ],
            category: '예매',
        },
        {
            id: 512,
            time: '19:00',
            title: '2025 LEECHANGSUB SOLO CONCERT 〈The Wayfarer〉 ENCORE 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0113leechangsub.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000325',
                },
            ],
            category: '예매',
        },
        {
            id: 516,
            time: '20:00',
            title: 'j-hope Tour ‘HOPE ON THE STAGE’ in SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0114jhope.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000014',
                },
            ],
            category: '예매',
        },
        {
            id: 527,
            time: '20:00',
            title: 'TAEYEON CONCERT - The TENSE 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0114taeyeon.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210868',
                },
            ],
            category: '예매',
        },
        {
            id: 529,
            time: '20:00',
            title: '안병웅 콘서트 ‘MPBOY in Rollinghall’ : 롤링 30주년 기념 공연',
            link: 'https://ticket.melon.com/',
            img: '/0114ahnbyeongwoong.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210869',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-15': [
        {
            id: 519,
            time: '20:00',
            title: 'THE BOYZ FAN-CON 〈THE B LAND〉 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0115theboyz.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000483',
                },
            ],
            category: '예매',
        },
        {
            id: 523,
            time: '20:00',
            title: '2024-25 aespa LIVE TOUR－SYNK：PARALLEL LINE－ENCORE 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0115aespa.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210858',
                },
            ],
            category: '예매',
        },
        {
            id: 526,
            time: '20:00',
            title: '2025 NCT WISH ASIA TOUR LOG in SEOUL 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0113nctwish.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210865',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-16': [
        {
            id: 513,
            time: '19:00',
            title: '휘성 생일 팬미팅 "HAPPY 휘`s DAY"',
            link: 'https://tickets.interpark.com/',
            img: '/0116wheesung.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000641',
                },
            ],
            category: '예매',
        },
        {
            id: 517,
            time: '20:00',
            title: 'j-hope Tour ‘HOPE ON THE STAGE’ in SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0114jhope.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000014',
                },
            ],
            category: '예매',
        },
        {
            id: 528,
            time: '20:00',
            title: 'TAEYEON CONCERT - The TENSE 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0114taeyeon.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210868',
                },
            ],
            category: '예매',
        },
        {
            id: 521,
            time: '20:00',
            title: '2025 ONEW CONCERT [ONEW THE LIVE : CONNECTION] IN SEOUL 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0116onew.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/csoon/detail.htm?csoonId=9845',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-17': [
        {
            id: 520,
            time: '20:00',
            title: 'THE BOYZ FAN-CON 〈THE B LAND〉 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0115theboyz.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000483',
                },
            ],
            category: '예매',
        },
        {
            id: 524,
            time: '20:00',
            title: '2024-25 aespa LIVE TOUR－SYNK：PARALLEL LINE－ENCORE 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0115aespa.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210858',
                },
            ],
            category: '예매',
        },
        {
            id: 530,
            time: '20:00',
            title: '2025 GOT7 CONCERT 〈NESTFEST〉',
            link: 'https://ticket.melon.com/',
            img: '/0117got7.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210888',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-20': [
        {
            id: 522,
            time: '20:00',
            title: '2025 ONEW CONCERT [ONEW THE LIVE : CONNECTION] IN SEOUL 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0116onew.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210876',
                },
            ],
            category: '예매',
        },
        {
            id: 531,
            time: '20:00',
            title: '2025 TREASURE FAN CONCERT ［SPECIAL MOMENT］ IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0120treasure.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000092',
                },
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54233',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-21': [
        {
            id: 533,
            time: '20:00',
            title: 'Stray Kids 5TH FANMEETING ‘SKZ 5’CLOCK’ 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0121straykids.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52328',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-22': [
        {
            id: 535,
            time: '20:00',
            title: 'Live on 서울 LUCY(루시), Daybreak(데이브레이크)',
            link: 'http://ticket.yes24.com/',
            img: '/0122liveon.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52357',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-23': [
        {
            id: 532,
            time: '20:00',
            title: '2025 TREASURE FAN CONCERT ［SPECIAL MOMENT］ IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0120treasure.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000092',
                },
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54233',
                },
            ],
            category: '예매',
        },
        {
            id: 534,
            time: '20:00',
            title: 'Stray Kids 5TH FANMEETING ‘SKZ 5’CLOCK’ 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0121straykids.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52328',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-24': [
        {
            id: 543,
            time: '20:00',
            title: '2025 GOT7 CONCERT 〈NESTFEST〉 추가회차(1/31)',
            link: 'https://ticket.melon.com/',
            img: '/0117got7.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210956',
                },
            ],
            category: '예매',
        },
    ],
    '2025-01-31': [
        {
            id: 536,
            time: '20:00',
            title: '2025 ATEEZ WORLD TOUR [TOWARDS THE LIGHT : WILL TO POWER] 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0131ateez.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52326',
                },
            ],
            category: '예매',
        },
        {
            id: 540,
            time: '20:00',
            title: '2025 JOOHONEY Fan Event 〈JOOHONEYWALKER〉',
            link: 'https://tickets.interpark.com/',
            img: '/0131joohoney.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25001274',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-03': [
        {
            id: 537,
            time: '20:00',
            title: '2025 ATEEZ WORLD TOUR [TOWARDS THE LIGHT : WILL TO POWER] 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0131ateez.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52326',
                },
            ],
            category: '예매',
        },
        {
            id: 538,
            time: '20:00',
            title: '2025 TREASURE FAN CONCERT ［SPECIAL MOMENT］ IN SEOUL 추가회차 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0120treasure.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000092',
                },
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54233',
                },
            ],
            category: '예매',
        },
        {
            id: 544,
            time: '20:00',
            title: '아이키 팬미팅 ‘아이키와 비밀의 방’',
            link: 'https://tickets.interpark.com/',
            img: '/0203aiki.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25001315',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-04': [
        {
            id: 551,
            time: '20:00',
            title: 'Stray Kids 5TH FANMEETING ‘SKZ 5’CLOCK’ 추가예매',
            link: 'http://ticket.yes24.com/',
            img: '/0121straykids.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52328',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-05': [
        {
            id: 509,
            time: '20:00',
            title: '2025 2NE1 CONCERT [WELCOME BACK] ENCORE IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0205투애니원.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25001426',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-06': [
        {
            id: 539,
            time: '20:00',
            title: '2025 TREASURE FAN CONCERT ［SPECIAL MOMENT］ IN SEOUL 추가회차 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0120treasure.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000092',
                },
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54233',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-07': [
        {
            id: 545,
            time: '20:00',
            title: '2025 JUNGWOO B-day PARTY [CANDY FACTORY] 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0207jungwoo.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52336',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-10': [
        {
            id: 546,
            time: '14:00',
            title: '2025 JUNGWOO B-day PARTY [CANDY FACTORY] 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0207jungwoo.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52336',
                },
            ],
            category: '예매',
        },
        {
            id: 547,
            time: '19:00',
            title: 'JENNIE ‘The Ruby Experience’ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0210jennie.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000920',
                },
            ],
            category: '예매',
        },
        {
            id: 510,
            time: '20:00',
            title: '2025 2NE1 CONCERT [WELCOME BACK] ENCORE IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0205투애니원.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25001426',
                },
            ],
            category: '예매',
        },
        {
            id: 549,
            time: '20:00',
            title: '2025 JISUNG B-day PARTY [FM 2.05 Mhz 〈Happy JISUNG Day〉] 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0210jisung.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Perf/Detail/DetailSpecial.aspx?IdPerf=52338',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-11': [
        {
            id: 550,
            time: '14:00',
            title: '2025 JISUNG B-day PARTY [FM 2.05 Mhz 〈Happy JISUNG Day〉] 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0210jisung.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Perf/Detail/DetailSpecial.aspx?IdPerf=52338',
                },
            ],
            category: '예매',
        },
        {
            id: 548,
            time: '19:00',
            title: 'JENNIE ‘The Ruby Experience’ 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0210jennie.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25000920',
                },
            ],
            category: '예매',
        },
        {
            id: 494,
            time: '20:00',
            title: 'TXT WORLD TOUR 〈ACT : PROMISE〉 - EP. 2 - IN INCHEON 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0207txt.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24018281',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-12': [
        {
            id: 552,
            time: '20:00',
            title: '2025 TEN B-day PARTY [TENsion up] 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0212ten.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210998',
                },
            ],
            category: '예매',
        },
        {
            id: 575,
            time: '20:00',
            title: '2025 KIMHYUNJOONG WORLD TOUR IN SEOUL < FILAMENT > 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0212kimhyunjoong.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54609',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-13': [
        {
            id: 495,
            time: '20:00',
            title: 'TXT WORLD TOUR 〈ACT : PROMISE〉 - EP. 2 - IN INCHEON 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0207txt.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/24018281',
                },
            ],
            category: '예매',
        },
        {
            id: 553,
            time: '20:00',
            title: '2025 TEN B-day PARTY [TENsion up] 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0212ten.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210998',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-14': [
        {
            id: 558,
            time: '20:00',
            title: '2025 YUGYEOM TOUR [TRUSTY] in Seoul',
            link: 'http://ticket.yes24.com/',
            img: '/0214yugyeom.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52587',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-17': [
        {
            id: 541,
            time: '20:00',
            title: '2025 IVE THE 3RD FAN CONCERT 〈IVE SCOUT〉 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0217ive.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210962',
                },
            ],
            category: '예매',
        },
        {
            id: 556,
            time: '20:00',
            title: 'NEXZ 1ST FAN MEETING 〈NEXZ HIGH SCHOOL〉 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0217nexz.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52544',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-18': [
        {
            id: 554,
            time: '20:00',
            title: '2025 HAPPY SUB’S DAY [The Prince] 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0218leechangsub.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25001960',
                },
            ],
            category: '예매',
        },
        {
            id: 557,
            time: '20:00',
            title: 'NEXZ 1ST FAN MEETING 〈NEXZ HIGH SCHOOL〉 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0217nexz.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52544',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-19': [
        {
            id: 555,
            time: '20:00',
            title: '2025 HAPPY SUB’S DAY [The Prince] 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0218leechangsub.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25001960',
                },
            ],
            category: '예매',
        },
        {
            id: 577,
            time: '20:00',
            title: '< tripleS Come True> World Tour in Seoul 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0219triples.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54708',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-20': [
        {
            id: 542,
            time: '20:00',
            title: '2025 IVE THE 3RD FAN CONCERT 〈IVE SCOUT〉 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0217ive.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=210962',
                },
            ],
            category: '예매',
        },
        {
            id: 573,
            time: '20:00',
            title: '2025 SF9 YOO TAE YANG B-DAY PARTY ‘HAPPY TAE YANG DAY’ 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0220yootaeyang.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211062',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-21': [
        {
            id: 561,
            time: '20:00',
            title: '2025 SVT 9TH FAN MEETING 〈SEVENTEEN in CARAT LAND〉 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0221seventeen.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25001413',
                },
            ],
            category: '예매',
        },
        {
            id: 577,
            time: '20:00',
            title: '< tripleS Come True> World Tour in Seoul 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0219triples.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54708',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-24': [
        {
            id: 582,
            time: '19:00',
            title: '2025 BTOB FAN-CON ‘3,2,1 GO! MELympic 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0224btob.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25002174',
                },
            ],
            category: '예매',
        },
        {
            id: 562,
            time: '20:00',
            title: '2025 SVT 9TH FAN MEETING 〈SEVENTEEN in CARAT LAND〉 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0221seventeen.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25001413',
                },
            ],
            category: '예매',
        },
        {
            id: 574,
            time: '20:00',
            title: '2025 SF9 YOO TAE YANG B-DAY PARTY ‘HAPPY TAE YANG DAY’ 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0220yootaeyang.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211062',
                },
            ],
            category: '예매',
        },
        {
            id: 576,
            time: '20:00',
            title: '2025 KIMHYUNJOONG WORLD TOUR IN SEOUL < FILAMENT > 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0212kimhyunjoong.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54609',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-25': [
        {
            id: 578,
            time: '20:00',
            title: 'CIX 4th CONCERT < THUNDER FEVER > IN SEOUL',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0225cix.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54858',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-26': [
        {
            id: 559,
            time: '20:00',
            title: 'G-DRAGON 2025 WORLD TOUR [Übermensch] 선예매',
            link: 'https://www.coupangplay.com/',
            img: '/0226gdragon.svg',
            companies: [
                {
                    name: '쿠팡플레이',
                    link: 'https://www.coupangplay.com/titles/c0651c3f-6a2b-48b9-9816-e82422f00510/event?titleType=tvshow&sourceType=p_hero',
                },
                {
                    name: '인터파크',
                    link: 'https://www.globalinterpark.com/en/product/25002078',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-27': [
        {
            id: 564,
            time: '19:00',
            title: '2025 KIHYUN Fan Event 〈TRIP TO KIKITOWN!〉',
            link: 'https://tickets.interpark.com/',
            img: '/0227kihyun.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25002533',
                },
            ],
            category: '예매',
        },
        {
            id: 583,
            time: '19:00',
            title: '2025 BTOB FAN-CON ‘3,2,1 GO! MELympic 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0224btob.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25002174',
                },
            ],
            category: '예매',
        },
        {
            id: 560,
            time: '20:00',
            title: 'G-DRAGON 2025 WORLD TOUR [Übermensch] 일반예매',
            link: 'https://www.coupangplay.com/',
            img: '/0226gdragon.svg',
            companies: [
                {
                    name: '쿠팡플레이',
                    link: 'https://www.coupangplay.com/titles/c0651c3f-6a2b-48b9-9816-e82422f00510/event?titleType=tvshow&sourceType=p_hero',
                },
                {
                    name: '인터파크',
                    link: 'https://www.globalinterpark.com/en/product/25002078',
                },
            ],
            category: '예매',
        },
    ],
    '2025-02-28': [
        {
            id: 563,
            time: '16:00',
            title: '2025 한스 짐머(Hans Zimmer) 내한공연',
            link: 'https://tickets.interpark.com/',
            img: '/0228hanszimmer.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25002808',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-04': [
        {
            id: 571,
            time: '20:00',
            title: '2025 정해인 앵콜 팬미팅 ‘OUR TIME - HBD’ 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0304junghaein.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211062',
                },
            ],
            category: '예매',
        },
        {
            id: 579,
            time: '20:00',
            title: '2025 YESUNG CONCERT [We’re the Complicated Kind] 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0304yesung.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54961',
                },
            ],
            category: '예매',
        },
        {
            id: 581,
            time: '20:00',
            title: 'Music Collection: BTOB 서은광 X B1A4 산들',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0304musiccollection.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54924',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-05': [
        {
            id: 567,
            time: '20:00',
            title: 'EUNHYUK LIVE TOUR 2025 -Limitless: Time- Special in SEOUL 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0305eunhyuk.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52758',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-06': [
        {
            id: 566,
            time: '18:00',
            title: 'AIMYON TOUR 2025 "Dolphin Apartment" in SEOUL',
            link: 'http://ticket.yes24.com/',
            img: '/0306aimyon.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/53044',
                },
            ],
            category: '예매',
        },
        {
            id: 565,
            time: '20:00',
            title: 'G-DRAGON 2025 WORLD TOUR [Übermensch] 시야제한석',
            link: 'https://www.coupangplay.com/',
            img: '/0226gdragon.svg',
            companies: [
                {
                    name: '쿠팡플레이',
                    link: 'https://www.coupangplay.com/titles/c0651c3f-6a2b-48b9-9816-e82422f00510/event?titleType=tvshow&sourceType=p_hero',
                },
                {
                    name: '인터파크',
                    link: 'https://www.globalinterpark.com/en/product/25002078',
                },
            ],
            category: '예매',
        },
        {
            id: 580,
            time: '20:00',
            title: '2025 YESUNG CONCERT [We’re the Complicated Kind] 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0304yesung.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/54961',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-07': [
        {
            id: 568,
            time: '20:00',
            title: 'EUNHYUK LIVE TOUR 2025 -Limitless: Time- Special in SEOUL 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0305eunhyuk.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52758',
                },
            ],
            category: '예매',
        },
        {
            id: 572,
            time: '20:00',
            title: '2025 정해인 앵콜 팬미팅 ‘OUR TIME - HBD’ 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0304junghaein.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211062',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-10': [
        {
            id: 587,
            time: '19:00',
            title: 'Billlie World Tour ‘Our FLOWERLD (Belllie`ve You)’ in SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0310billlie.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25003299',
                },
            ],
            category: '예매',
        },
        {
            id: 592,
            time: '20:00',
            title: '2025 TEN CONCERT 1001 MOVEMENT ‘STUNNER’ IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0310ten.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25002199',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-11': [
        {
            id: 603,
            time: '19:00',
            title: '2025 박서진 콘서트 [NEW:BEGIN]',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0311parkseojin.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/55093',
                },
            ],
            category: '예매',
        },
        {
            id: 593,
            time: '20:00',
            title: '2025 TEN CONCERT 1001 MOVEMENT ‘STUNNER’ IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0310ten.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25002199',
                },
            ],
            category: '예매',
        },
        {
            id: 569,
            time: '20:00',
            title: '2025 OH MY GIRL CONCERT [Milky Way] 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0311ohmygirl.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Notice/NoticeMain.aspx#id=15702',
                },
            ],
            category: '예매',
        },
        {
            id: 590,
            time: '20:00',
            title: '2025 JOYURI FAN-CON ‘Episode 25’ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0311joyuri.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25003238',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-12': [
        {
            id: 596,
            time: '18:00',
            title: 'KREAM ㅋㅋ데이 -77% 특가',
            link: 'https://kream.co.kr/',
            img: '/kream77day.svg',
            companies: [
                {
                    name: 'KREAM',
                    link: 'https://kream.co.kr/exhibitions/8835',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 602,
            time: '20:00',
            title: 'INFINITE 15TH ANNIVERSARY CONCERT : LIMITED EDITION - ENCORE 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0312infinite.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/55139',
                },
            ],
            category: '예매',
        },
        {
            id: 588,
            time: '20:00',
            title: 'Billlie World Tour ‘Our FLOWERLD (Belllie`ve You)’ in SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0310billlie.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25003299',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-13': [
        {
            id: 589,
            time: '14:00',
            title: '[ 2024-25 Theatre 이문세 ] - 서울 ',
            link: 'https://tickets.interpark.com/',
            img: '/0313leemoonsae.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=5&stext=&no=54743&groupno=54743&seq=0&KindOfGoods=TICKET&Genre=&sort=WriteDate',
                },
            ],
            category: '예매',
        },
        {
            id: 591,
            time: '20:00',
            title: '2025 JOYURI FAN-CON ‘Episode 25’ 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0311joyuri.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25003238',
                },
            ],
            category: '예매',
        },
        {
            id: 599,
            time: '20:00',
            title: '2025 RENJUN B-day PARTY [My Little Planet] 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0313renjun.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52915',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-14': [
        {
            id: 600,
            time: '14:00',
            title: '2025 RENJUN B-day PARTY [My Little Planet] 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0313renjun.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52915',
                },
            ],
            category: '예매',
        },
        {
            id: 584,
            time: '20:00',
            title: '2025 성시경 팬미팅 “사월” 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0314sungsikyung.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25003316',
                },
            ],
            category: '예매',
        },
        {
            id: 570,
            time: '20:00',
            title: '2025 OH MY GIRL CONCERT [Milky Way] 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0311ohmygirl.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Notice/NoticeMain.aspx#id=15702',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-17': [
        {
            id: 585,
            time: '20:00',
            title: '2025 ZEROBASEONE FAN-CON [BLUE MANSION] 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0317zerobaseone.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=2&stext=&no=54797&groupno=54797&seq=0&KindOfGoods=TICKET&Genre=&sort=WriteDate',
                },
            ],
            category: '예매',
        },
        {
            id: 601,
            time: '20:00',
            title: '2024-25 TAEMIN WORLD TOUR [Ephemeral Gaze] Finale 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0317taemin.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52938',
                },
            ],
            category: '예매',
        },
        {
            id: 607,
            time: '20:00',
            title: '2025 KAI SOLO CONCERT TOUR 〈KAION〉 IN SEOUL 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0317kai.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211158',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-18': [
        {
            id: 586,
            time: '20:00',
            title: '2025 ZEROBASEONE FAN-CON [BLUE MANSION] 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0317zerobaseone.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://ticket.interpark.com/webzine/paper/TPNoticeView.asp?bbsno=34&pageno=2&stext=&no=54797&groupno=54797&seq=0&KindOfGoods=TICKET&Genre=&sort=WriteDate',
                },
            ],
            category: '예매',
        },
        {
            id: 609,
            time: '20:00',
            title: 'SHINee WORLD Ⅶ [E.S.S.A.Y] (Every Stage Shines Around You) 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0318shinee.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211159',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-19': [
        {
            id: 604,
            time: '15:00',
            title: '2025 박서진 콘서트 [NEW:BEGIN] 추가 오픈',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0311parkseojin.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/55093',
                },
            ],
            category: '예매',
        },
        {
            id: 597,
            time: '18:00',
            title: 'KREAM ㅋㅋ데이 -77% 특가',
            link: 'https://kream.co.kr/',
            img: '/kream77day.svg',
            companies: [
                {
                    name: 'KREAM',
                    link: 'https://kream.co.kr/exhibitions/8835',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 602,
            time: '20:00',
            title: '2024-25 TAEMIN WORLD TOUR [Ephemeral Gaze] Finale 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0317taemin.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52938',
                },
            ],
            category: '예매',
        },
        {
            id: 608,
            time: '20:00',
            title: '2025 KAI SOLO CONCERT TOUR 〈KAION〉 IN SEOUL 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0317kai.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211158',
                },
            ],
            category: '예매',
        },
        {
            id: 605,
            time: '20:00',
            title: 'tripleS [서핑 동아리 1기 발대식] : 파도치는 이 소리가 안들려? 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0319triples.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/help/notice/61640',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-20': [
        {
            id: 610,
            time: '20:00',
            title: 'SHINee WORLD Ⅶ [E.S.S.A.Y] (Every Stage Shines Around You) 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0318shinee.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211159',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-21': [
        {
            id: 606,
            time: '20:00',
            title: 'tripleS [서핑 동아리 1기 발대식] : 파도치는 이 소리가 안들려? 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0319triples.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/help/notice/61640',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-24': [
        {
            id: 633,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 627,
            time: '20:00',
            title: '2025 Jay Park World Tour [Serenades & Body Rolls] 선예매 1차',
            link: 'https://ticket.melon.com/',
            img: '/0326jaypark.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211189',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-25': [
        {
            id: 634,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
    ],
    '2025-03-26': [
        {
            id: 635,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 628,
            time: '20:00',
            title: '2025 Jay Park World Tour [Serenades & Body Rolls] 선예매 2차',
            link: 'https://ticket.melon.com/',
            img: '/0326jaypark.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211189',
                },
            ],
            category: '예매',
        },
        {
            id: 598,
            time: '18:00',
            title: 'KREAM ㅋㅋ데이 -77% 특가',
            link: 'https://kream.co.kr/',
            img: '/kream77day.svg',
            companies: [
                {
                    name: 'KREAM',
                    link: 'https://kream.co.kr/exhibitions/8835',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 594,
            time: '20:00',
            title: '2025 LE SSERAFIM TOUR ‘EASY CRAZY HOT’ IN INCHEON 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0326lesserafim.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25003269',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-27': [
        {
            id: 636,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 613,
            time: '20:00',
            title: 'DAESUNG 2025 ASIA TOUR: D’s WAVE IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0327daesung.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004215',
                },
            ],
            category: '예매',
        },
        {
            id: 620,
            time: '20:00',
            title: 'EUNHYUK LIVE TOUR 2025 -Limitless: Time- 추가오픈',
            link: 'http://ticket.yes24.com/',
            img: '/0305eunhyuk.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/52758',
                },
            ],
            category: '예매',
        },
        {
            id: 629,
            time: '20:00',
            title: '2025 Jay Park World Tour [Serenades & Body Rolls] 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0326jaypark.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211189',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-28': [
        {
            id: 637,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 595,
            time: '20:00',
            title: '2025 LE SSERAFIM TOUR ‘EASY CRAZY HOT’ IN INCHEON 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0326lesserafim.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25003269',
                },
            ],
            category: '예매',
        },
        {
            id: 611,
            time: '20:00',
            title: '2025 N.Flying LIVE ‘＆CON4 : FULL CIRCLE’ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0328nflying.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004056',
                },
            ],
            category: '예매',
        },
    ],
    '2025-03-29': [
        {
            id: 638,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
    ],
    '2025-03-30': [
        {
            id: 639,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
    ],
    '2025-03-31': [
        {
            id: 640,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
    ],
    '2025-04-01': [
        {
            id: 641,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 612,
            time: '20:00',
            title: '2025 N.Flying LIVE ‘＆CON4 : FULL CIRCLE’ 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0328nflying.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004056',
                },
            ],
            category: '예매',
        },
        {
            id: 614,
            time: '20:00',
            title: 'DAESUNG 2025 ASIA TOUR: D’s WAVE IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0327daesung.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004215',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-02': [
        {
            id: 642,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
    ],
    '2025-04-03': [
        {
            id: 643,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 618,
            time: '20:00',
            title: '2025 B1A4 CONCERT [Singularity] 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0403b1a4.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/53176',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-04': [
        {
            id: 644,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 625,
            time: '19:00',
            title: '그룹사운드 잔나비 콘서트 <모든소년소녀들> 2025 - 서울 THE 1ST WEEK​ ',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0404jannabi.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/help/notice/61736',
                },
            ],
            category: '예매',
        },
        {
            id: 626,
            time: '20:00',
            title: '그룹사운드 잔나비 콘서트 <모든소년소녀들> 2025 - 서울 THE 2ND WEEK​ ',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0404jannabi.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/help/notice/61737',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-05': [
        {
            id: 645,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
    ],
    '2025-04-06': [
        {
            id: 646,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
    ],
    '2025-04-07': [
        {
            id: 647,
            time: '18:00',
            title: '애플 에어팟4 선착순 990원 특가',
            link: 'https://zigzag.kr/',
            img: '/0324zigzag.svg',
            companies: [
                {
                    name: '지그재그',
                    link: 'https://zigzag.kr/',
                },
            ],
            category: '발매',
        },
        {
            id: 615,
            time: '12:00',
            title: '트래비스 스캇 첫 단독 내한공연 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0407travisscott.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004359',
                },
            ],
            category: '예매',
        },
        {
            id: 619,
            time: '20:00',
            title: '2025 B1A4 CONCERT [Singularity] 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0403b1a4.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/53176',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-08': [
        {
            id: 616,
            time: '12:00',
            title: '트래비스 스캇 첫 단독 내한공연 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0407travisscott.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004359',
                },
            ],
            category: '예매',
        },
        {
            id: 630,
            time: '20:00',
            title: '2025 NCT DREAM FANMEETING 〈DREAM QUEST〉 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0408nctdream.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211217',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-10': [
        {
            id: 622,
            time: '20:00',
            title: 'DAY6 3RD WORLD TOUR〈FOREVER YOUNG〉 1차 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0410day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Notice/NoticeMain.aspx#id=15839',
                },
            ],
            category: '예매',
        },
        {
            id: 655,
            time: '20:00',
            title: '이세계 페스티벌 2025',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0410isegye.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/55751',
                },
            ],
            category: '예매',
        },
        {
            id: 631,
            time: '20:00',
            title: '2025 NCT DREAM FANMEETING 〈DREAM QUEST〉 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0408nctdream.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211217',
                },
            ],
            category: '예매',
        },
        {
            id: 653,
            time: '20:00',
            title: '2025 영탁 팬콘 ‘YOUNGONE PARK’ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0410youngtak.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004077',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-11': [
        {
            id: 623,
            time: '20:00',
            title: 'DAY6 3RD WORLD TOUR〈FOREVER YOUNG〉 2차 선예매',
            link: 'http://ticket.yes24.com/',
            img: '/0410day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Notice/NoticeMain.aspx#id=15839',
                },
            ],
            category: '예매',
        },
        {
            id: 632,
            time: '20:00',
            title: '무한도전 20주년 기념 10km 마라톤',
            link: 'https://www.coupangplay.com/',
            img: '/0411infinitychallenge.svg',
            companies: [
                {
                    name: '쿠팡플레이',
                    link: 'https://www.coupangplay.com/',
                },
            ],
            category: '예매',
        },
        {
            id: 654,
            time: '20:00',
            title: '2025 영탁 팬콘 ‘YOUNGONE PARK’ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0410youngtak.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004077',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-14': [
        {
            id: 624,
            time: '20:00',
            title: 'DAY6 3RD WORLD TOUR〈FOREVER YOUNG〉 일반예매',
            link: 'http://ticket.yes24.com/',
            img: '/0410day6.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/New/Notice/NoticeMain.aspx#id=15839',
                },
            ],
            category: '예매',
        },
        {
            id: 649,
            time: '20:00',
            title: '2025 ＆TEAM ‘AWAKEN THE BLOODLINE’ in SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0414&team.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004476',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-15': [
        {
            id: 650,
            time: '20:00',
            title: '2025 ＆TEAM ‘AWAKEN THE BLOODLINE’ in SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0414&team.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25004476',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-17': [
        {
            id: 621,
            time: '18:00',
            title: '노엘(NO:EL) 단독 콘서트 〈No.1 : El Arte〉',
            link: 'http://ticket.yes24.com/',
            img: '/0417noel.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Perf/53361',
                },
            ],
            category: '예매',
        },
        {
            id: 656,
            time: '20:00',
            title: '2025 KIM JAE JOONG ASIA TOUR CONCERT “Beauty in Chaos” 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0417kimjaejoong.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25005191',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-18': [
        {
            id: 660,
            time: '20:00',
            title: '슈퍼주니어 20주년 전시 SUPER RECORDS',
            link: 'https://tickets.interpark.com/',
            img: '/0418superjunior.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9285',
                },
            ],
            category: '예매',
        },
        {
            id: 658,
            time: '20:00',
            title: '2025 ONF CONCERT ［THE MAP:STRANGER’S PATH］ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0418onf.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9281',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-21': [
        {
            id: 665,
            time: '20:00',
            title: '2025 IRENE & SEULGI Concert Tour [ BALANCE ] in SEOUL 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0421ireneseulgi.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211290',
                },
            ],
            category: '예매',
        },
        {
            id: 659,
            time: '20:00',
            title: '2025 ONF CONCERT ［THE MAP:STRANGER’S PATH］ 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0418onf.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9281',
                },
            ],
            category: '예매',
        },
        {
            id: 661,
            time: '20:00',
            title: '2025 N.Flying LIVE ‘＆CON4 : FULL CIRCLE’ in Busan 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0421nflying.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9286',
                },
            ],
            category: '예매',
        },
        {
            id: 683,
            time: '14:00',
            title: '2025 박보영 팬미팅 - written BY.',
            link: 'http://ticket.yes24.com/',
            img: '/0421parkboyoung.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/53430',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-22': [
        {
            id: 667,
            time: '11:00',
            title: '뮤지컬 〈팬텀〉 10주년 기념 공연 2차 티켓 오픈',
            link: 'https://ticket.melon.com/',
            img: '/0422phantom.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211212',
                },
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/P0004249',
                },
            ],
            category: '예매',
        },
        {
            id: 682,
            time: '14:00',
            title: '〈불꽃야구〉창단 첫 직관 경기',
            link: 'http://ticket.yes24.com/',
            img: '/0422baseball.svg',
            companies: [
                {
                    name: '예스24 티켓',
                    link: 'http://ticket.yes24.com/Special/53541',
                },
            ],
            category: '예매',
        },
        {
            id: 657,
            time: '20:00',
            title: '2025 KIM JAE JOONG ASIA TOUR CONCERT “Beauty in Chaos” 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0417kimjaejoong.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25005191',
                },
            ],
            category: '예매',
        },
        {
            id: 666,
            time: '20:00',
            title: '2025 IRENE & SEULGI Concert Tour [ BALANCE ] in SEOUL 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0421ireneseulgi.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211290',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-23': [
        {
            id: 662,
            time: '20:00',
            title: '2025 N.Flying LIVE ‘＆CON4 : FULL CIRCLE’ in Busan 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0421nflying.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9286',
                },
            ],
            category: '예매',
        },
        {
            id: 677,
            time: '20:00',
            title: '2025 부산원아시아페스티벌(BOF) 1차 예매',
            link: 'https://ticket.melon.com/',
            img: '/0423BOF.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211313',
                },
            ],
            category: '예매',
        },
        {
            id: 680,
            time: '20:00',
            title: '2025 RO WOON FAN MEETING ‘Before Blooming’ 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0423rowoon.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211287',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-24': [
        {
            id: 674,
            time: '12:00',
            title: '라우브 내한공연 - 대구',
            link: 'https://tickets.interpark.com/',
            img: '/0424lauv.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25005824',
                },
            ],
            category: '예매',
        },
        {
            id: 663,
            time: '20:00',
            title: '2025 DOYOUNG CONCERT [ Doors ] 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0424doyoung.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211309',
                },
            ],
            category: '예매',
        },
        {
            id: 678,
            time: '20:00',
            title: '2025 부산원아시아페스티벌(BOF) 2차 예매',
            link: 'https://ticket.melon.com/',
            img: '/0423BOF.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211313',
                },
            ],
            category: '예매',
        },
        {
            id: 670,
            time: '20:00',
            title: '2025 Weverse Con Festival - 1 DAY PASS 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0424weversecon.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25002525',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-25': [
        {
            id: 648,
            time: '20:00',
            title: 'YE (칸예 웨스트) 내한 공연 ‘BULLY’',
            link: 'https://www.coupangplay.com/',
            img: '/0425kanye.svg',
            companies: [
                {
                    name: '쿠팡플레이',
                    link: 'https://www.coupangplay.com/',
                },
            ],
            category: '예매',
        },
        {
            id: 664,
            time: '20:00',
            title: '2025 DOYOUNG CONCERT [ Doors ] 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0424doyoung.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211309',
                },
            ],
            category: '예매',
        },
        {
            id: 679,
            time: '20:00',
            title: '2025 부산원아시아페스티벌(BOF) 3차 예매',
            link: 'https://ticket.melon.com/',
            img: '/0423BOF.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211313',
                },
            ],
            category: '예매',
        },
        {
            id: 676,
            time: '20:00',
            title: '2025 Weverse Con Festival - 1 DAY PASS 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0424weversecon.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25002525',
                },
            ],
            category: '예매',
        },
        {
            id: 671,
            time: '20:00',
            title: '2025 Weverse Con Festival - CON TICKET',
            link: 'https://tickets.interpark.com/',
            img: '/0424weversecon.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25005606',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-28': [
        {
            id: 694,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 672,
            time: '19:00',
            title: 'CLOSE YOUR EYES 1ST FANMEETING ［CLOSER MOMENTS］ 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0428closeyoureyes.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25005569',
                },
            ],
            category: '예매',
        },
        {
            id: 668,
            time: '20:00',
            title: '＃RUNSEOKJIN_EP.TOUR in GOYANG 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0428jin.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25005869',
                },
            ],
            category: '예매',
        },
        {
            id: 687,
            time: '20:00',
            title: 'The 4th ASTROAD [ Stargraphy ] AROHA 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0428astro.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/56004',
                },
            ],
            category: '예매',
        },
        {
            id: 684,
            time: '20:00',
            title: '장현승 컴백 팬미팅 ‘The Orbit’ : 롤링 30주년 기념 공연',
            link: 'https://ticket.melon.com/',
            img: '/0428janghyunseung.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211344',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-29': [
        {
            id: 695,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 669,
            time: '20:00',
            title: '＃RUNSEOKJIN_EP.TOUR in GOYANG 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0428jin.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25005869',
                },
            ],
            category: '예매',
        },
        {
            id: 681,
            time: '20:00',
            title: '2025 RO WOON FAN MEETING ‘Before Blooming’ 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0423rowoon.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211287',
                },
            ],
            category: '예매',
        },
    ],
    '2025-04-30': [
        {
            id: 696,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 692,
            time: '14:00',
            title: '2NE1 X FRGMT 무신사 드롭',
            link: 'https://www.musinsa.com/',
            img: '/04302ne1.svg',
            companies: [
                {
                    name: '무신사',
                    link: 'https://www.musinsa.com/content/1361936779357799281',
                },
            ],
            category: '예매',
        },
        {
            id: 673,
            time: '19:00',
            title: 'CLOSE YOUR EYES 1ST FANMEETING ［CLOSER MOMENTS］ 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0428closeyoureyes.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/goods/25005569',
                },
            ],
            category: '예매',
        },
        {
            id: 688,
            time: '20:00',
            title: 'The 4th ASTROAD [ Stargraphy ] HAMO 선예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0428astro.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/56004',
                },
            ],
            category: '예매',
        },
        {
            id: 617,
            time: '20:00',
            title: '2025 ILLIT GLITTER DAY IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0430illit.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://mobileticket.interpark.com/goods/25004131',
                },
            ],
            category: '예매',
        },
    ],
    '2025-05-01': [
        {
            id: 697,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2025-05-02': [
        {
            id: 698,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 689,
            time: '20:00',
            title: 'The 4th ASTROAD [ Stargraphy ] 일반예매',
            link: 'https://www.ticketlink.co.kr/home',
            img: '/0428astro.svg',
            companies: [
                {
                    name: '티켓링크',
                    link: 'https://www.ticketlink.co.kr/product/56004',
                },
            ],
            category: '예매',
        },
        {
            id: 693,
            time: '20:00',
            title: 'NCT WISH THE 1ST PHOTO EXHIBITION [ONE SUMMER WISH]',
            link: 'https://ticket.melon.com/',
            img: '/0502nctwish.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/performance/index.htm?prodId=211355',
                },
            ],
            category: '예매',
        },
    ],
    '2025-05-03': [
        {
            id: 699,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2025-05-04': [
        {
            id: 700,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2025-05-05': [
        {
            id: 701,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2025-05-06': [
        {
            id: 702,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2025-05-07': [
        {
            id: 708,
            time: '10:00',
            title: '롤렉스 현대백화점 압구정 본점 6-7월 예약',
            link: 'https://www.unowatch.co.kr/rolex/',
            img: '/rolex.svg',
            companies: [
                {
                    name: '우노와치',
                    link: 'https://www.unowatch.co.kr/rolex/contact-seoul/appointment/',
                },
            ],
            category: '신청',
        },
        {
            id: 703,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 685,
            time: '20:00',
            title: '2025 DOH KYUNG SOO ASIA TOUR 〈DO it! in Seoul〉 선예매',
            link: 'https://ticket.melon.com/',
            img: '/0507dohkyungsoo.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/csoon/detail.htm?csoonId=10278',
                },
            ],
            category: '예매',
        },
    ],
    '2025-05-08': [
        {
            id: 704,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 675,
            time: '14:00',
            title: '뮤지컬 〈위키드〉 내한 공연(WICKED The Musical)',
            link: 'https://tickets.interpark.com/',
            img: '/0508wicked.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9383',
                },
            ],
            category: '예매',
        },
        {
            id: 651,
            time: '20:00',
            title: 'BLACKPINK 2025 WORLD TOUR IN GOYANG 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0508blackpink.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9231',
                },
            ],
            category: '예매',
        },
    ],
    '2025-05-09': [
        {
            id: 705,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
        {
            id: 686,
            time: '20:00',
            title: '2025 DOH KYUNG SOO ASIA TOUR 〈DO it! in Seoul〉 일반예매',
            link: 'https://ticket.melon.com/',
            img: '/0507dohkyungsoo.svg',
            companies: [
                {
                    name: '멜론티켓',
                    link: 'https://ticket.melon.com/csoon/detail.htm?csoonId=10278',
                },
            ],
            category: '예매',
        },
    ],
    '2025-05-10': [
        {
            id: 706,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2025-05-11': [
        {
            id: 707,
            time: '10:00',
            title: 'NOL 국제선 선착순 50% 할인쿠폰',
            link: 'https://nol.yanolja.com/',
            img: '/0428nol.svg',
            companies: [
                {
                    name: 'NOL(구 야놀자)',
                    link: 'https://nol.yanolja.com/promotions/benefit-download/0428_FLIGHTIMPACT%23subconent_1?service=yanolja&redirectUrl=https%3A%2F%2Fnol.yanolja.com%2Fpromotions%2Fbenefit-download%2F0428_FLIGHTIMPACT%23subconent_1&ott=346cd66147fe455ea68249115531d5ee#subconent_1',
                },
            ],
            category: '쿠폰',
        },
    ],
    '2025-05-15': [
        {
            id: 652,
            time: '20:00',
            title: 'BLACKPINK 2025 WORLD TOUR IN GOYANG 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0508blackpink.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9231',
                },
            ],
            category: '예매',
        },
    ],
    '2025-05-21': [
        {
            id: 690,
            time: '14:00',
            title: '2025 TWS TOUR ‘24/7:WITH:US’ IN SEOUL 선예매',
            link: 'https://tickets.interpark.com/',
            img: '/0521tws.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9440',
                },
            ],
            category: '예매',
        },
    ],
    '2025-05-23': [
        {
            id: 691,
            time: '14:00',
            title: '2025 TWS TOUR ‘24/7:WITH:US’ IN SEOUL 일반예매',
            link: 'https://tickets.interpark.com/',
            img: '/0521tws.svg',
            companies: [
                {
                    name: 'NOL 티켓',
                    link: 'https://tickets.interpark.com/contents/notice/detail/9440',
                },
            ],
            category: '예매',
        },
    ],
    // Add more events as needed
};

export default events;
