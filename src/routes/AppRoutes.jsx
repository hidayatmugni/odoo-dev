// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

/**
 * AppRoutes:
 * - Navbar is persistent (parent). Pages rendered as children.
 * - Each Route points to a full page component.
 */

export default function AppRoutes(){
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Navbar />
      <main className="mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          {/* add more routes as needed */}
        </Routes>
      </main>
    </div>
  );
}
