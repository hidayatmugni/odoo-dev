// src/components/ModuleIcon.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function ModuleIcon({ icon = "📦", label = "Inventory" }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl card-gloss glass-border hover:shadow-glass transition-all duration-300 cursor-pointer group relative"
    >
      <div className="text-2xl animate-float-slow group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div className="text-sm text-text/70 dark:text-muted font-medium group-hover:text-text dark:group-hover:text-white transition-colors duration-300">
        {label}
      </div>

      {/* Glow effect on hover */}
      {/* Glow effect removed - user preference */}
    </motion.div>
  );
}