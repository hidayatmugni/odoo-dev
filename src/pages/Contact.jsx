/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { FaPhoneAlt, FaLinkedin, FaGlobe } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import GlossyCard from "../components/GlossyCard";
import ContactCard from "../components/ContactCard";

export default function Contact() {
  const { contact } = useContext(AppContext);

  const contactItems = [
    {
      label: "WhatsApp",
      value: contact.phone,
      href: `https://wa.me/${contact.phone.replace(/\D/g, "")}`,
      icon: <FaPhoneAlt className="text-green-400 w-5 h-5" />,
    },
    {
      label: "Instagram",
      value: `@${contact.instagram}`,
      href: contact.instagram
        ? `https://www.instagram.com/${contact.instagram}`
        : "#",
      icon: (
        <FaInstagram className="w-5 h-5 bg-gradient-to-r from-pink-500 via-orange-400 to-purple-500 text-transparent bg-clip-text" />
      ),
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: contact.linkedin,
      icon: <FaLinkedin className="text-blue-400 w-5 h-5" />,
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <MdEmail className="text-red-400 w-5 h-5" />,
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
      className="space-y-10 md:space-y-14 text-text dark:text-white lg:mt-[80px] transition-colors duration-400"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* INTRO */}
      <motion.div variants={fadeUp} className="flex flex-col">
        <GlossyCard accent="teal" elevated className="p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left text-gradient">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-text/70 dark:text-white/70 leading-relaxed">
            I focus on <strong>Odoo Development</strong>,{" "}
            <strong>ERP Customization</strong>, and{" "}
            <strong>Workflow Automation</strong>.  
            Feel free to reach out for collaboration or project discussion.
          </p>
        </GlossyCard>
      </motion.div>

      {/* CONTACT SECTION */}
      <motion.section
        variants={container}
        className="flex flex-col md:flex-row items-stretch gap-8 md:gap-10"
      >
        {/* LEFT */}
        <motion.div variants={fadeUp} className="md:w-[35%] w-full">
          <GlossyCard accent="orange" elevated className="p-6 md:p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center md:text-left text-gradient">
                Contact Information
              </h3>

              <ul className="flex flex-col gap-4">
                {contactItems.map((item, idx) => {
                  const itemAccents = ["teal", "purple", "blue", "pink"];
                  const itemAccent = itemAccents[idx % itemAccents.length];
                  
                  return (
                    <motion.div key={item.label} variants={fadeUp}>
                      <GlossyCard
                        accent={itemAccent}
                        className="p-0"
                      >
                        <li className="group relative flex items-center gap-4 px-4 py-3 transition-all duration-200 list-none"
                        >
                          <div className="flex-shrink-0 z-10">{item.icon}</div>
                          <div className="flex flex-col leading-tight z-10">
                            <span className="text-xs text-text/50 dark:text-white/50 font-semibold">{item.label}</span>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm md:text-base text-text dark:text-white hover:text-text/70 dark:hover:text-white/80 font-medium cursor-pointer transition-colors duration-300"
                            >
                              {item.value}
                            </a>
                          </div>

                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0"
                          />
                        </li>
                      </GlossyCard>
                    </motion.div>
                  );
                })}
              </ul>
            </div>

            {/* SOCIAL QUICK */}
            <div className="flex justify-center md:justify-start gap-5 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-text/20 dark:border-white/20 hover:bg-text/5 dark:hover:bg-white/10 transition-colors duration-300"
              >
                <FaLinkedin className="text-blue-400 w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-text/20 dark:border-white/20 hover:bg-text/5 dark:hover:bg-white/10 transition-colors duration-300"
              >
                <FaPhoneAlt className="text-green-400 w-5 h-5" />
              </motion.a>
            </div>
          </GlossyCard>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={fadeUp} className="md:w-[70%] w-full">
            <GlossyCard accent="pink" elevated className="p-6 md:p-8 transition-colors duration-400">
            <div className="flex flex-col md:flex-row items-center gap-6">

              {/* LEFT VISUAL */}
              <div className="w-full md:w-1/2">
                <div className="w-full h-48 bg-text/5 dark:bg-white/5 rounded-2xl border border-text/20 dark:border-white/10 flex flex-col items-center justify-center text-text/40 dark:text-white/40 text-sm">
                  ERP Systems
                  <span className="text-xs text-text/30 dark:text-white/30 mt-1">Built for Real Operations</span>
                </div>
              </div>

              {/* TEXT */}
              <div className="md:w-1/2 flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <FaGlobe className="text-text/70 dark:text-white/70 w-5 h-5" />
                  <h3 className="text-xl md:text-2xl font-semibold text-gradient">
                    What I Build
                  </h3>
                </div>

                <p className="text-sm md:text-base text-text/70 dark:text-white/70 leading-relaxed">
                  I design and develop Odoo systems tailored to real business workflows —
                  from automation and custom modules to operational reporting.
                </p>

                <p className="text-sm md:text-base text-text/60 dark:text-white/50 leading-relaxed">
                  My focus is turning complexity into structured, scalable ERP solutions.
                </p>
              </div>
            </div>
          </GlossyCard>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}