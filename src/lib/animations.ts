/**
 * animations.ts
 * Centralized Framer Motion animation variants — per RULES.md
 * Only transform + opacity animated (no width/height/top/left)
 */

import type { Variants } from "framer-motion";

// ─── Fade Up ──────────────────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: custom * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

// ─── Fade In ──────────────────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Slide Up ─────────────────────────────────────────────────────────────────
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Slide In (from left) ─────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Slide In (from right) ────────────────────────────────────────────────────
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Stagger Children ─────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Scale Hover ──────────────────────────────────────────────────────────────
export const scaleHover = {
  whileHover: { scale: 1.04, transition: { duration: 0.3, ease: "easeOut" } },
  whileTap: { scale: 0.97, transition: { duration: 0.15 } },
};

// ─── Floating ────────────────────────────────────────────────────────────────
export const floating = (duration = 8, delay = 0) => ({
  animate: {
    y: [0, -12, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatType: "mirror" as const,
      ease: "easeInOut",
    },
  },
});

// ─── Card Reveal ─────────────────────────────────────────────────────────────
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Parallax helper ─────────────────────────────────────────────────────────
export const parallaxConfig = {
  slow: 0.3,
  medium: 0.6,
  fast: 0.9,
};

// ─── Common viewport settings ─────────────────────────────────────────────────
export const viewport = { once: true, margin: "-80px" };
export const viewportEager = { once: true, margin: "-40px" };
