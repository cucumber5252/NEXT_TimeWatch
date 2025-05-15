'use client';

import React, { useState, useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import styles from './RankingBoard.module.css';

const RankingBoard = ({ currentScore = 0, finalScore = null, setFinalScore }) => {
    const [topScores, setTopScores] = useState([]);
    const [nickname, setNickname] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const { data: session } = useSession();
    const [userRank, setUserRank] = useState(null);

    // 상위 점수 가져오기
    const fetchTopScores = async () => {
        try {
            const response = await fetch('/api/game-scores');
            if (response.ok) {
                const data = await response.json();
                setTopScores(data);

                // 현재 사용자의 점수가 상위 랭킹에 들어갈지 확인
                if (finalScore !== null) {
                    const rank = data.findIndex((score) => finalScore > score.score) + 1;
                    setUserRank(rank <= 5 ? rank : null);
                }
            }
        } catch (error) {
            console.error('점수 조회 오류:', error);
        }
    };

    // 컴포넌트 마운트 시 상위 점수 가져오기
    useEffect(() => {
        fetchTopScores();
    }, []);

    // 최종 점수가 있을 때 폼 표시
    useEffect(() => {
        if (finalScore !== null && !isSubmitting) {
            setShowForm(true);
            // 로그인한 사용자의 닉네임 자동 입력
            if (session?.user?.nickname) {
                setNickname(session.user.nickname);
            }
        }
    }, [finalScore, session, isSubmitting]);

    // 점수 제출
    const submitScore = async (nickname, finalScore, username) => {
        if (!nickname || !finalScore) return;

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/game-scores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nickname, score: finalScore, username }),
            });

            if (!response.ok) {
                throw new Error('점수 제출 실패');
            }

            const result = await response.json();
            fetchTopScores(); // 점수 갱신

            setShowForm(false);
            setFinalScore(null); // 폼이 다시 열리지 않도록 finalScore 초기화
        } catch (error) {
            console.error('점수 제출 오류:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const session = await getSession();
        const username = session?.user?.username || 'not a member';
        await submitScore(nickname, finalScore, username);
    };

    return (
        <div className={styles.rankingBoard}>
            <h3 className={styles.title}>🏆 랭킹 보드</h3>

            {/* 현재 점수 표시 */}
            <div className={styles.currentScore}>
                <span>현재 점수:</span>
                <span className={styles.scoreValue}>{currentScore}</span>
            </div>

            {/* 점수 제출 폼 */}
            {showForm && (
                <div className={styles.submitForm}>
                    <p className={styles.finalScoreText}>
                        최종 점수: <span className={styles.finalScore}>{finalScore}</span>
                    </p>

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="닉네임을 입력하세요"
                            value={nickname}
                            onChange={(e) => setNickname(e.target.value)}
                            maxLength={10}
                            required
                            className={styles.nicknameInput}
                        />
                        <button type="submit" disabled={isSubmitting} className={styles.submitButton}>
                            {isSubmitting ? '기록 중...' : '점수 등록하기'}
                        </button>
                    </form>
                </div>
            )}

            {/* 상위 점수 목록 */}
            <div className={styles.scoresList}>
                <h4>TOP 5</h4>
                {topScores.length > 0 ? (
                    <ul>
                        {topScores.map((score, index) => (
                            <li key={score._id} className={styles.scoreItem}>
                                <span className={styles.rank}>{index + 1}</span>
                                <span className={styles.playerName}>{score.nickname}</span>
                                <span className={styles.score}>{score.score}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.noScores}>아직 등록된 점수가 없습니다</p>
                )}
            </div>
        </div>
    );
};

export default RankingBoard;
