/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaGlobe, FaChartLine } from "react-icons/fa";
import GlossyCard from "../components/GlossyCard";

export default function About() {
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
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.2 }}
      className="max-w-5xl mx-auto bg-black/60 backdrop-blur-xl rounded-3xl p-6 md:p-8 transition-colors duration-400"
    >
      <GlossyCard accent="teal" elevated className="p-8 md:p-12">
      <motion.div
        variants={fadeUp}
        className="relative z-10 text-center md:text-left mb-8"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
          <div className="w-24 h-24 rounded-full glass-border shadow-sm overflow-hidden">
            <img
              src="../assets/photo.jpeg"
              alt="Mugni Hidayat"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Mugni Hidayat
            </h2>
            <p className="text-muted text-base md:text-lg">
              Odoo Developer · ERP Customization Specialist · System Integrator
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        className="relative z-10 space-y-6 md:space-y-7 leading-relaxed"
      >
        <motion.p variants={fadeUp} className="text-base md:text-lg text-muted">
          I am <span className="font-semibold text-text dark:text-white">Mugni Hidayat</span>,
          an <strong>Odoo Developer</strong> focused on building scalable ERP
          customizations and automation solutions tailored to real operational
          needs.
        </motion.p>

        <motion.p variants={fadeUp} className="text-base md:text-lg text-muted">
          My expertise lies in developing custom modules, integrating systems,
          and transforming complex business workflows into efficient,
          data-driven ERP processes.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-start gap-3">
          <GlossyCard accent="orange" className="p-4 w-full flex items-start gap-3">
            <FaUserTie className="text-orange-400 text-2xl mt-1 flex-shrink-0" />
            <p className="text-base md:text-lg text-text/70 dark:text-white/70">
              I specialize in end-to-end ERP customization including
              <em> Inventory, Manufacturing, Sales, Reporting, and Workflow Automation</em>
              to help businesses operate with better visibility and control.
            </p>
          </GlossyCard>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-start gap-3">
          <GlossyCard accent="purple" className="p-4 w-full flex items-start gap-3">
            <FaChartLine className="text-purple-400 text-2xl mt-1 flex-shrink-0" />
            <p className="text-base md:text-lg text-muted">
              My work often involves building
              <strong> custom reports, automation logic, and system integrations</strong>
              that turn operational data into meaningful insights.
            </p>
          </GlossyCard>
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-start gap-3">
          <GlossyCard accent="blue" className="p-4 w-full flex items-start gap-3">
            <FaGlobe className="text-blue-400 text-2xl mt-1 flex-shrink-0" />
            <p className="text-base md:text-lg text-muted">
              My mission is to simplify complexity — building systems that are
              reliable, maintainable, and aligned with real business operations.
            </p>
          </GlossyCard>
        </motion.div>
      </motion.div>
      </GlossyCard>
    </motion.section>
  );
}