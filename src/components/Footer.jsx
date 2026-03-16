/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import GlossyCard from "./GlossyCard";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-8 md:mt-10 mb-10 px-0 md:px-0"
    >
      <GlossyCard accent="blue" className="p-8 md:p-12 overflow-hidden">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Main Brand/Name */}
          <div className="space-y-2">
            <h2 className="text-xl md:text-2xl font-black text-white italic uppercase tracking-tighter">
              Mugni Hidayat
            </h2>
            <div className="h-[2px] w-12 bg-blue-500 mx-auto rounded-full" />
          </div>

          {/* Credits and Tech Stack */}
          <div className="max-w-md">
            <p className="text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.3em] leading-relaxed">
              Powered by <span className="text-blue-400">React</span> • 
              <span className="text-green-400"> Tailwind</span> • 
              <span className="text-orange-400"> Framer Motion</span>
            </p>
            <p className="mt-4 text-xs md:text-sm text-white/50 font-light leading-relaxed">
              Crafting premium ERP ecosystems and bespoke Odoo solutions for modern business efficiency.
            </p>
          </div>

          {/* Divider Horizontal tipis */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom Section: Copyright & Status Dots */}
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 px-4">
            
            <p className="text-[10px] font-medium text-white/20 uppercase tracking-[0.2em]">
              © {currentYear} All Rights Reserved.
            </p>

            {/* Floating Status Dots */}
            <div className="flex items-center gap-3 bg-white/[0.03] px-4 py-2 rounded-full border border-white/5">
              <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">System Ready</span>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3] 
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-blue-500"
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </GlossyCard>
    </motion.footer>
  );
}