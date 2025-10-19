// src/components/Header.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ShareButton from "./ShareButton";
import { motion } from "framer-motion";

/**
 * Header:
 * - Responsive introduction banner for personal brand
 * - Shows profile photo, name, title, partner badge
 * - Modern CTA: "Let's Talk on WhatsApp"
 * - Clean typography for international audience (UAE/KSA)
 */

export default function Header({
  photo = "../assets/photo.jpeg",
  name = "VANESSA AL TAWIL",
  title = "ERP Functional & Financial Consultant",
}) {
  const { contact } = useContext(AppContext);

  const whatsappNumber = contact.phone?.replace("+", "").replace(/\s/g, "");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello%20Vanessa%2C%20I%27m%20interested%20in%20your%20services.`;

  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 p-6 md:p-8 rounded-3xl card-glass text-gray-800"
    >
      {/* Profile info */}
      <div className="flex items-center flex-col md:flex-row gap-5 text-center md:text-left">
        <img
          src={photo}
          alt={name}
          className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-odoo shadow-md hover:scale-105 transition-transform duration-300"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-odoo tracking-tight">
            {name}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-1">{title}</p>
          <a
            href="#"
            rel="noreferrer"
            className="inline-block mt-3 text-xs md:text-sm font-medium px-3 py-1 rounded-full bg-odoo/10 text-odoo border border-odoo/20 hover:bg-odoo hover:text-white transition-all duration-200"
          >
            🟣 Odoo Partner
          </a>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap justify-center md:justify-end gap-3">
        {/* WhatsApp button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm md:text-base font-medium bg-gradient-to-r from-odoo to-odoo/80 text-white shadow-lg hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-5 h-5"
          />
          Let’s Talk on WhatsApp
        </a>


        <ShareButton />
      </div>
    </motion.header>
  );
}
