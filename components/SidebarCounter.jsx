'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './SideBarCounter.module.css';
import Image from 'next/image';

export default function UserCounter() {
    const [todayVisits, setTodayVisits] = useState('로딩 중...');
    const [yesterdayVisits, setYesterdayVisits] = useState('로딩 중...');

    const fetchVisitData = async () => {
        try {
            // KST 시간을 API로부터 가져오기
            const kstResponse = await axios.get('/api/kst');
            const { kstDateString, kstDateStringWithMs, todayString, yesterdayString } = kstResponse.data;

            // 콘솔에 현재의 Vercel 시간 + 9시간 출력
            // console.log('VC Time:', kstDateStringWithMs);
            // console.log('어제 날짜 (SidebarCounter):', yesterdayString);

            // kstDateString은 "YYYY-MM-DD HH:mm:ss" 형식이므로, 시간(HH) 추출
            const kstHour = parseInt(kstDateString.split(' ')[1].split(':')[0], 10);
            const additionalVisits = kstHour * 41; // 1시간마다 41씩 추가

            // 오늘과 어제 방문자 수 조회
            const visitResponse = await axios.get('/api/record-visit', { params: { getYesterday: true } });
            setTodayVisits(visitResponse.data.uniqueCount + additionalVisits); // todayVisits에 추가된 값
            setYesterdayVisits(visitResponse.data.yesterdayUniqueCount + 1000); // 어제 방문자 수에 1000을 더해서 표시
        } catch (error) {
            console.error('Error fetching visit data:', error);
        }
    };

    useEffect(() => {
        // 페이지 로드 시 데이터 가져오기
        fetchVisitData();
    }, []);

    return (
        <div className={styles.counterContainer}>
            <div className={styles.stat}>
                <Image src="/visitors.svg" className={styles.visitorImage} alt="Logo" width={18} height={18} />
                <span>오늘 접속한 사람들</span>
                <span className={styles.bold}>{todayVisits} 명</span>
            </div>
            <div className={styles.stat}>
                <Image src="/visitors.svg" className={styles.visitorImage} alt="Logo" width={18} height={18} />
                <span>어제 접속한 사람들</span>
                <span className={styles.bold}>{yesterdayVisits} 명</span>
            </div>
            <a
                href="https://search.naver.com/search.naver?ssc=tab.nx.all&where=nexearch&query=%EC%84%9C%EB%B2%84%EC%8B%9C%EA%B0%84+%EB%9F%AD%ED%83%80%EC%9E%84&sm=tab_org&qvt=0"
                className={styles.searchContainer}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    src="/naver-search.svg"
                    className={styles.searchImage}
                    alt="Naver Search Bar Image"
                    width={424.48}
                    height={40}
                />
                {/* <div className={styles.textOverlay}>서버시간 타임워치 검색</div> */}
            </a>
        </div>
    );
}
