// src/context/AppContext.jsx
import React, { createContext, useState } from "react";

/**
 * AppContext provides simple global state (e.g., contact details, theme).
 * Keep it lightweight. Expand if you need more complex state.
 */

export const AppContext = createContext();

export function AppProvider({ children }){
  const [contact, setContact] = useState({
    phone: "+96176033861", // placeholder - replace with your number
    phoneSecondary: "+971508565764", // placeholder - replace with your number
    linkedin: "https://www.linkedin.com/in/vanessa-al-tawil-fmva-2a92b0119",
    instagram: "https://www.instagram.com/yourprofile",
  });

  // theme could hold color overrides in the future
  const [theme] = useState({
    primary: "var(--odoo-purple)",
  });

  return (
    <AppContext.Provider value={{ contact, setContact, theme }}>
      {children}
    </AppContext.Provider>
  );
}
