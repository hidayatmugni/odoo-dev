/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import GlossyCard from "../components/GlossyCard";
import { useNavigate } from "react-router-dom";

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
    <div className="relative min-h-screen w-full flex justify-center">
      <motion.div
        className="relative z-10 w-full max-w-6xl px-4 md:px-0 space-y-8 md:space-y-10"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.2 } } }}
      >
        {/* 1. HEADER */}
        <motion.div variants={fadeUp}>
          <Header />
        </motion.div>

        {/* 2. ABOUT + CONTACT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 md:gap-8 items-stretch">
          
          {/* ABOUT CARD - Sekarang pakai Standard GlossyCard */}
          <motion.div variants={fadeUp} className="h-full">
            <GlossyCard
              accent="emerlad"
              elevated
              className="h-full p-8 md:p-10 flex flex-col justify-between group"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-green-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white italic">
                    About Me
                  </h2>
                </div>

                <div className="space-y-4 text-white/60 text-sm md:text-lg leading-relaxed font-light">
                  <p>
                    I’m <span className="text-white font-bold italic">Mugni Hidayat</span> — an 
                    <span className="text-green-400 font-medium"> Odoo Developer</span> dedicated to engineering 
                    bespoke ERP ecosystems.
                  </p>
                  <p>
                    From <span className="text-white/80">custom module architecture</span> to 
                    <span className="text-white/80"> intelligent workflow automation</span>, I build tools that empower 
                    clarity and scale efficiency.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <button
                  onClick={() => handleNavigate("/about")}
                  className="
                    relative overflow-hidden
                    px-8 py-3 rounded-xl
                    text-[10px] md:text-xs font-black text-white/90
                    bg-gradient-to-br from-green-500/20 to-black/20
                    border border-white/10 backdrop-blur-md
                    shadow-[0_8px_20px_rgba(0,0,0,0.4)]
                    uppercase tracking-[0.2em]
                    transition-all duration-500
                    group/btn
                  "
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">Explore Biography →</span>
                </button>
              </div>
            </GlossyCard>
          </motion.div>

          {/* CONTACT CARD - Sudah dibungkus GlossyCard di dalamnya */}
          <motion.div variants={fadeUp}>
            <ContactCard />
          </motion.div>
        </div>

        {/* 3. SERVICES SECTION */}
        <motion.div variants={fadeUp}>
          <GlossyCard
            accent="emerlad" // Samakan aksen biar STABIL
            elevated
            className="p-10 md:p-20 text-center flex flex-col items-center justify-center group"
          >
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-8 leading-none">
              Solutions <span className="text-emerald-400">&</span> Services
            </h3>

            <p className="text-white/40 text-sm md:text-xl max-w-2xl leading-relaxed font-light mb-12 tracking-wide">
              Transforming businesses through <span className="text-white/80 font-medium italic">ERP Customization</span>, 
              <span className="text-white/80 font-medium italic"> System Integration</span>, and 
              <span className="text-white/80 font-medium italic"> Advanced Analytics</span>.
            </p>

            <button
              onClick={() => handleNavigate("/services")}
              className="
                relative overflow-hidden
                px-12 py-5 rounded-xl
                text-[11px] md:text-sm font-black text-white/90
                bg-gradient-to-br from-emerald-500/20 to-black/20
                border border-white/10 backdrop-blur-md
                shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                uppercase tracking-[0.3em]
                transition-all duration-500
                group/btn
              "
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 flex items-center gap-3">View All Capabilities →</span>
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