import React from "react";
import {
  FaMoneyBillWave,
  FaIndustry,
  FaChartLine,
  FaWarehouse,
  FaUsers,
  FaBriefcase,
  FaClock,
  FaUserTie,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaLightbulb,
  FaStore,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BsBagCheckFill } from "react-icons/bs";

/**
 * ModuleMarquee Component
 * -------------------------------------
 * 🔹 Reusable badge animation for Odoo modules / services
 * 🔹 Simple props:
 *     - reverse: boolean (optional) → reverse direction
 *     - speed: "slow" | "normal" | "fast"
 * 🔹 Uses Odoo solid color for clarity (#714B67)
 */

const modules = [
  { icon: <FaMoneyBillWave className="text-green-500" />, label: "Accounting" },
  { icon: <FaIndustry className="text-orange-500" />, label: "Manufacturing" },
  { icon: <FaChartLine className="text-cyan-500" />, label: "Sales" },
  { icon: <BsBagCheckFill className="text-green-200" />, label: "Purchase" },
  { icon: <FaWarehouse className="text-yellow-400" />, label: "Inventory" },
  { icon: <FaStore className="text-pink-500" />, label: "E-commerce" },
  { icon: <FaUsers className="text-blue-300" />, label: "CRM" },
  { icon: <FaBriefcase className="text-teal-600" />, label: "POS" },
  { icon: <FaClock className="text-sky-400" />, label: "Timesheet" },
  { icon: <FaUserTie className="text-amber-500" />, label: "HR" },
  { icon: <MdWorkOutline className="text-violet-300" />, label: "Recruitment" },
  { icon: <FaLaptopCode className="text-slate-300" />, label: "Technical" },
  { icon: <FaChalkboardTeacher className="text-rose-500" />, label: "Training" },
  { icon: <FaLightbulb className="text-lime-500" />, label: "Strategy" },
];

export default function ModuleMarquee({ reverse = false, speed = "normal" }) {
  const speedMap = {
    slow: "35s",
    normal: "25s",
    fast: "15s",
  };

  const duration = speedMap[speed] || "25s";

  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex gap-3 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: duration }}
      >
        {[...modules, ...modules].map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-white bg-[#714B67] shadow-sm hover:scale-105 transition-transform"
          >
            <span className="text-base">{m.icon}</span>
            <span>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
