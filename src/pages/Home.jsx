/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import GlossyCard from "../components/GlossyCard";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 400);
  };

  return (
    <div className="relative min-h-screen w-full flex justify-center pb-20">
      <motion.div
        className="relative z-10 w-full max-w-6xl px-0 md:px-0 space-y-6 md:space-y-8"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
      >
        {/* 1. HEADER */}
        <motion.div variants={fadeUp}>
          <Header />
        </motion.div>

        {/* 2. CORE GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT: BIOGRAPHY */}
          <motion.div variants={fadeUp} className="lg:col-span-8">
            <GlossyCard
              accent="blue"
              elevated
              /* Gue tambahin ! supaya class background lo menang mutlak */
              className="h-full p-8 md:p-12 flex flex-col justify-between group relative overflow-hidden !bg-[#0a0a0a]/80"
            >
              {/* Watermark Background */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-black text-white/[0.02] italic select-none pointer-events-none">
                ABOUT
              </div>

              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Introduction</span>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
                  Engineering <span className="text-blue-600">Precision</span> <br/> 
                  In Every Workflow.
                </h2>

                <div className="space-y-6 text-white/50 text-base md:text-xl leading-relaxed font-medium max-w-2xl">
                  <p>
                    I’m <span className="text-white font-bold">Mugni Hidayat</span> — an independent Odoo Consultant specializing in the architecture of complex business systems.
                  </p>
                  <p className="text-sm md:text-lg border-l-2 border-blue-600/30 pl-6 italic">
                    I transform operational chaos into automated excellence, building scalable ERP solutions that act as the backbone for global business growth.
                  </p>
                </div>
              </div>

              <div className="relative z-10 mt-12">
                <button
                  onClick={() => handleNavigate("/about")}
                  className="group/btn flex items-center gap-4 text-white/90"
                >
                  <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border-b border-blue-500/50 pb-1 group-hover/btn:text-blue-400 group-hover/btn:border-blue-400 transition-all">
                    Read Full Biography
                  </span>
                  <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all duration-500">
                    <FaArrowRight className="text-sm -rotate-45 group-hover/btn:rotate-0 transition-transform" />
                  </div>
                </button>
              </div>
            </GlossyCard>
          </motion.div>

          {/* RIGHT: CONNECT */}
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <ContactCard />
          </motion.div>
        </div>

        {/* 3. LARGE CTA */}
        <motion.div variants={fadeUp}>
          <GlossyCard
            accent="blue"
            elevated
            className="p-10 md:p-20 text-center flex flex-col items-center justify-center group relative overflow-hidden !bg-[#0a0a0a]/80"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-transparent pointer-events-none" />
            
            <span className="relative z-10 text-blue-500/60 font-black uppercase tracking-[0.4em] text-[9px] mb-4">
              Expertise & Solutions
            </span>
            
            <h3 className="relative z-10 text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">
              Modern <span className="text-blue-600/80">ERP</span> Architecture.
            </h3>

            <p className="relative z-10 text-white/30 text-[11px] md:text-lg max-w-xl leading-relaxed font-medium mb-10 tracking-wide">
              Specialized in <span className="text-white/60 font-bold italic">Custom Development</span> and 
              <span className="text-white/60 font-bold italic"> Automated Logic</span> tailored for your business DNA.
            </p>

            <button
              onClick={() => handleNavigate("/services")}
              className="
                relative z-10 overflow-hidden
                px-8 py-4 rounded-xl
                text-[10px] md:text-xs font-black text-white/80
                bg-white/[0.03] border border-white/10
                hover:bg-blue-600 hover:text-white hover:border-blue-600
                hover:shadow-[0_20px_40px_rgba(37,99,235,0.25)]
                uppercase tracking-[0.2em]
                transition-all duration-500
                group/btn
              "
            >
              <span className="relative z-10 flex items-center gap-3">
                View Capabilities <FaArrowRight className="-rotate-45 group-hover/btn:rotate-0 transition-transform text-[10px]" />
              </span>
            </button>
          </GlossyCard>
        </motion.div>

        {/* 4. FOOTER */}
        <motion.div variants={fadeUp}>
          <Footer />
        </motion.div>

      </motion.div>
    </div>
  );
}