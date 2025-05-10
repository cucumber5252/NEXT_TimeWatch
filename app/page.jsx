'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession, SessionProvider } from 'next-auth/react';
// 시간 관련
import ServerTimeFetcher from '../components/ServerTimeFetcher';
import ServerTimeSimpleFetcher from '../components/ServerTimeSimpleFetcher';
import ServerTimeDisplay from '../components/ServerTimeDisplay';
import ServerTimeSimple from '../components/ServerTimeSimple';
import SimpleFormatToggle from '../components/SimpleFormatToggle';
import WebsiteName from '../components/WebsiteName';
import SimpleWebsiteName from '../components/SimpleWebsiteName';
import ServerTimeStatus from '../components/ServerTimeStatus';
import SimpleServerTimeStatus from '../components/SimpleServerTimeStatus';
import TimeFormatToggle from '../components/TimeFormatToggle';
import CountdownSoundToggle from '../components/CountdownSoundToggle';
// 기타 기능
import UrlForm from '../components/UrlForm';
import ShortcutList from '../components/ShortcutList';
import EventNav from '../components/EventNav';
import EventList from '../components/EventList';
import EventCalendar from '../components/EventCalendar';
import dayjs from 'dayjs';
import SidebarCounter from '../components/SidebarCounter';
import events from '../lib/events';
import Top10Websites from '../components/Top10Websites';
import ChatHome from '../components/ChatHome';
import ChatShutdown from '../components/ChatShutdown';
import MobileAd from '../components/MobileAd';
import SidebarAd from '../components/SidebarAd';
import MainAd from '../components/MainAd';
import SimpleAd from '../components/SimpleAd';
import BroadcastList from '../components/BroadcastList';
import SchoolDropdown from '../components/SchoolDropdown';
import CoupangNotice from '../components/CoupangNotice';
import CoupangMainAd from '../components/CoupangMainAd';
import CoupangSimpleAd from '../components/CoupangSimpleAd';
import CoupangSidebarAd from '../components/CoupangSidebarAd';
import CoupangMobileAd from '../components/CoupangMobileAd';
import GameModal from '../components/GameModal';

function HomePageContent() {
    const [serverTime, setServerTime] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const serverTimeDiffRef = useRef(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState('');
    const [is24HourFormat, setIs24HourFormat] = useState(true);
    const [isSimple, setIsSimple] = useState(false); // 간단한 포맷 상태
    const [countdownSoundEnabled, setCountdownSoundEnabled] = useState(true);
    const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const { data: session } = useSession();
    const [eventIds, setEventIds] = useState({});
    const [selectedCategories, setSelectedCategories] = useState(['전체']);
    const [selectedWeekEvents, setSelectedWeekEvents] = useState([]);
    const [lastSync, setLastSync] = useState(null);
    const [isColumn, setIsColumn] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
    const [isFetching, setIsFetching] = useState(false);
    const [showGameModal, setShowGameModal] = useState(false);
    // const [isBlocked, setIsBlocked] = useState(false);

    // 최초 로딩 시 한 번만 서버 시간을 가져오는 useEffect 추가
    useEffect(() => {
        async function initialFetch() {
            try {
                const res = await fetch('/api/sync-time');
                const data = await res.json();
                const timestamp = new Date(data.serverTime).getTime();
                setServerTime(timestamp);
                serverTimeDiffRef.current = timestamp + 100 - Date.now();
                setError(null);
            } catch (error) {
                console.error('Error fetching server time:', error);
                setError('시간 정보를 가져오는 데 실패했습니다. 새로고침을 해주세요!');
            } finally {
                setLastSync(new Date());
                setIsLoading(false);
            }
        }

        initialFetch();
    }, [url]);

    // 부모에서 currentTime을 계속 업데이트하는 애니메이션 루프
    useEffect(() => {
        let animationFrameId;
        async function updateTime() {
            const newTime = Date.now() + serverTimeDiffRef.current;
            setCurrentTime((prevTime) => {
                // 만약 prevTime이 없거나 차이가 16ms 이상일 경우에만 업데이트
                if (!prevTime || Math.abs(newTime - prevTime) > 16) {
                    return newTime;
                }
                return prevTime;
            });
            await new Promise((r) => setTimeout(r, 1));
            animationFrameId = requestAnimationFrame(updateTime);
        }
        if (!isLoading && serverTime) {
            animationFrameId = requestAnimationFrame(updateTime);
        }
        return () => cancelAnimationFrame(animationFrameId);
    }, [isLoading, serverTime]);

    useEffect(() => {
        if (process.env.NODE_ENV === 'development' && session) {
            console.log(session);
        }
    }, [session]);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 440);
        };

        handleResize(); // 컴포넌트가 마운트될 때 초기 크기 확인
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // 페이지 로드 시 사용자의 차단 상태를 확인
    // useEffect(() => {
    //     async function checkBlockStatus() {
    //         try {
    //             const res = await fetch('/api/check-ad-block');
    //             const data = await res.json();
    //             if (data.blocked) {
    //                 setIsBlocked(true);
    //             }
    //         } catch (error) {
    //             console.error('차단 상태 확인 에러:', error);
    //         }
    //     }
    //     checkBlockStatus();
    // }, []);

    useEffect(() => {
        async function recordVisit() {
            try {
                const response = await fetch('/api/record-visit', { method: 'POST' });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // console.log(data.message);
                // console.log('Today date & time from rV:', data.kstDateString);
            } catch (error) {
                console.error('Error recording visit:', error);
            }
        }

        recordVisit();
    }, []);

    useEffect(() => {
        if (selectedWeekEvents.length > 0) {
            updateDisplayedEvents(selectedWeekEvents, selectedCategories);
        } else {
            const eventsForDate = events[selectedDate] || [];
            updateDisplayedEvents(eventsForDate, selectedCategories, selectedDate);
        }
    }, [selectedDate, selectedCategories, selectedWeekEvents]);

    const updateDisplayedEvents = (eventList, categories, dateKey = null) => {
        const eventsArray = Array.isArray(eventList) ? eventList : [];
        const filteredEvents = eventsArray.filter(
            (event) => categories.includes('전체') || categories.includes(event.category)
        );
        if (dateKey) {
            setDisplayedEvents(filteredEvents.map((event) => ({ ...event, dateKey })));
        } else {
            setDisplayedEvents(filteredEvents);
        }
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setSelectedWeekEvents([]);
        const eventsForDate = events[dayjs(date).format('YYYY-MM-DD')] || [];
        const eventsWithDate = eventsForDate.map((event) => ({
            ...event,
            date: dayjs(date).format('YYYY-MM-DD'),
            dateKey: dayjs(date).format('YYYY-MM-DD'),
        }));
        updateDisplayedEvents(eventsWithDate, selectedCategories, dayjs(date).format('YYYY-MM-DD'));
    };

    const handleWeekSelect = (weekEvents) => {
        setSelectedWeekEvents(
            weekEvents.map((event) => ({
                ...event,
                dateKey: Object.keys(events).find((date) => events[date].includes(event)),
            }))
        );
        updateDisplayedEvents(weekEvents, selectedCategories);
    };

    const handleCategoryChange = (categories) => {
        setSelectedCategories(categories);
    };

    const handleUrlSubmit = (newUrl) => {
        setUrl(newUrl);
    };

    const handleWebsiteSelect = (websiteUrl) => {
        setUrl(websiteUrl);
    };

    const handleEventSelect = (eventUrl) => {
        setUrl(eventUrl);
    };

    // TimeFormatToggle 핸들러
    const handleTimeFormatToggle = (is24Hour) => {
        setIs24HourFormat(is24Hour);
    };

    // SimpleFormatToggle 핸들러
    const handleSimpleFormatToggle = (isSimpleFormat) => {
        setIsSimple(isSimpleFormat);
    };

    const handleCountdownSoundToggle = (isEnabled) => {
        setCountdownSoundEnabled(isEnabled);
    };

    // 동적 클래스 이름 정의 (isSimple이 true이고 모바일이 아닐 때만 'simple' 클래스 추가)
    const containerClass = isSimple && !isMobile ? 'container simple' : 'container';
    const mainContainerClass = isSimple && !isMobile ? 'main-container simple' : 'main-container';
    const sidebarContainerClass = isSimple && !isMobile ? 'sidebar-container simple' : 'sidebar-container';
    const toggleContainerClass = isSimple && !isMobile ? 'toggleContainer simple' : 'toggleContainer';

    // 컴포넌트 렌더링 조건 (isSimple && !isMobile)
    const shouldUseSimple = isSimple && !isMobile;

    useEffect(() => {
        // 로컬 스토리지에서 모달 표시 여부 확인
        const hideUntil = localStorage.getItem('gameModalHideUntil');
        if (hideUntil) {
            const hideUntilDate = new Date(hideUntil);
            if (hideUntilDate > new Date()) {
                return;
            }
        }
        setShowGameModal(true);
    }, []);

    const handleCloseModal = () => {
        setShowGameModal(false);
    };

    return (
        <div className={containerClass}>
            <div className={mainContainerClass}>
                <UrlForm onSubmit={handleUrlSubmit} />
                <ShortcutList onSelect={handleWebsiteSelect} />
                {isMobile && (
                    <>
                        {/* 드롭다운 컴포넌트 추가 */}
                        {/* <SchoolDropdown /> */}
                    </>
                )}
                {/* 조건부 렌더링: isSimple && !isMobile */}
                {shouldUseSimple ? (
                    <>
                        <div
                            className="adsense-container"
                            style={{ width: '100%', minHeight: '90px', marginTop: '28.75px', marginBottom: '28px' }}
                        >
                            {/* {!isBlocked && <SimpleAd />} */}
                            <SimpleAd />
                            {/* <CoupangSimpleAd /> */}
                        </div>

                        <div className="simpleWebsiteContainer">
                            <SimpleWebsiteName website={url} />
                            <ServerTimeSimpleFetcher
                                onServerTimeChange={(time) => {
                                    const timestamp = new Date(time).getTime();
                                    setServerTime(timestamp);
                                    setIsLoading(false);
                                }}
                                onError={(error) => {
                                    setError(error);
                                    setIsLoading(false);
                                }}
                                url={url}
                                onLastSyncChange={setLastSync}
                                onFetchingChange={setIsFetching}
                                className="server-time-fetcher simple"
                            />
                        </div>
                        <div className="simpleTimeContainer">
                            {error ? (
                                <div className="errorBlock simple">
                                    <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                                </div>
                            ) : (
                                <ServerTimeSimple
                                    // serverTime={serverTime}
                                    currentTime={currentTime}
                                    is24HourFormat={is24HourFormat}
                                    countdownSoundEnabled={countdownSoundEnabled}
                                    className="server-time-simple"
                                />
                            )}
                            <SimpleServerTimeStatus
                                lastSync={lastSync}
                                isLoading={isFetching}
                                className="server-time-status simple"
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <WebsiteName website={url} />
                        <ServerTimeStatus lastSync={lastSync} isLoading={isFetching} className="server-time-status" />
                        <ServerTimeFetcher
                            onServerTimeChange={(time) => {
                                const timestamp = new Date(time).getTime();
                                setServerTime(timestamp);
                                setIsLoading(false);
                            }}
                            onError={(error) => {
                                setError(error);
                                setIsLoading(false);
                            }}
                            url={url}
                            onLastSyncChange={setLastSync}
                            onFetchingChange={setIsFetching}
                            className="server-time-fetcher"
                        />
                        {error ? (
                            <div className="errorBlock">
                                <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
                            </div>
                        ) : (
                            <ServerTimeDisplay
                                // serverTime={serverTime}
                                currentTime={currentTime}
                                is24HourFormat={is24HourFormat}
                                countdownSoundEnabled={countdownSoundEnabled}
                                className="server-time-display"
                            />
                        )}
                    </>
                )}

                {isMobile && (
                    <>
                        <div className="adsense-container" style={{ width: '100%' }}>
                            {/* {!isBlocked && <MobileAd />} */}
                            <MobileAd />
                            {/* <CoupangMobileAd /> */}
                        </div>
                    </>
                )}

                {!error && (
                    <div className={toggleContainerClass}>
                        {/* isSimple이 true이고 모바일이 아닐 때만 토글 활성화 */}
                        {!isMobile && <SimpleFormatToggle isSimple={isSimple} onToggle={handleSimpleFormatToggle} />}
                        <TimeFormatToggle is24HourFormat={is24HourFormat} onToggle={handleTimeFormatToggle} />
                        <CountdownSoundToggle onToggle={handleCountdownSoundToggle} />
                    </div>
                )}
                {!isMobile && (
                    <div className="adsense-container" style={{ width: '100%', marginBottom: '8px' }}>
                        {/* {!isBlocked && <MainAd />} */}
                        <MainAd />
                        {/* <CoupangMainAd /> */}
                    </div>
                )}
                <EventNav eventnavpict="/eventnavpict.svg" />
                {!isMobile && (
                    <>
                        {/* 드롭다운 컴포넌트 추가 */}
                        {/* <SchoolDropdown /> */}
                    </>
                )}
                <div className="calendar-event-container">
                    <div className="calendar-section">
                        <EventCalendar
                            onDateClick={handleDateClick}
                            onWeekSelect={handleWeekSelect}
                            onCategoryChange={handleCategoryChange}
                            setSelectedCategories={setSelectedCategories}
                            selectedCategories={selectedCategories}
                        />
                    </div>
                    <div className="event-list-section">
                        <EventList
                            selectedDate={selectedDate}
                            events={displayedEvents}
                            onSelect={handleEventSelect}
                            addedEvents={eventIds}
                            selectedCategories={selectedCategories}
                        />
                    </div>
                </div>
            </div>
            {!isMobile ? (
                <div className={sidebarContainerClass}>
                    <SidebarCounter />
                    {/* 드롭다운 컴포넌트 추가 */}
                    <SchoolDropdown />
                    <ChatHome />
                    <div className="adsense-container" style={{ width: '100%' }}>
                        {/* {!isBlocked && <SidebarAd />} */}
                        <SidebarAd />
                        {/* <CoupangSidebarAd /> */}
                    </div>
                    <BroadcastList />
                    <Top10Websites />
                    {/* <CoupangNotice /> */}
                </div>
            ) : (
                <div className={sidebarContainerClass}>
                    <ChatHome />
                    <Top10Websites />
                    <BroadcastList />
                    <SidebarCounter />
                    {/* <CoupangNotice /> */}
                </div>
            )}
            {showGameModal && <GameModal onClose={handleCloseModal} />}
        </div>
    );
}

export default function Home() {
    return <HomePageContent />;
}
