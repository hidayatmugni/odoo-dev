/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function GlossyCard({
  accent = "blue",
  elevated = false,
  children,
  className = "",
  custom = undefined,
  variants = undefined,
  ...props
}) {
  
  const glowVariants = {
    blue: "from-blue-500/10 to-transparent",
    purple: "from-purple-500/10 to-transparent",
    emerald: "from-emerald-500/10 to-transparent",
    orange: "from-orange-500/10 to-transparent",
    teal: "from-teal-500/10 to-transparent",
  };

  const motionProps = custom !== undefined && variants ? { custom, variants } : {};

  // Logic: Cek apakah user mengirim class background sendiri dari props
  const hasCustomBg = className.includes('bg-');

  return (
    <motion.div
      whileHover={elevated ? { y: -6, borderColor: "rgba(255,255,255,0.2)" } : undefined}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`
        relative overflow-hidden
        border border-white/5
        rounded-[1.5rem]
        ${elevated ? "shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "shadow-xl"}
        transition-all duration-500
        /* Pakai default bg jika tidak ada bg custom dari luar */
        ${!hasCustomBg ? "bg-[#0a0a0a]/80" : ""} 
        /* Props className ditaruh paling akhir agar prioritas tertinggi */
        ${className}
      `}
      {...motionProps}
      {...props}
    >
      {/* 1. INTERNAL GRID (Subtle dots) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, 
          backgroundSize: '24px 24px' 
        }} 
      />

      {/* 2. ACCENT GLOW */}
      <div className={`absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br ${glowVariants[accent] || glowVariants.blue} blur-[60px] rounded-full pointer-events-none`} />

      {/* 3. TOP GLOSSY LINE */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* 4. CONTENT */}
      <div className="relative z-10 h-full">
        {children}
      </div>

      {/* 5. HOVER SHINE EFFECT */}
      {elevated && (
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      )}
    </motion.div>
  );
}