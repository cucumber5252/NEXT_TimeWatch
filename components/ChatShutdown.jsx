'use client';

import React, { useState } from 'react';
import styles from './ChatShutdown.module.css';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid'; // 고유 ID를 생성하기 위한 라이브러리

export default function ChatShutdown() {
    const newMessage = ''; // 입력 필드 값 고정
    const [mascots, setMascots] = useState([]); // 마스코트들의 상태 배열

    const handleSubmit = (e) => {
        e.preventDefault(); // 전송 버튼이 눌려도 아무 동작하지 않도록 함

        // 마스코트의 수평 위치를 랜덤하게 설정 (20% ~ 78% 사이)
        const randomLeftPosition = Math.floor(Math.random() * 58) + 20 + '%';

        // 랜덤으로 이미지 선택
        const images = ['/mascot_whole.svg', '/clover_singlecolor.svg'];
        const randomImage = images[Math.floor(Math.random() * images.length)];

        // clover_singlecolor.svg의 경우 높이를 랜덤으로 설정 (40px ~ 120px 사이)
        const randomBottomPosition =
            randomImage === '/clover_singlecolor.svg' ? Math.floor(Math.random() * 80) + 40 + 'px' : '40px'; // mascot_whole.svg는 고정된 40px

        const newMascot = {
            id: uuidv4(), // 고유 ID
            left: randomLeftPosition,
            bottom: randomBottomPosition, // 랜덤 또는 고정 높이
            image: randomImage, // 랜덤 이미지
        };

        // 새로운 마스코트를 배열에 추가
        setMascots((prevMascots) => [...prevMascots, newMascot]);

        // 3초 후 마스코트 애니메이션이 완료되면 배열에서 제거
        setTimeout(() => {
            setMascots((prevMascots) => prevMascots.filter((mascot) => mascot.id !== newMascot.id));
        }, 3000);
    };

    return (
        <div className={styles.chatShutdownContainer}>
            <div className={styles.chatContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.chatNavBar}>
                        <div className={styles.chatTitle}>
                            <Image
                                className={styles.titleimg}
                                src="/chatUrl.svg"
                                alt="mainChat"
                                width={22}
                                height={12}
                            />
                            <div className={styles.chatTitleText}>방명록: 매너를 지켜 주세요!</div>
                        </div>
                    </div>
                </div>

                {/* 메시지 박스 */}
                <div className={styles.messageBox}>
                    <div className={styles.dateContainer}>
                        <div className={styles.dateSeparator}>
                            <span>2024년 10월 11일 금요일</span>
                        </div>
                    </div>

                    {/* 메시지 출력 - 첫 번째 메시지는 내 스타일 */}
                    <div className={`${styles.messageContainer} ${styles.myMessageContainer}`}>
                        <div className={styles.messageHeader}>
                            <div className={styles.timestamp}>20:30</div>
                        </div>
                        <div className={`${styles.message} ${styles.myMessage}`}>현재 채팅 기능 점검 중!</div>
                    </div>

                    {/* 두 번째 메시지는 느그 스타일 */}
                    <div className={styles.messageContainer}>
                        <div className={styles.message}>더 나은 서비스를 위해 조금만 기다려 주세요 ♥</div>
                        <div className={styles.messageFooter}>
                            <div className={styles.timestamp}>20:30</div>
                        </div>
                    </div>

                    {/* 메시지 출력 - 세 번째 메시지는 내 스타일 */}
                    <div className={`${styles.messageContainer} ${styles.myMessageContainer}`}>
                        <div className={styles.messageHeader}>
                            <div className={styles.timestamp}>20:30</div>
                        </div>
                        <div className={`${styles.message} ${styles.myMessage}`}>
                            럭타임을 사용해 주셔서 감사합니다!
                        </div>
                    </div>
                </div>

                {/* 입력 폼 */}
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        value=""
                        placeholder="전송 버튼을 눌러보세요~"
                        className={styles.inputField}
                        disabled
                    />
                    <button type="submit" className={styles.sendButton} disabled={false}>
                        <Image src="/send.svg" alt="Send" width={22} height={22} />
                    </button>

                    {/* 마스코트 이미지 애니메이션 */}
                    {mascots.map((mascot) => (
                        <div
                            key={mascot.id} // 고유 ID를 사용하여 각 마스코트 컴포넌트를 렌더링
                            className={styles.mascotEffectContainer}
                            style={{ left: mascot.left, bottom: mascot.bottom }} // 좌우 위치를 랜덤으로 설정
                        >
                            <Image
                                src={mascot.image}
                                alt="Mascot"
                                width={mascot.image === '/mascot_whole.svg' ? 120 : 40} // 이미지에 따라 크기 다르게 설정
                                height={mascot.image === '/mascot_whole.svg' ? 120 : 40} // 크기 설정
                                className={styles.mascot} // 애니메이션 추가
                            />
                        </div>
                    ))}
                </form>
            </div>
        </div>
    );
}
