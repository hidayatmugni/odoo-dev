// src/components/Footer.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

/**
 * Footer: Glossy footer with modern styling
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-16 mb-4 mx-6 card-gloss glass-border rounded-3xl overflow-hidden transition-colors duration-400"
    >
      <div className="px-6 md:px-8 py-8 md:py-10 text-center">
        <div className="space-y-4">
          {/* Main copyright text */}
          <p className="text-text/70 dark:text-muted text-sm md:text-base font-medium">
            © {currentYear} Mugni Hidayat. All rights reserved.
          </p>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-text/20 dark:via-white/20 to-transparent" />

          {/* Credits and tech stack */}
          <div className="text-xs md:text-sm text-text/60 dark:text-muted/70">
            <p>
              Crafted with <span className="text-accent-teal">React</span>,{" "}
              <span className="text-accent-orange">Tailwind CSS</span>, and{" "}
              <span className="text-accent-purple">Framer Motion</span>
            </p>
            <p className="mt-2">
              Dedicated to delivering premium ERP solutions for Odoo environments
            </p>
          </div>

          {/* Floating accent dots */}
          <div className="flex justify-center gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent-teal to-accent-purple"
              />
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
