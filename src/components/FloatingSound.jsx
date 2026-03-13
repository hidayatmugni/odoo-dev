import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { VscPulse } from "react-icons/vsc"; // Icon Pulse dari VS Code Icons

export default function FloatingSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playSound = () => {
    // Pastikan file sound.mp3 ada di folder: public/sounds/sound.mp3
    if (!audioRef.current) {
      audioRef.current = new Audio("../assets/sounds/fahhhhhhhhhhhhhh.mp3");
    }
    
    // Reset ke awal kalau diklik berulang kali dengan cepat
    audioRef.current.currentTime = 0;
    
    setIsPlaying(true);
    audioRef.current.play();

    // Efek visual mati setelah 600ms
    setTimeout(() => setIsPlaying(false), 200);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <motion.button
        onClick={playSound}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          relative flex items-center justify-center
          w-14 h-14 rounded-full
          /* PURE TRANSPARENT STYLE */
          bg-white/10
          border border-white/20
          text-white
          shadow-[0_0_20px_rgba(0,0,0,0.5)]
          transition-all duration-300
          hover:border-blue-500/50
        "
      >
        {/* Layer Glow pas diklik */}
        <motion.div 
          animate={isPlaying ? { 
            scale: [1, 1.4, 1],
            opacity: [0, 0.5, 0] 
          } : { opacity: 0 }}
          className="absolute inset-0 bg-blue-500 rounded-full blur-xl"
        />

        {/* Icon dari React Icons */}
        <VscPulse 
          className={`text-2xl transition-all duration-300 ${
            isPlaying ? "text-blue-400 scale-125" : "text-white/40"
          }`} 
        />

        {/* Notifikasi Mini */}
        <div className="absolute -top-12 right-0 pointer-events-none">
           <motion.span 
             animate={isPlaying ? { y: -10, opacity: 1 } : { y: 0, opacity: 0 }}
             className="text-[8px] font-black text-blue-400 uppercase tracking-[0.3em] whitespace-nowrap bg-black/50 px-2 py-1 rounded-md border border-blue-500/20"
           >
             System Triggered
           </motion.span>
        </div>
      </motion.button>
    </div>
  );
}