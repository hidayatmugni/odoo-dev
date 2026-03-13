/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-[999] px-4"
    >
      <div className="max-w-fit mx-auto">
        <div className="
          relative overflow-hidden
          flex items-center justify-center
          bg-[#050505]/60 backdrop-blur-2xl
          border border-white/10
          rounded-[2rem]
          px-2 py-2
          shadow-[0_20px_50px_rgba(0,0,0,0.5)]
        ">
          
          {/* 1. BACKGROUND BINTIK-BINTIK (Sync with Header) */}
          <div 
            className="absolute inset-0 opacity-[0.2] pointer-events-none" 
            style={{ 
              backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`, 
              backgroundSize: '20px 20px' 
            }} 
          />

          {/* 2. GLOSSY OVERLAY LINE */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* 3. NAVIGATION LINKS */}
          <div className="relative z-10 flex items-center gap-1 md:gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  relative
                  text-[11px] md:text-xs
                  px-5 md:px-7
                  py-2 md:py-2.5
                  rounded-full
                  font-black
                  uppercase
                  tracking-[0.15em]
                  transition-all duration-500
                  ${isActive 
                    ? "text-white" 
                    : "text-white/40 hover:text-white/80"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* Background Active (The Glossy Pill) */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="
                          absolute inset-0 
                          bg-gradient-to-b from-white/15 via-white/5 to-transparent
                          border border-white/10
                          backdrop-blur-xl
                          rounded-full
                          shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,0,0,0.3)]
                        "
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}