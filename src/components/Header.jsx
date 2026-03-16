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

  // MENGGANTI UNGU: Fokus ke Blue, Cyan, Emerald, dan Slate (Metalik)
  const expertise = [
    { label: "Odoo ERP", color: "from-blue-600/20 to-blue-600/5", text: "text-blue-400", border: "border-blue-500/30" },
    { label: "Python Specialist", color: "from-violet-500/20 to-violet-500/5", text: "text-violet-400", border: "border-violet-500/30" },
    { label: "Business Architect", color: "from-red-500/20 to-red-500/5", text: "text-red-400", border: "border-red-500/30" },
    { label: "Financial Flow", color: "from-slate-500/20 to-slate-500/5", text: "text-slate-300", border: "border-slate-500/30" }
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="
        relative w-full overflow-hidden
        min-h-[300px] md:h-[340px] 
        flex flex-col md:flex-row items-center
        p-8 md:px-14 md:mt-12 mt-6
        rounded-[1.5rem]
        /* BACKGROUND TRANSPARENT 50% & CLEAN BLUR */
        bg-[#080808]/50 backdrop-blur-xl
        border-t border-l border-white/10
        border-b border-r border-white/5
        shadow-[0_40px_100px_rgba(0,0,0,0.6)]
      "
    >
      {/* GLOWS - Hanya Biru & Cyan, Tanpa Ungu */}
      {/* <div className="absolute top-0 right-0 w-[500px] h-full bg-blue-600/[0.07] blur-[100px] -z-10 pointer-events-none" /> */}
      {/* <div className="absolute bottom-0 left-[-5%] w-[400px] h-full bg-cyan-600/[0.04] blur-[100px] -z-10 pointer-events-none" /> */}
      
      {/* OVERLAY GRAIN UNTUK TEKSTUR */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* LEFT CONTENT: PHOTO */}
      <div className="relative z-10 flex-shrink-0 mb-8 md:mb-0 md:mr-14">
        <div className="relative group">
          {/* Ring Glow Biru Tipis */}
          <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.6rem] blur opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
          
          <div className="relative p-1 rounded-[2.5rem] bg-white/10 shadow-2xl">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.2rem] overflow-hidden rotate-2 group-hover:rotate-0 transition-all duration-700 ease-out bg-[#111]">
              <img
                src={photo}
                alt={name}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT CONTENT: TEXT & BADGES */}
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left flex-1">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[9px] font-black text-emerald-400 uppercase tracking-[0.3em]">Ready for Project</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black italic uppercase tracking-tighter text-white leading-[0.85] mb-3">
          {name.split(' ')[0]} <span className="text-yellow-600 inline-block drop-shadow-[0_0_15px_rgba(37,99,235,0.3)]">{name.split(' ')[1]}</span>
        </h1>

        {/* Title */}
       <div className="border-l-2 border-blue-600/50 pl-4 mb-8">
          <p className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-[0.4em] max-w-md leading-relaxed">
            {title}
          </p>
        </div>

        {/* BADGES STYLE REQUESTED */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
          {expertise.map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ y: -2, backgroundColor: "rgba(255,255,255,0.05)" }}
              className={`
                px-4 py-2 rounded-lg
                text-[9px] font-black ${item.text}
                bg-gradient-to-br ${item.color}
                border ${item.border}
                transition-all duration-300
                cursor-default uppercase tracking-[0.2em]
              `}
            >
              {item.label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* WATERMARK */}
      <div className="absolute bottom-[-10%] right-[-2%] text-[10rem] font-black text-white/[0.02] italic select-none pointer-events-none -rotate-6">
        {name.split(' ')[0]}
      </div>
    </motion.header>
  );
}