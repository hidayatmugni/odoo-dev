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
      className="space-y-10 md:space-y-10 text-text transition-colors duration-400 bg-black/60 backdrop-blur-xl rounded-3xl p-6 md:p-8"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* INTRO */}
      <motion.div variants={fadeUp} className="flex flex-col">
        <GlossyCard accent="teal" elevated className="p-8 md:p-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Build Something Scalable
          </h2>

          <p className="text-lg text-text/70 max-w-2xl">
            I help businesses implement structured, scalable Odoo systems
            tailored to real operational needs — not generic templates.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
            <span className="badge-status badge-done">Custom Modules</span>
            <span className="badge-status badge-progress">Workflow Automation</span>
            <span className="badge-status badge-review">ERP Optimization</span>
          </div>
        </GlossyCard>
      </motion.div>

      {/* CONTACT SECTION */}
      <motion.section
        variants={container}
        className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12"
      >
        {/* LEFT */}
        <motion.div variants={fadeUp} className="md:w-[35%] w-full">
          <GlossyCard
            accent="orange"
            elevated
            className="p-8 h-full flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-gradient">
                Contact Information
              </h3>

              <ul className="flex flex-col gap-4">
                {contactItems.map((item, idx) => {
                  const itemAccents = ["teal", "purple", "blue", "pink"];
                  const itemAccent = itemAccents[idx % itemAccents.length];

                  return (
                    <motion.div key={item.label} variants={fadeUp}>
                      <GlossyCard accent={itemAccent} className="p-0">
                        <li className="group relative flex items-center gap-4 px-5 py-4 list-none transition-all duration-200">
                          <div className="flex-shrink-0 z-10">
                            {item.icon}
                          </div>

                          <div className="flex flex-col leading-tight z-10">
                            <span className="text-xs text-text/50 font-semibold uppercase tracking-wide">
                              {item.label}
                            </span>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm md:text-base font-medium hover:opacity-70 transition"
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

              {/* TRUST BLOCK */}
              <div className="mt-10 space-y-3 text-sm text-text/60">
                <p>✔ Available for remote collaboration</p>
                <p>✔ Average response time: &lt; 24 hours</p>
                <p>✔ Experience in manufacturing & distribution ERP</p>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-8">
              <motion.a
                whileHover={{ scale: 1.08 }}
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-text/20 hover:bg-text/5 transition"
              >
                <FaLinkedin className="text-blue-400 w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-text/20 hover:bg-text/5 transition"
              >
                <FaPhoneAlt className="text-green-400 w-5 h-5" />
              </motion.a>
            </div>
          </GlossyCard>
        </motion.div>

        {/* RIGHT */}
        <motion.div variants={fadeUp} className="md:w-[65%] w-full">
          <GlossyCard
            accent="purple"
            elevated
            className="p-8 md:p-10 h-full"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              How We Can Work Together
            </h3>

            <div className="space-y-6 text-text/70 text-sm md:text-base leading-relaxed">
              <div>
                <strong className="block mb-1">
                  01 · Discovery & Workflow Mapping
                </strong>
                Understanding your operational structure, system gaps, and
                optimization opportunities.
              </div>

              <div>
                <strong className="block mb-1">
                  02 · Custom Development
                </strong>
                Building tailored Odoo modules aligned with real business
                processes.
              </div>

              <div>
                <strong className="block mb-1">
                  03 · Integration & Automation
                </strong>
                Connecting systems, automating workflows, and improving
                reporting visibility.
              </div>

              <div>
                <strong className="block mb-1">
                  04 · Deployment & Long-Term Support
                </strong>
                Structured implementation with documentation and ongoing
                system refinement.
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${contact.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Start a Conversation →
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="btn-secondary"
              >
                Send Email
              </a>
            </div>

            <p className="mt-6 text-xs text-text/50">
              Based in Indonesia · Working with clients globally
            </p>
          </GlossyCard>
        </motion.div>
      </motion.section>
    </motion.div>
  );
}