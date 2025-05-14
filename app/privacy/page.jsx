'use client';

import React from 'react';
import styles from './privacy.module.css';

const Privacy = () => {
    return (
        <div className="container">
            <div className="separatePage">
                <div className={styles.section}>
                    <h1 className={styles.heading}>개인정보처리방침</h1>
                    <p className={styles.content}>
                        timewatch의 본 개인정보처리방침은 개인정보보호법에 따라 timewatch 내에서의 이용자의 개인정보
                        처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다. 개인정보처리방침을 개정하는
                        경우 웹사이트 공지사항을 통하여 공지할 것입니다.
                    </p>
                    <p className={styles.content}>본 방침은 2024년 7월 8일부터 시행됩니다.</p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.heading2}>1. 수집하는 개인정보</h2>
                    <p className={styles.content}>
                        이용자는 회원가입을 하지 않아도 대한민국 표준시간 확인, 서버시간 확인, 선착순 이벤트 정보 확인
                        등 대부분의 timewatch 서비스를 회원과 동일하게 이용할 수 있습니다. 선착순 이벤트 즐겨찾기 등과
                        같은 개인화 서비스를 이용하기 위해 회원가입을 할 경우, timewatch은 서비스 이용을 위해 필요한
                        최소한의 개인정보를 수집합니다. 회원가입 시 timewatch 이용자로부터 필수항목으로 수집하는
                        개인정보는 아래와 같습니다.
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
                        웹사이트에 게재된 광고로 인해 제3자(구글)가 사용자의 브라우저에 쿠키를 삽입하거나 읽을 수 있으며
                        웹 비콘으로 정보를 수집할 수 있습니다. 그 외 회원가입시 입력한 개인정보는 제3자에게 제공되지
                        않으며 암호화되어 안전하게 보관합니다.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.heading2}>2. 수집한 개인정보의 이용</h2>
                    <p className={styles.content}>
                        timewatch에서는 회원 관리, 서비스 제공, 혜택 제공, 이용 안내 등 아래의 목적으로만 개인정보를
                        이용합니다.
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listitem}>
                            회원 관리: 회원 가입 의사의 확인, 이용자 식별, 회원 탈퇴 의사의 확인 등
                        </li>
                        <li className={styles.listitem}>서비스 제공: 선착순 이벤트 즐겨찾기 서비스 제공 등</li>
                        <li className={styles.listitem}>혜택 제공: timewatch 회원 전용 자체 이벤트 참여기회 제공 등</li>
                        <li className={styles.listitem}>이용 안내: 사이트 이용에 중요한 사항 관련 이메일 발송 </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.heading2}>3. 개인정보 보유기간</h2>
                    <p className={styles.content}>
                        timewatch은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의
                        받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
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
            </div>
        </div>
    );
};

export default Privacy;
