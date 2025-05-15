'use client';

import { useState, useEffect } from 'react';
import styles from './TimeFormatToggle.module.css';

const TimeFormatToggle = ({ onToggle }) => {
    const [is24Hour, setIs24Hour] = useState(true); // 초기값을 그대로 유지

    useEffect(() => {
        // 컴포넌트가 처음 마운트될 때 12시간제로 설정
        setIs24Hour(false);
        onToggle(false);
    }, []);

    const handleToggle = () => {
        setIs24Hour(!is24Hour);
        onToggle(!is24Hour);
    };

    return (
        <div className={styles.timeFormatToggleContainer}>
            <span className={styles.label}>24시간제</span>
            <label className={styles.switch}>
                <input type="checkbox" checked={is24Hour} onChange={handleToggle} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default TimeFormatToggle;
