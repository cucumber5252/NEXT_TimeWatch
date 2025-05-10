'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from './ChatHome.module.css';
import Image from 'next/image';
import Cookies from 'js-cookie';
import { getSession } from 'next-auth/react';
import profanityList from '../lib/data/profanityList.json'; // 비속어 리스트 불러오기

export default function ChatHome() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [userId, setUserId] = useState(Cookies.get('userId'));
    const [userName, setUserName] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // admin 여부 확인
    const messageBoxRef = useRef(null);
    const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
    const [isProfanityFilterOn, setIsProfanityFilterOn] = useState(false); // 비속어 필터 상태
    const [messageHistory, setMessageHistory] = useState([]); // 메시지 전송 기록
    const [isMuted, setIsMuted] = useState(false); // 사용자가 금지된 상태인지 확인
    const muteDuration = 1 * 60 * 1000; // 1분 금지
    const spamThreshold = 10; // 10초 동안 보낼 수 있는 메시지 수
    const spamWindow = 10 * 1000; // 10초

    useEffect(() => {
        const loadUserName = async () => {
            try {
                const session = await getSession();
                setUserName(session?.user?.username || 'not a member');
                setIsAdmin(session && session.user.role === 'admin'); // admin 권한 설정
            } catch (error) {
                console.error('Error loading session:', error);
            }
        };

        loadUserName();
        fetchMessages(); // 처음 로드 시 메시지를 가져옴

        return () => {};
    }, []);

    useEffect(() => {
        const checkMuteStatus = () => {
            const muteExpiry = Cookies.get('muteExpiry');
            if (muteExpiry && Date.now() < parseInt(muteExpiry, 10)) {
                setIsMuted(true);
            } else {
                setIsMuted(false);
                Cookies.remove('muteExpiry');
            }
        };

        checkMuteStatus(); // 컴포넌트 로드 시 금지 상태 확인
    }, []);

    const scrollToBottom = () => {
        if (messageBoxRef.current) {
            messageBoxRef.current.scrollTop = messageBoxRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        // 페이지와 메시지를 처음 로딩할 때만 자동 스크롤 수행
        scrollToBottom();
    }, [messages]);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('/api/chats/home');
            if (response.data.userId && response.data.userId !== userId) {
                setUserId(response.data.userId);
                Cookies.set('userId', response.data.userId); // 쿠키에 저장
            }

            const initialMessages = response.data.data.map((msg) => ({
                ...msg,
                originalContent: msg.content, // 원본 메시지 저장
                filteredContent: filterProfanity(msg.content), // 필터된 메시지 저장
            }));

            setMessages(initialMessages);
            if (isAutoScrollEnabled) {
                scrollToBottom();
            }
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isMuted) {
            alert('도배가 감지되어 1분 동안 채팅을 남길 수 없습니다.');
            return;
        }

        let trimmedMessage = newMessage.trim();
        if (!trimmedMessage) {
            alert('메시지를 입력하세요.');
            return;
        }

        if (isSpamming()) {
            alert('도배 행위가 감지되었습니다. 1분 동안 채팅을 남길 수 없습니다.');
            setIsMuted(true);
            const muteExpiry = Date.now() + muteDuration;
            Cookies.set('muteExpiry', muteExpiry.toString(), { expires: 1 }); // 쿠키에 금지 종료 시간 저장
            setTimeout(() => setIsMuted(false), muteDuration); // 1분 후에 금지 해제
            return;
        }

        try {
            // POST 요청을 통해 메시지를 서버로 전송
            const response = await axios.post('/api/chats/home', {
                username: userName,
                content: trimmedMessage,
                userId,
            });

            if (response.data.userId && response.data.userId !== userId) {
                setUserId(response.data.userId);
                Cookies.set('userId', response.data.userId);
            }

            // 메시지를 직접 상태에 추가하지 않고 소켓에서 처리되도록 함
            setNewMessage('');
            setIsAutoScrollEnabled(true); // 메시지 전송 후 자동 스크롤 설정
            updateMessageHistory();
            fetchMessages(); // 새 메시지 전송 후 전체 메시지 다시 가져오기
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleDelete = async (messageId) => {
        const isConfirmed = window.confirm('정말 삭제하시겠습니까?');
        if (!isConfirmed) {
            return;
        }

        try {
            // 관리자인지 여부를 함께 서버에 전송
            const response = await axios.delete('/api/chats/home', {
                data: { messageId, isAdmin }, // userId는 서버에서 처리
            });

            if (response.data.success) {
                setMessages((prevMessages) => prevMessages.filter((msg) => msg._id !== messageId));
            } else {
                alert('메시지를 삭제할 수 없습니다.');
            }
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    const handleScroll = () => {
        if (!messageBoxRef.current) return;

        const { scrollTop, scrollHeight, clientHeight } = messageBoxRef.current;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 10; // 하단에서 10px 위까지 허용

        setIsAutoScrollEnabled(atBottom); // 사용자가 맨 아래에 있을 때만 자동 스크롤 활성화
    };

    useEffect(() => {
        if (messageBoxRef.current) {
            messageBoxRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (messageBoxRef.current) {
                messageBoxRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const formatTime = (timestamp) => {
        const date = new Date(timestamp);
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);

        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = date.getUTCDate().toString().padStart(2, '0');

        const daysOfWeek = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
        const weekday = daysOfWeek[date.getUTCDay()];

        return `${year}년 ${month}월 ${day}일 ${weekday}`;
    };

    const filterProfanity = (message) => {
        let filteredMessage = message;
        profanityList.forEach((word) => {
            const regex = new RegExp(word, 'gi');
            filteredMessage = filteredMessage.replace(regex, (match) => '*'.repeat(match.length));
        });
        return filteredMessage;
    };

    const getDisplayedMessages = () => {
        return messages.map((msg) => ({
            ...msg,
            content: isProfanityFilterOn ? msg.filteredContent : msg.originalContent,
        }));
    };

    const updateMessageHistory = () => {
        const now = Date.now();
        setMessageHistory((prevHistory) => [...prevHistory, now].filter((timestamp) => now - timestamp <= spamWindow));
    };

    const isSpamming = () => {
        return messageHistory.length >= spamThreshold;
    };

    const displayedMessages = getDisplayedMessages();

    const lastRequestTimeRef = useRef(0);

    const handleRefreshMessages = async () => {
        const img = document.getElementById('refresh-icon');
        if (img) {
            if (img) {
                img.style.animation = 'none';
                img.offsetHeight; // reflow 강제 트리거
                img.style.animation = 'spin 1s linear'; // 정확히 다시 animation 설정
            }
        }

        const now = Date.now();
        if (now - lastRequestTimeRef.current < 5000) {
            return;
        }

        lastRequestTimeRef.current = now;

        try {
            const response = await axios.get('/api/chats/home');

            if (response.data.userId && response.data.userId !== userId) {
                setUserId(response.data.userId);
                Cookies.set('userId', response.data.userId);
            }

            const refreshedMessages = response.data.data.map((msg) => ({
                ...msg,
                originalContent: msg.content,
                filteredContent: filterProfanity(msg.content),
            }));

            setMessages(refreshedMessages);

            if (process.env.NODE_ENV === 'development') {
                console.log(messages);
            }

            if (isAutoScrollEnabled) {
                scrollToBottom();
            }
        } catch (error) {
            console.error('메시지 새로고침 중 오류 발생:', error);
        }
    };

    return (
        <div className={styles.chatHomeContainer}>
            <div className={styles.chatContainer}>
                <div className={styles.headerContainer}>
                    <div className={styles.chatNavBar}>
                        <div className={styles.chatTitle}>
                            <Image
                                className={styles.titleimg}
                                src="/mainChat.svg"
                                alt="Chat Icon"
                                width={22}
                                height={12}
                            />
                            <div className={styles.chatTitleText}>채팅: 매너를 지켜 주세요!</div>
                        </div>
                        <Image
                            id="refresh-icon"
                            className={styles.titleimg}
                            src="/refresh-icon.svg"
                            alt="Refresh Icon"
                            width={22}
                            height={12}
                            onClick={() => handleRefreshMessages()}
                            style={{ cursor: 'pointer' }}
                        />

                        {/* <div className={styles.chatAnnouncement}>
                            현재 안정화 작업을 위해 실시간 불러오기가 불가하니 양해 부탁드립니다.
                        </div> */}
                    </div>
                    {/* <div className={styles.filterButtons}>
                        <span className={styles.boldText}>비속어 필터</span>
                        <button
                            className={`${styles.filterButton} ${isProfanityFilterOn ? styles.active : ''}`}
                            onClick={() => setIsProfanityFilterOn(true)}
                        >
                            켜기
                        </button>
                        <button
                            className={`${styles.filterButton} ${!isProfanityFilterOn ? styles.active : ''}`}
                            onClick={() => setIsProfanityFilterOn(false)}
                        >
                            끄기
                        </button>
                    </div> */}
                </div>
                <div className={styles.messageBox} ref={messageBoxRef}>
                    {displayedMessages.map((msg, index) => {
                        const isMyMessage = msg.userId === userId;
                        const currentDate = formatDate(msg.timestamp);
                        const previousMessage = displayedMessages[index - 1];
                        const previousDate = previousMessage ? formatDate(previousMessage.timestamp) : null;

                        return (
                            <React.Fragment key={index}>
                                {/* {currentDate !== previousDate && (
                                    <div className={styles.dateContainer}>
                                        <div className={styles.dateSeparator}>
                                            <span>{currentDate}</span>
                                        </div>
                                    </div>
                                )} */}
                                <div
                                    className={`${styles.messageContainer} ${
                                        isMyMessage ? styles.myMessageContainer : ''
                                    }`}
                                >
                                    {isMyMessage ? (
                                        <>
                                            <div className={styles.messageHeader}>
                                                {isAdmin && (
                                                    <button
                                                        className={styles.deleteButton}
                                                        onClick={() => handleDelete(msg._id)}
                                                    >
                                                        <Image
                                                            src="/delete-chat.svg"
                                                            alt="Delete"
                                                            width={10}
                                                            height={10}
                                                        />
                                                    </button>
                                                )}

                                                <div className={styles.timestamp}>{formatTime(msg.timestamp)}</div>
                                            </div>
                                            <div className={`${styles.message} ${styles.myMessage}`}>{msg.content}</div>
                                        </>
                                    ) : (
                                        <>
                                            <div className={styles.message}>{msg.content}</div>
                                            <div className={styles.messageFooter}>
                                                <div className={styles.timestamp}>{formatTime(msg.timestamp)}</div>
                                                {isAdmin && (
                                                    <button
                                                        className={styles.deleteButton}
                                                        onClick={() => handleDelete(msg._id)}
                                                    >
                                                        <Image
                                                            src="/delete-chat.svg"
                                                            alt="Delete"
                                                            width={10}
                                                            height={10}
                                                        />
                                                    </button>
                                                )}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="당신의 기록을 남겨주세요!"
                        className={styles.inputField}
                    />
                    <button type="submit" className={styles.sendButton}>
                        <Image src="/send.svg" alt="Send" width={22} height={22} />
                    </button>
                </form>
            </div>
        </div>
    );
}
