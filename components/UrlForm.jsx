'use client'; // 이 컴포넌트를 클라이언트에서만 렌더링하도록 지정

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './UrlForm.module.css';
import Swal from 'sweetalert2';
import './CustomSweetAlert.css';
import Image from 'next/image';
import mappings from '../lib/mappings';
import { searchWithSemantic } from '../lib/mappings';

const UrlForm = ({ onSubmit }) => {
    const [url, setUrl] = useState('');
    const [name, setName] = useState('');
    const formRef = useRef(null);
    const router = useRouter();

    const isValidUrl = (inputUrl) => {
        try {
            new URL(inputUrl);
            return true;
        } catch (_) {
            return false;
        }
    };

    const normalizeUrl = (inputUrl) => {
        let normalizedUrl = inputUrl.trim();

        // https://, http://를 제거
        normalizedUrl = normalizedUrl.replace(/^https?:\/\//i, '').replace(/(\.[a-z]{2,})(\/.*)?$/, '$1'); // 도메인 확장자 뒤의 모든 경로 제거
        // .replace(/^m\./i, ''); // 모바일 m. 제거

        try {
            const url = new URL('https://' + normalizedUrl); // 내부적으로는 https:// 추가
            return url.hostname; // 호스트 이름만 반환
        } catch (_) {
            return inputUrl;
        }
    };

    // const handleChange = (e) => {
    //     const inputValue = e.target.value;
    //     setName(inputValue);

    //     if (isValidUrl(inputValue) || inputValue.includes('.')) {
    //         const normalizedUrl = normalizeUrl(inputValue);
    //         setUrl(normalizedUrl);
    //     } else {
    //         const match = mappings.find((mapping) =>
    //             mapping.keyword.some((n) => n.toLowerCase() === inputValue.toLowerCase())
    //         );
    //         if (match) {
    //             setUrl(normalizeUrl(match.domain)); // 매핑된 도메인을 사용하여 정규화
    //         } else {
    //             setUrl('');
    //         }
    //     }
    // };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        setName(inputValue);

        if (isValidUrl(inputValue) || inputValue.includes('.')) {
            const normalizedUrl = normalizeUrl(inputValue);
            setUrl(normalizedUrl);
        } else {
            const match = searchWithSemantic(inputValue);
            if (match) {
                setUrl(normalizeUrl(match.domain));
            } else {
                setUrl('');
            }
        }
    };

    const checkUrlExists = async (url) => {
        try {
            const response = await fetch('https://' + url, { method: 'HEAD', mode: 'no-cors' });
            return true;
        } catch (error) {
            console.error('Error checking URL:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!url) {
            Swal.fire({
                title: '올바르지 않은 링크 또는 제목입니다!',
                text: 'https://로 시작하도록 링크 전체를 입력하거나, 올바른 제목을 입력해 주세요!',
                icon: 'error',
                confirmButtonText: '확인',
            });
            return;
        }

        // 도메인이 정확히 일치하는지 확인
        const match = mappings.find((mapping) => normalizeUrl(mapping.domain) === url);
        if (match) {
            router.push(`/server-time/${normalizeUrl(match.domain)}`); // 매핑된 도메인으로 바로 이동
        } else {
            const urlExists = await checkUrlExists(url);
            if (!urlExists) {
                Swal.fire({
                    title: '접근할 수 없는 URL입니다!',
                    text: '올바른 URL인지 확인해 주세요.',
                    icon: 'error',
                    confirmButtonText: '확인',
                });
                return;
            }

            router.push(`/server-time/${url}`); // 페이지 이동
        }
    };

    return (
        <div className={styles.urlFormContainer}>
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                    placeholder="서버시간을 확인할 사이트 링크나 제목을 입력해 주세요!"
                    className={styles.input}
                />
                <button type="submit" className={`${styles.button} searchButton`}>
                    <Image src="/search.svg" alt="Search" width={774} height={774} />
                </button>
            </form>
        </div>
    );
};

export default UrlForm;
