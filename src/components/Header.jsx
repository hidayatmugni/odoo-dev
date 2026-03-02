// src/components/Header.jsx
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ShareButton from "./ShareButton";
import { motion } from "framer-motion";

export default function Header({
  photo = "../assets/photo.jpeg",
  name = "Mugni Hidayat",
  title = "Odoo Developer · ERP Customization Specialist",
}) {
  const { contact } = useContext(AppContext);

  const whatsappNumber = contact.phone?.replace("+", "").replace(/\s/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi%20Mugni%2C%20I%27m%20interested%20in%20your%20Odoo%20services.`;

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      // Perbaikan Layout: justify-between agar tidak menumpuk di kanan
      className="flex flex-col md:flex-row justify-between items-center gap-8 p-8 md:p-12 rounded-[2rem] card-gloss glass-border relative overflow-hidden transition-all duration-500 bg-black/40 backdrop-blur-xl shadow-2xl"
    >
      {/* Bagian Kiri: Foto & Identitas */}
      <div className="flex items-center flex-col md:flex-row gap-8 text-center md:text-left z-10">
        <div className="relative group">
          <img
            src={photo}
            alt={name}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/50 dark:border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
          {/* Efek Glow di belakang foto */}
          <div className="absolute inset-0 rounded-full bg-accent-teal/20 dark:bg-accent-teal/20 blur-2xl -z-10 group-hover:bg-accent-teal/40 dark:group-hover:bg-accent-teal/40 transition-colors" />
        </div>

        <div className="space-y-2 dark:text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            {name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">
            {title}
          </p>
          
          {/* Badge Status Glossy */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="inline-flex items-center mt-4 gap-2 px-4 py-1.5 rounded-full bg-green-500/10 dark:bg-green-600/20 border border-green-500/20 dark:border-green-500/30 text-green-700 dark:text-green-300 text-sm font-bold shadow-lg transition-colors duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for Projects
          </motion.div>
        </div>
      </div>

      {/* Bagian Kanan: Actions (Button) */}
      <div className="flex flex-col sm:flex-row items-center gap-4 z-10">
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gray-900 text-white font-bold text-lg shadow-xl hover:shadow-lg transition-all duration-300"
        >
          <div className="flex items-center gap-2 white dark:text-gray-900 text-sm font-medium">

              <img 
                src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                alt="WhatsApp" 
                className="w-4 h-4 invert dark:invert-0 transition-filter duration-300" 
                />
                <span className="hidden sm:inline font-lg text-white dark:text-gray-300 transition-colors duration-300">
                Let's Talk
                </span>
          </div>
        </motion.a>

        <div className="p-1 rounded-2xl bg-white/5 border border-gray-200 backdrop-blur-md transition-colors duration-300">
          <ShareButton />
        </div>
      </div>

      {/* Dekorasi Background Mewah (Subtle Glow) */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-teal/10 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
    </motion.header>
  );
}