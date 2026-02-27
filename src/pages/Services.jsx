/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ModuleMarquee from "../components/ModuleMarquee";
import GlossyCard from "../components/GlossyCard";

const services = [
  {
    id: 1,
    title: "Odoo Custom Module Development",
    summary: "Build tailored Odoo modules aligned with real business workflows.",
    points: [
      "Design and develop custom business logic",
      "Extend standard Odoo modules",
      "Create scalable and maintainable solutions",
    ],
    quote: "Because every business deserves systems built for its reality.",
  },
  {
    id: 2,
    title: "ERP Workflow Automation",
    summary: "Automate repetitive operations and streamline internal processes.",
    points: [
      "Automate stock, manufacturing, and operational flows",
      "Reduce manual work through smart logic",
      "Improve system accuracy and efficiency",
    ],
    quote: "Automation isn't luxury — it's operational survival.",
  },
  {
    id: 3,
    title: "Custom Reporting & Data Insights",
    summary: "Transform operational data into meaningful business insights.",
    points: [
      "Develop Excel & system-based reports",
      "Build dynamic operational dashboards",
      "Enable better decision making through structured data",
    ],
    quote: "Good decisions start with good data.",
  },
  {
    id: 4,
    title: "System Integration",
    summary: "Connect Odoo with external platforms and tools.",
    points: [
      "API integrations with marketplaces & tools",
      "Synchronize operational systems",
      "Ensure consistent data flow across platforms",
    ],
    quote: "Your systems should talk — not conflict.",
  },
  {
    id: 5,
    title: "ERP Optimization",
    summary: "Improve performance of existing Odoo implementations.",
    points: [
      "Optimize workflows and configurations",
      "Fix inefficiencies and bottlenecks",
      "Enhance system usability for teams",
    ],
    quote: "A better system is often the same one — just optimized.",
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
    <motion.div className="space-y-10 lg:mt-[80px]" initial="hidden" animate="visible" variants={fadeUp}>
      <motion.div variants={fadeUp} custom={0} className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">
          Services
        </h1>
        <p className="text-muted text-sm md:text-base max-w-2xl mx-auto">
          Explore how I help businesses improve operations through Odoo customization and automation.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} custom={1} className="space-y-3">
        <ModuleMarquee speed="slow" />
        <ModuleMarquee reverse speed="slow" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        custom={2}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.map((service, i) => {
          const accentVariants = ["teal", "orange", "purple", "blue", "pink"];
          const accent = accentVariants[i % accentVariants.length];
          
          return (
            <GlossyCard
              key={service.id}
              accent={accent}
              elevated
              className="p-6 cursor-pointer transition-all duration-300"
              onClick={() => setSelected(service)}
              custom={i + 3}
              variants={fadeUp}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-text dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {service.summary}
              </p>
              <p className="text-xs italic text-text/40 dark:text-white/40 mt-auto">Tap to read more</p>
            </GlossyCard>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {selected && (
          <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div
              className="absolute inset-0"
              onClick={() => setSelected(null)}
            ></div>

            <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 30 }} transition={{ duration: 0.4, ease: "easeOut" }} className="relative w-full max-w-[650px]">
              <GlossyCard accent="pink" elevated className="p-6 relative">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-text/50 dark:text-white/50 hover:text-text dark:hover:text-white text-xl transition-colors duration-300"
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-text dark:text-white">
                  {selected.title}
                </h3>
                <p className="text-text/70 dark:text-muted mb-4">{selected.summary}</p>

                <ul className="list-disc pl-5 text-sm text-text/70 dark:text-muted space-y-1">
                  {selected.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <blockquote className="mt-4 text-muted italic text-sm border-l-2 pl-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                  {selected.quote}
                </blockquote>
              </GlossyCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}