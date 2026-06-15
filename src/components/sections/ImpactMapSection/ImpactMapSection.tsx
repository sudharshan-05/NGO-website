"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { initiatives, CATEGORIES } from "@/data/initiativesData";
import { ChennaiMap } from "@/components/ui/ChennaiMap";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { fadeUp, viewport } from "@/lib/animations";

export function ImpactMapSection() {
  const [activeId, setActiveId] = useState(initiatives[0].id);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const active = initiatives.find((i) => i.id === activeId) ?? initiatives[0];
  const category = CATEGORIES[active.category];
  const Icon = category.icon;

  return (
    <section
      id="impact-map"
      className="relative w-full overflow-hidden py-24 select-none bg-[#FAFAF5]"
      aria-label="Impact map section"
    >
      <Container>
        <SectionTitle
          eyebrow="Our Impact"
          title={
            <>
              Creating Impact{" "}
              <span className="text-[#2E7D32]">Across Chennai</span>
            </>
          }
          subtitle="Explore verified community initiatives across six key neighborhoods — hover or tap pins to discover the stories behind each project."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          {/* Map panel */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative min-h-[420px] md:min-h-[520px] rounded-3xl overflow-hidden border border-[#C8E6C9]/60 bg-[#F0FDF4]/40 shadow-xl"
          >
            <ChennaiMap className="absolute inset-0 w-full h-full" />

            {/* Interactive pins */}
            <div className="absolute inset-0">
              {initiatives.map((item, idx) => {
                const isActive = item.id === activeId;
                const isHovered = hoveredId === item.id;
                const cat = CATEGORIES[item.category];
                const PinIcon = cat.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`View ${item.name} in ${item.neighborhood}`}
                    aria-pressed={isActive}
                    className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E7D32] rounded-full"
                    style={{ left: `${item.x}%`, top: `${item.y}%`, zIndex: isActive ? 50 : 30 }}
                    onMouseEnter={() => {
                      setHoveredId(item.id);
                      setActiveId(item.id);
                    }}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : isHovered ? 1.1 : 1,
                        y: isActive ? [0, -4, 0] : [0, -2, 0],
                      }}
                      transition={{
                        scale: { duration: 0.3 },
                        y: { repeat: Infinity, duration: 2.5 + (idx % 3) * 0.3, ease: "easeInOut" },
                      }}
                      className="relative flex items-center justify-center rounded-full shadow-lg"
                      style={{
                        width: isActive ? 56 : 44,
                        height: isActive ? 56 : 44,
                        boxShadow: `0 0 0 ${isActive ? 4 : 2}px ${cat.color}40`,
                      }}
                    >
                      {isActive && (
  <span
    className="absolute inset-0 rounded-full animate-ping"
    style={{ backgroundColor: `${cat.color}40` }}
  />
)}
                      <div className="w-full h-full rounded-full overflow-hidden border-[2.5px] border-white bg-white relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                        <span
                          className="absolute bottom-0 right-0 w-4 h-4 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: cat.color }}
                        >
                          <PinIcon className="w-2.5 h-2.5" aria-hidden="true" />
                        </span>
                      </div>
                    </motion.div>

                    <AnimatePresence>
                      {(isActive || isHovered) && (
                        <motion.span
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap bg-white/95 backdrop-blur-sm text-[#1F2937] text-xs font-inter font-semibold px-3 py-1 rounded-full shadow-lg border border-gray-100 pointer-events-none"
                        >
                          {item.neighborhood}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Category legend */}
            <div className="absolute left-4 bottom-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hidden sm:block">
              <p className="text-[10px] font-inter font-bold uppercase tracking-widest text-[#1F2937]/50 mb-2">
                Categories
              </p>
              <ul className="space-y-2">
                {Object.entries(CATEGORIES).map(([key, cat]) => (
                  <li key={key} className="flex items-center gap-2 text-xs font-inter text-[#1F2937]/75">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          {/* Impact Stats */}
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-gray-100 hidden md:block">
  <div className="space-y-3">
    <div>
      <p className="font-gondens text-3xl text-[#2E7D32]">48+</p>
      <p className="text-[10px] font-inter uppercase tracking-widest text-[#1F2937]/50">
        Projects
      </p>
    </div>

    <div className="w-full h-px bg-gray-200" />

    <div>
      <p className="font-gondens text-3xl text-[#F4B400]">12K+</p>
      <p className="text-[10px] font-inter uppercase tracking-widest text-[#1F2937]/50">
        Lives Impacted
      </p>
    </div>
  </div>
</div>

          {/* Detail card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col"
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={active.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex-1 flex flex-col"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={active.image}
                    alt={active.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <Badge variant="gold">{active.campaign}</Badge>
                   <h3 className="font-inter font-bold text-3xl tracking-tight text-white mt-2 drop-shadow-sm">
                    {active.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-inter font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: `${category.color}15`, color: category.color }}
                    >
                      <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                      {category.name}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-inter text-[#1F2937]/50">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      {active.neighborhood}
                    </span>
                  </div>

                  <p className="font-inter text-sm text-[#1F2937]/65 leading-relaxed mb-6 flex-1">
                    {active.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <Stat icon={Users} label={active.peopleHelpedLabel} value={active.peopleHelped.toLocaleString()} />
                    <Stat icon={Calendar} label="Date" value={active.date} />
                  </div>

                  <p className="text-xs font-inter text-[#1F2937]/45">
                    {active.volunteers} volunteers · {active.resourcesCount.toLocaleString()} {active.resourcesLabel.toLowerCase()}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#FAFAF5] rounded-2xl p-4 border border-[#C8E6C9]/40">
      <div className="flex items-center gap-2 mb-1">
        <Icon className="w-4 h-4 text-[#2E7D32]" aria-hidden="true" />
        <p className="text-[10px] font-inter uppercase tracking-widest text-[#1F2937]/45">{label}</p>
      </div>
    {label === "Date" ? (
  <div className="text-[#2E7D32]">
    <span className="font-inter text-lg uppercase">
      {value.split(" ")[0]}
    </span>{" "}
    <span className="font-gondens text-1xl">
      {value.split(" ")[1]?.replace(",", "")}
    </span>
    <span className="font-inter text-lg">
      , {value.split(" ")[2]}
    </span>
  </div>
) : (
  <p className="font-gondens text-2xl text-[#2E7D32]">
    {value}
  </p>
)}
    </div>
  );
}