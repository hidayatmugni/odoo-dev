import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../context/AppContext";
import { FaPhoneAlt, FaLinkedin, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const { contact } = useContext(AppContext);

  const contactItems = [
    {
      label: "Business Phone",
      value: contact.phone,
      href: `https://wa.me/${contact.phone.replace(/\D/g, "")}`,
      icon: <FaPhoneAlt className="text-odoo w-5 h-5" />,
    },
    {
      label: "Secondary Phone",
      value: contact.phoneSecondary,
      href: contact.phoneSecondary
        ? `https://wa.me/${contact.phoneSecondary.replace(/\D/g, "")}`
        : "#",
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

  // Animation variants (simple + consistent)
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
      className="space-y-10 md:space-y-14 text-gray-900"
      initial="hidden"
      animate="show"
      variants={container}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* INTRO */}
      <motion.div
        variants={fadeUp}
        className="card-glass p-6 md:p-8 rounded-2xl border border-odoo/10 shadow-sm"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-odoo mb-4 text-center md:text-left">
          Get in Touch
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          I specialize in <strong>ERP Functional Consulting</strong>,{" "}
          <strong>Financial System Analysis</strong>, and{" "}
          <strong>Odoo Implementation Support</strong>.  
          You can reach out directly using the contact information below.
        </p>
      </motion.div>

      {/* GRID: CONTACT LEFT - GLOBE RIGHT */}
      <motion.section
        variants={container}
        className="flex flex-col md:flex-row items-stretch gap-8 md:gap-10"
      >
        {/* CONTACT CARD (LEFT) */}
        <motion.div variants={fadeUp} className="md:w-[30%] w-full">
          <div className="relative bg-white/70 backdrop-blur-md border border-odoo/10 rounded-2xl shadow-md p-6 md:p-8 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-odoo mb-6 text-center md:text-left">
                Contact Information
              </h3>

              <ul className="flex flex-col gap-4">
                {contactItems.map((item) => (
                  <motion.li
                    key={item.label}
                    variants={fadeUp}
                    className="group relative flex items-center gap-4 px-4 py-3 bg-white border border-gray-200 rounded-xl 
                               hover:border-odoo/40 hover:bg-odoo/5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
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
                    {/* Full clickable overlay */}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 z-0"
                    ></a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center md:justify-start gap-5 mt-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-gray-300 hover:border-odoo hover:bg-odoo hover:text-white transition-all shadow-sm"
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-gray-300 hover:border-green-500 hover:bg-green-500 hover:text-white transition-all shadow-sm"
              >
                <FaPhoneAlt className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* GLOBE (RIGHT) */}
        <motion.div
          variants={fadeUp}
          className="md:w-[70%] w-full p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/70 to-odoo/5 
                     border border-odoo/10 shadow-sm backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <img
                src="https://i.pinimg.com/736x/de/0e/f4/de0ef406c961b8e7e0773c3fed7a453d.jpg"
                alt="Regional Coverage"
                className="rounded-2xl object-cover shadow-md border border-gray-200"
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-3">
              <div className="flex items-center gap-2 mb-1">
                <FaGlobe className="text-odoo w-5 h-5" />
                <h3 className="text-xl md:text-2xl font-semibold text-odoo">
                  Regional Coverage
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                We provide consulting and implementation services across{" "}
                <strong>UAE</strong>, <strong>KSA</strong>, <strong>Asia</strong>, and{" "}
                <strong>Europe</strong>.  
                Our work blends global best practices with local compliance to ensure measurable success.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}
