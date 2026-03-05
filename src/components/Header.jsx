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
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="
      relative overflow-hidden
      flex flex-col md:flex-row
      items-center md:items-center
      justify-between
      gap-8
      p-6 md:p-12
      rounded-[2rem]
      bg-black/40
      backdrop-blur-2xl
      border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.7)]
      "
    >

      {/* LEFT SIDE */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left z-10">

        <div className="relative group">
          <img
            src={photo}
            alt={name}
            className="
            w-24 h-24
            md:w-40 md:h-40
            rounded-full
            object-cover
            border border-white/20
            shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            "
          />

          <div className="absolute inset-0 rounded-full bg-accent-teal/30 blur-3xl opacity-40 -z-10" />
        </div>

        <div className="space-y-2">

          <h1 className="
          text-3xl
          md:text-6xl
          font-extrabold
          tracking-tight
          text-white
          ">
            {name}
          </h1>

          <p className="
          text-sm
          md:text-xl
          text-gray-300
          max-w-md
          ">
            {title}
          </p>

          <div className="
          inline-flex items-center
          mt-3
          gap-2
          px-3 py-1
          rounded-full
          text-xs md:text-sm
          font-semibold
          text-green-300
          bg-green-500/10
          border border-green-400/20
          backdrop-blur-md
          ">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
            Available for Projects
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 z-10">

        {/* WhatsApp Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
          flex items-center justify-center
          gap-2
          h-11 md:h-12
          px-5 md:px-7
          rounded-xl md:rounded-2xl
          font-semibold
          text-sm md:text-base
          text-accent-teal
          bg-gradient-to-b from-white/30 via-white/10 to-transparent
          border border-white/10
          backdrop-blur-xl
          shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_10px_30px_rgba(0,0,0,0.7)]
          "
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-4 h-4"
          />

          <span>
            Let's Talk
          </span>
        </motion.a>

        {/* Share Button */}
        <ShareButton />

      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-accent-teal/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />

    </motion.header>
  );
}