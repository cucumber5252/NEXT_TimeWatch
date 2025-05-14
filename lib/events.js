// 파리올림픽 7/26 - 8/11 이 기간 동안 음방 x
// 현재 마지막 id 708번 (여기 계속 마지막 id 업데이트 해주기!!)
// 이벤트 추가할 때 id 순서가 아닌 '시간 순서'로 넣기

const events = {
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
