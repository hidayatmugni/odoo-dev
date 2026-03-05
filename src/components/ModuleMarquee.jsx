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

const modules = [
  { icon: <FaMoneyBillWave className="text-green-400" />, label: "Accounting" },
  { icon: <FaIndustry className="text-orange-400" />, label: "Manufacturing" },
  { icon: <FaChartLine className="text-cyan-400" />, label: "Sales" },
  { icon: <BsBagCheckFill className="text-green-300" />, label: "Purchase" },
  { icon: <FaWarehouse className="text-yellow-300" />, label: "Inventory" },
  { icon: <FaStore className="text-pink-400" />, label: "E-commerce" },
  { icon: <FaUsers className="text-blue-300" />, label: "CRM" },
  { icon: <FaBriefcase className="text-teal-400" />, label: "POS" },
  { icon: <FaClock className="text-sky-300" />, label: "Timesheet" },
  { icon: <FaUserTie className="text-amber-400" />, label: "HR" },
  { icon: <MdWorkOutline className="text-violet-300" />, label: "Recruitment" },
  { icon: <FaLaptopCode className="text-gray-400 dark:text-gray-300" />, label: "Technical" },
  // { icon: <FaChalkboardTeacher className="text-rose-400" />, label: "Training" },
  // { icon: <FaLightbulb className="text-lime-400" />, label: "Strategy" },
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
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: duration }}
      >
        {[...modules, ...modules].map((m, i) => (
          <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-2xl card-gloss glass-border shadow-[0_4px_20px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-300">
            <span className="text-base text-muted">{m.icon}</span>
            <span className="text-sm text-muted font-medium">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}