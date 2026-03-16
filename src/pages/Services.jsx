/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaTerminal, FaCodeBranch, FaExchangeAlt, FaChartBar, FaTools } from "react-icons/fa";
import ModuleMarquee from "../components/ModuleMarquee";

const services = [
  {
    id: "01",
    title: "Odoo Architecture",
    icon: <FaCodeBranch />,
    summary: "Engineered logic that fits your business like a glove. No bloat, just pure performance.",
    points: ["Custom Module Engineering", "Core Framework Extension", "Advanced OWL UI Components"],
    quote: "Systems should bend to the business.",
    color: "text-green-500",
    bg: "bg-green-500/5",
    size: "md:col-span-2",
  },
  {
    id: "02",
    title: "Workflow Automation",
    icon: <FaTerminal />,
    summary: "Eliminating 'Human Error' by automating the boring stuff.",
    points: ["Automated Stock Flows", "Manufacturing Logic", "Financial Reconciliation"],
    quote: "If you do it twice, automate it.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
    size: "md:col-span-1",
  },
  {
    id: "03",
    title: "Marketplace Bridge",
    icon: <FaExchangeAlt />,
    summary: "Seamless sync with Indonesian digital ecosystem.",
    points: ["Shopee & Tokopedia API", "Payment Gateways", "Real-time Inventory Sync"],
    quote: "I build the bridge for your island.",
    color: "text-orange-500",
    bg: "bg-orange-500/5",
    size: "md:col-span-1",
  },
  {
    id: "04",
    title: "Data Intelligence",
    icon: <FaChartBar />,
    summary: "Converting raw database rows into 'Aha!' moments.",
    points: ["Custom XLSX Reporting", "Interactive Dashboards", "Decision Pipelines"],
    quote: "Find the rhythm in the noise.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/5",
    size: "md:col-span-2",
  },
  {
    id: "05",
    title: "System Recovery",
    icon: <FaTools />,
    summary: "Optimizing legacy setups that became slow or unstable.",
    points: ["Database Optimization", "Technical Debt Cleanup", "Scalability Audits"],
    quote: "Removing the unnecessary is art.",
    color: "text-green-400",
    bg: "bg-green-400/5",
    size: "md:col-span-3",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <motion.section 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-0 md:px-0 py-6 md:py-10 space-y-6 md:space-y-10"
    >
      {/* 1. HEADER - More Compact on Mobile */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8 md:pb-12">
        <div className="space-y-1 md:space-y-2">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-6 md:w-8 bg-green-600" />
            <span className="text-green-500 font-black uppercase tracking-[0.4em] text-[8px] md:text-[10px]">Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-white italic uppercase tracking-tighter leading-[0.8] mb-0">
            Tech <br /> <span className="text-green-600">Arsenal.</span>
          </h2>
        </div>
        <p className="text-white/40 text-[9px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:max-w-[250px] leading-relaxed border-l border-white/10 pl-4 md:pl-6">
          Beyond development. <br className="hidden md:block" /> I engineer business growth through technical precision.
        </p>
      </div>

      {/* 2. BENTO GRID SYSTEM - Adjusted Padding for Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        {services.map((service) => (
          <motion.div
            key={service.id}
            onClick={() => setSelected(service)}
            className={`
              ${service.size} group relative 
              bg-[#080808]/80 
              border border-white/5 rounded-[1.8rem] md:rounded-[2.5rem] 
              p-5 md:p-8 cursor-pointer overflow-hidden
              transition-all duration-500 hover:border-green-500/30
            `}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6 md:mb-12">
                <div className={`text-2xl md:text-3xl ${service.color} drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]`}>
                  {service.icon}
                </div>
                <span className="font-mono text-white/5 text-[8px] md:text-[10px] uppercase tracking-widest">
                  SYS_CONF // {service.id}
                </span>
              </div>

              <div className="mt-auto">
                <h3 className="text-xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-2 md:mb-4 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/30 text-[11px] md:text-sm leading-relaxed max-w-[280px] line-clamp-2 md:line-clamp-none">
                  {service.summary}
                </p>
                
                <div className="flex items-center gap-3 md:gap-4 mt-5 md:mt-8 pt-4 md:pt-6 border-t border-white/5">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-green-500/50 transition-colors">
                    <FaArrowRight className="text-white/20 text-[8px] md:text-[10px] -rotate-45 group-hover:rotate-0 group-hover:text-green-500 transition-all" />
                  </div>
                  <span className="text-[8px] md:text-[9px] font-black text-white/40 uppercase tracking-[0.3em]">Initialize Audit</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. MARQUEE */}
      <div className="pt-2 md:pt-6">
        <div className="text-center mb-4 md:mb-6">
          <span className="text-[9px] md:text-[12px] font-black text-white/40 uppercase tracking-[0.5em]">Module Expertise Stack</span>
        </div>
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl md:rounded-3xl py-3 md:py-4">
          <ModuleMarquee speed="slow" />
        </div>
      </div>

      {/* 4. MODAL - Mobile Optimization */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-6 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0" onClick={() => setSelected(null)} />
            <motion.div
              layoutId={selected.id}
              className="relative w-full max-w-xl bg-[#0a0a0a] border-t md:border border-white/10 rounded-t-[2.5rem] md:rounded-[3rem] p-7 md:p-12 shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto"
            >
              <div className="w-10 h-1 bg-white/10 rounded-full mx-auto mb-6 md:hidden" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className={`text-3xl md:text-4xl ${selected.color}`}>{selected.icon}</div>
                  <div className="h-px flex-1 bg-white/10" />
                  <button onClick={() => setSelected(null)} className="text-white/20 hover:text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest">Close [×]</button>
                </div>

                <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-5 md:mb-6 leading-none">
                  {selected.title}
                </h3>

                <div className="grid grid-cols-1 gap-2 md:gap-3 mb-8 md:mb-10">
                  {selected.points.map((p, i) => (
                    <div key={i} className="group flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 hover:border-green-500/30 transition-all">
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-green-600" />
                      <span className="text-white/60 uppercase text-[9px] md:text-[11px] font-black tracking-widest">{p}</span>
                    </div>
                  ))}
                </div>

                <div className="border-l-2 border-green-600 pl-4 md:pl-6 py-1 md:py-2">
                   <p className="text-white/40 italic text-xs md:text-sm leading-relaxed">"{selected.quote}"</p>
                </div>

                <button 
                  onClick={() => setSelected(null)}
                  className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-[0.3em] md:hidden text-white/60"
                >
                  Return to Arsenal
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}