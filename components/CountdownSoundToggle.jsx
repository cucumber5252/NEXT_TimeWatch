'use client';

import { useState } from 'react';
import styles from './CountdownSoundToggle.module.css';

const CountdownSoundToggle = ({ onToggle }) => {
    const [isEnabled, setIsEnabled] = useState(true);

    const handleToggle = () => {
        setIsEnabled(!isEnabled);
        onToggle(!isEnabled);
    };

    return (
        <div className={styles.countdownSoundContainer}>
            <span className={styles.label}>카운트다운 소리</span>
            <label className={styles.switch}>
                <input type="checkbox" checked={isEnabled} onChange={handleToggle} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default CountdownSoundToggle;
