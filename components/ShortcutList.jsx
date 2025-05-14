'use client';

import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation'; // next/navigation에서 useRouter 가져오기
import styles from './ShortcutList.module.css';
import Image from 'next/image';
import events from '../lib/events';
import axios from 'axios';
import dynamic from 'next/dynamic';

const kyung = 'https://kyungkorea.com/';
const ali = 'https://aliexpress.com/';
const oliveyoung = 'https://www.oliveyoung.com/';
const ably = 'https://a-bly.com';
const coupangeats = 'https://www.coupangeats.com';

const getUniqueCompanies = (events) => {
    const uniqueCompanies = [];
    const seenNames = new Set();

    events.forEach((event) => {
        event.companies.forEach((company) => {
            if (!seenNames.has(company.name)) {
                uniqueCompanies.push({ name: company.name, link: event.link }); // 나중에 companies 안의 link를 사용하고 싶을 땐 link: company.link로 변경ㄱㄱ
                seenNames.add(company.name);
            }
        });
    });

    return uniqueCompanies;
};

const ShortcutList = ({ onSelect }) => {
    const [todayCompanies, setTodayCompanies] = useState([]);
    const [selectedUrl, setSelectedUrl] = useState(null);
    const [today, setToday] = useState(null);
    const router = useRouter(); // useRouter 훅을 초기화
    const scrollRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    useEffect(() => {
        const fetchKSTTime = async () => {
            try {
                const response = await axios.get('/api/kst');
                // api/kst에서 반환한 todayString ("YYYY-MM-DD")를 사용
                const { todayString } = response.data;
                setToday(todayString);
            } catch (error) {
                console.error('Error fetching KST date from WL:', error);
                // 실패 시 현재 로컬 날짜의 "YYYY-MM-DD"를 사용 (fallback)
                setToday(new Date().toISOString().split('T')[0]);
            }
        };

        fetchKSTTime();
    }, []);

    useEffect(() => {
        if (today) {
            if (events[today]) {
                const uniqueCompanies = getUniqueCompanies(events[today]);
                setTodayCompanies(uniqueCompanies);
            }
        }
    }, [today]);

    const handleButtonClick = (url) => {
        const normalizedUrl = url
            .replace(/^https?:\/\//i, '') // 프로토콜 제거
            .replace(/(\.[a-z]{2,})(\/.*)?$/, '$1'); // 도메인 확장자 뒤의 모든 경로 제거

        setSelectedUrl(normalizedUrl);
        if (onSelect) onSelect(normalizedUrl);

        router.push(`/server-time/${normalizedUrl}`); // useRouter를 사용해 페이지 이동
    };

    const handleStandardTimeClick = () => {
        router.push('/'); // 홈페이지로 이동
    };

    // 마우스 드래그로 스크롤 가능하게 설정
    const handleMouseDown = (e) => {
        const buttonContainer = e.currentTarget; // 이벤트가 발생한 DOM 요소 가져오기
        isDown = true;
        buttonContainer.classList.add(styles.active);
        startX = e.pageX - buttonContainer.offsetLeft;
        scrollLeft = buttonContainer.scrollLeft;
    };

    const handleMouseLeave = (e) => {
        const buttonContainer = e.currentTarget; // 이벤트가 발생한 DOM 요소 가져오기
        isDown = false;
        buttonContainer.classList.remove(styles.active);
    };

    const handleMouseUp = (e) => {
        const buttonContainer = e.currentTarget;
        isDown = false;
        buttonContainer.classList.remove(styles.active);
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const buttonContainer = e.currentTarget; // 이벤트가 발생한 DOM 요소 가져오기
        const x = e.pageX - buttonContainer.offsetLeft;
        const walk = (x - startX) * 1.5; // 스크롤 속도 조절
        buttonContainer.scrollLeft = scrollLeft - walk;
    };

    return (
        <div className={styles.shortcutListContainer}>
            <div className={styles.titleContainer}>
                <Image src="/sun.svg" alt="Title Image" className={styles.titleImage} width={17.39} height={20} />
                <h2 className={styles.title}>오늘의 이벤트</h2>
            </div>
            <div
                className={styles.buttonContainer}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <button className={`${styles.websiteButton} standardTimeButton`} onClick={handleStandardTimeClick}>
                    표준시간
                </button>
                {/* 에이블리 버튼을 분리 */}
                {todayCompanies
                    .filter((company) => company.name === '에이블리')
                    .map((company, index) => (
                        <button
                            key={`ably-${index}`}
                            className={styles.websiteButton}
                            onClick={() => handleButtonClick(company.link)}
                            aria-pressed={selectedUrl === company.link}
                        >
                            {company.name}
                        </button>
                    ))}
                {/* <button className={styles.websiteButton} onClick={() => handleButtonClick(coupangeats)}>
                    쿠팡이츠
                </button> */}
                <button className={`${styles.websiteButton} customButton`} onClick={() => handleButtonClick(ali)}>
                    알리익스프레스
                </button>
                <button className={`${styles.websiteButton} customButton`} onClick={() => handleButtonClick(ably)}>
                    에이블리
                </button>
                {todayCompanies
                    .filter((company) => company.name !== '에이블리')
                    .map((company, index) => (
                        <button
                            key={index}
                            className={`${styles.websiteButton} todayEventButton`}
                            onClick={() => handleButtonClick(company.link)}
                            aria-selected={selectedUrl === company.link}
                        >
                            {company.name}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default ShortcutList;
