/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { FaTerminal, FaConnectdevelop, FaProjectDiagram, FaQuoteLeft } from "react-icons/fa";

export default function About() {
  // Lanyard swing: card rotates around the bottom of the strap
  const swing = useMotionValue(0);
  const strapRef = useRef(null);
  const grab = useRef(null);

  const pointerAngle = (e) => {
    const r = strapRef.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = Math.max(e.clientY - r.bottom, 1);
    return (-Math.atan2(dx, dy) * 180) / Math.PI;
  };

  const onSwingStart = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    swing.stop();
    grab.current = pointerAngle(e) - swing.get();
  };

  const onSwingMove = (e) => {
    if (grab.current === null) return;
    const angle = pointerAngle(e) - grab.current;
    swing.set(Math.max(-60, Math.min(60, angle)));
  };

  const onSwingEnd = () => {
    if (grab.current === null) return;
    grab.current = null;
    animate(swing, 0, { type: "spring", stiffness: 80, damping: 3, velocity: swing.getVelocity() });
  };

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
            <span className="text-yellow-500 font-black uppercase tracking-[0.5em] text-[10px]">Biography</span>
            <h2 className="text-5xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.85] mt-4">
              The <span className="text-yellow-600">Architect</span> <br/> of Systems.
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
        <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col items-center -mt-20">
          {/* LANYARD STRAP */}
          <div ref={strapRef} className="relative w-9 h-20 md:h-24 bg-gradient-to-b from-yellow-900/40 to-yellow-600 rounded-b-sm overflow-hidden flex items-center justify-center">
            <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white/70 whitespace-nowrap -rotate-90">
              Odoo · Dev · Odoo · Dev
            </span>
          </div>

          {/* SWINGING PART: clip + card, draggable */}
          <motion.div
            style={{ rotate: swing, transformOrigin: "top center" }}
            onPointerDown={onSwingStart}
            onPointerMove={onSwingMove}
            onPointerUp={onSwingEnd}
            onPointerCancel={onSwingEnd}
            className="w-full flex flex-col items-center cursor-grab active:cursor-grabbing select-none touch-none"
          >
          {/* METAL CLIP */}
          <div className="relative z-20 -mt-1 flex flex-col items-center">
            <div className="w-12 h-4 rounded-md bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-md" />
            <div className="w-3 h-5 -mt-0.5 rounded-b-full border-2 border-t-0 border-zinc-400" />
          </div>

          {/* ID CARD */}
          <div
            className="relative -mt-5 w-full max-w-[340px] bg-[#0d0d0d] border border-white/10 rounded-[1.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Header band + slot hole */}
            <div className="relative bg-gradient-to-r from-yellow-700 to-yellow-500 pt-7 pb-3 px-5">
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-12 h-2.5 rounded-full bg-[#0d0d0d]" />
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white">Odoo Dev</span>
                <span className="text-[9px] font-mono font-bold text-white/70">ID · MH-001</span>
              </div>
            </div>

            <div className="p-5">
              {/* Photo */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-[#111]">
                <img
                  src="../assets/photo.jpeg"
                  alt="Mugni Hidayat"
                  draggable={false}
                  className="w-full object-cover object-[center_75%] aspect-square"
                />
              </div>

              {/* Name & role */}
              <div className="mt-5 text-center">
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white leading-none">
                  Mugni <span className="text-yellow-500">Hidayat</span>
                </h3>
                <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Odoo Developer</p>
              </div>

              {/* Info rows */}
              <div className="mt-5 grid grid-cols-2 gap-2">
                {[
                  { label: "Focus", val: "Custom Modules" },
                  { label: "Also", val: "Odoo Consult" },
                  { label: "Work", val: "Freelance · Contract" },
                  { label: "Timezone", val: "WIB (GMT+7)" },
                ].map((row) => (
                  <div key={row.label} className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30">{row.label}</p>
                    <p className="text-[11px] font-bold text-white/80">{row.val}</p>
                  </div>
                ))}
              </div>

              {/* Barcode */}
              <div className="mt-5 pt-4 border-t border-dashed border-white/10 flex flex-col items-center gap-1.5">
                <div className="flex items-end h-8 gap-[2px]">
                  {[2, 1, 3, 1, 1, 2, 3, 1, 2, 1, 1, 3, 2, 1, 2, 3, 1, 1, 2, 1, 3, 1, 2, 2, 1, 3, 1, 2].map((w, i) => (
                    <span key={i} className="h-full bg-white/60" style={{ width: `${w}px` }} />
                  ))}
                </div>
                <span className="text-[8px] font-mono tracking-[0.4em] text-white/30">ODOO-DEV</span>
              </div>
            </div>
          </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Biography & Colorful Pills */}
        <motion.div variants={fadeUp} className="lg:col-span-8 space-y-10">
          <div className="relative">
            <FaQuoteLeft className="absolute -top-10 -left-6 text-white/5 text-6xl" />
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
              Engineering <span className="text-yellow-500 italic">scalable ecosystems</span> for modern business operations.
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
                { icon: <FaTerminal />, title: "Custom Logic", desc: "Complex Modules", bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
                { icon: <FaConnectdevelop />, title: "Integrations", desc: "API & Sync", bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
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
                 <span key={type} className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-[9px] font-black uppercase tracking-widest text-white/30 hover:text-yellow-500 transition-all">
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