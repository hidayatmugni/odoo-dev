/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const { contact } = useContext(AppContext);

  const contactItems = [
    {
      label: "WhatsApp",
      value: contact.phone,
      href: `https://wa.me/${contact.phone.replace(/\D/g, "")}`,
      icon: <FaPhoneAlt className="text-green-400 w-5 h-5" />,
      borderColor: "hover:border-green-500/40"
    },
    {
      label: "LinkedIn",
      value: "Mugni Hidayat",
      href: contact.linkedin,
      icon: <FaLinkedin className="text-blue-400 w-5 h-5" />,
      borderColor: "hover:border-blue-500/40"
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <MdEmail className="text-red-400 w-5 h-5" />,
      borderColor: "hover:border-red-500/40"
    },
  ];

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
    show: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <motion.div
      className="space-y-8 bg-[#050505] border border-white/5 rounded-[2.5rem] p-6 lg:p-12 shadow-2xl"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* INTRO HERO BOX */}
      <motion.div variants={fadeUp} className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-14 overflow-hidden relative group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/[0.03] blur-[100px] group-hover:bg-blue-600/[0.07] transition-all duration-700" />
        
        <div className="relative z-10 text-center md:text-left">
          <h2 className="text-3xl lg:text-6xl md:text-4xl font-black italic uppercase tracking-tighter text-white mb-6 leading-none">
            Let’s Build Something <span className="text-blue-500">Scalable</span>
          </h2>

          <p className="text-base lg:text-xl text-white/50 max-w-2xl font-medium leading-relaxed">
            I help businesses implement structured, scalable Odoo systems
            tailored to real operational needs — not generic templates.
          </p>

          <div className="mt-8 flex flex-wrap gap-2 justify-center md:justify-start">
  {["Custom Modules", "ERP Optimization", "Workflow Automation"].map((tag) => (
    <span 
      key={tag} 
      className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
    >
      {tag}
    </span>
  ))}
</div>
        </div>
      </motion.div>

      {/* CONTACT GRID */}
      <motion.section
        variants={container}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        {/* LEFT: INFO (4/12) */}
        <motion.div variants={fadeUp} className="lg:col-span-5 space-y-4">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 h-full flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-xl font-black text-white italic uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
                Contact Info
              </h3>

              <div className="space-y-4">
                {contactItems.map((item) => (
                  <a 
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-5 p-5 rounded-2xl bg-black border border-white/5 transition-all duration-300 ${item.borderColor} group/item`}
                  >
                    <div className="p-3 rounded-xl bg-white/[0.03] group-hover/item:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-[10px] text-white/30 font-black uppercase tracking-widest mb-1">{item.label}</span>
                      <span className="text-white text-sm md:text-base font-bold truncate max-w-[200px] md:max-w-full">
                        {item.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 space-y-3">
                {["Available for remote collaboration", "Average response time: < 24h", "Expertise in Manufacturing & Distribution"].map((check) => (
                  <div key={check} className="flex items-center gap-3 text-xs font-bold text-white/30 uppercase tracking-tight">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    {check}
                  </div>
                ))}
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-12 pt-6 border-t border-white/5">
              <a href={contact.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                <FaGithub />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all">
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: STEPS (7/12) */}
        <motion.div variants={fadeUp} className="lg:col-span-7">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-12 h-full shadow-xl">
            <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-10">
              Collaboration <span className="text-blue-500">Process</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { n: "01", t: "Discovery", d: "Deep dive into your operational gaps and business workflow mapping." },
                { n: "02", t: "Development", d: "Building custom Odoo modules with clean, maintainable, and scalable code." },
                { n: "03", t: "Automation", d: "Syncing systems and removing manual bottlenecks through smart logic." },
                { n: "04", t: "Support", d: "Deployment with documentation and ongoing system refinement." }
              ].map((step) => (
                <div key={step.n} className="space-y-2">
                  <span className="text-blue-500 font-black tracking-tighter text-2xl opacity-50">{step.n}</span>
                  <h4 className="text-white font-bold uppercase tracking-widest text-sm">{step.t}</h4>
                  <p className="text-white/40 text-xs leading-relaxed">{step.d}</p>
                </div>
              ))}
            </div>

            {/* CALL TO ACTION BUTTONS */}
            <div className="mt-12 flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/5">
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all text-center shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
              >
                Start Conversation
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all text-center"
              >
                Send Email
              </a>
            </div>

            <p className="mt-8 text-[10px] font-bold text-white/20 uppercase tracking-[0.4em]">
              Based in Indonesia · Global Collaboration
            </p>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}