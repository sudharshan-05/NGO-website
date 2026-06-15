"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Heart, Users } from "lucide-react";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1920",
  },
  {
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1920",
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1920",
  },
  {
    src: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&q=80&w=1920",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <Image
              src={SLIDES[currentSlide].src}
              alt="Leo Club Hero Background"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex min-h-screen items-end pb-24 md:pb-32">
        <div className="w-full pl-6 md:pl-12 lg:pl-20">
          <div className="max-w-3xl">

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                font-gondens
                uppercase
                text-white
                leading-[0.85]
                tracking-tight
                text-[3rem]
                sm:text-[4rem]
                md:text-[5rem]
                lg:text-[5.8rem]
                xl:text-[6.2rem]
              "
            >
              ONE MOVEMENT
            </motion.h1>

            {/* Typewriter Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-17"
            >
              <TypeAnimation
                sequence={[
                  "Many Ways To Bring Change...",
                  2000,
                  "Empowering Youth Leaders...",
                  2000,
                  "Serving Communities Together...",
                  2000,
                  "Creating Impact Every Day...",
                  2000,
                  "Building A Better Tomorrow...",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="
                  font-gondens
                  text-[#D4A017]
                  text-xl
                  sm:text-2xl
                  md:text-3xl
                  lg:text-4xl
                  block
                "
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#join"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#39A845]
                  px-8
                  py-4
                  text-white
                  font-semibold
                  shadow-xl
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-[#2f9239]
                "
              >
                <Users size={18} />
                Join Us
              </a>

              <a
                href="#donate"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border-2
                  border-[#D4A017]
                  px-8
                  py-4
                  text-[#D4A017]
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-[#D4A017]
                  hover:text-black
                "
              >
                <Heart size={18} />
                Donate Now
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}