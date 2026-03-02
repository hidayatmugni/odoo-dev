import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import ScrollToTop from "./components/ScrollToTop.";
import DevelopmentBanner from "./components/DevelopmentBanner";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <DevelopmentBanner />
        {/* Background Wrapper dengan Logic Theme */}
        <div className="relative min-h-screen transition-colors duration-700 bg-black">

          {/* Luxury Aura Glow - Lebih Colorful dan Hidup */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Glow Oranye (Newsletter Vibes) */}
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[700px] bg-orange-500/20 dark:bg-orange-600/20 blur-[140px] rounded-full animate-pulse" />
            
            {/* Glow Biru (Tools Vibes) */}
            <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] bg-blue-500/20 dark:bg-blue-700/35 blur-[120px] rounded-full" />
            
            {/* Glow Hijau (Insights Vibes) */}
            <div className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] bg-emerald-500/20 dark:bg-emerald-700/30 blur-[170px] rounded-full" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">
            <ScrollToTop />
            <AppRoutes />
          </div>

        </div>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);