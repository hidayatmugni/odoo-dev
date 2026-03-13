/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

export default function Header({
  photo = "../assets/photo.jpeg",
  name = "Mugni Hidayat",
  title = "Odoo Developer · ERP Customization Specialist",
}) {
  const { contact } = useContext(AppContext);

  const expertise = [
    { label: "Odoo ERP", color: "from-purple-500/20" },
    { label: "Python Specialist", color: "from-blue-500/20" },
    { label: "Business Architect", color: "from-green-500/20" },
    { label: "Financial Flow", color: "from-orange-500/20" }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
        relative overflow-hidden
        w-full min-h-[250px] md:h-[320px]
        flex flex-col md:flex-row items-center
        p-8 md:p-0 md:pl-12
        rounded-[1.5rem] md:rounded-[2.5rem]
        
        /* EFEK GLOSSY UTAMA */
        bg-gradient-to-br from-white/[0.08] via-transparent to-transparent
        backdrop-blur-2xl
        border border-white/10
        shadow-[0_40px_100px_rgba(0,0,0,0.8)]
      "
    >
      {/* 1. Internal Reflective Layer (Efek Kaca) */}
      <div className="absolute inset-0 bg-[#050505]/60 -z-10" />
      
      {/* 2. Glow Highlights (Bikin warna lebih 'pop') */}
      <div className="absolute left-[-5%] top-[-10%] w-[400px] h-[400px] bg-green-600/15 blur-[100px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute right-[-5%] bottom-[-10%] w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none opacity-50" />

      {/* 3. Shine Sweep (Garis kilap diagonal statis) */}
      <div className="absolute top-0 left-[-100%] w-[150%] h-[200%] bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent rotate-12 pointer-events-none" />

      {/* LEFT CONTENT: FOTO PROFIL */}
      <div className="relative z-10 flex items-center justify-center md:pr-12 mb-6 md:mb-0">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/10 to-green-500/10 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative p-1.5 rounded-full bg-gradient-to-b from-white/20 via-white/5 to-transparent backdrop-blur-sm">
            <img
              src={photo}
              alt={name}
              className="
                w-32 h-32 md:w-44 md:h-44
                rounded-full object-cover
                grayscale-[10%] group-hover:grayscale-0
                transition-all duration-700
                border-4 border-[#080808]
                shadow-2xl
              "
            />
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT: TEXT & BADGES */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xl shadow-inner">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.25em]">System Verified</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2 italic uppercase">
          {name}
        </h1>

        {/* Title */}
        <p className="text-xs md:text-base font-medium text-blue-100/40 mb-8 max-w-lg tracking-[0.15em] uppercase">
          {title}
        </p>

        {/* Glossy Expertise Badges */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {expertise.map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`
                relative px-4 py-2 rounded-xl
                text-[10px] md:text-xs font-black text-white/90
                bg-gradient-to-br ${item.color} to-black/40
                border border-white/10 backdrop-blur-md
                shadow-[0_8px_20px_rgba(0,0,0,0.4)]
                overflow-hidden group cursor-default
              `}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              {item.label.toUpperCase()}
            </motion.span>
          ))}
        </div>
      </div>

      {/* OVERLAYS: Top border shine */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </motion.header>
  );
}