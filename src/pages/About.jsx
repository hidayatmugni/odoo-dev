/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaConnectdevelop, FaProjectDiagram, FaQuoteLeft } from "react-icons/fa";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="max-w-6xl mx-auto px-0 py-0 md:py-8"
    >
      {/* 1. EDITORIAL HEADER - Tetap Transparan & Clean */}
      <motion.div variants={fadeUp} className="border-b border-white/10 pb-12 mb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-blue-500 font-black uppercase tracking-[0.5em] text-[10px]">Biography</span>
            <h2 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.85] mt-4">
              The <span className="text-blue-600">Architect</span> <br/> of Systems.
            </h2>
          </div>
          <div className="flex flex-col md:items-end gap-2">
            <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded text-[10px] font-black text-green-600 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Open for New Projects
            </span>
            <p className="text-white/50 text-xs font-bold uppercase tracking-widest md:text-right">
              Freelance · Contract · WFH
            </p>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Side: Photo & Quick Info */}
        <motion.div variants={fadeUp} className="lg:col-span-4 space-y-6">
          {/* Solid Card for Photo */}
          <div className="bg-[#0a0a0a]/70 border border-white/10 rounded-[1.5rem] p-4 shadow-2xl">
            <div className="relative group overflow-hidden rounded-[1rem]">
               <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-20 blur-xl"></div>
               <img
                  src="../assets/photo.jpeg"
                  alt="Mugni Hidayat"
                  className="relative w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5] scale-105 group-hover:scale-100"
               />
            </div>
            
            <div className="mt-6 space-y-2">
              {[
                { label: "Modality", val: "Project-Based", color: "text-blue-400" },
                { label: "Expertise", val: "Odoo Ecosystem", color: "text-purple-400" },
                { label: "Availability", val: "Global Remote", color: "text-orange-400" },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/[0.03] border border-white/5 transition-all">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/20">{stat.label}</span>
                  <span className={`text-[14px] md:text-[16px] font-bold ${stat.color}`}>{stat.val}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side: Biography & Colorful Pills */}
        <motion.div variants={fadeUp} className="lg:col-span-8 space-y-10">
          <div className="relative">
            <FaQuoteLeft className="absolute -top-10 -left-6 text-white/5 text-6xl" />
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Engineering <span className="text-blue-500 italic">scalable ecosystems</span> for modern business operations.
            </h3>
          </div>

          <div className="bg-[#0a0a0a]/70 border border-white/10 rounded-[1.5rem] p-8 md:p-10 shadow-2xl">
            <div className="text-white/50 text-base md:text-lg leading-relaxed space-y-6 font-medium">
              <p>
                I am <span className="text-white font-bold">Mugni Hidayat</span>, a specialized Odoo Developer working as an independent consultant. I don't just write code; I design the digital skeleton of your business operations.
              </p>
              <p>
                My approach is built for the modern era: <span className="text-white italic">flexible, remote-first, and results-driven.</span> I adapt to your project's DNA—whether you need a short-term fix or long-term partnership.
              </p>
            </div>

            {/* COLORFUL SERVICE GRID (VIBRANT) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-10">
              {[
                { icon: <FaTerminal />, title: "Custom Logic", desc: "Complex Modules", bg: "bg-orange-500/10", border: "border-orange-500/20", text: "text-orange-400" },
                { icon: <FaConnectdevelop />, title: "Integrations", desc: "API & Sync", bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
                { icon: <FaProjectDiagram />, title: "Automation", desc: "Workflows", bg: "bg-purple-500/10", border: "border-purple-500/20", text: "text-purple-400" },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-4 p-4 rounded-2xl ${item.bg} border ${item.border} group`}>
                  <div className={`${item.text} text-xl group-hover:scale-110 transition-transform`}>{item.icon}</div>
                  <div>
                    <h5 className="text-white font-black uppercase tracking-widest text-[12px] md:text-[14px] leading-none mb-1">{item.title}</h5>
                    <p className="text-white/40 md:text-[12px] text-[10px] font-medium leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* STATUS PILLS */}
            <div className="pt-5 md:pt-10 flex flex-wrap gap-3 border-t border-white/5 mt-10">
               {["Freelance", "Project-Based", "Remote/WFH", "Contract"].map((type) => (
                 <span key={type} className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/30 hover:text-blue-500 transition-all">
                   {type}
                 </span>
               ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. STATEMENT FOOTER */}
      <motion.div variants={fadeUp} className="mt-10 md:mt-20 text-center">
        <h4 className="text-white/40 text-2xl md:text-7xl font-black italic uppercase tracking-tighter select-none">
          Adaptive · Scalable · Precise
        </h4>
      </motion.div>
    </motion.section>
  );
}