//Footer.jsx

import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.firstRow}>
                {/* <Link href="/blog">블로그</Link> */}
                <Link href="/brand">사이트 소개</Link>
                <a href="mailto:lucktime.next@gmail.com">문의하기</a>
                <Link href="/terms">이용약관</Link>
                <Link href="/privacy">개인정보처리방침</Link>
            </div>
            <div className={styles.secondRow}>lucktime. COPYRIGHT ©2024 luckti.me ALL RIGHTS RESERVED.</div>
            <div className={styles.thirdRow}>
                <a href="https://www.instagram.com/luckti.me" target="_blank" rel="noopener noreferrer">
                    인스타그램
                </a>
                <a href="https://x.com/lucktimekr" target="_blank" rel="noopener noreferrer">
                    X (트위터)
                </a>
                <a href="https://blog.naver.com/lucktimekr" target="_blank" rel="noopener noreferrer">
                    블로그
                </a>
            </div>
        </footer>
    );
};

export default Footer;
