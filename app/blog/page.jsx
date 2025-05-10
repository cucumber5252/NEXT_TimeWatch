'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from './blog.module.css';

export default function BlogList() {
    const { data: session } = useSession();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get('/api/blog');
                if (process.env.NODE_ENV === 'development') {
                    console.log('Fetched blogs:', res.data);
                }

                // Fetch blogs and sort them
                const fetchedBlogs = res.data.data;
                const pinnedBlogs = fetchedBlogs.filter((blog) => blog.isPinned || blog.category === '공지');
                const otherBlogs = fetchedBlogs
                    .filter((blog) => !blog.isPinned && blog.category !== '공지')
                    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setBlogs([...pinnedBlogs, ...otherBlogs]);
            } catch (error) {
                console.error('Failed to fetch blogs:', error);
            }
        };

        fetchBlogs();
    }, []);

    const isAdmin = session && session.user.role === 'admin';

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>lucktime 블로그</h1>
            {blogs.length === 0 ? (
                <p>블로그 글 로딩 중...</p>
            ) : (
                <ul className={styles.blogList}>
                    <li className={`${styles.blogItem} ${styles.blogHeader}`}>
                        <span className={styles.blogTitleHeader}>제목</span>
                        <span className={styles.blogDateHeader}>게시일</span>
                    </li>
                    {blogs.map((blog) => (
                        <li className={styles.blogItem} key={blog._id}>
                            <Link href={`/blog/${blog.postId}`} className={styles.blogLink}>
                                <h2 className={styles.blogTitle}>
                                    {blog.category === '공지' && <span className={styles.noticeLabel}>공지</span>}
                                    {blog.title}
                                </h2>
                            </Link>
                            <p className={styles.blogDate}>{blog.todayString}</p>
                        </li>
                    ))}
                </ul>
            )}
            {isAdmin && (
                <Link href="/blog/new" className={styles.link}>
                    새 블로그 글 작성
                </Link>
            )}
        </div>
    );
}
