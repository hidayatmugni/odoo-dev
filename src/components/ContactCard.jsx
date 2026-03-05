// src/components/ContactCard.jsx
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
      icon: (
        <FaGithub className="text-gray-200 w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125" />
      ),
    },
    {
      label: "Instagram",
      value: `@${contact.instagram}`,
      href: contact.instagram
        ? `https://www.instagram.com/${contact.instagram}`
        : "#",
      icon: (
        <FaInstagram className="text-[#E4405F] w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125" />
      ),
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: contact.linkedin,
      icon: (
        <FaLinkedin className="text-[#0A66C2] w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125" />
      ),
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: (
        <MdEmail className="text-[#EA4335] w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125" />
      ),
    },
  ];

  return (
    <GlossyCard accent="purple" elevated className="p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full"
      >
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-white text-center md:text-left">
          Social Media
        </h3>

        <ul className="flex flex-col gap-3">

          {contactItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              viewport={{ once: true }}
            >

              <GlossyCard
                accent={["teal", "orange", "blue", "pink"][index % 4]}
                className="p-0 overflow-hidden"
              >

                <li className="
                group
                flex items-center
                gap-4
                px-4 py-3
                relative
                list-none
                transition-all
                duration-300
                ">

                  {/* ICON */}
                  <div className="flex-shrink-0 z-10">
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col leading-tight z-10">

                    <span className="
                    text-sm
                    uppercase
                    tracking-wider
                    text-muted
                    font-semibold
                    ">
                      {item.label}
                    </span>

                    <span className="
                    text-xs md:text-base
                    text-gray-200
                    group-hover:text-white
                    transition-colors
                    duration-300
                    ">
                      {item.value}
                    </span>

                  </div>

                  {/* FULL CARD LINK */}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-0"
                  />

                </li>

              </GlossyCard>

            </motion.div>
          ))}

        </ul>
      </motion.div>
    </GlossyCard>
  );
}