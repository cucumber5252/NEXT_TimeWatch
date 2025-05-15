'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import mappings from '../lib/mappings';
import regionSchools from '../lib/regionSchools';
import Image from 'next/image';
import styles from './SchoolDropdown.module.css';

// URL 정리 함수
const normalizeUrl = (domain) => {
    let normalizedUrl = domain.trim();

    // https://, http:// 제거 및 경로 제거
    normalizedUrl = normalizedUrl.replace(/^https?:\/\//i, '').replace(/(\.[a-z]{2,})(\/.*)?$/, '$1');

    try {
        const url = new URL('https://' + normalizedUrl);
        return url.hostname; // 호스트 이름 반환
    } catch (_) {
        return domain;
    }
};

// 학교 이름 정규화 함수
const normalizeSchoolName = (schoolName) => {
    return schoolName
        .replace(/(대학교|대학|KAIST)(\s.*)?$/, '$1') // "대학교", "대학", "KAIST" 뒤에 공백 포함 문자열 제거
        .trim(); // 앞뒤 공백 제거
};

const SchoolDropdown = () => {
    const [isRegionOpen, setIsRegionOpen] = useState(false);
    const [isSchoolOpen, setIsSchoolOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState('서울');
    const [selectedSchool, setSelectedSchool] = useState('학교명');
    const router = useRouter();

    const regionDropdownRef = useRef(null);
    const schoolDropdownRef = useRef(null);

    const toggleRegionDropdown = () => setIsRegionOpen((prev) => !prev);
    const toggleSchoolDropdown = () => setIsSchoolOpen((prev) => !prev);

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setSelectedSchool('학교명'); // 지역 변경 시 학교 초기화
        setIsRegionOpen(false);
    };

    const handleSchoolSelect = (school) => {
        setSelectedSchool(school);
        setIsSchoolOpen(false);

        // 학교 이름 정규화
        const normalizedSchoolName = normalizeSchoolName(school);

        // mappings.js에서 정규화된 학교 이름(name 필드)로 도메인 찾기
        const match = mappings.find(
            (mapping) => mapping.name.replace(/\s*수강신청\s*$/, '').trim() === normalizedSchoolName
        );

        if (match) {
            // 도메인을 정리하고 동적 페이지로 이동
            const normalizedDomain = normalizeUrl(match.domain);
            router.push(`/server-time/${normalizedDomain}`);
        } else {
            // 매핑이 없을 경우 처리 (선택 사항)
            alert(`"${school}"에 대한 매핑이 없습니다.`);
        }
    };

    // 외부 클릭 이벤트 처리
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (regionDropdownRef.current && !regionDropdownRef.current.contains(event.target)) {
                setIsRegionOpen(false);
            }
            if (schoolDropdownRef.current && !schoolDropdownRef.current.contains(event.target)) {
                setIsSchoolOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.dropdownContainer}>
            <div className={styles.titleContainer}>
                <Image
                    src="/school-icon.svg"
                    alt="Title Image"
                    className={styles.titleImage}
                    width={17.39}
                    height={20}
                />
                <h2 className={styles.title}>수강신청</h2>
            </div>
            {/* 지역 드롭다운 */}
            <div className={styles.subContainer}>
                <div className={styles.dropdownWrapper} ref={regionDropdownRef}>
                    <div className={`${styles.trigger} ${styles.regionTrigger}`} onClick={toggleRegionDropdown}>
                        <span>{selectedRegion}</span>
                        <Image src="/chevron-down.svg" alt="Dropdown icon" width={16} height={16} />
                    </div>
                    {isRegionOpen && (
                        <ul className={styles.dropdownList}>
                            {Object.keys(regionSchools).map((region) => (
                                <li
                                    key={region}
                                    id="regionItem"
                                    className={styles.dropdownItem}
                                    onClick={() => handleRegionSelect(region)}
                                >
                                    {region}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* 학교 드롭다운 */}
                <div className={styles.dropdownWrapper} ref={schoolDropdownRef}>
                    <div className={`${styles.trigger} ${styles.schoolTrigger}`} onClick={toggleSchoolDropdown}>
                        <span>{selectedSchool}</span>
                        <Image src="/chevron-down.svg" alt="Dropdown icon" width={16} height={16} />
                    </div>
                    {isSchoolOpen && (
                        <ul className={styles.dropdownList}>
                            {regionSchools[selectedRegion].map((school) => (
                                <li
                                    key={school}
                                    id="schoolItem"
                                    className={styles.dropdownItem}
                                    onClick={() => handleSchoolSelect(school)}
                                >
                                    {school}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SchoolDropdown;
