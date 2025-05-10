// components/DummyAdButton.jsx
'use client';

import { useState, useEffect } from 'react';
import styles from './DummyAdButton.module.css';

const DummyAdButton = () => {
    const [isBlocked, setIsBlocked] = useState(false);

    // 컴포넌트가 마운트될 때 사용자의 차단 상태를 확인합니다.
    useEffect(() => {
        async function checkBlockStatus() {
            try {
                const res = await fetch('/api/check-ad-block');
                const data = await res.json();
                if (data.blocked) {
                    setIsBlocked(true);
                }
            } catch (error) {
                console.error('차단 상태 확인 에러:', error);
            }
        }
        checkBlockStatus();
    }, []);

    const handleClick = async (e) => {
        // 이미 차단된 상태면 클릭 동작 중지
        if (isBlocked) {
            return;
        }

        // 버튼 클릭 시 다시 차단 상태 확인
        const res = await fetch('/api/check-ad-block');
        const data = await res.json();

        if (data.blocked) {
            // 첫 차단 시 alert 표시 후 상태 업데이트 및 관리자에게 이메일 전송
            alert('🚨 광고 클릭이 차단되었습니다.');
            setIsBlocked(true);

            await fetch('/api/send-alert', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({}),
            }).catch((err) => console.error('❌ 이메일 전송 실패:', err));

            return;
        }

        // 차단되지 않은 경우 정상 로직 실행
        const ipRes = await fetch('/api/get-client-ip');
        const ipData = await ipRes.json();
        console.log(`사용자 IP: ${ipData.ip}`);
        console.log('광고 클릭');

        await fetch('/api/track-click', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({}),
        });
    };

    return (
        <button
            className={`${styles.adButton} ${isBlocked ? styles.disabled : ''}`}
            onClick={handleClick}
            disabled={isBlocked} // 차단된 경우 버튼 비활성화
        >
            더미 광고 버튼
        </button>
    );
};

export default DummyAdButton;
