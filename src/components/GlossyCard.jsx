// src/components/GlossyCard.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

/**
 * GlossyCard: Reusable glossy card component with customizable accent color
 * @param {string} accent - Accent color variant: 'teal', 'orange', 'purple', 'blue', 'pink'
 * @param {boolean} elevated - If true, applies stronger shadow and hover effect
 * @param {React.ReactNode} children - Card content
 * @param {object} className - Additional Tailwind classes
 * @param {number} custom - Framer Motion custom prop for stagger animation
 * @param {object} variants - Framer Motion variants
 */
export default function GlossyCard({
  accent = "teal",
  elevated = false,
  children,
  className = "",
  custom = undefined,
  variants = undefined,
  ...props
}) {
  const getAccentClass = () => {
    const variantMap = {
      teal: "card-gloss",
      orange: "card-gloss-orange",
      purple: "card-gloss-purple",
      blue: "card-gloss-blue",
      pink: "card-gloss-pink",
    };
    return variantMap[accent] || variantMap.teal;
  };

  const elevatedClass = elevated ? "shadow-glass-hover" : "";
  const motionProps = custom !== undefined && variants ? { custom, variants } : {};

  return (
    <motion.div
      whileHover={elevated ? { y: -4 } : undefined}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`${getAccentClass()} glass-border rounded-2xl ${elevatedClass} transition-all duration-300 ${className}`}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.div>
  );
}
