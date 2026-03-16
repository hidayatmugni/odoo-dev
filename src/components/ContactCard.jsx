/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import GlossyCard from "./GlossyCard";

export default function ContactCard() {
  const { contact } = useContext(AppContext);

  const contactItems = [
    {
      label: "Github",
      value: "hidayatmugni",
      href: `https://github.com/${contact.github}`,
      accent: "text-blue-400",
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      value: "Mugni Hidayat",
      href: contact.linkedin,
      accent: "text-blue-500",
      icon: <FaLinkedin />,
    },
    {
      label: "Instagram",
      value: `@${contact.instagram}`,
      href: contact.instagram ? `https://www.instagram.com/${contact.instagram}` : "#",
      accent: "text-purple-400",
      icon: <FaInstagram />,
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      accent: "text-emerald-400",
      icon: <MdEmail />,
    },
  ];

  return (
    <GlossyCard 
      accent="purple" // SEKARANG PAKAI UNGU SEBAGAI AKSEN UTAMA CARD
      elevated 
      className="p-8 h-full bg-[#0a0a0a]/80 relative overflow-hidden group"
    >
      {/* BACKGROUND DECORATION - Purple Tone */}
      <div className="absolute top-0 right-0 text-7xl font-black text-purple-500/[0.03] italic -rotate-90 translate-x-12 translate-y-12 select-none pointer-events-none">
        CONNECT
      </div>

      <div className="flex flex-col h-full relative z-10">
        
        {/* Editorial Header - Purple Theme */}
        <div className="space-y-2 mb-10">
          <span className="text-purple-500 font-black uppercase tracking-[0.4em] text-[9px]">Networking</span>
          <h3 className="text-3xl font-black italic uppercase tracking-tighter text-white leading-none">
            Get In <span className="text-purple-600">Touch.</span>
          </h3>
          <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-2">
            Available for remote collaboration
          </p>
        </div>

        {/* Social List */}
        <div className="flex flex-col gap-3 flex-grow">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group/item relative"
            >
              <div className={`
                flex items-center justify-between p-4 rounded-2xl
                bg-white/[0.02] border border-white/5 
                group-hover/item:bg-purple-500/[0.04] group-hover/item:border-purple-500/30 
                transition-all duration-500
              `}>
                <div className="flex items-center gap-4">
                  {/* Icon Box - Berubah sesuai warna brand masing-masing saat hover */}
                  <div className={`
                    w-10 h-10 flex items-center justify-center rounded-xl 
                    bg-[#050505] border border-white/10 text-lg
                    group-hover/item:${item.accent} group-hover/item:border-purple-500/50
                    transition-all duration-500
                  `}>
                    {item.icon}
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 group-hover/item:text-purple-400 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[12px] font-bold text-white/60 group-hover/item:text-white transition-colors truncate max-w-[150px]">
                      {item.value}
                    </span>
                  </div>
                </div>

                <div className="text-white/10 group-hover/item:text-purple-400 group-hover/item:translate-x-1 transition-all duration-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Status Pill - Green for 'Active' vibe */}
        <div className="mt-10 pt-6 border-t border-white/5 flex justify-center">
            <div className="px-2 py-2 bg-emerald-500/5 border border-emerald-500/10 rounded-full">
               <p className="text-[8px] font-black text-emerald-500/60 uppercase tracking-[0.3em] flex items-center gap-2">
                 <span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse" />
                 Ready for global collaboration
               </p>
            </div>
        </div>
      </div>
    </GlossyCard>
  );
}