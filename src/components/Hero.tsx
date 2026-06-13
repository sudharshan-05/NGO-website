import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart } from "lucide-react";
import TypewriterTestimonial from "./TypewriterTestimonial";

interface HeroProps {
  onJoinClick: () => void;
  onDonateClick: () => void;
}

const HERO_IMAGES = [
  "/hero/hero1.webp",
  "/hero/hero2.webp",
  "/hero/hero3.webp",
  "/hero/hero4.webp"
];

const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920", // Classroom Environment
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1920", // Afforestation/Planting
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920", // Resource Distribution
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920"  // Dedicated Volunteers
];

export default function Hero({ onJoinClick, onDonateClick }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Background slider: auto-play every 5000ms, infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[92vh] flex items-center overflow-hidden py-20 md:py-32 select-none bg-black"
    >
      {/* 1. Background Image Slider using AnimatePresence for smooth cross-fades */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={currentIndex}
            src={HERO_IMAGES[currentIndex]}
            alt={`Leo Club Slider ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Graceful fallback to Unsplash images if local WebP assets are not resolved/found
              e.currentTarget.src = FALLBACK_IMAGES[currentIndex];
            }}
          />
        </AnimatePresence>
        
        {/* 2. Left-to-Right dark vignette overlay for optimum text contrast and visual depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 via-black/70 to-black/20 z-10" />
        
        {/* Subtle bottom dark gradient mask */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-10" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:pl-8 lg:pl-4 xl:pl-0 flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-left lg:-translate-x-3 transition-transform duration-300"
        >
          {/* ONE MOVEMENT using Gondem font */}
          <h1 className="font-gondem text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-[0.03em] leading-[0.88] uppercase mb-3">
            ONE MOVEMENT
          </h1>

          {/* MANY WAYS TO BRING CHANGE. using Typewriter Testimonial typography animation */}
          <div className="mb-12">
            <TypewriterTestimonial />
          </div>

          {/* Action CTAs: Join Us with green background, Donate with transparent gold border */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Join Us Button - Green background #4CAF50, scales 1.05 on hover */}
            <motion.button
              onClick={onJoinClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer bg-[#4CAF50] hover:bg-[#43a047] text-white font-bold text-sm sm:text-base tracking-wide py-3.5 px-8 rounded-full border border-emerald-600 flex items-center gap-2.5 transition-colors shadow-lg shadow-black/40"
            >
              <Heart className="w-4.5 h-4.5 text-[#ebd074] fill-none stroke-[2.5px]" />
              Join Us
            </motion.button>

            {/* Donate Now Button - Transparent background with golden border, scales 1.05 on hover */}
            <motion.button
              onClick={onDonateClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer bg-transparent hover:bg-white/5 text-secondary-gold font-bold text-sm sm:text-base tracking-wide py-3.5 px-8 rounded-full border-2 border-secondary-gold flex items-center gap-2.5 transition-colors shadow-lg"
            >
              <Heart className="w-4.5 h-4.5 text-secondary-gold fill-none stroke-[2.5px]" />
              Donate Now
            </motion.button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
