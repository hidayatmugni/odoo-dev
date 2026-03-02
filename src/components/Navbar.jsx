/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useContext(AppContext); // noop

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-6 left-0 right-0 z-[999] px-4"
    >
      <div className="max-w-5xl mx-auto"> 
        <div className="card-gloss backdrop-blur-2xl bg-black/60 border border-gray-200/30 dark:border-white/10 shadow-lg dark:shadow-2xl rounded-[2rem] px-6 py-3 flex items-center justify-between transition-all duration-500">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <img
                src="../assets/logo.jpeg"
                alt="logo"
                className="w-10 h-10 rounded-xl object-cover border-2 border-accent-teal/20 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-xl bg-accent-teal/20 blur group-hover:blur-md transition-all" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg tracking-tight text-gray-900 dark:text-white leading-none transition-colors duration-300">
                Mugni Hidayat
              </div>
              <div className="text-[10px] uppercase tracking-widest font-semibold text-accent-teal dark:text-accent-teal mt-1">
                Odoo Specialist
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-gray-200/50 transition-colors duration-300">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm px-5 py-2 rounded-full transition-all duration-300 font-bold ${
                    isActive
                      ? "bg-white/20 text-accent-teal shadow-sm"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side: Theme & Mobile Toggle */}
          <div className="flex items-center gap-3">
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 rounded-xl border border-gray-200 text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-full bg-current transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 md:hidden card-gloss bg-black/90 backdrop-blur-2xl rounded-3xl border border-gray-200/30 dark:border-white/20 p-4 shadow-2xl transition-colors duration-300"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-4 rounded-2xl font-bold text-gray-300 hover:bg-accent-teal/10 hover:text-accent-teal transition-all duration-300"
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