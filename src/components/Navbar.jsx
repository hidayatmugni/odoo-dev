// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Responsive Navbar Component
 * - Desktop: horizontal menu
 * - Mobile: hamburger -> slide-down animated menu
 * - Framer Motion: fade + slide transitions
 * - Uses Odoo purple (#714B67) for main color
 */

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // toggle menu (mobile only)
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative flex items-center justify-between py-4"
    >
      {/* LEFT: Logo & title */}
      <div className="flex items-center gap-3">
        <img
          src="../assets/logo.jpeg"
          alt="logo"
          className="w-10 h-10 rounded-md object-cover"
        />
        <div>
          <div className="font-semibold text-lg text-black tracking-wide">
            VANESSA AL TAWIL
          </div>
          <div className="text-xs text-gray-700">
            ERP Functional & Financial Consultant
          </div>
        </div>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `text-sm px-3 py-2 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-odoo text-white shadow-md"
                  : "text-gray-800 hover:bg-odoo hover:text-white"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {/* MOBILE HAMBURGER */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg border border-gray-300 hover:border-odoo transition-colors"
      >
        <span
          className={`h-0.5 w-6 bg-gray-800 rounded-full transition-all ${
            isOpen ? "rotate-45 translate-y-1.5 bg-odoo" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-gray-800 rounded-full my-1 transition-all ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-6 bg-gray-800 rounded-full transition-all ${
            isOpen ? "-rotate-45 -translate-y-1.5 bg-odoo" : ""
          }`}
        />
      </button>

      {/* MOBILE MENU PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[70px] right-0 w-48 bg-white border border-gray-200 rounded-xl shadow-lg md:hidden z-[100]"
          >
            <div className="flex flex-col py-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-white bg-odoo"
                        : "text-gray-800 hover:text-white hover:bg-odoo/90"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
