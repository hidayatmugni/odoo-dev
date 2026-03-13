/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModuleMarquee from "../components/ModuleMarquee";

const services = [
  {
    id: 1,
    title: "Odoo Custom Module Development",
    summary: "Build tailored Odoo modules aligned with real business workflows.",
    points: [
      "Design and develop custom business logic",
      "Extend standard Odoo modules",
      "Create scalable and maintainable solutions",
    ],
    quote: "Because every business deserves systems built for its reality.",
    color: "border-emerald-500/30",
    glow: "group-hover:bg-emerald-500/10"
  },
  {
    id: 2,
    title: "ERP Workflow Automation",
    summary: "Automate repetitive operations and streamline internal processes.",
    points: [
      "Automate stock, manufacturing, and operational flows",
      "Reduce manual work through smart logic",
      "Improve system accuracy and efficiency",
    ],
    quote: "Automation isn't luxury — it's operational survival.",
    color: "border-green-500/30",
    glow: "group-hover:bg-green-500/10"
  },
  {
    id: 3,
    title: "Custom Reporting & Data Insights",
    summary: "Transform operational data into meaningful business insights.",
    points: [
      "Develop Excel & system-based reports",
      "Build dynamic operational dashboards",
      "Enable better decision making through structured data",
    ],
    quote: "Good decisions start with good data.",
    color: "border-orange-500/30",
    glow: "group-hover:bg-orange-500/10"
  },
  {
    id: 4,
    title: "System Integration",
    summary: "Connect Odoo with external platforms and tools.",
    points: [
      "API integrations with marketplaces & tools",
      "Synchronize operational systems",
      "Ensure consistent data flow across platforms",
    ],
    quote: "Your systems should talk — not conflict.",
    color: "border-purple-500/30",
    glow: "group-hover:bg-purple-500/10"
  },
  {
    id: 5,
    title: "ERP Optimization",
    summary: "Improve performance of existing Odoo implementations.",
    points: [
      "Optimize workflows and configurations",
      "Fix inefficiencies and bottlenecks",
      "Enhance system usability for teams",
    ],
    quote: "A better system is often the same one — just optimized.",
    color: "border-pink-500/30",
    glow: "group-hover:bg-pink-500/10"
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div 
      className="bg-[#050505] min-h-screen rounded-[2.5rem] p-6 md:p-12 border border-white/5 shadow-2xl overflow-hidden" 
      initial="hidden" 
      animate="visible" 
      variants={fadeUp}
    >
      {/* Header */}
      <motion.div variants={fadeUp} custom={0} className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white">
          Services
        </h1>
        <p className="text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.3em] max-w-2xl mx-auto leading-relaxed">
          Operational Excellence Through Technical Precision
        </p>
      </motion.div>

      {/* Marquee Section (Solid Background) */}
      <motion.div variants={fadeUp} custom={1} className="space-y-3 mb-16 opacity-80">
        <ModuleMarquee speed="slow" />
        <ModuleMarquee reverse speed="slow" />
      </motion.div>

      {/* Grid Cards */}
      <motion.div
        variants={fadeUp}
        custom={2}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            variants={fadeUp}
            custom={i + 3}
            onClick={() => setSelected(service)}
            className={`
              group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 
              cursor-pointer transition-all duration-500 
              hover:bg-[#0f0f0f] hover:${service.color}
              flex flex-col justify-between h-[280px]
            `}
          >
            {/* Subtle Glow Background on Hover */}
            <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${service.glow} opacity-0 group-hover:opacity-100`} />
            
            <div className="relative z-10">
              <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 italic">
                {service.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed line-clamp-3 font-medium">
                {service.summary}
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-2 mt-4">
              <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">View Details</span>
              <div className="h-[1px] w-8 bg-green-500/30" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Section (Solid No-Blur Modal) */}
      <AnimatePresence>
        {selected && (
          <motion.div 
            className="fixed inset-0 bg-black/90 z-[9999] grid place-items-center p-4" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" onClick={() => setSelected(null)} />

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }} 
              className="relative w-full max-w-[600px] bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,1)]"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-8 text-white/20 hover:text-white text-2xl transition-all"
              >
                ✕
              </button>

              <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6 leading-none">
                {selected.title}
              </h3>
              
              <p className="text-white/60 mb-8 leading-relaxed font-medium">{selected.summary}</p>

              <div className="space-y-3 mb-8">
                {selected.points.map((p, i) => (
                  <div key={i} className="flex items-center gap-4 text-sm text-white/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                    {p}
                  </div>
                ))}
              </div>

              <blockquote className="p-6 rounded-2xl bg-white/[0.02] border-l-4 border-green-500 text-white/40 italic text-sm">
                "{selected.quote}"
              </blockquote>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}