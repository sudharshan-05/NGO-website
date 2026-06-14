"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Users, ChevronDown } from "lucide-react";

// ─── Hero images (Unsplash — NGO context) ─────────────────────────────────────
const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920",
    label: "Classroom Environment",
    caption: "Education For Every Child",
  },
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1920",
    label: "Eco Afforestation",
    caption: "Green Chennai Initiative",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920",
    label: "Resource Distribution",
    caption: "Reaching Every Community",
  },
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920",
    label: "Dedicated Volunteers",
    caption: "Youth Serving Youth",
  },
];

// ─── Stats ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Leo Members" },
  { value: "120+", label: "Projects Done" },
  { value: "12K+", label: "Lives Touched" },
  { value: "8+",   label: "Years of Service" },
];

export function HeroSection() {
  const [current, setCurrent]   = useState(0);
  const [mounted, setMounted]   = useState(false);

  useEffect(() => { setMounted(true); }, []);

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black select-none"
      aria-label="Hero section"
    >
      {/* ── Background image slider ─────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={current}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <Image
              src={SLIDES[current].src}
              alt={SLIDES[current].label}
              fill
              priority={current === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Multi-layer overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-24flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[11px] font-inter font-semibold tracking-[0.28em] uppercase px-5 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B400] animate-pulse" aria-hidden="true" />
            Leo Club of Mavericks · District 324 E
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
         className="font-gondens text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white leading-[0.95] mb-6 max-w-6xl"
        >
          <span className="block">Creating Impact</span>
          <span className="block text-[#F4B400]">Across Chennai</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="font-citadel text-xl md:text-2xl text-white/75 leading-relaxed max-w-3xl mb-10"
        >
          Empowering young leaders to serve, grow and transform communities — one initiative at a time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="#programs"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-inter font-semibold text-white bg-[#2E7D32] hover:bg-[#1b5e20] shadow-[0_8px_32px_rgba(46,125,50,0.45)] hover:shadow-[0_12px_40px_rgba(46,125,50,0.60)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Users className="w-4 h-4" aria-hidden="true" />
            Join Us
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-inter font-semibold text-[#1F2937] bg-[#F4B400] hover:bg-[#e8a800] shadow-[0_8px_32px_rgba(244,180,0,0.40)] hover:shadow-[0_12px_40px_rgba(244,180,0,0.55)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <Heart className="w-4 h-4 fill-[#1F2937]" aria-hidden="true" />
            Donate Now
          </a>
          <a
            href="#about"
            className="px-7 py-3.5 rounded-full text-base font-inter font-medium text-white border border-white/30 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Our Story
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10"
          aria-label="Impact statistics"
        >
          {stats.map(({ value, label }, i) => (
            <React.Fragment key={label}>
              <div className="text-center">
                <p className="font-gondens text-3xl md:text-4xl text-white leading-none">{value}</p>
                <p className="font-inter text-[11px] text-white/50 uppercase tracking-widest mt-1">{label}</p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden md:block w-px h-10 bg-white/20" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ── Slide indicators ─────────────────────────────────────────────────── */}
      {mounted && (
        <div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2"
          role="tablist"
          aria-label="Image slides"
        >
          {SLIDES.map((slide, i) => (
            <button
              key={slide.label}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}: ${slide.label}`}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                i === current
                  ? "w-8 h-2 bg-[#F4B400]"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}

      {/* ── Slide caption ───────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`caption-${current}`}
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -12 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-10 right-6 md:right-10 z-10 text-right"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="font-citadel text-sm text-white/50 italic">{SLIDES[current].caption}</p>
        </motion.div>
      </AnimatePresence>

      {/* ── Scroll cue ──────────────────────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown className="w-6 h-6 text-white/40" />
      </motion.div>
    </section>
  );
}
