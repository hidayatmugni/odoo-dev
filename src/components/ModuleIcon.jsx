// src/components/ModuleIcon.jsx
import React from "react";

/**
 * ModuleIcon:
 * - icon: emoji or svg (string)
 * - label: module name
 * - subtle animation via Tailwind classes or keyframe name
 *
 * Designed to be lightweight — no external heavy libs.
 */
export default function ModuleIcon({ icon = "📦", label = "Inventory" }){
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg card-glass hover:scale-[1.02] transition-transform duration-200">
      <div className="text-2xl animate-float-slow">{icon}</div>
      <div className="icon-label text-gray-800">{label}</div>
    </div>
  );
}
