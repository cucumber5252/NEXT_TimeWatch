'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import styles from './new.module.css';

export default function NewBlog() {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('일반');
    const [isPinned, setIsPinned] = useState(false);
    const [imagePath, setImagePath] = useState('');
    const [videoPath, setVideoPath] = useState(''); // 추가된 부분

    useEffect(() => {
        if (status === 'unauthenticated' || (session && session.user.role !== 'admin')) {
            router.push('/blog'); // 권한이 없으면 블로그 목록 페이지로 리디렉션
        }
    }, [session, status, router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!session) {
            alert('You must be logged in to create a blog post.');
            return;
        }

        try {
            const token = session.accessToken;
            const res = await axios.post(
                '/api/blog',
                { title, content, category, isPinned, imagePath: imagePath || null, videoPath: videoPath || null }, // 비디오 경로 추가
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (res.status === 200) {
                router.push('/blog');
            }
        } catch (error) {
            console.error('Failed to create blog post:', error);
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>새 블로그 글 작성</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.formLabel} htmlFor="title">
                    제목
                </label>
                <input
                    id="title"
                    className={styles.formInput}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label className={styles.formLabel} htmlFor="content">
                    내용
                </label>
                <textarea
                    id="content"
                    className={`${styles.formInput} ${styles.textarea}`}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <label className={styles.formLabel} htmlFor="category">
                    카테고리
                </label>
                <select
                    id="category"
                    className={styles.formInput}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="일반">일반</option>
                    <option value="공지">공지</option>
                </select>
                {category === '공지' && (
                    <div className={styles.checkboxContainer}>
                        <input
                            type="checkbox"
                            id="isPinned"
                            checked={isPinned}
                            onChange={(e) => setIsPinned(e.target.checked)}
                        />
                        <label htmlFor="isPinned" className={styles.checkboxLabel}>
                            최상단에 표시
                        </label>
                    </div>
                )}
                <label className={styles.formLabel} htmlFor="imagePath">
                    이미지 선택 (선택사항)
                </label>
                <select
                    id="imagePath"
                    className={styles.formInput}
                    value={imagePath}
                    onChange={(e) => setImagePath(e.target.value)}
                >
                    <option value="">이미지 선택</option>
                    <option value="/noticetimer.svg">noticetimer.svg</option>
                    <option value="/notice2.svg">notice2.svg</option>
                    {/* Add more options based on your public images */}
                </select>
                {imagePath && <img src={imagePath} alt="Selected Image" className={styles.previewImage} />}

                <label className={styles.formLabel} htmlFor="videoPath">
                    비디오 선택 (선택사항)
                </label>
                <select
                    id="videoPath"
                    className={styles.formInput}
                    value={videoPath}
                    onChange={(e) => setVideoPath(e.target.value)}
                >
                    <option value="">비디오 선택</option>
                    <option value="/presentation_video.mp4">presentation_video.mp4</option>
                    {/* Add more options based on your public videos */}
                </select>
                {videoPath && <video src={videoPath} controls className={styles.previewVideo} />}

                <button className={styles.formButton} type="submit">
                    작성
                </button>
            </form>
        </div>
    );
}
