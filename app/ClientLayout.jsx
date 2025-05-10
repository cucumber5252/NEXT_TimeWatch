'use client';

import { usePathname } from 'next/navigation';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const authPages = ['/signin', '/signup', '/account', '/find-password', '/reset-password', '/blog', '/brand'];
    const isAuthPage = authPages.includes(pathname) || /^\/blog\/[a-zA-Z0-9]+$/.test(pathname); // 정규식을 사용하여 postId 페이지를 확인
    const isRootPage = pathname === '/';

    return (
        <>
            <div className="wrap">
                <NavBar />
                {children}
                <Footer />
            </div>
        </>
    );
}
