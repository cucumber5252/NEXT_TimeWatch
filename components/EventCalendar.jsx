'use client';

import { useState, useEffect } from 'react';
import styles from './EventCalendar.module.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 locale 가져오기
import events from '../lib/events';

dayjs.locale('ko'); // dayjs의 locale을 한국어로 설정

const categories = ['즐겨찾기', '전체', '예매', '발매', '신청', '쿠폰'];

const EventCalendar = ({ onCategoryChange, onDateClick, onWeekSelect, setSelectedCategories, selectedCategories }) => {
    const today = dayjs();
    const [selectedDate, setSelectedDate] = useState(today.format('YYYY-MM-DD'));
    const [currentMonth, setCurrentMonth] = useState(today);
    const [selectedWeekStart, setSelectedWeekStart] = useState(null);
    const [highlightStyles, setHighlightStyles] = useState({
        selectedDay: true,
        selectedWeek: true,
    });

    useEffect(() => {
        onCategoryChange(selectedCategories);
    }, [selectedCategories, onCategoryChange]);

    const handleCategoryClick = (category) => {
        if (category === '전체') {
            setSelectedCategories(['전체']);
            setHighlightStyles({ selectedDay: true, selectedWeek: true });
        } else if (category === '즐겨찾기') {
            setSelectedCategories(['즐겨찾기']);
            setHighlightStyles({ selectedDay: false, selectedWeek: false });
        } else {
            setSelectedCategories((prevCategories) => {
                if (prevCategories.includes(category)) {
                    const newCategories = prevCategories.filter((cat) => cat !== category);
                    return newCategories.length === 0 ? ['전체'] : newCategories;
                } else {
                    return [category];
                }
            });
            setHighlightStyles({ selectedDay: true, selectedWeek: true });
        }
    };

    const handleDateClick = (date) => {
        const clickedDate = dayjs(date);
        if (clickedDate.isAfter(currentMonth.endOf('month'))) {
            setCurrentMonth(currentMonth.add(1, 'month'));
        } else if (clickedDate.isBefore(currentMonth.startOf('month'))) {
            setCurrentMonth(currentMonth.subtract(1, 'month'));
        }
        setSelectedDate(date);
        setSelectedWeekStart(null); // 다른 날짜를 클릭하면 한 주 선택 효과를 없앰
        if (selectedCategories.includes('즐겨찾기')) {
            setSelectedCategories(['전체']); // '즐겨찾기' 카테고리가 선택된 상태에서 날짜를 클릭하면 카테고리를 '전체'로 변경
            setHighlightStyles({ selectedDay: true, selectedWeek: true });
        }
        onDateClick(date); // 새로운 날짜의 이벤트로 업데이트
    };

    const handleWeekSelect = (date) => {
        const weekStart = date.startOf('week');
        setSelectedWeekStart(weekStart);

        const weekEvents = [];
        for (let i = 0; i < 7; i++) {
            const day = weekStart.add(i, 'day');
            weekEvents.push(...(events[day.format('YYYY-MM-DD')] || []));
        }

        // Handle the case where the last days of the week are in the next month
        const lastDayOfMonth = date.endOf('month').date();
        if (date.date() > lastDayOfMonth - 6) {
            const daysInCurrentMonth = lastDayOfMonth - date.date() + 1;
            for (let i = daysInCurrentMonth; i < 7; i++) {
                const nextMonthDay = date.add(i, 'day');
                weekEvents.push(...(events[nextMonthDay.format('YYYY-MM-DD')] || []));
            }
        }

        if (selectedCategories.includes('즐겨찾기')) {
            setSelectedCategories(['전체']); // '즐겨찾기' 카테고리가 선택된 상태에서 한 주를 클릭하면 카테고리를 '전체'로 변경
            setHighlightStyles({ selectedDay: true, selectedWeek: true });
        }
        onWeekSelect(weekEvents);
    };

    const renderDays = () => {
        const days = [];
        const startOfMonth = currentMonth.startOf('month');
        const endOfMonth = currentMonth.endOf('month');
        const dayOfWeek = startOfMonth.day(); // 0 (Sunday) to 6 (Saturday)

        // Fill initial empty days with the last days of the previous month
        for (let i = 0; i < dayOfWeek; i++) {
            const date = startOfMonth.subtract(dayOfWeek - i, 'day');
            const isInSelectedWeek = selectedWeekStart && date.isSame(selectedWeekStart, 'week');
            days.push(
                <div
                    key={`prev-${i}`}
                    className={`${styles.day} ${styles.otherMonthDay} ${
                        highlightStyles.selectedWeek && isInSelectedWeek ? styles.selectedWeek : ''
                    }`}
                    onClick={() => handleDateClick(date.format('YYYY-MM-DD'))}
                >
                    {date.date()}
                </div>
            );
        }

        // Fill days of the current month
        for (let i = 1; i <= endOfMonth.date(); i++) {
            const date = currentMonth.date(i);
            const isSelected = selectedDate === date.format('YYYY-MM-DD');
            const dayEvents = events[date.format('YYYY-MM-DD')] || [];
            const hasEvent = dayEvents.some(
                (event) => selectedCategories.includes('전체') || selectedCategories.includes(event.category)
            );
            const isInSelectedWeek = selectedWeekStart && date.isSame(selectedWeekStart, 'week');

            days.push(
                <div
                    key={i}
                    className={`${styles.day} ${
                        highlightStyles.selectedDay && isSelected && !selectedWeekStart ? styles.selectedDay : ''
                    } ${highlightStyles.selectedWeek && isInSelectedWeek ? styles.selectedWeek : ''}`}
                    onClick={() => handleDateClick(date.format('YYYY-MM-DD'))}
                    onDoubleClick={() => handleWeekSelect(date)}
                >
                    {i}
                    {hasEvent && <div className={styles.eventDot}></div>}
                </div>
            );
        }

        // Check if the last day of the month is at the end of the week
        const lastDayOfMonth = endOfMonth.day(); // 0 (Sunday) to 6 (Saturday)
        const isLastDayEndOfWeek = lastDayOfMonth === 6; // Saturday

        // If the last day of the month is not at the end of the week, fill the remaining days with the next month
        if (!isLastDayEndOfWeek) {
            const remainingDays = 6 - lastDayOfMonth;
            for (let i = 1; i <= remainingDays; i++) {
                const date = endOfMonth.add(i, 'day');
                const isInSelectedWeek = selectedWeekStart && date.isSame(selectedWeekStart, 'week');
                days.push(
                    <div
                        key={`next-${i}`}
                        className={`${styles.day} ${styles.otherMonthDay} ${
                            highlightStyles.selectedWeek && isInSelectedWeek ? styles.selectedWeek : ''
                        }`}
                        onClick={() => handleDateClick(date.format('YYYY-MM-DD'))}
                    >
                        {date.date()}
                    </div>
                );
            }
        }

        return days;
    };

    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.add(1, 'month'));
    };

    return (
        <div className={styles.calendarContainer}>
            <div className={styles.monthNav}>
                <button className={styles.navButton} onClick={handlePrevMonth}>
                    &lt;
                </button>
                <div className={styles.monthTitle}>{currentMonth.format('YYYY년 M월')}</div>
                <button className={styles.navButton} onClick={handleNextMonth}>
                    &gt;
                </button>
            </div>
            <div className={styles.dayNames}>
                <div>일</div>
                <div>월</div>
                <div>화</div>
                <div>수</div>
                <div>목</div>
                <div>금</div>
                <div>토</div>
            </div>
            <div className={styles.calendarGrid}>{renderDays()}</div>
            <div className={styles.categoryFilters}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.categoryButton} ${
                            selectedCategories.includes(category) ? styles.selectedCategory : ''
                        }`}
                        onClick={() => handleCategoryClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default EventCalendar;
