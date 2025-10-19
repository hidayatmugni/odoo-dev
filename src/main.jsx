// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import ScrollToTop from "./components/ScrollToTop.";

/**
 * Main entry. We use BrowserRouter + AppContext.
 * App.jsx is intentionally not used — routes are in AppRoutes.jsx.
 */

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen body-bg text-gray-100">
          <ScrollToTop />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
