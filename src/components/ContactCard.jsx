// src/components/ContactCard.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { FaPhoneAlt, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

/**
 * ContactCard:
 * - Clean digital business-card style contact list
 * - Uses react-icons for modern icons
 * - Data dynamically fetched from AppContext
 * - Responsive, minimal, and elegant
 */
export default function ContactCard() {
  const { contact } = useContext(AppContext);

  const contactItems = [
    {
      label: "Phone Bussinees",
      value: contact.phone,
      href: `https://wa.me/${contact.phone.replace(/\D/g, "")}`,
      icon: <FaPhoneAlt className="text-odoo w-5 h-5" />,
    },
    {
      label: "Phone",
      value: contact.phoneSecondary,
      href: `https://wa.me/${contact.phoneSecondary.replace(/\D/g, "")}`,
      icon: <FaPhoneAlt className="text-odoo w-5 h-5" />,
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: contact.linkedin,
      icon: <FaLinkedin className="text-odoo w-5 h-5" />,
    },
    {
      label: "Email",
      value: "vanessa_tawil@hotmail.com",
      href: "mailto:vanessa_tawil@hotmail.com",
      icon: <MdEmail className="text-odoo w-5 h-5" />,
    },
  ];

  return (
    <div className="mt-0 w-full md:max-w-lg mx-auto bg-white/60 backdrop-blur-md border border-odoo/10 rounded-2xl shadow-md p-6">
      <h3 className="text-xl font-semibold text-odoo mb-5 text-center md:text-left">
        Contact Information
      </h3>

      <ul className="flex flex-col gap-3">
        {contactItems.map((item) => (
          <li
            key={item.label}
            className="group flex items-center gap-4 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-odoo/40 hover:bg-odoo/5 transition-all duration-200 shadow-sm relative"
          >
            <div className="flex-shrink-0 z-10">{item.icon}</div>
            <div className="flex flex-col leading-tight z-10">
              <span className="text-xs text-gray-500">{item.label}</span>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-gray-800 hover:text-odoo font-medium cursor-pointer"
              >
                {item.value}
              </a>
            </div>

            {/* Invisible full-overlay anchor for easier tap target */}
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-0"
            ></a>
          </li>

        ))}
      </ul>
    </div>
  );
}
