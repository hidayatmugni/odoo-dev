/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaGlobe, FaChartLine } from "react-icons/fa";
import GlossyCard from "../components/GlossyCard";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="lg:mt-[60px] md:mt-[60px] max-w-5xl mx-auto px-4 pb-20"
    >
      {/* Container Utama: Solid Background & Sharp Border */}
      <div className="bg-[#050505] border border-white/10 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Konten di dalam tetap menggunakan padding yang pas */}
        <div className="p-8 md:p-16 space-y-10">
          
          {/* Header Profile Section */}
          <motion.div variants={fadeUp} className="relative z-10 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-[#111] shadow-2xl overflow-hidden flex-shrink-0">
                <img
                  src="../assets/photo.jpeg"
                  alt="Mugni Hidayat"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-2">
                  Mugni Hidayat
                </h2>
                <p className="text-blue-400/60 text-sm md:text-base font-bold uppercase tracking-[0.2em]">
                  Odoo Developer · ERP Specialist
                </p>
              </div>
            </div>
          </motion.div>

          {/* Biography Text Section */}
          <div className="relative z-10 space-y-6 text-white/70">
            <motion.p variants={fadeUp} className="text-lg md:text-xl leading-relaxed">
              I am <span className="font-bold text-white">Mugni Hidayat</span>,
              an <strong>Odoo Developer</strong> focused on building scalable ERP
              customizations and automation solutions tailored to real operational
              needs.
            </motion.p>

            <motion.p variants={fadeUp} className="text-base md:text-lg leading-relaxed text-white/50">
              My expertise lies in developing custom modules, integrating systems,
              and transforming complex business workflows into efficient,
              data-driven ERP processes.
            </motion.p>
          </div>

          {/* Feature Highlight Cards (Solid Style) */}
          {/* Feature Highlight Cards (Optimized for Mobile) */}
<div className="grid grid-cols-1 gap-4">
  <motion.div variants={fadeUp}>
    <div className="
      p-5 md:p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 
      flex flex-col md:flex-row items-start gap-4 md:gap-5 
      transition-all hover:border-orange-500/30 group
    ">
      <div className="p-3 md:p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
        <FaUserTie className="text-orange-400 text-xl md:text-2xl" />
      </div>
      <p className="text-sm md:text-lg text-white/60 leading-relaxed">
        I specialize in end-to-end ERP customization including
        <em className="text-white/80 not-italic font-semibold block md:inline mt-1 md:mt-0"> Inventory, Manufacturing, Sales, Reporting, and Workflow Automation</em>.
      </p>
    </div>
  </motion.div>

  <motion.div variants={fadeUp}>
    <div className="
      p-5 md:p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 
      flex flex-col md:flex-row items-start gap-4 md:gap-5 
      transition-all hover:border-purple-500/30 group
    ">
      <div className="p-3 md:p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
        <FaChartLine className="text-purple-400 text-xl md:text-2xl" />
      </div>
      <p className="text-sm md:text-lg text-white/60 leading-relaxed">
        My work often involves building
        <strong className="text-white/80 font-bold block md:inline mt-1 md:mt-0"> custom reports, automation logic, and system integrations</strong>
        that turn operational data into meaningful insights.
      </p>
    </div>
  </motion.div>

  <motion.div variants={fadeUp}>
    <div className="
      p-5 md:p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 
      flex flex-col md:flex-row items-start gap-4 md:gap-5 
      transition-all hover:border-blue-500/30 group
    ">
      <div className="p-3 md:p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex-shrink-0 group-hover:scale-110 transition-transform">
        <FaGlobe className="text-blue-400 text-xl md:text-2xl" />
      </div>
      <p className="text-sm md:text-lg text-white/60 leading-relaxed">
        My mission is to <span className="text-white/80 font-semibold">simplify complexity</span> — building systems that are
        reliable, maintainable, and aligned with real business operations.
      </p>
    </div>
  </motion.div>
</div>
        </div>
      </div>
    </motion.section>
  );
}