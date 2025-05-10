'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TRexGame from '../../components/TRexGame';
import RankingBoard from '../../components/RankingBoard';
import GameLeftAd from '../../components/GameLeftAd';
import GameRightAd from '../../components/GameRightAd';
import GameBottomAd from '../../components/GameBottomAd';
import GameMobileAd from '../../components/GameMobileAd';
import styles from './game.module.css';

export default function GamePage() {
    const router = useRouter();
    const [currentScore, setCurrentScore] = useState(0);
    const [finalScore, setFinalScore] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const handleScoreUpdate = (score) => {
        setCurrentScore(score);
    };

    const handleGameOver = (score) => {
        setFinalScore(score);
    };

    const handleReturnHome = () => {
        router.push('/');
    };

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

    return (
        <div className="separatePage">
            <div className={styles.gameContent}>
                <div className={styles.gameLayout}>
                    <div className={styles.gameAdsLeft}>
                        <GameLeftAd />
                    </div>
                    <div className={styles.gameCenter}>
                        {isMobile ? (
                            // 모바일 환경에서는 게임 방법 설명이 먼저 나오고 게임 컨테이너가 나중에 나옴
                            <>
                                {/* 게임 방법 설명 */}
                                <div className={styles.gameInstructions}>
                                    <h3>게임 방법</h3>
                                    <ul>
                                        <li>
                                            <strong>화면</strong> 탭하기: 점프
                                        </li>
                                        <li>
                                            <strong>럭끼</strong> 탭하기: 숙이기
                                        </li>
                                        <li>럭끼와 함께 행운을 찾아 떠나는 여정에 동참해 보세요!</li>
                                    </ul>
                                </div>

                                {/* 게임 컨테이너 */}
                                <div className={styles.gameContainer}>
                                    <TRexGame onScoreUpdate={handleScoreUpdate} onGameOver={handleGameOver} />
                                </div>
                            </>
                        ) : (
                            // 데스크톱 환경에서는 기존처럼 게임 컨테이너가 먼저 나오고 게임 방법 설명이 나중에 나옴
                            <>
                                {/* 게임 컨테이너 */}
                                <div className={styles.gameContainer}>
                                    <TRexGame onScoreUpdate={handleScoreUpdate} onGameOver={handleGameOver} />
                                </div>

                                {/* 게임 방법 설명 */}
                                <div className={styles.gameInstructions}>
                                    <h3>게임 방법</h3>
                                    <ul>
                                        <li>
                                            <strong>스페이스바</strong> 또는 <strong>↑</strong> 키: 점프
                                        </li>
                                        <li>
                                            <strong>↓</strong> 키: 숙이기
                                        </li>
                                        <li>럭끼와 함께 행운을 찾아 떠나는 여정에 동참해 보세요!</li>
                                    </ul>
                                </div>
                            </>
                        )}

                        {/* 보드와 광고를 나란히 배치 */}
                        <div className={styles.boardAndAdContainer}>
                            {isMobile && (
                                <>
                                    <div className={styles.gameAdsMobile}>
                                        {/* 드롭다운 컴포넌트 추가 */}
                                        <GameMobileAd />
                                    </div>
                                </>
                            )}
                            <div className={styles.boardContainer}>
                                <RankingBoard
                                    currentScore={currentScore}
                                    finalScore={finalScore}
                                    setFinalScore={setFinalScore}
                                />
                            </div>
                            <div className={styles.gameAdsBottom}>
                                <GameBottomAd />
                            </div>
                        </div>

                        <div className={styles.gameFooter}>
                            <button onClick={handleReturnHome} className={styles.returnButton}>
                                메인 페이지로 돌아가기
                            </button>
                        </div>
                    </div>
                    <div className={styles.gameAdsRight}>
                        <GameRightAd />
                    </div>
                </div>
            </div>
        </div>
    );
}
