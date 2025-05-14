'use client';

import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

export default function AdminPage() {
    const [events, setEvents] = useState({});
    const [selectedDate, setSelectedDate] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('list');
    const [sortedDates, setSortedDates] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(['전체']);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();
    const { data: session, status } = useSession();
    const [accessDenied, setAccessDenied] = useState(false);

    const [newEvent, setNewEvent] = useState({
        id: '',
        time: '00:00',
        title: '',
        link: '',
        img: '',
        category: '예매',
        companies: [{ name: '', link: '' }],
    });

    useEffect(() => {
        if (status === 'loading') return; // 세션 로딩 중일 때 아무것도 하지 않음
        if (!session) {
            router.push('/signin'); // 로그인되지 않은 경우 /signin으로 이동
        } else if (session.user.role !== 'admin') {
            setAccessDenied(true); // 관리자 권한이 없으면 접근 거부
        }
    }, [session, router]);

    useEffect(() => {
        async function loadEvents() {
            try {
                const eventsModule = await import('/lib/events.js');
                setEvents(eventsModule.default);
                const dates = Object.keys(eventsModule.default).sort().reverse();
                setSortedDates(dates);
                const today = dayjs().format('YYYY-MM-DD');
                setSelectedDate(dates.includes(today) ? today : dates[0] || '');
            } catch (error) {
                console.error('이벤트 로딩 실패:', error);
            } finally {
                setIsLoading(false);
            }
        }

        loadEvents();

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 440);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function handleDateChange(e) {
        setSelectedDate(e.target.value);
    }

    function handleCategoryChange(category) {
        if (category === '전체') {
            setSelectedCategories(['전체']);
        } else {
            const newCategories = selectedCategories.includes('전체')
                ? [category]
                : selectedCategories.includes(category)
                ? selectedCategories.filter((c) => c !== category)
                : [...selectedCategories, category];

            setSelectedCategories(newCategories.length ? newCategories : ['전체']);
        }
    }

    function handleNewEventChange(e) {
        const { name, value } = e.target;

        if (name.startsWith('company_')) {
            const [_, index, field] = name.split('_');
            const updatedCompanies = [...newEvent.companies];
            if (!updatedCompanies[parseInt(index)]) {
                updatedCompanies[parseInt(index)] = { name: '', link: '' };
            }
            updatedCompanies[parseInt(index)][field] = value;
            setNewEvent({ ...newEvent, companies: updatedCompanies });
        } else {
            setNewEvent({ ...newEvent, [name]: value });
        }
    }

    function addCompany() {
        setNewEvent({
            ...newEvent,
            companies: [...newEvent.companies, { name: '', link: '' }],
        });
    }

    function removeCompany(index) {
        const updatedCompanies = [...newEvent.companies];
        updatedCompanies.splice(index, 1);
        setNewEvent({ ...newEvent, companies: updatedCompanies });
    }

    function resetForm() {
        setNewEvent({
            id: '',
            time: '00:00',
            title: '',
            link: '',
            img: '',
            category: '예매',
            companies: [{ name: '', link: '' }],
        });
    }

    async function saveNewEvent(e) {
        e.preventDefault();

        try {
            setIsLoading(true);
            const response = await fetch('/api/admin/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    date: selectedDate,
                    event: {
                        id: newEvent.id || getNextEventId(),
                        time: newEvent.time,
                        title: newEvent.title,
                        link: newEvent.link,
                        img: newEvent.img,
                        companies: newEvent.companies,
                        category: newEvent.category,
                    },
                }),
            });

            if (!response.ok) throw new Error('이벤트 저장 실패');

            const eventsModule = await import('/lib/events.js?timestamp=' + new Date().getTime());
            setEvents(eventsModule.default);
            resetForm();
            alert('이벤트 저장 성공!');
            setActiveTab('list');
            router.refresh();
        } catch (error) {
            alert('저장 실패: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }

    function getNextEventId() {
        let maxId = 0;
        Object.values(events).forEach((dateEvents) => {
            dateEvents.forEach((event) => {
                if (event.id > maxId) maxId = event.id;
            });
        });
        return maxId + 1;
    }

    async function deleteEvent(eventId) {
        if (!confirm('정말로 삭제하시겠습니까?')) return;

        try {
            setIsLoading(true);
            const response = await fetch('/api/admin/events', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ date: selectedDate, eventId }),
            });
            if (!response.ok) throw new Error('삭제 실패');

            const eventsModule = await import('/lib/events.js?timestamp=' + new Date().getTime());
            setEvents(eventsModule.default);
            alert('삭제 완료!');
            router.refresh();
        } catch (error) {
            alert('삭제 실패: ' + error.message);
        } finally {
            setIsLoading(false);
        }
    }

    const filteredEvents =
        selectedDate && events[selectedDate]
            ? events[selectedDate].filter(
                  (event) => selectedCategories.includes('전체') || selectedCategories.includes(event.category)
              )
            : [];

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black">
                <div className="p-6 bg-[#161616] rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 border-4 border-t-[#0077FF] border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-white">로딩 중...</p>
                </div>
            </div>
        );
    }

    if (accessDenied) {
        return <p>관리자만 접속 가능합니다.</p>;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <div className={`max-w-[1144px] mx-auto p-6 ${isMobile ? 'w-full' : ''}`}>
                {/* Header + Tabs */}
                <header className="bg-[#161616] shadow-md rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-white">이벤트 관리자 페이지</h1>
                        <div className="flex border-b border-[#333] mt-4">
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === 'list'
                                        ? 'text-[#0077FF] border-b-2 border-[#0077FF] font-medium'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                                onClick={() => setActiveTab('list')}
                            >
                                이벤트 목록
                            </button>
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === 'add'
                                        ? 'text-[#0077FF] border-b-2 border-[#0077FF] font-medium'
                                        : 'text-gray-300 hover:text-white'
                                }`}
                                onClick={() => setActiveTab('add')}
                            >
                                새 이벤트 추가
                            </button>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="bg-[#161616] shadow-md rounded-lg p-6 space-y-6">
                    {/* Date Picker Inside Content */}
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-white">
                            {activeTab === 'list' ? `${selectedDate} 이벤트 목록` : `이벤트 추가 (${selectedDate})`}
                        </h2>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            className="border border-[#333] bg-[#222] text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF]"
                        />
                    </div>

                    {/* List or Add Form Rendering */}
                    {activeTab === 'list' ? (
                        <div>{/* 리스트 내용 (필터 및 목록) */}</div>
                    ) : (
                        <form onSubmit={saveNewEvent} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-1">시간*</label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={newEvent.time}
                                        onChange={handleNewEventChange}
                                        className="border border-[#333] bg-[#222] text-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF]"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-200 mb-1">카테고리*</label>
                                    <select
                                        name="category"
                                        value={newEvent.category}
                                        onChange={handleNewEventChange}
                                        className="border border-[#333] bg-[#222] text-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF]"
                                        required
                                    >
                                        <option value="예매">예매</option>
                                        <option value="쿠폰">쿠폰</option>
                                        <option value="발매">발매</option>
                                        <option value="기타">기타</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-1">제목*</label>
                                <input
                                    type="text"
                                    name="title"
                                    value={newEvent.title}
                                    onChange={handleNewEventChange}
                                    className="border border-[#333] bg-[#222] text-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-1">링크*</label>
                                <input
                                    type="url"
                                    name="link"
                                    value={newEvent.link}
                                    onChange={handleNewEventChange}
                                    className="border border-[#333] bg-[#222] text-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF]"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-200 mb-1">이미지 경로*</label>
                                <input
                                    type="text"
                                    name="img"
                                    value={newEvent.img}
                                    onChange={handleNewEventChange}
                                    className="border border-[#333] bg-[#222] text-white p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077FF]"
                                    required
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="block text-sm font-medium text-gray-200">참여 회사*</label>
                                    <button
                                        type="button"
                                        onClick={addCompany}
                                        className="text-[#0077FF] hover:text-[#02a012] text-sm bg-[#0a280e] hover:bg-[#0c3c10] px-3 py-1 rounded-md transition"
                                    >
                                        + 회사 추가
                                    </button>
                                </div>

                                <div className="space-y-3 bg-[#111] p-4 rounded-md border border-[#333]">
                                    {newEvent.companies.map((company, index) => (
                                        <div key={index} className="flex gap-2 items-center">
                                            <input
                                                type="text"
                                                name={`company_${index}_name`}
                                                value={company.name}
                                                onChange={handleNewEventChange}
                                                className="border border-[#333] bg-[#222] text-white p-2 flex-1 rounded-md"
                                                placeholder="회사명"
                                                required
                                            />
                                            <input
                                                type="url"
                                                name={`company_${index}_link`}
                                                value={company.link}
                                                onChange={handleNewEventChange}
                                                className="border border-[#333] bg-[#222] text-white p-2 flex-1 rounded-md"
                                                placeholder="회사 링크"
                                                required
                                            />
                                            {index > 0 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeCompany(index)}
                                                    className="text-red-500 hover:text-red-400 text-sm px-2 py-1 rounded border border-red-800 hover:bg-red-900 transition"
                                                >
                                                    삭제
                                                </button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="border border-[#333] bg-[#222] text-white hover:bg-[#333] px-4 py-2 rounded-md"
                                >
                                    초기화
                                </button>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="bg-[#0077FF] hover:bg-[#02a012] text-black font-semibold px-6 py-2 rounded-md"
                                >
                                    {isLoading ? '저장 중...' : '이벤트 저장하기'}
                                </button>
                            </div>
                        </form>
                    )}
                </main>

                <footer className="mt-8 text-center text-gray-500 text-sm py-4">
                    <p>© 2025 이벤트 관리자 페이지</p>
                </footer>
            </div>
        </div>
    );
}
