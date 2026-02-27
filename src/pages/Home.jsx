/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import GlossyCard from "../components/GlossyCard";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 400);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="relative z-10 space-y-10 md:space-y-12 px-6 pt-4 pb-10 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.div variants={fadeUp}>
          <Header />
        </motion.div>

        {/* About + Contact Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
        >
          {/* Contact */}
          <motion.div
            variants={fadeUp}
            className="md:order-2 flex flex-col gap-6"
          >
            <ContactCard />
          </motion.div>

          {/* About */}
          <motion.div
            variants={fadeUp}
            className="order-2 md:order-1 md:col-span-2"
          >
            <GlossyCard
              accent="teal"
              elevated
              className="p-6 md:p-8 flex flex-col justify-between h-full"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white">
                  About Me
                </h2>

                <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
                  I’m <strong>Mugni Hidayat</strong> — an{" "}
                  <strong>Odoo Developer</strong> focused on building
                  custom ERP solutions that align technology with real
                  business operations.
                </p>

                <p className="text-muted text-sm md:text-base leading-relaxed">
                  My work includes <strong>custom module development</strong>,{" "}
                  <strong>workflow automation</strong>, and{" "}
                  <strong>advanced reporting</strong> — helping businesses
                  improve efficiency and gain better operational visibility.
                </p>
              </div>

              <div className="mt-6">
                <button
                  onClick={() => handleNavigate("/about")}
                  className="btn-primary text-sm md:text-base font-medium"
                >
                  Learn More →
                </button>
              </div>
            </GlossyCard>
          </motion.div>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={fadeUp}>
          <GlossyCard
            accent="orange"
            elevated
            className="p-6 md:p-8 text-center"
          >
            <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-3">
              Explore My Services
            </h3>

            <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
              From <strong>ERP Customization</strong> and{" "}
              <strong>System Integration</strong> to{" "}
              <strong>Automation & Reporting</strong>, I help businesses
              streamline operations and scale efficiently.
            </p>

            <button
              onClick={() => handleNavigate("/services")}
              className="btn-primary text-sm md:text-base font-medium px-5 py-2"
            >
              Check More →
            </button>
          </GlossyCard>
        </motion.div>

        {/* Footer */}
        <motion.div variants={fadeUp}>
          <Footer />
        </motion.div>
      </motion.div>
    </div>
  );
}