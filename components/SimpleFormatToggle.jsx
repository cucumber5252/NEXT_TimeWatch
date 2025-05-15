'use client';

import styles from './SimpleFormatToggle.module.css';

const SimpleFormatToggle = ({ isSimple, onToggle }) => {
    const handleToggle = () => {
        onToggle(!isSimple);
    };

    return (
        <div className={styles.simpleFormatToggleContainer}>
            <span className={styles.label}>간편보기</span>
            <label className={styles.switch}>
                <input type="checkbox" checked={isSimple} onChange={handleToggle} />
                <span className={styles.slider}></span>
            </label>
        </div>
    );
};

export default SimpleFormatToggle;
