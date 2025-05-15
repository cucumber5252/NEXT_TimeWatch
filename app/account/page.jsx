'use client';

import React, { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import styles from './account.module.css';
import { useRouter } from 'next/navigation';

const Account = () => {
    const { data: session, status, update: updateSession } = useSession();
    const { user, updateUser } = useAuth() || {}; // user와 updateUser를 디폴트 값으로 설정
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [username, setUsername] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [editMode, setEditMode] = useState({
        email: false,
        nickname: false,
    });
    const router = useRouter();

    useEffect(() => {
        if (status === 'authenticated' && session?.user) {
            setEmail(session.user.email);
            setNickname(session.user.nickname);
            setUsername(session.user.username);
            updateUser?.(session.user); // optional chaining으로 updateUser가 있을 때만 호출
        }
    }, [status, session]);

    const getToken = () => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('accessToken');
        }
        return null;
    };

    const fetchUpdatedSession = async () => {
        try {
            const newSession = await fetch('/api/auth/session').then((res) => res.json());
            await updateSession(newSession);
        } catch (error) {
            console.error('Error updating session:', error);
        }
    };

    const handleUpdateEmail = async () => {
        const token = getToken();
        if (!token) {
            alert('Unauthorized');
            return;
        }
        try {
            const response = await axios.put(
                '/api/user',
                { email },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                alert('이메일이 변경되었습니다.');
                setEmail(email);
                setEditMode((prev) => ({ ...prev, email: false }));
                await fetchUpdatedSession();
            }
        } catch (error) {
            console.error('Error updating email:', error);
            alert('이메일 업데이트 중 오류가 발생했습니다.');
        }
    };

    const handleUpdateNickname = async () => {
        const token = getToken();
        if (!token) {
            alert('Unauthorized');
            return;
        }
        try {
            const response = await axios.put(
                '/api/user',
                { nickname },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                alert('닉네임이 변경되었습니다.');
                setNickname(nickname);
                setEditMode((prev) => ({ ...prev, nickname: false }));
                await fetchUpdatedSession();
            }
        } catch (error) {
            console.error('Error updating nickname:', error);
            alert('닉네임 업데이트 중 오류가 발생했습니다.');
        }
    };

    const handleUpdatePassword = async () => {
        const token = getToken();
        if (!token) {
            alert('Unauthorized');
            return;
        }
        try {
            const response = await axios.put(
                '/api/user',
                {
                    currentPassword,
                    newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 200) {
                alert('비밀번호가 변경되었습니다.');
                setCurrentPassword('');
                setNewPassword('');
            }
        } catch (error) {
            console.error('Error updating password:', error);
            if (error.response && error.response.status === 400) {
                alert('현재 비밀번호가 올바르지 않습니다.');
            } else {
                alert('비밀번호 업데이트 중 오류가 발생했습니다.');
            }
        }
    };

    const handleDeleteAccount = async () => {
        const token = getToken();
        if (!token) {
            alert('Unauthorized');
            return;
        }
        if (confirm('정말 계정을 삭제하시겠습니까?')) {
            try {
                const response = await axios.delete('/api/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                if (response.status === 200) {
                    alert('계정이 삭제되었습니다.');
                    await signOut();
                    router.push('/');
                }
            } catch (error) {
                console.error('Error deleting account:', error);
                alert('계정 삭제 중 오류가 발생했습니다.');
            }
        }
    };

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'unauthenticated') {
        return (
            <div className={styles.centeredMessage}>
                <p>로그인이 필요합니다.</p>
            </div>
        );
    }

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>내 정보</h1>
            <div className={styles.formItem}>
                <label className={styles.label}>이메일</label>
                <div className={styles.inputContainer}>
                    {editMode.email ? (
                        <>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={styles.formInput}
                                required
                            />
                            <button type="button" className={styles.editButton} onClick={handleUpdateEmail}>
                                완료
                            </button>
                        </>
                    ) : (
                        <>
                            <span>{email}</span>
                            <button
                                type="button"
                                className={styles.editButton}
                                onClick={() => setEditMode((prev) => ({ ...prev, email: true }))}
                            >
                                변경
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>닉네임</label>
                <div className={styles.inputContainer}>
                    {editMode.nickname ? (
                        <>
                            <input
                                type="text"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                className={styles.formInput}
                                required
                            />
                            <button type="button" className={styles.editButton} onClick={handleUpdateNickname}>
                                완료
                            </button>
                        </>
                    ) : (
                        <>
                            <span>{nickname}</span>
                            <button
                                type="button"
                                className={styles.editButton}
                                onClick={() => setEditMode((prev) => ({ ...prev, nickname: true }))}
                            >
                                변경
                            </button>
                        </>
                    )}
                </div>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>아이디</label>
                <div className={styles.inputContainer}>
                    <span>{username || '아이디 불러오기 실패'}</span>
                </div>
            </div>
            <div className={styles.formItem}>
                <label className={styles.label}>비밀번호</label>
                <div className={styles.inputContainerVertical}>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className={styles.formInput}
                        placeholder="현재 비밀번호"
                        required
                    />
                    <div className={styles.passwordSpacer}></div>
                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className={styles.formInput}
                            placeholder="새 비밀번호"
                            required
                        />
                        <button type="button" className={styles.editButton} onClick={handleUpdatePassword}>
                            변경
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.formItem}>
                <button type="button" className={styles.deleteButton} onClick={handleDeleteAccount}>
                    계정 삭제
                </button>
            </div>
        </div>
    );
};

export default Account;
