// src/context/AppContext.jsx
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {

  const [contact, setContact] = useState({
    phone: "+6281276773103",
    instagram: "hidayatmugni",
    linkedin: "https://www.linkedin.com/in/hidayatmugni",
    email: "hidayatmugni.dev@gmail.com"
  });

  // Theme state: 'dark' | 'light'
  const [themeMode, setThemeMode] = useState(() => {
    try {
      return localStorage.getItem('themeMode') || 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('dark');
    if (themeMode === 'dark') {
      html.classList.add('dark');
    }
    try {
      localStorage.setItem('themeMode', themeMode);
    } catch {
      // Ignore localStorage errors in private mode or disabled storage
    }
  }, [themeMode]);

  const toggleTheme = () => setThemeMode((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <AppContext.Provider value={{ contact, setContact, themeMode, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}