'use client';

import React from 'react';
import styles from './terms.module.css';

const Terms = () => {
    return (
        <div className="container">
            <div className="separatePage">
                <div className={styles.section}>
                    <h1 className={styles.heading}>이용약관</h1>
                    <p className={styles.content}>
                        lucktime을 이용해 주셔서 감사합니다. 본 약관은 다양한 lucktime 서비스의 이용과 관련하여 lucktime
                        서비스 회원 또는 비회원과의 관계를 설명하며, lucktime 서비스 이용에 도움이 될 수 있는 유익한
                        정보를 포함합니다. lucktime 서비스를 이용하실 경우 본 약관을 확인하거나 동의하게 됩니다. 본
                        이용약관이나 개인정보처리방침을 개정하는 경우 웹사이트 &#39;블로그&#39; 내의
                        &#39;공지사항&#39;을 통하여 공지할 것입니다.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.heading2}>1. lucktime 설명</h2>
                    <p className={styles.content}>
                        lucktime은 대한민국 표준시간과 타사이트의 서버시간 등 정확한 타이밍을 필요로 하는 목표 달성을
                        위한 서비스를 제공합니다. 그 외 선착순 이벤트 정보 제공, 선착순 이벤트 즐겨찾기 기능 등 여러분의
                        생활에 즐거움과 편리함을 더하는 다양한 서비스를 제공합니다. PC, 휴대폰 등 인터넷 이용이 가능한
                        각종 단말기를 통해 lucktime 서비스를 자유롭게 이용하실 수 있습니다.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.heading2}>2. 회원 전용 서비스</h2>
                    <p className={styles.content}>
                        본 약관을 읽고 동의하신 후 회원 가입을 하실 수 있으며, 회원 가입 절차가 완료되면 lucktime 서비스
                        이용 계정(이하 &#39;계정&#39;)을 부여합니다. 계정이란 회원이 lucktime 서비스에 로그인한 이후
                        이용하는 각종 서비스 이용 이력을 회원 별로 관리하기 위해 설정한 회원 식별 단위를 말합니다.
                        회원은 자신의 계정을 통해 이벤트 일정 즐겨찾기 등 더욱 다양한 lucktime 서비스에 접근할 수
                        있습니다.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.heading2}>3. 개인정보 보호</h2>
                    <p className={styles.content}>
                        lucktime은 회원이 동의한 목적과 범위 내에서만 개인정보를 수집, 이용하며, 개인정보 보호 관련
                        법령에 따라 안전하게 관리합니다.
                    </p>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.heading2}>4. 서비스 이용 주의사항</h2>
                    <p className={styles.content}>
                        lucktime 서비스를 보다 안전하고 원활히 이용하기 위해서 아래 내용에 대한 확인 및 준수를 요청
                        드립니다.
                    </p>
                    <ul className={styles.list}>
                        <li className={styles.listitem}>
                            회원 가입 시 이메일을 허위로 기재해서는 안 됩니다. 사이트 관련 안내를 위해 회원 계정에
                            등록된 정보는 항상 최신 정보가 유지될 수 있도록 관리해 주세요.
                        </li>
                        <li className={styles.listitem}>
                            자동화된 수단을 활용하는 등 lucktime 서비스의 기능을 비정상적으로 이용하거나 lucktime 서비스
                            제공 취지에 부합하지 않는 행위는 금지됩니다.
                        </li>
                    </ul>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.heading2}>5. 서비스 관련 사전 공지</h2>
                    <p className={styles.content}>
                        lucktime이 예측 가능하게 컴퓨터와 서버 관련된 이유로 부득이 서비스의 전부 또는 일부를 중단할
                        경우, 상당기간 전에 이를 안내하겠습니다. 만약 예측 불가능한 경우라면 사후 지체 없이 상세히
                        설명하고 안내 드리겠습니다. 한편, 서비스 운영 또는 개선을 위해 무료로 제공되는 서비스의 전부
                        또는 일부를 수정, 변경, 또는 종료하게 된 경우 별도의 보상을 하지 않습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
