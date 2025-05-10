'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import styles from './EventList.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid'; // 고유 ID를 생성하기 위한 라이브러리

const EventList = ({ events, onSelect, onAddToCalendar, selectedCategories = ['전체'] }) => {
    const { data: session } = useSession();
    const [favorites, setFavorites] = useState({});
    const [favoriteEvents, setFavoriteEvents] = useState([]);
    const [clovers, setClovers] = useState([]);
    const [isLeft, setIsLeft] = useState(true); // 클로버 위치를 교대로 설정
    const router = useRouter(); // useRouter 훅 초기화

    useEffect(() => {
        const fetchFavorites = async () => {
            if (!session) return; // 세션이 없으면 실행하지 않음

            try {
                let token = localStorage.getItem('accessToken');
                const refreshToken = localStorage.getItem('refreshToken');
                // console.log('Initial token:', token);

                let response = await fetch('/api/get-favorites', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                });

                // if (response.status === 401 && refreshToken) {
                //     console.log('Token expired, refreshing...');
                //     token = await refreshAccessToken(refreshToken);
                //     if (token) {
                //         console.log('New token:', token);
                //         localStorage.setItem('accessToken', token); // 새로운 토큰을 저장
                //         response = await fetch('/api/get-favorites', {
                //             method: 'GET',
                //             headers: {
                //                 'Content-Type': 'application/json',
                //                 Authorization: `Bearer ${token}`,
                //             },
                //         });
                //     }
                // }

                if (response.ok) {
                    const data = await response.json();
                    const favoritesMap = data.favorites.reduce((acc, event) => {
                        acc[event.id] = true;
                        return acc;
                    }, {});
                    setFavorites(favoritesMap);
                    setFavoriteEvents(data.favorites); // Save favorite events
                } else {
                    console.error('Failed to fetch favorites');
                }
            } catch (error) {
                console.error('Error fetching favorites:', error);
            }
        };

        fetchFavorites();
    }, [session]);

    const refreshAccessToken = async (refreshToken) => {
        try {
            const response = await fetch('/api/refreshToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (response.ok) {
                const data = await response.json();
                if (process.env.NODE_ENV === 'development') {
                    console.log('New access token received:', data.accessToken);
                }
                localStorage.setItem('accessToken', data.accessToken); // 새로운 토큰을 저장
                return data.accessToken;
            } else {
                console.error('Failed to refresh token');
                return null;
            }
        } catch (error) {
            console.error('Error refreshing token:', error);
            return null;
        }
    };

    const handleToggleFavorite = async (event) => {
        if (!session) return; // 로그인하지 않은 경우 실행하지 않음

        try {
            let token = localStorage.getItem('accessToken');
            const refreshToken = localStorage.getItem('refreshToken');
            const isFavorited = favorites[event.id];
            const url = isFavorited ? '/api/remove-favorite' : '/api/add-favorite';

            let response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ event }),
            });

            // if (response.status === 401 && refreshToken) {
            //     console.log('Token expired, refreshing...');
            //     token = await refreshAccessToken(refreshToken);
            //     if (token) {
            //         console.log('New token:', token);
            //         localStorage.setItem('accessToken', token); // 새로운 토큰을 저장
            //         response = await fetch(url, {
            //             method: 'POST',
            //             headers: {
            //                 'Content-Type': 'application/json',
            //                 Authorization: `Bearer ${token}`,
            //             },
            //             body: JSON.stringify({ event }),
            //         });
            //     }
            // }

            if (response.ok) {
                const updatedFavorites = { ...favorites, [event.id]: !isFavorited };
                setFavorites(updatedFavorites);
                if (!isFavorited) {
                    setFavoriteEvents([...favoriteEvents, event]);
                } else {
                    setFavoriteEvents(favoriteEvents.filter((favEvent) => favEvent.id !== event.id));
                }
                if (typeof onAddToCalendar === 'function') {
                    onAddToCalendar(updatedFavorites); // Update the parent component
                }
            } else {
                console.error(`Failed to ${isFavorited ? 'remove' : 'add'} event from favorites`);
            }
        } catch (error) {
            console.error(`Error ${isFavorited ? 'removing' : 'adding'} event to favorites:`, error);
        }
    };

    // 중복 이벤트 제거를 위한 함수
    const removeDuplicateEvents = (events) => {
        const uniqueEvents = [];
        const eventIds = new Set();

        events.forEach((event) => {
            if (!eventIds.has(event.id)) {
                uniqueEvents.push(event);
                eventIds.add(event.id);
            }
        });

        return uniqueEvents;
    };

    const filteredEvents = selectedCategories.includes('즐겨찾기')
        ? favoriteEvents
        : events.filter((event) =>
              selectedCategories.includes('전체') ? true : selectedCategories.includes(event.category)
          );

    // 중복 제거 후 이벤트 리스트
    const uniqueEvents = removeDuplicateEvents(filteredEvents);

    const isEventSoon = (eventDateKey, eventTime) => {
        if (eventTime === '종일') return false;

        const [hours, minutes] = eventTime.split(':').map(Number);
        const eventDate = new Date(eventDateKey);
        eventDate.setHours(hours, minutes, 0, 0);

        const eventEndDate = new Date(eventDate.getTime() + 10 * 60 * 1000); // 이벤트 종료 시간: 시작 시간 + 10분

        const now = new Date();
        const timeUntilStart = eventDate - now;
        const timeUntilEnd = eventEndDate - now;

        return (
            eventDate.toDateString() === now.toDateString() &&
            ((timeUntilStart > 0 && timeUntilStart <= 60 * 60 * 1000) ||
                (timeUntilEnd > 0 && timeUntilEnd <= 10 * 60 * 1000))
        ); // 이벤트 날짜가 오늘이고, 이벤트 시작 전 1시간 이내 또는 이벤트 시작 후 10분 이내
    };

    const sortedEvents = [...uniqueEvents].sort((a, b) => {
        if (isEventSoon(a.dateKey, a.time) && !isEventSoon(b.dateKey, b.time)) return -1;
        if (!isEventSoon(a.dateKey, a.time) && isEventSoon(b.dateKey, b.time)) return 1;
        return 0;
    });

    const handleEventClick = (link) => {
        const normalizedLink = link.replace(/^https?:\/\//i, '').replace(/(\.[a-z]{2,})(\/.*)?$/, '$1'); // 대소문자 상관 없이 프로토콜 제거, 도메인 확장자 뒤의 모든 경로 제거
        router.push(`/server-time/${encodeURIComponent(normalizedLink)}`);
    };

    useEffect(() => {
        // 주기적으로 클로버 추가
        const interval = setInterval(() => {
            const leftPosition = isLeft ? '30%' : '70%'; // 번갈아가며 왼쪽과 오른쪽 위치 설정
            const randomBottomPosition = Math.floor(Math.random() * 60) + 20 + 'px'; // 랜덤 높이 (20px ~ 80px)

            const newClover = {
                id: uuidv4(),
                left: leftPosition,
                bottom: randomBottomPosition,
            };

            setClovers((prevClovers) => [...prevClovers, newClover]);
            setIsLeft((prev) => !prev); // 위치를 반전시킴

            setTimeout(() => {
                setClovers((prevClovers) => prevClovers.filter((clover) => clover.id !== newClover.id));
            }, 3000); // 3초 후 클로버 제거
        }, 4000); // 4초 간격으로 클로버 추가

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 정리
    }, [isLeft]);

    return (
        <div className={styles.eventListContainer}>
            {sortedEvents && sortedEvents.length > 0 ? (
                <div className={styles.eventGrid}>
                    {sortedEvents.map((event, index) => (
                        <div key={index} className={styles.eventItem}>
                            <a
                                className={styles.eventLink}
                                onClick={() => handleEventClick(event.link)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className={styles.eventImage}
                                    style={{ cursor: 'pointer' }}
                                />
                            </a>
                            <div className={styles.eventFooter}>
                                <div className={styles.footerContent}>
                                    <div className={styles.footerLeft}>
                                        <div
                                            className={
                                                isEventSoon(event.dateKey, event.time)
                                                    ? styles.footerTimeSoon
                                                    : styles.footerTime
                                            }
                                        >
                                            {event.time}
                                        </div>
                                        <div className={styles.companyContainer}>
                                            {event.companies.map((company, idx) => (
                                                <button
                                                    key={idx}
                                                    className={styles.companyButton}
                                                    onClick={() =>
                                                        window.open(company.link, '_blank', 'noopener noreferrer')
                                                    }
                                                >
                                                    <span className={styles.footerCompany}>{company.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    {session && (
                                        <button
                                            className={styles.addButton}
                                            onClick={() => handleToggleFavorite(event)}
                                        >
                                            <img
                                                src={
                                                    favorites[event.id] ? '/bookmark fill_.svg' : '/bookmark empty_.svg'
                                                }
                                                alt={favorites[event.id] ? 'Remove from Calendar' : 'Add to Calendar'}
                                                className={styles.bookmarkImage}
                                            />
                                        </button>
                                    )}
                                </div>
                                <div className={styles.eventTitle}>{event.title}</div>
                                <div className={styles.eventDate}>{event.dateKey}</div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className={styles.noEvents}>
                    {selectedCategories.includes('즐겨찾기') ? (
                        session ? (
                            <span>
                                아직 즐겨찾기한 이벤트가 없어요.
                                <br />
                                관심 있는 이벤트를 즐겨찾기해 보세요 🍀✨
                            </span>
                        ) : (
                            <p className={styles.noFavoriteText}>
                                <span>
                                    이 기능은 로그인 후에 이용할 수 있어요.
                                    <br />
                                    관심 있는 이벤트를 즐겨찾기하고 편하게 모아 보세요 🍀✨
                                    <br />
                                    <br />
                                </span>
                                <Link href="/signin">
                                    <span className={styles.underline}>로그인/회원가입</span>
                                </Link>{' '}
                            </p>
                        )
                    ) : (
                        <div>
                            <span>이벤트가 없는 날이에요 :)</span>
                            {/* 마스코트와 클로버 */}
                            <div className={styles.mascotContainer}>
                                <img src="/mascot_whole.svg" alt="Mascot" className={styles.mascotImage} />
                                {clovers.map((clover) => (
                                    <img
                                        key={clover.id}
                                        src="/clover_singlecolor.svg"
                                        alt="Clover"
                                        className={styles.cloverImage}
                                        style={{
                                            left: clover.left,
                                            bottom: clover.bottom,
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default EventList;
