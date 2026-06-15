"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Handshake, MapPin, CheckCircle2 } from "lucide-react";
import { fadeUp, slideInLeft, slideInRight, staggerContainer, staggerItem, viewport } from "@/lib/animations";

// ─── Mission pillars ──────────────────────────────────────────────────────────
const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To provide young people with meaningful leadership and community service experiences that develop their skills, build character and create lasting impact across Tamil Nadu.",
    color: "#2E7D32",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "A world where every young person has the opportunity to make a difference — empowered, engaged and equipped to lead their communities with compassion and courage.",
    color: "#4285F4",
  },
  {
    icon: Handshake,
    title: "Our Values",
    desc: "Integrity, inclusivity, sustainability and service. We believe in leading by example and building bridges between communities that create equity and opportunity for all.",
    color: "#F4B400",
  },
];

// ─── Impact areas ─────────────────────────────────────────────────────────────
const impactAreas = [
  "Youth leadership development across 12 Chennai zones",
  "Partnering with 40+ government schools for academic support",
  "Environmental action: 5,000+ saplings planted annually",
  "Health camps serving 3,000+ individuals per year",
  "Digital literacy programs in underserved communities",
  "Emergency relief coordination during natural calamities",
];

// ─── Locations served ─────────────────────────────────────────────────────────
const locations = [
  "Tharamani", "Guindy", "Besant Nagar",
  "Adyar", "Velachery", "Tambaram",
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden select-none"
      aria-label="About us section"
    >
      {/* ── Part 1: Dark hero banner ─────────────────────────────────────────── */}
      <div
        className="relative w-full py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #111816 0%, #1a2e1e 50%, #111816 100%)" }}
      >
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(46,125,50,0.6) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <span className="inline-flex items-center gap-2 text-[10px] font-inter font-bold tracking-[0.28em] uppercase text-[#2E7D32] bg-[#2E7D32]/10 border border-[#2E7D32]/25 px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse" aria-hidden="true" />
              Our Story
            </span>

            <h2 className="font-gondens text-5xl md:text-[3.8rem] text-white leading-[1.05] mb-6">
              Building Tomorrow&apos;s<br />
              <span className="text-[#F4B400]">Leaders Today</span>
            </h2>

            <p className="font-inter text-base text-white/60 leading-[1.9] mb-6">
              Born from a shared belief that young people are not the leaders of tomorrow — they are the leaders of today. Leo Club of Mavericks was founded to give Chennai&apos;s youth a platform to serve, lead and grow alongside the communities they call home.
            </p>

            <p className="font-inter text-base text-white/60 leading-[1.9] mb-8">
              From stationery drives in Tharamani to digital literacy camps in Velachery, our work is rooted in listening to communities and co-designing solutions that last.
            </p>

            {/* Location chips */}
            <div className="flex flex-wrap gap-2" aria-label="Areas we serve">
              {locations.map((loc) => (
                <span
                  key={loc}
                  className="inline-flex items-center gap-1.5 text-[10px] font-inter font-semibold text-white/60 bg-white/[0.08] border border-white/10 px-3 py-1.5 rounded-full"
                >
                  <MapPin className="w-3 h-3 text-[#2E7D32]" aria-hidden="true" />
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — image collage */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative h-[420px] hidden lg:block"
          >
            {/* Main image */}
            <div className="absolute top-0 left-0 w-[68%] h-[72%] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
                alt="Leo Club volunteers distributing resources to community members"
                fill
                className="object-cover"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" aria-hidden="true" />
            </div>

            {/* Secondary image */}
            <div className="absolute bottom-0 right-0 w-[56%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#111816]">
              <Image
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=600"
                alt="Children learning in a Leo Club supported classroom"
                fill
                className="object-cover"
                sizes="300px"
              />
            </div>

            {/* Float badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[58%] left-[60%] bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100 z-10"
              aria-hidden="true"
            >
              <p className="font-gondens text-2xl text-[#2E7D32]">8+</p>
              <p className="font-inter text-[10px] text-[#1F2937]/50 uppercase tracking-widest">Years of Service</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Part 2: Mission pillars ──────────────────────────────────────────── */}
      <div className="w-full py-20" style={{ background: "#FAFAF5" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-28"
          >
            <h2 className="font-gondens text-4xl md:text-5xl text-[#1F2937] leading-[1.05] mb-10">
              What Drives Us
            </h2>
            <p className="font-inter text-base text-[#1F2937]/55 max-w-xl mx-auto">
              Three pillars that guide every project, every initiative and every interaction we have as a club.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {pillars.map(({ icon: Icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${color}15`,
                    boxShadow: `0 6px 20px ${color}20`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color }} aria-hidden="true" />
                </div>
                <h3 className="font-inter text-2xl font-semibold text-[#1F2937] mb-3">{title}</h3>
                <p className="font-inter text-sm text-[#1F2937]/55 leading-[1.85]">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Part 3: Impact areas ─────────────────────────────────────────────── */}
      <div
        className="w-full py-16"
        style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #fafaf5 50%, #eff6ff 100%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-12"
          >
            <h2 className="font-gondens text-4xl text-[#1F2937] leading-[1.1] mb-4">
              Our Areas of <span className="text-[#2E7D32]">Impact</span>
            </h2>
            <p className="font-inter text-base text-[#1F2937]/55 leading-relaxed mb-8 max-w-xl mx-auto">
              Every initiative is thoughtfully designed to address Chennai&apos;s most pressing community needs — from classroom to coastline.
            </p>
            <a
              href="#programs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-inter font-semibold text-sm text-white bg-[#2E7D32] hover:bg-[#1b5e20] shadow-lg hover:shadow-[0_8px_24px_rgba(46,125,50,0.35)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32]"
            >
              See All Projects
            </a>
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
            aria-label="Impact areas"
          >
            {impactAreas.map((area) => (
              <motion.li
                key={area}
                variants={staggerItem}
                className="flex items-start gap-4 bg-white rounded-2xl px-6 py-5 hover:-translate-y-1 transition-all duration-300"
                style={{
                  borderLeft: "4px solid #2E7D32",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.07), 0 8px 24px rgba(0,0,0,0.08), 0 2px 0px rgba(46,125,50,0.15), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                <CheckCircle2
                  className="w-5 h-5 text-[#2E7D32] flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="font-inter text-[15px] font-medium text-[#1F2937] leading-relaxed">{area}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}