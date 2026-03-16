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
  { icon: <FaLaptopCode className="text-gray-400" />, label: "Technical" },
];

export default function ModuleMarquee({ reverse = false, speed = "slow" }) {
  const speedMap = {
    slow: "40s",
    normal: "30s",
    fast: "20s",
  };

  const duration = speedMap[speed] || "30s";

  return (
    <div className="group relative flex overflow-hidden p-2">
      <div
        className={`flex min-w-full shrink-0 gap-6 items-center justify-around ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: duration }}
      >
        {/* Kita render 2 kali agar looping tidak putus */}
        {[...modules, ...modules].map((m, i) => (
          <div 
            key={i} 
            className="
              flex items-center gap-3 px-5 py-2.5 
              rounded-xl 
              bg-white/[0.03] border border-white/10
              hover:bg-white/[0.08] hover:border-white/20
              transition-all duration-300 group/item
            "
          >
            <span className="text-lg filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover/item:scale-110 transition-transform">
              {m.icon}
            </span>
            <span className="text-[11px] md:text-xs text-white/60 font-black uppercase tracking-widest whitespace-nowrap">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}