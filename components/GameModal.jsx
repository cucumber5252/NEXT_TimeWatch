'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './GameModal.module.css';

const GameModal = ({ onClose }) => {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);

    const handlePlayNow = () => {
        router.push('/game');
    };

    const handleDontShowForWeek = () => {
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        localStorage.setItem('gameModalHideUntil', nextWeek.toISOString());
        setIsVisible(false);
        onClose();
    };

    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };

    if (!isVisible) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalBox}>
                {/* 상단 이미지 */}
                <div className={styles.topImageWrap}>
                    <div className={styles.topImageBg}>
                        <Image
                            src="/게임 모달용 화면녹화.gif"
                            alt="게임 미리보기"
                            width={384}
                            height={95}
                            className={styles.topImage}
                            priority
                        />
                    </div>
                </div>
                {/* 본문 컨텐츠 */}
                <div className={styles.contentColumn}>
                    <div className={styles.titleRow}>
                        <span className={styles.titleEmoji}>🍀</span>
                        <span className={styles.titleText}>럭끼의 모험</span>
                    </div>
                    <div className={styles.descRow}>럭끼와 함께 행운을 찾아 떠나는 여정에 동참해 보세요!</div>
                    <div className={styles.rankingBox}>
                        <div className={styles.rankingRow}>
                            <span className={styles.rankingDot}>•</span>
                            <span className={styles.rankingDesc}>럭타임 유저들의 최고 기록에 도전해보세요!</span>
                        </div>
                        <div className={styles.rankingPreviewText}>
                            <span className={styles.trophyEmoji}>🏆</span>
                            <span className={styles.topRankText}>
                                현재 TOP 1: <b>고컴하승준</b> <span className={styles.score}>(8,649점)</span>
                            </span>
                        </div>
                    </div>
                    <button className={styles.playButton} onClick={handlePlayNow}>
                        <span className={styles.playEmoji}>🍀</span>
                        <span className={styles.playText}>지금 플레이하기</span>
                    </button>
                    <div className={styles.bottomButtonsRow}>
                        <button className={styles.dontShowBtn} onClick={handleDontShowForWeek}>
                            일주일 간 보지 않기
                        </button>
                        <button className={styles.closeBtn} onClick={handleClose}>
                            다음에 할게요
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameModal;
