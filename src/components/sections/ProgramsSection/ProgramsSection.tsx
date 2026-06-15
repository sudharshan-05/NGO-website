"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { initiatives, CATEGORIES } from "@/data/initiativesData";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { staggerContainer, staggerItem, viewport } from "@/lib/animations";

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="relative w-full overflow-hidden py-24 select-none bg-[#FAFAF5]"
      aria-label="Programs section"
    >
      <div
        className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(200,230,201,0.5) 0%, transparent 65%)",
          transform: "translate(25%, -25%)",
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="Our Programs"
          title={
            <>
              Initiatives That <span className="text-[#4285F4]">Transform Lives</span>
            </>
          }
          subtitle="From education drives to environmental action — every program is co-designed with the communities we serve across Chennai."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {initiatives.map((program) => {
            const cat = CATEGORIES[program.category];
            const Icon = cat.icon;

            return (
              <motion.article key={program.id} variants={staggerItem}>
                <Card className="h-full flex flex-col p-0 overflow-hidden group">
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-inter font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: cat.color }}
                    >
                      <Icon className="w-3 h-3" aria-hidden="true" />
                      {cat.name}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs font-inter text-[#1F2937]/50 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-[#2E7D32]" aria-hidden="true" />
                      {program.neighborhood}
                    </div>

                    <h3 className="font-inter text-2xl font-semibold text-[#1F2937] mb-2">{program.name}</h3>
                    <p className="font-inter text-sm text-[#1F2937]/55 leading-relaxed mb-4 flex-1">
                      {program.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm font-inter font-medium text-[#1F2937]/60">
                        <Users className="w-4 h-4" aria-hidden="true" />
                        {program.peopleHelped.toLocaleString()} {program.peopleHelpedLabel.toLowerCase()}
                      </div>
                      <a
                        href="#impact-map"
                        className="inline-flex items-center gap-1.5 text-sm font-inter font-semibold text-[#4285F4] hover:text-[#2E7D32] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4] rounded-full px-2 py-1"
                      >
                        View on map
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}