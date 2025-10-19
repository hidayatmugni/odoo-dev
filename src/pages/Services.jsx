import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModuleMarquee from "../components/ModuleMarquee";

const services = [
  {
    id: 1,
    title: "ERP Implementation & Consulting",
    summary: "Implement and optimize Odoo across all key business modules.",
    points: [
      "Full project setup from analysis to go-live",
      "Process design and automation",
      "Data migration, testing, and end-user training",
    ],
    quote: "Because your ERP should work harder than you do.",
  },
  {
    id: 2,
    title: "Financial Advisory & Modeling",
    summary: "Empowering smarter business decisions through accurate financial insights.",
    points: [
      "Build accurate 3–5 year financial models in Excel or Odoo",
      "Prepare feasibility studies and investment decks",
      "Design cost-control and pricing structures that support growth",
    ],
    quote: "No spreadsheets for show — only ones that speak business.",
  },
  {
    id: 3,
    title: "ERP Optimization & Support",
    summary: "Already using Odoo? Let’s make it faster, cleaner, and more efficient.",
    points: [
      "Audit and improve existing workflows",
      "Resolve configuration issues and upgrade versions",
      "Retrain your team for higher efficiency",
    ],
    quote: "Less chaos. More clarity. Your system, finally under control.",
  },
  {
    id: 4,
    title: "Courses & Coaching",
    summary: "Learn ERP and finance through real-world Odoo business cases.",
    points: [
      "Odoo Functional Consultant — from setup to automation",
      "Finance & Modeling — build projections with confidence",
      "ERP for Business Owners — structure and scale operations",
    ],
    quote: "Learn from real projects, not theory. Real skills. Real cases. Zero fluff.",
  },
  {
    id: 5,
    title: "Digital Transformation Strategy",
    summary: "Go beyond ERP — map, automate, and integrate your business systems.",
    points: [
      "Business process mapping and automation design",
      "Integration with CRM, BI, and analytics tools",
      "Change management and rollout planning",
    ],
    quote: "Let’s turn 'someday' into a strategy.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="space-y-10 text-gray-900"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      {/* HEADER */}
      <motion.div
        variants={fadeUp}
        custom={0}
        className="text-center space-y-2"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-odoo">
          Services
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          Explore how we help businesses transform with Odoo, Finance, and Strategy.
        </p>
      </motion.div>

      {/* MARQUEE */}
      <motion.div
        variants={fadeUp}
        custom={1}
        className="space-y-3"
      >
        <ModuleMarquee speed="slow" />
        <ModuleMarquee reverse speed="slow" />
      </motion.div>

      {/* SERVICE CARDS */}
      <motion.div
        variants={fadeUp}
        custom={2}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            variants={fadeUp}
            custom={i + 3}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 rounded-2xl bg-white/70 border border-odoo/10 shadow-sm backdrop-blur-md cursor-pointer hover:shadow-lg hover:bg-odoo/5 transition-all"
            onClick={() => setSelected(service)}
          >
            <h3 className="text-lg md:text-xl font-semibold text-odoo mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {service.summary}
            </p>
            <p className="text-xs italic text-gray-500">Tap to read more</p>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              onClick={() => setSelected(null)}
            ></div>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 
                        w-full max-w-[90%] sm:max-w-[500px] md:max-w-[650px]
                        max-h-[85vh] overflow-y-auto shadow-2xl
                        scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-odoo transition-colors text-xl"
                aria-label="Close modal"
              >
                ✕
              </button>

              <h3 className="text-2xl md:text-3xl font-bold text-odoo mb-4">
                {selected.title}
              </h3>
              <p className="text-gray-700 mb-4">{selected.summary}</p>

              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {selected.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <blockquote className="mt-4 text-odoo italic text-sm border-l-4 border-odoo pl-3">
                {selected.quote}
              </blockquote>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
