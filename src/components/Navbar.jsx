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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 left-0 right-0 z-[999] px-4"
    >
      <div className="max-w-fit mx-auto">
        <div className="
          relative
          flex items-center justify-center
          bg-[#050505]/40 backdrop-blur-xl
          border border-white/10
          rounded-full
          p-1 md:p-1.5
          shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        ">
          
          {/* NAVIGATION LINKS */}
          <div className="relative z-10 flex items-center gap-0.5 md:gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `
                  relative
                  text-[9px] md:text-[11px]
                  /* Padding Mobile dikecilkan dari px-5 jadi px-3 */
                  px-3.5 md:px-8
                  py-1.5 md:py-2.5
                  rounded-full
                  font-bold
                  uppercase
                  tracking-[0.15em] md:tracking-[0.2em]
                  transition-all duration-500
                  ${isActive 
                    ? "text-white" 
                    : "text-white/40 hover:text-white/70"
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="
                          absolute inset-0 
                          bg-white/[0.08] 
                          border border-white/10
                          rounded-full
                        "
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
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