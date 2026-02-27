// src/components/StatusBadge.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

/**
 * StatusBadge: Reusable status badge with neon glow effect
 * @param {string} status - Status type: 'progress', 'review', 'blocked', 'done'
 * @param {boolean} animated - If true, applies glow pulse animation
 */
export default function StatusBadge({ status = "progress", animated = false, className = "" }) {
  const statusClasses = {
    progress: "badge-progress",
    review: "badge-review",
    blocked: "badge-blocked",
    done: "badge-done",
  };

  const statusLabels = {
    progress: "In Progress",
    review: "Under Review",
    blocked: "Blocked",
    done: "Done",
  };

  const badgeClass = statusClasses[status] || statusClasses.progress;

  return (
    <motion.span
      animate={animated ? { opacity: [1, 0.7, 1] } : undefined}
      transition={animated ? { duration: 2, repeat: Infinity } : undefined}
      className={`badge-status ${badgeClass} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {statusLabels[status] || "Unknown"}
    </motion.span>
  );
}
