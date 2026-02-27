// src/components/ContactCard.jsx
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import GlossyCard from "./GlossyCard";

export default function ContactCard() {
  const { contact } = useContext(AppContext);

  const contactItems = [
    {
      label: "WhatsApp",
      value: contact.phone,
      href: `https://wa.me/${contact.phone.replace(/\D/g, "")}`,
      icon: (
        <FaPhoneAlt className="text-green-400 w-5 h-5 transition-all duration-300 group-hover:text-green-300 group-hover:scale-110" />
      ),
    },
    {
      label: "Instagram",
      value: `@${contact.instagram}`,
      href: contact.instagram
        ? `https://www.instagram.com/${contact.instagram}`
        : "#",
      icon: (
        <FaInstagram className="w-5 h-5 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-transparent bg-clip-text transition-all duration-300 group-hover:scale-110" />
      ),
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: contact.linkedin,
      icon: (
        <FaLinkedin className="text-blue-400 w-5 h-5 transition-all duration-300 group-hover:text-blue-300 group-hover:scale-110" />
      ),
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: (
        <MdEmail className="text-red-400 w-5 h-5 transition-all duration-300 group-hover:text-red-300 group-hover:scale-110" />
      ),
    },
  ];

  return (
    <GlossyCard accent="purple" elevated className="p-8 transition-colors duration-400">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h3 className="text-2xl font-bold mb-6 text-center md:text-left text-gradient">
          Contact Information
        </h3>

        <ul className="flex flex-col gap-3">
          {contactItems.map((item, index) => (
            <motion.div key={item.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1, duration: 0.4 }} viewport={{ once: true }}>
              <GlossyCard accent={["teal", "orange", "blue", "pink"][index % 4]} className="p-0">
                <li className="group flex items-center gap-4 px-4 py-3 relative transition-all duration-300 list-none"
                >
                  <div className="flex-shrink-0 z-10">{item.icon}</div>

                  <div className="flex flex-col leading-tight z-10">
                    <span className="text-xs text-text/60 dark:text-muted font-semibold uppercase tracking-wider">{item.label}</span>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-text/80 dark:text-muted hover:text-text dark:hover:text-white font-medium cursor-pointer transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  </div>

                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-0" />
                </li>
              </GlossyCard>
            </motion.div>
          ))}
        </ul>
      </motion.div>
    </GlossyCard>
  );
}