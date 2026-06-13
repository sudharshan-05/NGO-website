"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Leaf,
  Heart,
  Globe,
  Award,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import { staggerContainer, staggerItem, fadeUp, viewport } from "@/lib/animations";

// ─── Core values ──────────────────────────────────────────────────────────────
const values = [
  {
    icon: BookOpen,
    title: "Education First",
    desc: "Bridging gaps through science kits, scholarships, stationery drives and digital literacy programs across Chennai schools.",
    color: "#4285F4",
    bg: "#EFF6FF",
  },
  {
    icon: Leaf,
    title: "Environmental Action",
    desc: "From eco-afforestation to beach clean-ups and e-waste recycling — protecting our coastline and green spaces.",
    color: "#2E7D32",
    bg: "#F0FDF4",
  },
  {
    icon: Heart,
    title: "Community Care",
    desc: "Food for all, health camps and child rights advocacy — ensuring no member of our community is left behind.",
    color: "#F4B400",
    bg: "#FFFBEB",
  },
  {
    icon: Globe,
    title: "Global Values",
    desc: "As part of Lions Clubs International, we uphold the finest traditions of service, friendship and civic engagement.",
    color: "#4285F4",
    bg: "#EFF6FF",
  },
];

// ─── Achievements ─────────────────────────────────────────────────────────────
const achievements = [
  { icon: Users,  value: "500+",  label: "Active Leo Members" },
  { icon: Award,  value: "120+",  label: "Projects Completed" },
  { icon: Zap,    value: "12K+",  label: "Lives Transformed" },
  { icon: Shield, value: "8+",    label: "Years of Service" },
];

export function LeoClubSection() {
  return (
    <section
      id="leo-club"
      className="relative w-full overflow-hidden py-24 select-none"
      style={{ background: "#FAFAF5" }}
      aria-label="Leo Club Mavericks section"
    >
      {/* ── Ambient background glows ─────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(46,125,50,0.08) 0%, transparent 65%)", transform: "translate(30%, -30%)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(66,133,244,0.08) 0%, transparent 65%)", transform: "translate(-25%, 30%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Section header ───────────────────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[10px] font-inter font-bold tracking-[0.28em] uppercase text-[#2E7D32] bg-[#C8E6C9]/60 border border-[#C8E6C9] px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_8px_rgba(46,125,50,0.12)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse" aria-hidden="true" />
            District 324 E
          </span>

          <h2 className="font-gondens text-5xl md:text-[3.8rem] text-[#1F2937] leading-[1.05] mb-5">
            Leo Club of <span className="text-[#2E7D32]">Mavericks</span>
          </h2>

          <p className="font-inter text-base md:text-lg text-[#1F2937]/60 max-w-2xl mx-auto leading-relaxed">
            A premier youth service organisation under Lions Clubs International — building leaders who serve with heart, grow with purpose and inspire lasting change.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-8" aria-hidden="true">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#2E7D32]/35" />
            <div className="w-2 h-2 rounded-full bg-[#2E7D32]/40" />
            <div className="w-10 h-px bg-[#2E7D32]/25" />
            <div className="w-2 h-2 rounded-full bg-[#F4B400]/60" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#2E7D32]/35" />
          </div>
        </motion.div>

        {/* ── Achievements bar ─────────────────────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          aria-label="Impact statistics"
        >
          {achievements.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="group relative bg-white rounded-3xl p-6 text-center shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Green top accent */}
              <div className="absolute top-0 left-6 right-6 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#2E7D32]/50 to-transparent" aria-hidden="true" />

              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                style={{ background: "linear-gradient(135deg, #2E7D32 0%, #1b5e20 100%)", boxShadow: "0 6px 20px rgba(46,125,50,0.25)" }}
              >
                <Icon className="w-5 h-5 text-white" aria-hidden="true" />
              </div>

              <p className="font-gondens text-4xl text-[#2E7D32] leading-none mb-1">{value}</p>
              <p className="font-inter text-xs text-[#1F2937]/50 uppercase tracking-widest">{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── What we do ───────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Brand story */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="font-inter text-[10px] font-bold uppercase tracking-[0.3em] text-[#2E7D32] mb-3">
              Who We Are
            </p>
            <h3 className="font-gondens text-4xl text-[#1F2937] leading-[1.1] mb-5">
              Young Leaders.<br />
              <span className="text-[#2E7D32]">Real Impact.</span>
            </h3>
            <p className="font-inter text-base text-[#1F2937]/65 leading-[1.9] mb-6">
              Founded under the Lions Clubs International District 324 E framework, Leo Club of Mavericks is a 500-strong community of young Chennaites driven by the motto{" "}
              <span className="italic text-[#1F2937]/80">&ldquo;Leadership, Experience and Opportunity.&rdquo;</span>
            </p>
            <p className="font-inter text-base text-[#1F2937]/65 leading-[1.9] mb-8">
              We believe that service is not charity — it is partnership. Every project we undertake co-creates change with the communities we serve, building mutual respect and lasting infrastructure.
            </p>

            {/* District badge */}
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3.5 shadow-lg border border-gray-100">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(244,180,0,0.15)" }}
              >
                <Award className="w-5 h-5 text-[#F4B400]" aria-hidden="true" />
              </div>
              <div>
                <p className="font-inter text-[9px] uppercase tracking-widest text-[#1F2937]/40 font-bold">Affiliated with</p>
                <p className="font-inter text-sm font-semibold text-[#1F2937]/80">Lions Clubs International · District 324 E</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Value cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {values.map(({ icon: Icon, title, desc, color, bg }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="group bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: bg }}
                >
                  <Icon className="w-5 h-5" style={{ color }} aria-hidden="true" />
                </div>
                <h4 className="font-citadel text-xl text-[#1F2937] mb-2">{title}</h4>
                <p className="font-inter text-xs text-[#1F2937]/55 leading-[1.8]">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
