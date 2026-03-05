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
      className="fixed top-4 left-0 right-0 z-[999] px-3"
    >
      <div className="max-w-5xl mx-auto">
        <div className="card-gloss backdrop-blur-2xl bg-black/60 border border-gray-200/30 
        dark:border-white/10 shadow-lg dark:shadow-2xl rounded-[2rem]
        px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative group">
              <img
                src="../assets/logo.jpeg"
                alt="logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-xl object-cover border-2 border-accent-teal/20 
                group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-accent-teal/20 blur group-hover:blur-md transition-all" />
            </div>

            {/* Hide text on mobile */}
            <div className="hidden md:block">
              <div className="font-bold text-lg tracking-tight text-gray-900 dark:text-white leading-none">
                Mugni Hidayat
              </div>
              <div className="text-[10px] uppercase tracking-widest font-semibold text-accent-teal mt-1">
                Odoo Specialist
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="
          flex items-center
          gap-1 md:gap-2
          bg-white/5
          p-1
          rounded-full
          border border-gray-200/40">

            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                `
                text-[11px] md:text-sm
                px-2 md:px-5
                py-1 md:py-2
                rounded-full
                font-semibold
                transition-all duration-300
                backdrop-blur-md
                ${
                  isActive
                ? `
                text-accent-teal
                bg-gradient-to-b from-white/35 via-white/10 to-transparent
                backdrop-blur-xl
                shadow-[
                  inset_0_2px_4px_rgba(255,255,255,0.7),
                  inset_0_-6px_10px_rgba(255,255,255,0.08),
                  0_10px_30px_rgba(0,0,0,0.6),
                  0_0_10px_rgba(20,184,166,0.25)
                ]
                `
                : "text-gray-300 hover:text-white hover:bg-white/5"
                }
                `
              }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

        </div>
      </div>
    </motion.nav>
  );
}