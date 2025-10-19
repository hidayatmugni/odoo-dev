import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ContactCard from "../components/ContactCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // Simpler animation variants (no delay stacking)
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
    <motion.div
      className="space-y-10 md:space-y-12"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {/* HEADER */}
      <motion.div variants={fadeUp}>
        <Header />
      </motion.div>

      {/* GRID SECTION */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        variants={container}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* CONTACT */}
        <motion.div variants={fadeUp} className="md:order-2 flex flex-col gap-6">
          <ContactCard />
        </motion.div>

        {/* ABOUT PREVIEW */}
        <motion.div
          variants={fadeUp}
          className="order-2 md:order-1 md:col-span-2 card-glass rounded-2xl border border-odoo/10 shadow-sm backdrop-blur-md p-6 md:p-8 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-odoo mb-3">
              About Me
            </h2>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              I’m <strong>Vanessa Al Tawil</strong> — an{" "}
              <strong>Odoo Partner</strong> and{" "}
              <strong>Certified FMVA® Financial Analyst</strong>.  
              With a European Master’s in Financial Markets, I help businesses
              across <strong>Europe</strong>, the{" "}
              <strong>Middle East</strong>, and{" "}
              <strong>Asia</strong> transform their operations through ERP,
              automation, and finance excellence.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              My work focuses on <strong>financial process design</strong>,{" "}
              <strong>ERP implementation</strong>, and{" "}
              <strong>digital transformation</strong> — turning complexity into clarity.
            </p>
          </div>

          <div className="mt-6">
            <button
              onClick={() => handleNavigate("/about")}
              className="text-sm md:text-base font-medium text-odoo border border-odoo/50 rounded-full px-4 py-2 hover:bg-odoo hover:text-white transition-all duration-200"
            >
              Learn More →
            </button>
          </div>
        </motion.div>
      </motion.div>

      {/* SERVICES PREVIEW */}
      <motion.div
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
        className="card-glass p-6 md:p-8 rounded-2xl border border-odoo/10 shadow-sm backdrop-blur-md text-center"
      >
        <h3 className="text-xl md:text-2xl font-bold text-odoo mb-3">
          Explore My Services
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          From <strong>ERP Implementation</strong> and{" "}
          <strong>Financial Modeling</strong> to{" "}
          <strong>Digital Transformation</strong>,  
          we help your business grow efficiently and sustainably.
        </p>

        <button
          onClick={() => handleNavigate("/services")}
          className="text-sm md:text-base font-medium border border-odoo/50 text-odoo rounded-full px-5 py-2 hover:bg-odoo hover:text-white transition-all duration-200"
        >
          Check More →
        </button>
      </motion.div>

      {/* FOOTER */}
      <motion.div variants={fadeUp}>
        <Footer />
      </motion.div>
    </motion.div>
  );
}
