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
    <div className="relative min-h-screen overflow-hidden bg-black/50 backdrop-blur-xl transition-colors duration-400 rounded-3xl">
      <motion.div
        className="relative z-10 space-y-10 md:space-y-12 px-6 pt-4 pb-10 max-w-6xl mx-auto bg-black/60 rounded-3xl backdrop-blur-lg transition-colors duration-400"
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
          className="
          grid
          grid-cols-1
          lg:grid-cols-[1.4fr_1fr]
          gap-6 md:gap-8
          items-stretch
          "
          variants={container}
        >

          {/* ABOUT */}
        <motion.div variants={fadeUp}>
          <GlossyCard
            accent="teal"
            elevated
            className="
            group
            h-full
            p-6 md:p-8
            flex flex-col
            justify-between
            transition-all
            duration-300
            "
          >
            <div className="space-y-4">

              <h2 className="
              text-xl md:text-3xl
              font-bold
              text-white
              ">
                About Me
              </h2>

              <p className="text-muted text-sm md:text-base leading-relaxed max-w-prose">
                I’m <strong>Mugni Hidayat</strong> — an{" "}
                <strong>Odoo Developer</strong> focused on building
                custom ERP solutions that align technology with real
                business operations.
              </p>

              <p className="text-muted text-sm md:text-base leading-relaxed max-w-prose">
                My work includes <strong>custom module development</strong>,
                <strong> workflow automation</strong>, and
                <strong> advanced reporting</strong> — helping businesses
                improve efficiency and gain better operational visibility.
              </p>

            </div>

            <div className="mt-6">
              <button
                onClick={() => handleNavigate("/about")}
                className="
                btn-primary
                text-sm md:text-base
                font-semibold
                px-5 md:px-6
                py-2.5
                "
              >
                Learn More →
              </button>
            </div>

          </GlossyCard>
        </motion.div>
          {/* CONTACT */}
          <motion.div variants={fadeUp}>
            <ContactCard />
          </motion.div>

        </motion.div>

        {/* Services Section */}
       <motion.div variants={fadeUp}>
        <GlossyCard
          accent="orange"
          elevated
          className="
          p-6 md:p-10
          text-center
          flex flex-col
          items-center
          justify-center
          space-y-4
          "
        >
          <h3 className="
          text-xl md:text-2xl
          font-bold
          text-white
          ">
            Explore My Services
          </h3>

          <p className="
          text-muted
          text-sm md:text-base
          leading-relaxed
          max-w-xl
          ">
            From <strong className="">ERP Customization</strong> and{" "}
            <strong className="">System Integration</strong> to{" "}
            <strong className="">Automation & Reporting</strong>,
            I help businesses streamline operations and scale efficiently.
          </p>

          <button
            onClick={() => handleNavigate("/services")}
            className="
            btn-primary
            text-sm md:text-base
            font-semibold
            px-6 py-2.5
            mt-2
            "
          >
            Check Services →
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