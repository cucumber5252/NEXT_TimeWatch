// React의 'Context API'를 사용하여 인증 상태를 관리함
// 'AuthProvider'와 'useAuth' 훅을 제공하여 세션 상태를 쉽게 관리할 수 있게 함
// 직접적인 API 엔드포인트가 아니라, 클라이언트 측에서 인증 상태를 관리하는 데 사용됨
'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const { data: session, status } = useSession();
    const [authState, setAuthState] = useState({ session: null, status: 'loading' });

    useEffect(() => {
        if (status === 'authenticated') {
            setAuthState({ session, status });
        } else if (status !== 'loading') {
            setAuthState({ session: null, status });
        }
    }, [session, status]); // Add session and status as dependencies

    const signin = () => signIn();
    const logout = () => signOut();
    const updateUser = (updatedUser) => {
        setAuthState((prevState) => ({
            ...prevState,
            session: {
                ...prevState.session,
                user: {
                    ...prevState.session?.user,
                    ...updatedUser,
                },
            },
        }));
    };

    // Memoize value to avoid unnecessary re-renders
    const value = useMemo(
        () => ({
            ...authState,
            signin,
            logout,
            updateUser,
        }),
        [authState, signin, logout, updateUser]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
    return useContext(AuthContext);
}
