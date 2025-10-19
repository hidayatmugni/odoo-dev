// src/components/Footer.jsx
import React from "react";

/**
 * Footer: simple copyright + small credits
 */
export default function Footer(){
  return (
    <footer className="mt-12 py-6 text-center text-sm text-gray-800">
      © {new Date().getFullYear()} Allright Reserved
    </footer>
  );
}
