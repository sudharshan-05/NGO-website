"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  ChevronDown,
  Heart,
  Menu,
  X,
} from "lucide-react";

// ─── Logo SVG — Leo Club Mavericks badge ──────────────────────────────────────
function LogoBadge({ size = 52 }: { size?: number }) {
  return (
    <div
      className="relative select-none flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="94" stroke="#d5a021" strokeWidth="6" fill="#4a1504" />
        <circle cx="100" cy="100" r="88" stroke="#f6da73" strokeWidth="2" />
        <path id="tp" d="M 24 100 A 76 76 0 0 1 176 100" fill="none" />
        <path id="bp" d="M 176 100 A 76 76 0 0 1 24 100" fill="none" />
        <text fill="#fbf1c7" style={{ fontSize: "12.5px", fontWeight: "bold", letterSpacing: "2.5px" }}>
          <textPath href="#tp" startOffset="50%" textAnchor="middle">LEO CLUB OF MAVERICKS</textPath>
        </text>
        <text fill="#e3a024" style={{ fontSize: "12px", fontWeight: "600", letterSpacing: "3px" }}>
          <textPath href="#bp" startOffset="50%" textAnchor="middle">DISTRICT 324 E</textPath>
        </text>
        {/* Central lion silhouette */}
        <text
          x="100" y="115"
          textAnchor="middle"
          style={{ fontSize: "52px" }}
          fill="#f6da73"
          opacity="0.9"
        >
          🦁
        </text>
      </svg>
    </div>
  );
}

// ─── Nav items ────────────────────────────────────────────────────────────────
const menuItems = [
  { label: "Home",      href: "#home",         dropdown: null },
  {
    label: "About Us",
    href: "#about",
    dropdown: ["Who We Are", "Vision & Mission", "District 324 E", "Our Bylaws"],
  },
  {
    label: "Our Projects",
    href: "#programs",
    dropdown: ["Project Science Kit", "Eco Afforestation", "Food For All", "Scholarship Grants"],
  },
  {
    label: "Events",
    href: "#events",
    dropdown: ["Youth Mavericks Summit", "Community Camp 2026", "District Assembly"],
  },
  { label: "Gallery",   href: "#gallery",      dropdown: null },
  { label: "Stories",  href: "#stories",      dropdown: null },
  { label: "Contact",  href: "#contact",      dropdown: null },
];

// ─── Dropdown variants ────────────────────────────────────────────────────────
const dropdownV: Variants = {
  hidden:  { opacity: 0, y: -6, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.18 } },
  exit:    { opacity: 0, y: -4, scale: 0.97, transition: { duration: 0.12 } },
};

const mobileMenuV: Variants = {
  hidden:  { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.25 } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.18 } },
};

export function NavbarSection() {
  const [scrolled,       setScrolled]       = useState(false);
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // ── Scroll detection ────────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Close mobile on resize ──────────────────────────────────────────────────
  useEffect(() => {
    const close = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      role="banner"
    >
      <div className={`w-full transition-all duration-300 ${scrolled ? "pt-0" : "pt-3"}`}>
        <div
          className={`max-w-7xl mx-auto px-4 md:px-6 transition-all duration-300 ${
            scrolled ? "px-0 md:px-0 max-w-full" : ""
          }`}
        >
          {/* ── Floating Card ─────────────────────────────────────────────────── */}
          <nav
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 px-6 md:px-10 py-3 rounded-none"
                : "bg-white rounded-2xl shadow-xl border border-gray-100 px-4 md:px-8 py-3 mx-2 md:mx-6"
            }`}
            aria-label="Main navigation"
          >
            {/* ── Brand ───────────────────────────────────────────────────────── */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none" aria-label="Leo Club Mavericks Home">
              <LogoBadge size={48} />
              <div className="hidden sm:block">
                <p className="font-gondens text-lg lg:text-xl leading-tight tracking-wide text-[#1F2937]">
                  LEO CLUB OF MAVERICKS
                </p>
                <p className="text-[10px] font-inter font-semibold text-gray-400 tracking-widest uppercase">
                  District 324 E · Youth Service
                </p>
              </div>
            </a>

            {/* ── Desktop Nav ─────────────────────────────────────────────────── */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-1.5" role="list">
              {menuItems.map((item) => (
                <li key={item.label} className="relative">
                  {item.dropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-inter font-medium text-gray-600 hover:text-[#2E7D32] hover:bg-[#C8E6C9]/30 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
                        aria-haspopup="true"
                        aria-expanded={activeDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            activeDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.ul
                            variants={dropdownV}
                            initial="hidden" animate="visible" exit="exit"
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden py-2 z-50"
                            role="menu"
                            aria-label={`${item.label} submenu`}
                          >
                            {item.dropdown.map((sub) => (
                              <li key={sub} role="none">
                                <a
                                  href={item.href}
                                  className="block px-4 py-2.5 text-sm font-inter text-gray-600 hover:bg-[#C8E6C9]/40 hover:text-[#2E7D32] transition-colors duration-150"
                                  role="menuitem"
                                >
                                  {sub}
                                </a>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 rounded-xl text-sm font-inter font-medium text-gray-600 hover:text-[#2E7D32] hover:bg-[#C8E6C9]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            {/* ── Right CTAs ──────────────────────────────────────────────────── */}
            <div className="hidden lg:flex items-center gap-2.5">
              <a
                href="#contact"
                className="px-4 py-2 rounded-full text-sm font-inter font-medium text-[#2E7D32] border border-[#2E7D32]/30 hover:bg-[#2E7D32]/5 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
              >
                Join Us
              </a>
              <a
                href="#contact"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-inter font-semibold text-white bg-[#2E7D32] hover:bg-[#1b5e20] shadow-lg hover:shadow-[0_8px_24px_rgba(46,125,50,0.35)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
              >
                <Heart className="w-3.5 h-3.5 fill-white" aria-hidden="true" />
                Donate
              </a>
            </div>

            {/* ── Mobile Hamburger ────────────────────────────────────────────── */}
            <button
              className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5 text-gray-700" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5 text-gray-700" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </nav>

          {/* ── Mobile Menu ───────────────────────────────────────────────────── */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                id="mobile-menu"
                variants={mobileMenuV}
                initial="hidden" animate="visible" exit="exit"
                className="lg:hidden mx-2 md:mx-6 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <ul className="py-3" role="list">
                  {menuItems.map((item) => (
                    <li key={item.label} role="none">
                      <a
                        href={item.href}
                        className="block px-5 py-3 text-sm font-inter font-medium text-gray-700 hover:bg-[#C8E6C9]/40 hover:text-[#2E7D32] transition-colors duration-150"
                        onClick={() => setMobileOpen(false)}
                        role="menuitem"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}

                  <li className="px-4 pt-3 pb-4 border-t border-gray-100 mt-2">
                    <div className="flex gap-3">
                      <a
                        href="#contact"
                        className="flex-1 text-center px-4 py-2.5 rounded-full text-sm font-inter font-medium text-[#2E7D32] border border-[#2E7D32]/40 hover:bg-[#2E7D32]/5 transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        Join Us
                      </a>
                      <a
                        href="#contact"
                        className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-inter font-semibold text-white bg-[#2E7D32] shadow-lg transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                      >
                        <Heart className="w-3.5 h-3.5 fill-white" aria-hidden="true" />
                        Donate
                      </a>
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
