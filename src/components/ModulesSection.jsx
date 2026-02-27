// src/components/ModulesSection.jsx
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import ModuleIcon from "./ModuleIcon";
import { motion } from "framer-motion";
import {
  FaMoneyBillWave,
  FaIndustry,
  FaChartLine,
  FaWarehouse,
  FaStore,
  FaUsers,
  FaBriefcase,
  FaClock,
  FaUserTie,
  FaCarAlt,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

const modules = [
  { icon: <FaMoneyBillWave className="text-green-400" />, label: "Accounting" },
  { icon: <FaIndustry className="text-orange-400" />, label: "Manufacturing" },
  { icon: <FaChartLine className="text-cyan-400" />, label: "Sales" },
  { icon: <BsBagCheckFill className="text-blue-300" />, label: "Purchase" },
  { icon: <FaWarehouse className="text-yellow-300" />, label: "Inventory" },
  { icon: <FaStore className="text-pink-400" />, label: "E-commerce" },
  { icon: <FaUsers className="text-blue-300" />, label: "CRM" },
  { icon: <FaBriefcase className="text-teal-400" />, label: "Point of Sale" },
  { icon: <FaClock className="text-sky-300" />, label: "Timesheet" },
  { icon: <FaUserTie className="text-amber-400" />, label: "Employees" },
  { icon: <FaCarAlt className="text-gray-400 dark:text-gray-300" />, label: "Fleet" },
  { icon: <MdWorkOutline className="text-violet-300" />, label: "Recruitment" },
  { icon: <FaIndustry className="text-gray-400 dark:text-gray-300" />, label: "Others" },
];

export default function ModulesSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(isExpanded ? modules.length : 4);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(isExpanded ? modules.length : 6);
      } else {
        setVisibleCount(isExpanded ? modules.length : 8);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-10"
    >
      <div className="mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-2">
          Odoo Modules
        </h2>
        <p className="text-text/70 dark:text-muted text-base">
          Expertise across key ERP functionalities
        </p>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {modules.slice(0, visibleCount).map((m, i) => (
          <motion.div key={i} variants={item}>
            <ModuleIcon icon={m.icon} label={m.label} />
          </motion.div>
        ))}
      </motion.div>

      {modules.length > 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 text-center"
        >
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>{isExpanded ? "See Less" : "See More"}</span>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ↓
            </motion.span>
          </motion.button>
        </motion.div>
      )}
    </motion.section>
  );
}