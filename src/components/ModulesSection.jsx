// src/components/ModulesSection.jsx
import React, { useState, useEffect } from "react";
import ModuleIcon from "./ModuleIcon";
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

/**
 * ModulesSection:
 * - Compact layout
 * - Uses react-icons with inline Tailwind color classes
 * - Responsive + small See More / See Less button
 */

const modules = [
  { icon: <FaMoneyBillWave className="text-green-500" />, label: "Accounting" },
  { icon: <FaIndustry className="text-orange-500" />, label: "Manufacturing" },
  { icon: <FaChartLine className="text-cyan-500" />, label: "Sales" },
  { icon: <BsBagCheckFill className="text-odoo" />, label: "Purchase" },
  { icon: <FaWarehouse className="text-yellow-400" />, label: "Inventory" },
  { icon: <FaStore className="text-pink-500" />, label: "E-commerce" },
  { icon: <FaUsers className="text-blue-600" />, label: "CRM" },
  { icon: <FaBriefcase className="text-teal-600" />, label: "Point of Sale" },
  { icon: <FaClock className="text-sky-400" />, label: "Timesheet" },
  { icon: <FaUserTie className="text-amber-500" />, label: "Employees" },
  { icon: <FaCarAlt className="text-gray-400" />, label: "Fleet" },
  { icon: <MdWorkOutline className="text-violet-500" />, label: "Recruitment" },
  { icon: <FaIndustry className="text-slate-500" />, label: "Others" },
];

export default function ModulesSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  // Responsiveness handler
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

  return (
    <section className="mt-8 text-odoo">
      <h2 className="text-xl font-semibold mb-4">Odoo Modules</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {modules.slice(0, visibleCount).map((m, i) => (
          <ModuleIcon key={i} icon={m.icon} label={m.label} />
        ))}
      </div>

      <div className="mt-5 text-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm text-odoo font-medium border border-odoo/40 rounded-full px-3 py-1 hover:bg-odoo hover:text-white transition-all duration-200"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
}
