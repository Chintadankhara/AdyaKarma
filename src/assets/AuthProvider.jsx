import React, { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ isAuthenticated: false, loading: true });
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.split("=")[1];
    setAuth({ isAuthenticated: !!token, loading: false });
  }, []);

  const handleLogin = (token) => {
    document.cookie = `token=${token}; path=/;`; // set cookie
    setAuth({ isAuthenticated: true, loading: false });
    navigate('/');
  };

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setAuth({ isAuthenticated: false, loading: false });
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
