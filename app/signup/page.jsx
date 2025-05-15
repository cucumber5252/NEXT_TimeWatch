'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import styles from './signup.module.css';

const Signup = () => {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nickname || !email || !username || !password) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await axios.post('/api/auth/signup', {
                nickname,
                email,
                username,
                password,
            });
            if (response.status === 201) {
                await recordSignup(); // 회원 가입 수 기록
                await updateTotalSignups();
                alert('회원가입이 완료되었습니다.');
                router.push('/signin');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message);
            } else {
                setError('An error occurred. Please try again.');
            }
        }
    };

    const recordSignup = async () => {
        try {
            const response = await axios.post('/api/record-signup');
            if (response.status !== 200) {
                throw new Error('Failed to record signup');
            }
            const { todayString, kstDateString } = response.data;
            if (process.env.NODE_ENV === 'development') {
                console.log('todayString from rS:', todayString);
                console.log('kstDateString from rS:', kstDateString);
                console.log('Signup recorded successfully');
            }
        } catch (error) {
            console.error('Error recording signup:', error);
        }
    };

    const updateTotalSignups = async () => {
        try {
            const response = await axios.post('/api/update-total-signups');
            if (response.status !== 200) {
                throw new Error('Failed to update total signups');
            }
            if (process.env.NODE_ENV === 'development') {
                console.log('Total signups updated successfully');
            }
        } catch (error) {
            console.error('Error updating total signups:', error);
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <h1 className={styles.title}>회원가입</h1>
                <div className={styles.formItem}>
                    <label className={styles.label}>닉네임</label>
                    <input
                        type="text"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        className={styles.input}
                        placeholder="닉네임을 입력하세요"
                        required
                    />
                </div>
                <div className={styles.formItem}>
                    <label className={styles.label}>이메일 주소</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                        placeholder="이메일을 입력하세요"
                        required
                    />
                </div>
                <div className={styles.formItem}>
                    <label className={styles.label}>아이디</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                        placeholder="아이디를 입력하세요"
                        required
                    />
                </div>
                <div className={styles.formItem}>
                    <label className={styles.label}>비밀번호</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                        placeholder="비밀번호를 입력하세요"
                        required
                    />
                </div>
                <div className={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                        id="terms"
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                    />
                    <label htmlFor="terms" className={styles.checkboxLabel}>
                        이용약관과 개인정보처리방침을 읽었고 이에 동의합니다.{' '}
                        <span
                            onClick={() => setIsModalOpen(true)}
                            className={styles.underline}
                            style={{ color: '#0077FF', cursor: 'pointer' }}
                        >
                            <br />
                            이용약관 및 개인정보처리방침 보기
                        </span>
                    </label>
                </div>
                {error && <p className={styles.errorMessage}>{error}</p>}
                <button type="submit" className={styles.button} disabled={!agreeToTerms}>
                    회원가입
                </button>
            </form>

            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <h1 className={styles.heading}>이용약관</h1>
                        <p className={styles.content}>
                            timewatch을 이용해 주셔서 감사합니다. 본 약관은 다양한 timewatch 서비스의 이용과 관련하여
                            timewatch 서비스 회원 또는 비회원과의 관계를 설명하며, timewatch 서비스 이용에 도움이 될 수
                            있는 유익한 정보를 포함합니다. timewatch 서비스를 이용하실 경우 본 약관을 확인하거나
                            동의하게 됩니다. 본 이용약관이나 개인정보처리방침을 개정하는 경우 웹사이트 &#39;블로그&#39;
                            내의 &#39;공지사항&#39;을 통하여 공지할 것입니다.
                        </p>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>1. timewatch 설명</h2>
                            <p className={styles.content}>
                                timewatch은 대한민국 표준시간과 타사이트의 서버시간 등 정확한 타이밍을 필요로 하는 목표
                                달성을 위한 서비스를 제공합니다. 그 외 선착순 이벤트 정보 제공, 선착순 이벤트 즐겨찾기
                                기능 등 여러분의 생활에 즐거움과 편리함을 더하는 다양한 서비스를 제공합니다. PC, 휴대폰
                                등 인터넷 이용이 가능한 각종 단말기를 통해 timewatch 서비스를 자유롭게 이용하실 수
                                있습니다.
                            </p>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>2. 회원 전용 서비스</h2>
                            <p className={styles.content}>
                                본 약관을 읽고 동의하신 후 회원 가입을 하실 수 있으며, 회원 가입 절차가 완료되면
                                timewatch 서비스 이용 계정(이하 &#39;계정&#39;)을 부여합니다. 계정이란 회원이 timewatch
                                서비스에 로그인한 이후 이용하는 각종 서비스 이용 이력을 회원 별로 관리하기 위해 설정한
                                회원 식별 단위를 말합니다. 회원은 자신의 계정을 통해 이벤트 일정 즐겨찾기 등 더욱 다양한
                                timewatch 서비스에 접근할 수 있습니다.
                            </p>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>3. 개인정보 보호</h2>
                            <p className={styles.content}>
                                timewatch은 회원이 동의한 목적과 범위 내에서만 개인정보를 수집, 이용하며, 개인정보 보호
                                관련 법령에 따라 안전하게 관리합니다.
                            </p>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>4. 서비스 이용 주의사항</h2>
                            <p className={styles.content}>
                                timewatch 서비스를 보다 안전하고 원활히 이용하기 위해서 아래 내용에 대한 확인 및 준수를
                                요청 드립니다.
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listitem}>
                                    회원 가입 시 이메일을 허위로 기재해서는 안 됩니다. 사이트 관련 안내를 위해 회원
                                    계정에 등록된 정보는 항상 최신 정보가 유지될 수 있도록 관리해 주세요.
                                </li>
                                <li className={styles.listitem}>
                                    자동화된 수단을 활용하는 등 timewatch 서비스의 기능을 비정상적으로 이용하거나
                                    timewatch 서비스 제공 취지에 부합하지 않는 행위는 금지됩니다.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>5. 서비스 관련 사전 공지</h2>
                            <p className={styles.content}>
                                timewatch이 예측 가능하게 컴퓨터와 서버 관련된 이유로 부득이 서비스의 전부 또는 일부를
                                중단할 경우, 상당기간 전에 이를 안내하겠습니다. 만약 예측 불가능한 경우라면 사후 지체
                                없이 상세히 설명하고 안내 드리겠습니다. 한편, 서비스 운영 또는 개선을 위해 무료로
                                제공되는 서비스의 전부 또는 일부를 수정, 변경, 또는 종료하게 된 경우 별도의 보상을 하지
                                않습니다.
                            </p>
                        </div>
                        <h1 className={styles.heading}>개인정보처리방침</h1>
                        <p className={styles.content}>
                            timewatch의 본 개인정보처리방침은 개인정보보호법에 따라 timewatch 내에서의 이용자의 개인정보
                            처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다. 개인정보처리방침을
                            개정하는 경우 웹사이트 공지사항을 통하여 공지할 것입니다.
                        </p>
                        <p className={styles.content}>본 방침은 2024년 7월 8일부터 시행됩니다.</p>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>1. 수집하는 개인정보</h2>
                            <p className={styles.content}>
                                이용자는 회원가입을 하지 않아도 대한민국 표준시간 확인, 서버시간 확인, 선착순 이벤트
                                정보 확인 등 대부분의 timewatch 서비스를 회원과 동일하게 이용할 수 있습니다. 선착순
                                이벤트 즐겨찾기 등과 같은 개인화 서비스를 이용하기 위해 회원가입을 할 경우, timewatch은
                                서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다. 회원가입 시 timewatch
                                이용자로부터 필수항목으로 수집하는 개인정보는 아래와 같습니다.
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listitem}>이메일(email)</li>
                                <li className={styles.listitem}>아이디(username)</li>
                                <li className={styles.listitem}>비밀번호(password): 암호화되어 저장됩니다.</li>
                                <li className={styles.listitem}>닉네임(nickname)</li>
                            </ul>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>1-1. 제3자가 수집하는 개인정보</h2>
                            <p className={styles.content}>
                                웹사이트에 게재된 광고로 인해 제3자(구글)가 사용자의 브라우저에 쿠키를 삽입하거나 읽을
                                수 있으며 웹 비콘으로 정보를 수집할 수 있습니다. 그 외 회원가입시 입력한 개인정보는
                                제3자에게 제공되지 않으며 암호화되어 안전하게 보관합니다.
                            </p>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>2. 수집한 개인정보의 이용</h2>
                            <p className={styles.content}>
                                timewatch에서는 회원 관리, 서비스 제공, 혜택 제공, 이용 안내 등 아래의 목적으로만
                                개인정보를 이용합니다.
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listitem}>
                                    회원 관리: 회원 가입 의사의 확인, 이용자 식별, 회원 탈퇴 의사의 확인 등
                                </li>
                                <li className={styles.listitem}>서비스 제공: 선착순 이벤트 즐겨찾기 서비스 제공 등</li>
                                <li className={styles.listitem}>
                                    혜택 제공: timewatch 회원 전용 자체 이벤트 참여기회 제공 등
                                </li>
                                <li className={styles.listitem}>
                                    이용 안내: 사이트 이용에 중요한 사항 관련 이메일 발송{' '}
                                </li>
                            </ul>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>3. 개인정보 보유기간</h2>
                            <p className={styles.content}>
                                timewatch은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
                                동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listitem}>
                                    보유 항목: 이메일(email), 아이디(username), 비밀번호(password), 닉네임(nickname)
                                </li>
                                <li className={styles.listitem}>보유 기간: 회원 탈퇴 시까지</li>
                            </ul>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>4. 개인정보의 제공 및 위탁</h2>
                            <p className={styles.content}>
                                timewatch은 이용자 동의 없이 개인정보를 외부에 제공하지 않습니다. 암호화하여 안전하게
                                보관합니다.
                            </p>
                        </div>
                        <div className={styles.section}>
                            <h2 className={styles.heading2}>5. 개인정보처리방침 개정 전 고지 의무</h2>
                            <p className={styles.content}>
                                본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 경우, 개정 7일 전부터 웹사이트
                                &#39;블로그&#39; 내의 &#39;공지사항&#39;을 통해 사전 공지를 할 것입니다.
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listitem}>공고일자: 2024년 07월 08일</li>
                                <li className={styles.listitem}>시행일자: 2024년 07년 20일</li>
                            </ul>
                        </div>
                        <button onClick={() => setIsModalOpen(false)}>닫기</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Signup;
