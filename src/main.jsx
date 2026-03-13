import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import ScrollToTop from "./components/ScrollToTop."; // Fix typo titik
import DevelopmentBanner from "./components/DevelopmentBanner";
import FloatingSound from "./components/FloatingSound";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <div className="relative min-h-screen bg-[#010101] selection:bg-blue-500/30 text-white overflow-x-hidden">

          {/* LAYER 1: THE GRID (White base dots) */}
          <div 
            className="fixed inset-0 z-0 opacity-[0.25] pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #f0f0f0 1.5px, transparent 0)`, 
              backgroundSize: '24px 24px' 
            }} 
          />

          {/* LAYER 2: GRID COLOR OVERLAY (Ini yang bikin bintik-bintiknya berwarna gradient mewah) */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.4]"
               style={{
                 background: `linear-gradient(to bottom right, 
                              rgba(59, 130, 246, 0.2), 
                              transparent, 
                              rgba(147, 51, 234, 0.1))`
               }} />

          {/* LAYER 3: LUXURY AURA (Glow Spotlights) */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Blue Spotlight Atas */}
            <div className="absolute top-[-25%] left-1/2 -translate-x-1/2 w-[1400px] h-[800px] 
                            bg-blue-600/[0.08] blur-[160px] rounded-full" />
            
            {/* Purple Accent Kanan Bawah */}
            <div className="absolute bottom-[-15%] -right-[10%] w-[900px] h-[900px] 
                            bg-purple-600/[0.07] blur-[180px] rounded-full" />
          </div>

          {/* LAYER 4: DYNAMIC SCANLINE (Efek garis bergerak halus biar makin 'tech') */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_bottom,transparent_50%,#fff_50%)] bg-[length:100%_4px]" />

          {/* LAYER 5: VIGNETTE */}
          <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />

          {/* CONTENT LAYER */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-12 pb-10">
            <ScrollToTop />
            <AppRoutes />
          </div>
              <FloatingSound />
        </div>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);