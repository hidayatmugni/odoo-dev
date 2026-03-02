import React, { useState } from "react";
import { motion } from "framer-motion";

export default function DevelopmentBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-[9999]">
      <div className="relative overflow-hidden backdrop-blur-xl bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 border-b border-white/10">

        {/* Running Text */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="whitespace-nowrap py-2 text-sm md:text-base font-medium text-center"
        >
          🚧 This Website Portfolio is currently under development. Some features may be incomplete. Thank you for your patience.
        </motion.div>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-xs opacity-70 hover:opacity-100 transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}