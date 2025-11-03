import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
    isAuthenticated: boolean;
    userEmail: string | null;
    login: (email: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); 

    const login = (email: string) => {
        setIsAuthenticated(true);
        setUserEmail(email); 
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserEmail(null);
    };

    const value: AuthContextProps = {
        isAuthenticated, 
        userEmail, 
        login, 
        logout 
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}