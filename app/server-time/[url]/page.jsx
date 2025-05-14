'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
// 시간 관련
import ServerTimeFetcher from '../../../components/ServerTimeFetcher';
import ServerTimeSimpleFetcher from '../../../components/ServerTimeSimpleFetcher';
import ServerTimeDisplay from '../../../components/ServerTimeDisplay';
import ServerTimeSimple from '../../../components/ServerTimeSimple';
import ServerTimeInfo from '../../../components/ServerTimeInfo';
import SimpleFormatToggle from '../../../components/SimpleFormatToggle';
import SimpleWebsiteName from '../../../components/SimpleWebsiteName';
import SimpleServerTimeStatus from '../../../components/SimpleServerTimeStatus';
import TimeFormatToggle from '../../../components/TimeFormatToggle';
import CountdownSoundToggle from '../../../components/CountdownSoundToggle';
// 기타 기능
import UrlForm from '../../../components/UrlForm';
import ShortcutList from '../../../components/ShortcutList';
import SidebarCounter from '../../../components/SidebarCounter';
import Top10Websites from '../../../components/Top10Websites';
import ChatUrl from '../../../components/ChatUrl';
import EventNav from '../../../components/EventNav';
import EventList from '../../../components/EventList';
import EventCalendar from '../../../components/EventCalendar';
import dayjs from 'dayjs';
import events from '../../../lib/events';
import mappings from '../../../lib/mappings';
import BroadcastList from '../../../components/BroadcastList';
import SchoolDropdown from '../../../components/SchoolDropdown';

function ServerTimePage() {
    const router = useRouter();
    const [serverTime, setServerTime] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const serverTimeDiffRef = useRef(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState('');
    const [is24HourFormat, setIs24HourFormat] = useState(true);
    const [isSimple, setIsSimple] = useState(true); // 간단한 포맷 상태 추가
    const [countdownSoundEnabled, setCountdownSoundEnabled] = useState(false);
    const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const [eventIds, setEventIds] = useState({});
    const [selectedCategories, setSelectedCategories] = useState(['전체']);
    const [selectedWeekEvents, setSelectedWeekEvents] = useState([]);
    const [lastSync, setLastSync] = useState(null);
    const [isColumn, setIsColumn] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
    const [isFetching, setIsFetching] = useState(false);
    // const [isBlocked, setIsBlocked] = useState(false);

    // 핸들러 함수 추가
    const handleTimeFormatToggle = (is24Hour) => {
        setIs24HourFormat(is24Hour);
    };

    const handleSimpleFormatToggle = (isSimpleFormat) => {
        setIsSimple(isSimpleFormat);
    };

    const handleCountdownSoundToggle = (isEnabled) => {
        setCountdownSoundEnabled(isEnabled);
    };

    useEffect(() => {
        async function initialFetch() {
            try {
                try {
                    const response = await fetch('/api/sync-time', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ url }),
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch server time');
                    }

                    const data = await response.json();
                    if (data.serverTime) {
                        const timestamp = new Date(data.serverTime).getTime(); // 숫자로 변환
                        setServerTime(timestamp);
                        setError(null);
                        // 보정값 계산 (+100ms offset)
                        serverTimeDiffRef.current = timestamp + 100 - Date.now();
                    } else {
                        setServerTime(null);
                    }
                } catch (error) {
                    console.error('Error fetching server time:', error);
                    setError('시간 정보를 가져오는 데 실패했습니다. 새로고침을 해주세요!');
                }
                setLastSync(new Date());
                setIsLoading(false);
            } catch (error) {
                console.error('Error in initialFetch:', error);
                setError('시간 정보를 가져오는 데 실패했습니다. 새로고침을 해주세요!');
            }
        }
        if (url) {
            initialFetch();
        }
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
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 440);
        };

        handleResize();
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
        const pathSegments = window.location.pathname.split('/');
        const urlParam = decodeURIComponent(pathSegments[pathSegments.length - 1]);
        setUrl(urlParam);
    }, []);

    useEffect(() => {
        if (url) {
            recordPageVisit(url);
            saveUrlData(url);
        }
    }, [url]);

    // 캘린더와 이벤트 관련 추가 핸들러
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
        router.push(`/server-time/${encodeURIComponent(newUrl)}`);
    };

    const handleWebsiteSelect = (websiteUrl) => {
        setUrl(websiteUrl);
        router.push(`/server-time/${encodeURIComponent(websiteUrl)}`);
    };

    const handleEventSelect = (eventUrl) => {
        setUrl(eventUrl);
        router.push(`/server-time/${encodeURIComponent(eventUrl)}`);
    };

    // 새로운 URL 데이터를 MongoDB에 저장하거나 업데이트
    async function saveUrlData(urlParam) {
        // URL에 대체어를 매핑
        let pageName = urlParam;
        for (const mapping of mappings) {
            if (urlParam.includes(mapping.domain)) {
                pageName = mapping.name;
                break;
            }
        }
        const pageTitle = `${pageName} 서버시간 - timewatch 타임워치`;
        const pageDescription = `${pageName}${
            !pageName.includes(urlParam) ? `(${urlParam})` : ''
        }의 정확한 서버시간을 timewatch 타임워치에서 확인하세요!`;

        try {
            await fetch('/api/server-time/save-or-update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: urlParam, pageName, pageTitle, pageDescription }),
            });
        } catch (error) {
            console.error('Error saving URL data:', error);
        }
    }

    async function recordPageVisit(pageUrl) {
        try {
            const response = await fetch('/api/server-time/record-dynamic-visit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: pageUrl }),
            });

            if (!response.ok) {
                throw new Error('Failed to record page visit');
            }

            const data = await response.json();
            if (process.env.NODE_ENV === 'development') {
                console.log('Dynamic Page visit recorded:', data);
            }
        } catch (error) {
            console.error('Error recording page visit:', error);
        }
    }

    useEffect(() => {
        async function recordVisit() {
            try {
                const response = await fetch('/api/record-visit', { method: 'POST' });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                if (process.env.NODE_ENV === 'development') {
                    console.log(data.message);
                    console.log('Today date & time from rV:', data.kstDateString);
                }
            } catch (error) {
                console.error('Error recording visit:', error);
            }
        }

        recordVisit();
    }, []);

    // 동적 클래스 이름 정의
    const containerClass = isSimple && !isMobile ? 'container simple' : 'container';
    const mainContainerClass = isSimple && !isMobile ? 'main-container simple' : 'main-container';
    const shouldUseSimple = isSimple && !isMobile;

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
                {shouldUseSimple ? (
                    <>
                        <div
                            className="adsense-container"
                            style={{ width: '100%', minHeight: '90px', marginTop: '28.75px', marginBottom: '28px' }}
                        >
                            {/* <SimpleAd /> */}
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
                        <ServerTimeInfo website={`https://${url}`} lastSync={lastSync} isLoading={isFetching} />
                        <ServerTimeFetcher
                            onServerTimeChange={(time) => {
                                const timestamp = new Date(time).getTime();
                                setServerTime(timestamp);
                                setIsLoading(false);
                            }}
                            onError={(error) => {
                                setError(error);
                                setIsLoading(false); // 에러 발생 시에도 로딩 상태 변경
                            }}
                            url={`https://${url}`}
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
                            {/* <MobileAd /> */}
                        </div>
                    </>
                )}
                {!error && (
                    <div className="toggleContainer">
                        {!isMobile && <SimpleFormatToggle isSimple={isSimple} onToggle={handleSimpleFormatToggle} />}
                        <TimeFormatToggle is24HourFormat={is24HourFormat} onToggle={handleTimeFormatToggle} />
                        <CountdownSoundToggle onToggle={handleCountdownSoundToggle} />
                    </div>
                )}
                {!isMobile && (
                    <div className="adsense-container" style={{ width: '100%', marginBottom: '8px' }}>
                        {/* <MainAd /> */}
                    </div>
                )}
                {/* <ChatUrl url={url} /> */}

                {/* 추가된 캘린더와 이벤트 리스트 */}
                <EventNav eventnavpict="/eventnavpict.svg" />
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
            {!isMobile && (
                <div className="sidebar-container">
                    <SidebarCounter />
                    {/* 드롭다운 컴포넌트 추가 */}
                    <SchoolDropdown />
                    <ChatUrl url={url} />
                    <div className="adsense-container" style={{ width: '100%' }}>
                        {/* <SidebarAd /> */}
                    </div>
                    <BroadcastList />
                    <Top10Websites />
                    {/* <CoupangNotice /> */}
                </div>
            )}
            {isMobile && (
                <div className="sidebar-container">
                    <ChatUrl url={url} />
                    <Top10Websites />
                    <BroadcastList />
                    <SidebarCounter />
                    {/* <CoupangNotice /> */}
                </div>
            )}
        </div>
    );
}

export default function ServerTimePageWrapper() {
    return <ServerTimePage />;
}
