import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaGlobe, FaChartLine } from "react-icons/fa";

/**
 * About Page — Elegant & Animated
 * - Uses stable fade-up animation with stagger
 * - Smooth load (no delay bugs)
 * - Consistent with Home & Contact animation logic
 */

export default function About() {
  // Animation variants
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
      className="relative overflow-hidden bg-gradient-to-br from-white via-white to-odoo/5 rounded-3xl border border-odoo/10 shadow-lg p-8 md:p-12 max-w-5xl mx-auto text-gray-800"
      variants={container}
      initial="hidden"
      animate="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(113,75,103,0.08),transparent_70%)] pointer-events-none" />

      {/* Header / Profile */}
      <motion.div
        variants={fadeUp}
        className="relative z-10 text-center md:text-left mb-8"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-5">
          <div className="w-24 h-24 rounded-full border-2 border-odoo shadow-sm overflow-hidden">
            <img
              src="../assets/photo.jpeg"
              alt="Vanessa Al Tawil"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-odoo mb-2">
              Vanessa Al Tawil
            </h2>
            <p className="text-gray-700 text-base md:text-lg">
              Certified FMVA® Financial Analyst · Odoo Partner · ERP Consultant
            </p>
          </div>
        </div>
        <div className="w-20 h-[3px] bg-odoo/80 mt-5 rounded-full mx-auto md:mx-0"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        className="relative z-10 space-y-6 md:space-y-7 leading-relaxed"
      >
        <motion.p variants={fadeUp} className="text-base md:text-lg">
          I am <span className="font-semibold text-odoo">Vanessa Al Tawil</span>,
          a Certified <strong>FMVA® Financial Analyst</strong>, Official{" "}
          <strong>Odoo Partner</strong>, and Functional ERP Consultant holding a{" "}
          <strong>European Master’s in Financial Markets and Economic Analysis</strong>.
        </motion.p>

        <motion.p variants={fadeUp} className="text-base md:text-lg">
          Together with my team of experienced finance and ERP professionals, we
          collaborate with organizations across{" "}
          <strong>Europe, the Middle East, and Asia</strong> to strengthen
          financial governance, streamline operations, and accelerate digital
          transformation.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl border border-odoo/10 shadow-sm"
        >
          <FaUserTie className="text-odoo text-2xl mt-1" />
          <p className="text-base md:text-lg text-gray-700">
            As an <strong className="text-odoo">Odoo Partner</strong>, we lead end-to-end ERP
            implementations integrating{" "}
            <em>Accounting, Sales, Purchasing, Inventory, Manufacturing, HR, and CRM</em>{" "}
            into one intelligent, cohesive platform.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl border border-odoo/10 shadow-sm"
        >
          <FaChartLine className="text-odoo text-2xl mt-1" />
          <p className="text-base md:text-lg text-gray-700">
            Our core strengths include{" "}
            <strong>financial process automation, cost-control frameworks, and
            multi-company consolidation</strong>, powered by{" "}
            <strong className="text-odoo">AI-driven analytics</strong> that deliver predictive
            insights and enhance performance visibility.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex items-start gap-3 bg-white/60 p-4 rounded-2xl border border-odoo/10 shadow-sm"
        >
          <FaGlobe className="text-odoo text-2xl mt-1" />
          <p className="text-base md:text-lg text-gray-700">
            We operate with precision, transparency, and strategic focus — ensuring
            every system we build becomes a foundation for sustainable growth.{" "}
            <span className="text-odoo font-medium">
              Our mission is to transform data into clarity and clarity into
              long-term competitive advantage.
            </span>
          </p>
        </motion.div>
      </motion.div>

      {/* Accent divider */}
      <motion.div
        variants={fadeUp}
        className="mt-10 h-[2px] w-full bg-gradient-to-r from-odoo/20 via-odoo/60 to-transparent rounded-full"
      />
    </motion.section>
  );
}
