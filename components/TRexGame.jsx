'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './TRexGame.module.css';

const TRexGame = ({ onScoreUpdate = () => {}, onGameOver = () => {} }) => {
    const [showIntro, setShowIntro] = useState(true);
    const iframeRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    // iframe 내부 문서 메시지 박스 숨기기
    const hideMessageBoxInIframe = () => {
        if (iframeRef.current) {
            try {
                const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
                const messageBox = iframeDoc.getElementById('messageBox');
                if (messageBox) {
                    messageBox.style.display = 'none';
                }
            } catch (e) {
                console.error('iframe 내용 접근 실패:', e);
            }
        }
    };

    // 게임 시작
    const startGame = () => {
        setShowIntro(false);
        setTimeout(hideMessageBoxInIframe, 100);
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

    // 점수 메시지 이벤트 리스너 설정
    useEffect(() => {
        const handleMessage = (event) => {
            // 현재 점수 업데이트
            if (event.data && event.data.type === 'currentScore') {
                onScoreUpdate(event.data.score);
            }
            // 최종 점수 처리
            else if (event.data && event.data.type === 'finalScore') {
                onGameOver(event.data.score);
                if (process.env.NODE_ENV === 'development') {
                    console.log('게임 종료. 최종 점수:', event.data.score);
                }
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [onScoreUpdate, onGameOver]);

    // 스페이스바로 게임 시작
    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.code === 'Space' || e.keyCode === 32) && showIntro) {
                startGame();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showIntro]);

    // iframe 로드 시 메시지 박스 자동 숨김
    const handleIframeLoad = () => {
        if (!showIntro) {
            hideMessageBoxInIframe();
        }
    };

    return (
        <div className={styles.gameWrapper}>
            {showIntro && (
                <div className={styles.introMessage}>
                    <div className={styles.introContent}>
                        {isMobile ? <p>버튼을 클릭하세요!</p> : <p>스페이스바를 누르거나 버튼을 클릭하세요!</p>}
                        <button onClick={startGame} className={styles.startButton}>
                            <span>시작하기</span>
                        </button>
                    </div>
                </div>
            )}
            <iframe
                ref={iframeRef}
                src="/t-rex-runner/index.html"
                title="럭끼의 모험"
                className={styles.gameFrame}
                onLoad={handleIframeLoad}
                allow="autoplay"
                frameBorder="0"
            />
        </div>
    );
};

export default TRexGame;
