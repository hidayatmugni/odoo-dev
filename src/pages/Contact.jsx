/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram, FaArrowRight } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import GlossyCard from "../components/GlossyCard";

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

export default function Contact() {
  const { contact } = useContext(AppContext);

  const waMessage = encodeURIComponent("Hi Mugni, I'd like to discuss my Odoo needs.");
  const waLink = `https://wa.me/${contact.phone.replace(/\D/g, "")}?text=${waMessage}`;

  const contactItems = [
    {
      label: "WhatsApp",
      value: contact.phone,
      href: waLink,
      icon: <FaPhoneAlt className="text-emerald-400 w-4 h-4 md:w-5 md:h-5" />,
      glow: "group-hover/item:border-emerald-500/30"
    },
    {
      label: "LinkedIn",
      value: "Mugni Hidayat",
      href: contact.linkedin,
      icon: <FaLinkedin className="text-blue-400 w-4 h-4 md:w-5 md:h-5" />,
      glow: "group-hover/item:border-blue-500/30"
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <MdEmail className="text-rose-400 w-4 h-4 md:w-5 md:h-5" />,
      glow: "group-hover/item:border-rose-500/30"
    },
  ];

  return (
    <motion.div
      className="space-y-6 md:space-y-10 mt-6 md:mt-16"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* 1. HERO SECTION - Scalable Font for Mobile */}
      <motion.div variants={fadeUp}>
      <GlossyCard accent="purple" className="p-6 md:p-20 !bg-[#0a0a0a]/70 border-white/10">
        <div className="max-w-4xl relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black italic uppercase tracking-tighter text-white leading-[0.9] mb-4 md:mb-8">
            Let’s Talk <br className="hidden md:block"/> About <span className="text-violet-500">Your Odoo.</span>
          </h2>
          <p className="text-sm md:text-2xl text-white/40 font-medium leading-relaxed max-w-2xl border-l border-violet-500/30 pl-4 md:pl-6">
            Just getting started with Odoo, or already using it but something doesn't feel right? Tell me what you need, and we'll figure it out together.
          </p>
        </div>
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-full bg-gradient-to-l from-violet-600/[0.05] to-transparent pointer-events-none" />
      </GlossyCard>
      </motion.div>

      <motion.div variants={container} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
        {/* 2. CONTACT LIST - Balanced Spacing */}
        <motion.div variants={fadeUp} className="lg:col-span-5 space-y-4 md:space-y-6">
          <h3 className="text-[12px] md:text-[14px] font-black uppercase tracking-[0.5em] text-white ml-2">Quick Connect</h3>
          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-white/40 ml-2">
            Open for freelance & remote work · WIB (GMT+7)
          </p>
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
              className={`group/item flex items-center justify-between p-4 md:p-6 rounded-2xl md:rounded-3xl bg-black/50 border border-white/15 transition-all duration-500 ${item.glow} hover:bg-white/[0.04]`}
            >
              <div className="flex items-center gap-4 md:gap-6">
                <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-black border border-white/10 group-hover/item:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] md:text-[12px] font-black text-white/60 uppercase tracking-widest">{item.label}</p>
                  <p className="text-xs md:text-base text-white font-bold tracking-tight">{item.value}</p>
                </div>
              </div>
              <FaArrowRight className="text-white/40 group-hover/item:text-white group-hover/item:translate-x-2 transition-all text-xs md:text-base" />
            </a>
          ))}

          <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-dashed border-white/10">
            <p className="text-[10px] md:text-[12px] font-black text-white/60 uppercase tracking-widest mb-3">Not sure what to write?</p>
            <ul className="space-y-2 text-white/40 text-[12px] md:text-sm leading-relaxed">
              <li>• What kind of business you run</li>
              <li>• Which Odoo you use (Community / Enterprise), or if you haven't started yet</li>
              <li>• What you'd like help with, even if it's just a rough idea</li>
            </ul>
          </div>
        </motion.div>

        {/* 3. THE METHOD - Compact for Mobile */}
        <motion.div variants={fadeUp} className="lg:col-span-7">
        <GlossyCard className="h-full p-6 md:p-12 !bg-[#0a0a0a]/70">
          <div className="flex items-center gap-4 mb-8 md:mb-12">
            <h3 className="text-lg md:text-3xl font-black italic uppercase tracking-tighter text-white">The Method</h3>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              { n: "I", t: "Listen", d: "Understanding how your business runs day to day." },
              { n: "II", t: "Configure", d: "Using Odoo's standard features as much as possible." },
              { n: "III", t: "Customize", d: "Building custom only where it's really needed." },
              { n: "IV", t: "Support", d: "Still around to help after go-live." }
            ].map((step) => (
              <div key={step.n} className="relative">
                <span className="absolute -top-4 -left-1 text-4xl md:text-6xl font-black text-white/[0.06] italic">{step.n}</span>
                <div className="relative z-10">
                  <h4 className="text-violet-400 font-black uppercase tracking-[0.2em] text-[14px] md:text-[18px] mb-1 md:mb-2">{step.t}</h4>
                  <p className="text-white/40 text-[12px] md:text-sm leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-16 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn w-full md:w-auto justify-center relative inline-flex items-center gap-4 px-8 py-4 md:px-10 md:py-5 bg-white text-black font-black uppercase tracking-tighter text-xs md:text-sm rounded-xl md:rounded-2xl hover:bg-violet-500 hover:text-white transition-all duration-500"
            >
              Chat on WhatsApp
              <FaArrowRight className="-rotate-45 group-hover/btn:rotate-0 transition-transform" />
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="text-center text-[11px] md:text-xs font-bold text-white/40 hover:text-white transition-colors"
            >
              or send an email instead
            </a>
          </div>
        </GlossyCard>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}