'use client';

import React from 'react';
import styles from './brand.module.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';

const Brand = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push('/');
    };

    const [toggleState, setToggleState] = useState([false, false, false]);

    const handleToggle = (index) => {
        setToggleState((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div className="container">
            <div className="separatePage">
                <div className={styles.headBanner}>
                    <h1 className={styles.heading}>지금 시간 보게?</h1>
                    <Image src="/logo.svg" className={styles.textLogo} alt="Text Logo" width={245.7} height={50} />
                    <Image src="/mascot.svg" className={styles.imageLogo} alt="Image Logo" width={245.7} height={50} />
                </div>
                <div className={styles.section}>
                    <p className={styles.intro}>
                        [&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] 에는
                        여러분이 <strong>원하는 그 무엇이든</strong> 들어갈 수 있습니다.
                    </p>
                    <p className={styles.content}>
                        이제는 ‘선착순’이라는 단어가 일상 속 중요한 키워드가 되었습니다. <br />
                        여가, 소비, 교육 등 다양한 분야에서 우리는 목표를 달성하기 위해 정확한 타이밍을 필요로 합니다.{' '}
                        <br />
                        <strong>timewatch</strong>은 이에 필요한 서버시간을 가장 정교하고 트렌디하게 제공합니다.
                    </p>
                    <p className={styles.content}>
                        단순한 서버시간 확인 사이트를 넘어,
                        <br />
                        여러분이 필요한 일정들을 놓치지 않도록 도우며 일상 속에 작은 행운을 더하고자 합니다.
                    </p>
                    <p className={styles.content}>
                        <strong>timewatch</strong>의 신뢰할 수 있는 시간과 일정으로, 오늘도 웃음만 가득하세요!
                    </p>
                </div>
                <div className={styles.section}>
                    <div className={styles.button} style={{ cursor: 'pointer' }} onClick={handleButtonClick}>
                        watch time now!
                    </div>
                </div>
                <div className={styles.toggleContainer}>
                    <h3 className={styles.toggleHeading}>FAQ</h3>
                    <div className={styles.toggleTitle} onClick={() => handleToggle(0)}>
                        Q. timewatch에서 제공하는 서버시간을 정말 믿을 수 있나요?
                    </div>
                    {toggleState[0] && (
                        <div className={styles.toggleContent}>
                            A. timewatch만의 알고리즘으로 정교하게 추출 및 계산하여 믿을 수 있는 서버시간을 제공하고
                            있습니다 :)
                        </div>
                    )}
                    <div className={styles.toggleTitle} onClick={() => handleToggle(1)}>
                        Q. 로고는 무슨 의미인가요?
                    </div>
                    {toggleState[1] && (
                        <div className={styles.toggleContent}>
                            A. 시계의 시침과 분침을 눈 모양으로 형상화해서, 항상 정확한 시간을 지켜보며 웃음만
                            가득하기를 바라는 마음을 담았습니다 :)
                        </div>
                    )}
                    <div className={styles.toggleTitle} onClick={() => handleToggle(2)}>
                        Q. 이벤트 일정은 어떻게 사용하나요?
                    </div>
                    {toggleState[2] && (
                        <div className={styles.toggleContent}>
                            A. 날짜를 한 번 클릭하면 해당 날짜에 진행되는 이벤트를 확인할 수 있고, 더블 클릭하면 한 주의
                            이벤트를 한번에 확인할 수 있어요. 하단에 있는 카테고리 필터를 활용해서 원하는 기간이나
                            날짜에 관심 있는 이벤트만 확인할 수도 있어요. 로그인 후에는 각 이벤트의 즐겨찾기와 알림
                            설정이 가능해요. 행운의 기회를 놓치지 않게 도와드릴게요!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Brand;
