'use client';

import { useEffect, useState, useRef } from 'react';
import styles from './ServerTimeDisplay.module.css';

const ServerTimeDisplay = ({ currentTime, is24HourFormat, countdownSoundEnabled }) => {
    const [isRainbow, setIsRainbow] = useState(false);
    const userInteractedRef = useRef(false);
    const audioRefs = useRef([]);

    const formatTime = (time) => {
        if (!time) return { hours: '00', minutes: '00', seconds: '00', milliseconds: '000', period: '' };
        const date = new Date(time);
        const hours = is24HourFormat ? date.getHours() : date.getHours() % 12 || 12;
        const period = date.getHours() >= 12 ? 'PM' : 'AM';
        return {
            hours: hours.toString().padStart(2, '0'),
            minutes: date.getMinutes().toString().padStart(2, '0'),
            seconds: date.getSeconds().toString().padStart(2, '0'),
            milliseconds: date.getMilliseconds().toString().padStart(3, '0'),
            period: is24HourFormat ? '' : `${period}`,
        };
    };

    const handleUserInteraction = () => {
        // console.log('User interacted');
        userInteractedRef.current = true;
    };

    const playCountdownSound = (index) => {
        if (countdownSoundEnabled && userInteractedRef.current) {
            const audio = audioRefs.current[index];
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
                audio.play().catch((error) => console.error('Failed to play audio:', error));
            } else {
                console.error(`Audio ${index} not found`);
            }
        } else {
            if (process.env.NODE_ENV === 'development') {
                console.log(
                    `Countdown sound not enabled or user not interacted: ${countdownSoundEnabled}, ${userInteractedRef.current}`
                );
            }
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            audioRefs.current = [
                new Audio('/0.mp3'),
                new Audio('/1.mp3'),
                new Audio('/2.mp3'),
                new Audio('/3.mp3'),
                new Audio('/4.mp3'),
                new Audio('/5.mp3'),
            ];
            let loadedCount = 0;
            const totalAudios = audioRefs.current.length;
            audioRefs.current.forEach((audio, index) => {
                audio.preload = 'auto';
                audio.onloadeddata = () => {
                    loadedCount++;
                    if (loadedCount === totalAudios) {
                        if (process.env.NODE_ENV === 'development') {
                            console.log('All audios loaded');
                        }
                        window.addEventListener('click', handleUserInteraction);
                        window.addEventListener('keydown', handleUserInteraction);
                    }
                };
                audio.onerror = (e) => console.error(`Error loading audio ${index}:`, e);
            });
        }
    }, []);

    useEffect(() => {
        if (!currentTime) return;
        const currentDate = new Date(currentTime);
        const currentMinutes = currentDate.getMinutes();
        const currentSeconds = currentDate.getSeconds();

        // 소리 재생 로직: 54초에 시작
        if (currentMinutes === 59 && currentSeconds === 54) {
            const soundOffsets = [0, 1000, 2000, 3000, 4000, 5000, 6000];
            soundOffsets.forEach((offset, index) => {
                setTimeout(() => {
                    playCountdownSound(5 - index);
                }, offset);
            });
        }

        // 색상 변경 로직: 55초에 시작
        if (currentMinutes === 59 && currentSeconds === 55) {
            setIsRainbow(true);
            setTimeout(() => {
                setIsRainbow(false);
            }, 5000);
        }
    }, [currentTime]);

    const time = formatTime(currentTime);

    return (
        <div className={styles.timeDisplayContainer}>
            {!is24HourFormat && <div className={styles.amPm}>{time.period.trim()}</div>}
            <div className={styles.timePart}>
                {currentTime === null ? (
                    <div className={`${styles.ldsRoller} ${styles.ldsRoller1}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div>{time.hours}</div>
                )}
            </div>
            <div className={styles.separator}>:</div>
            <div className={styles.timePart}>
                {currentTime === null ? (
                    <div className={`${styles.ldsRoller} ${styles.ldsRoller2}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div>{time.minutes}</div>
                )}
            </div>
            <div className={`${styles.separator} ${styles.greenSeparator}`}>:</div>
            <div className={`${styles.timePart} ${isRainbow ? styles.rainbow : styles.greenBackground}`}>
                {currentTime === null ? (
                    <div className={`${styles.ldsRoller} ${styles.ldsRoller3}`}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div>{time.seconds}</div>
                )}
            </div>
            <div className={styles.milliseconds}>
                {currentTime === null ? <div></div> : <div>{time.milliseconds}</div>}
            </div>
        </div>
    );
};

export default ServerTimeDisplay;
