"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Users, BookOpen, Leaf, Heart, Sparkles } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { fadeUp, viewport } from "@/lib/animations";

// ── Types ────────────────────────────────────────────────────────────────────

export interface SanityProgram {
  _id: string;
  name: string;
  description: string;
  neighborhood?: string;
  peopleHelped?: number;
  peopleHelpedLabel?: string;
  category?: "education" | "environment" | "health" | "community";
  image?: any;
}

// ── Category config ───────────────────────────────────────────────────────────

const CATEGORY_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; Icon: React.ComponentType<{ className?: string }> }
> = {
  education: {
    label: "Education",
    color: "#4285F4",
    bg: "#4285F415",
    Icon: BookOpen,
  },
  environment: {
    label: "Environment",
    color: "#2E7D32",
    bg: "#2E7D3215",
    Icon: Leaf,
  },
  health: {
    label: "Health",
    color: "#F4B400",
    bg: "#F4B40015",
    Icon: Heart,
  },
  community: {
    label: "Community",
    color: "#9C27B0",
    bg: "#9C27B015",
    Icon: Sparkles,
  },
};

const DEFAULT_CATEGORY = {
  label: "Program",
  color: "#2E7D32",
  bg: "#2E7D3215",
  Icon: Sparkles,
};

// ── Component ─────────────────────────────────────────────────────────────────

interface ProgramsSectionProps {
  programs: SanityProgram[];
}

export function ProgramsSection({ programs }: ProgramsSectionProps) {
  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden py-24 bg-[#FAFAF5]"
      aria-label="Programs section"
    >
      <Container>
        <SectionTitle
          eyebrow="Our Programs"
          title={
            <>
              Programs Making a{" "}
              <span className="text-[#2E7D32]">Real Difference</span>
            </>
          }
          subtitle="Each program is designed to create lasting change in the communities we serve across Chennai."
        />

        {programs.length === 0 ? (
          <p className="text-center font-inter text-[#1F2937]/50 mt-8">
            No programs found. Add programs in Sanity Studio to see them here.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {programs.map((program, index) => (
              <ProgramCard key={program._id} program={program} index={index} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────

function ProgramCard({
  program,
  index,
}: {
  program: SanityProgram;
  index: number;
}) {
  const cat = program.category
    ? (CATEGORY_CONFIG[program.category] ?? DEFAULT_CATEGORY)
    : DEFAULT_CATEGORY;
  const { Icon } = cat;

  const imageUrl =
    program.image
      ? urlFor(program.image).width(600).height(400).fit("crop").auto("format").url()
      : null;

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay: index * 0.08 }}
      className="group bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[#F0FDF4]">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={program.name || "Program Image"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon className="w-12 h-12 text-[#2E7D32]/30" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Category badge overlay */}
        <div className="absolute bottom-4 left-4">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-inter font-semibold px-3 py-1 rounded-full backdrop-blur-sm text-white"
            style={{ backgroundColor: `${cat.color}CC` }}
          >
            <Icon className="w-3.5 h-3.5" aria-hidden="true" />
            {cat.label}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-inter font-bold text-lg text-[#1F2937] mb-2 leading-snug">
          {program.name}
        </h3>

        {program.neighborhood && (
          <span className="inline-flex items-center gap-1 text-xs font-inter text-[#1F2937]/50 mb-3">
            <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
            {program.neighborhood}
          </span>
        )}

        <p className="font-inter text-sm text-[#1F2937]/65 leading-relaxed flex-1 mb-4">
          {program.description}
        </p>

        {/* Stat chip */}
        {program.peopleHelped != null && (
          <div
            className="flex items-center gap-2 rounded-2xl px-4 py-3 mt-auto"
            style={{ backgroundColor: cat.bg }}
          >
            <Users
              className="w-4 h-4 flex-shrink-0"
              style={{ color: cat.color }}
              aria-hidden="true"
            />
            <div>
              <p
                className="font-gondens text-xl leading-none"
                style={{ color: cat.color }}
              >
                {program.peopleHelped.toLocaleString()}
              </p>
              <p className="text-[10px] font-inter uppercase tracking-widest text-[#1F2937]/45 mt-0.5">
                {program.peopleHelpedLabel ?? "People Reached"}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
