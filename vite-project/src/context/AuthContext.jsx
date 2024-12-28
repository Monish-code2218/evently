import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Create a context for authentication
const AuthContext = createContext();

// Create a custom hook to access the authentication context
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (userData) => {
        setUser(userData);
        navigate('/'); // Redirect to the home page after login
    }
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login'); // Redirect to the login page after logout
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);