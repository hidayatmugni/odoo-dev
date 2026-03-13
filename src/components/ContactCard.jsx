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
      value: contact.github || "hidayatmugni",
      href: `https://github.com/${contact.github}`,
      accent: "blue",
      icon: <FaGithub className="w-5 h-5 text-white/70" />,
    },
    {
      label: "Instagram",
      value: `@${contact.instagram}`,
      href: contact.instagram ? `https://www.instagram.com/${contact.instagram}` : "#",
      accent: "purple",
      icon: <FaInstagram className="w-5 h-5 text-white/70" />,
    },
    {
      label: "LinkedIn",
      value: "Professional Profile",
      href: contact.linkedin,
      accent: "blue",
      icon: <FaLinkedin className="w-5 h-5 text-white/70" />,
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      accent: "emerald",
      icon: <MdEmail className="w-5 h-5 text-white/70" />,
    },
  ];

  return (
    <GlossyCard accent="purple" elevated className="p-8 h-full">
      <div className="flex flex-col h-full">
        
        {/* Header Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px] bg-purple-500" />
          <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">
            Connect
          </h3>
        </div>

        {/* Social List */}
        <div className="flex flex-col gap-4 flex-grow">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <GlossyCard
                  accent={item.accent}
                  className="px-5 py-4 border-white/5 group-hover:border-white/20 transition-all duration-500"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Icon with Glow Background */}
                      <div className="relative p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 group-hover:text-purple-400 transition-colors duration-500">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-500">
                          {item.value}
                        </span>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </GlossyCard>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Status (Optional) */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <p className="text-[9px] font-bold text-center text-white/20 uppercase tracking-[0.4em]">
            Available for worldwide collab
          </p>
        </div>
      </div>
    </GlossyCard>
  );
}