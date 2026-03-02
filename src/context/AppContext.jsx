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

  // Always dark theme; remove toggle and persistence
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {}; // no-op kept for compatibility

  return (
    <AppContext.Provider value={{ contact, setContact, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
}