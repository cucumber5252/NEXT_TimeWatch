'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import styles from './postId.module.css';
import Cookies from 'js-cookie';

export default function BlogDetail() {
    const { postId } = useParams();
    const { data: session } = useSession();
    const router = useRouter();
    const [blog, setBlog] = useState(null);
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        if (postId) {
            const fetchBlog = async () => {
                try {
                    const res = await axios.get(`/api/blog/${postId}`);
                    setBlog(res.data.data);
                    setLikes(res.data.data.likes || 0);
                    setHasLiked(Cookies.get(`liked_${postId}`) === 'true');
                } catch (error) {
                    console.error('Failed to fetch blog:', error);
                }
            };

            fetchBlog();
        }
    }, [postId]);

    const handleLike = async () => {
        try {
            const res = await axios.post(`/api/blog/${postId}/like`);
            if (res.status === 200) {
                setLikes(res.data.likes);
                setHasLiked(res.data.hasLiked);
                Cookies.set(`liked_${postId}`, res.data.hasLiked, { expires: 365 });

                if (res.data.hasLiked) {
                    const cloverElement = document.querySelector(`.${styles.clover}`);
                    if (cloverElement) {
                        cloverElement.classList.add(styles.cloverActive);
                        setTimeout(() => {
                            cloverElement.classList.remove(styles.cloverActive);
                        }, 1000); // Duration of the clover animation
                    }
                }
            }
        } catch (error) {
            console.error('Failed to like blog post:', error);
        }
    };

    const handleDelete = async () => {
        if (!window.confirm('정말 삭제하냐')) {
            return;
        }

        if (!session) {
            alert('You must be logged in to delete a blog post.');
            return;
        }

        try {
            const token = session.accessToken;
            const res = await axios.delete(`/api/blog`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: { id: blog._id },
            });
            if (res.status === 200) {
                router.push('/blog');
            }
        } catch (error) {
            console.error('Failed to delete blog post:', error);
        }
    };

    if (!blog) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.blogMeta}>
                    <p className={styles.blogDate}>{blog.createdAtstring}</p>
                    <h1 className={styles.blogTitle}>
                        {blog.category === '공지' && <span className={styles.noticeLabel}>공지</span>}
                        {blog.title}
                    </h1>
                    <p className={styles.blogViews}>조회수: {blog.views}</p>
                </div>
                <p className={styles.blogContent}>{blog.content}</p>
                {blog.imagePath && <img src={blog.imagePath} alt="Blog Image" className={styles.blogImage} />}
                {blog.videoPath && <video src={blog.videoPath} controls className={styles.blogVideo} />}{' '}
                {/* videoPath 렌더링 */}
                <div className={styles.likeButtonContainer}>
                    <button className={`${styles.likeButton} ${hasLiked ? styles.liked : ''}`} onClick={handleLike}>
                        <span className={styles.likeText}>
                            {hasLiked ? '추천' : '추천'}&nbsp;{likes}
                        </span>
                        <span className={styles.clover} />
                    </button>
                </div>
                <Link href="/blog" className={styles.link}>
                    목록
                </Link>
                {session && session.user.role === 'admin' && (
                    <div className={styles.forAdmin}>
                        <Link href={`/blog/${postId}/edit`} className={styles.blogButton}>
                            수정
                        </Link>
                        <button className={styles.blogButton} onClick={handleDelete}>
                            삭제
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
