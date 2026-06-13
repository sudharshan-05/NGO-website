"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MapPin, ChevronLeft, ChevronRight, Quote, Users, Heart, Globe } from "lucide-react";
import { testimonials, Testimonial } from "@/data/testimonialsData";
import { Map as MapGL } from "@/components/ui/mapcn-map";

// ─── Float positions — 4 left · 4 right ──────────────────────────────────────
const floatPositions = [
  { side:"left"  as const, left: "0%",  top: "4%",  w:162, h:204, dur:7.2, del:0.2 },
  { side:"left"  as const, left:"13%",  top:"27%",  w:162, h:204, dur:8.8, del:1.3 },
  { side:"left"  as const, left: "0%",  top:"51%",  w:162, h:204, dur:6.5, del:0.7 },
  { side:"left"  as const, left:"13%",  top:"74%",  w:162, h:204, dur:9.0, del:1.8 },
  { side:"right" as const, right:"0%",  top: "4%",  w:162, h:204, dur:8.0, del:2.0 },
  { side:"right" as const, right:"13%", top:"27%",  w:162, h:204, dur:7.5, del:0.5 },
  { side:"right" as const, right:"0%",  top:"51%",  w:162, h:204, dur:9.2, del:1.1 },
  { side:"right" as const, right:"13%", top:"74%",  w:162, h:204, dur:6.8, del:1.6 },
];

const roleColors: Record<string, { bg:string; text:string; strip:string }> = {
  Volunteer:   { bg:"#D1FAE5", text:"#064e3b", strip:"#34d399" },
  Student:     { bg:"#E9D5FF", text:"#581c87", strip:"#a78bfa" },
  Beneficiary: { bg:"#BFDBFE", text:"#1e3a8a", strip:"#60a5fa" },
  Organizer:   { bg:"#FEF08A", text:"#713f12", strip:"#facc15" },
};

const impactStats = [
  { icon: Heart,  value:"12,500+", label:"Lives Touched"      },
  { icon: Users,  value:"850+",    label:"Volunteers"         },
  { icon: Globe,  value:"120+",    label:"Communities"        },
];

function hexToRgba(hex:string, a:number){
  const h = hex.replace("#","");
  const r = parseInt(h.slice(0,2),16);
  const g = parseInt(h.slice(2,4),16);
  const b = parseInt(h.slice(4,6),16);
  return `rgba(${r},${g},${b},${a})`;
}

export function TestimonialsSection() {
  const [mounted, setMounted]           = useState(false);
  const [activeItem, setActiveItem]     = useState<Testimonial>(testimonials[0]);
  const [floatingItems, setFloatingItems] = useState<Testimonial[]>(testimonials.slice(1));
  const [hoveredIdx, setHoveredIdx]     = useState<number|null>(null);

  useEffect(()=>{ setMounted(true); },[]);

  const select = (idx:number) => {
    const clicked = floatingItems[idx];
    const next    = [...floatingItems];
    next[idx]     = activeItem;
    setActiveItem(clicked);
    setFloatingItems(next);
  };

  const goNext = () => {
    const ci = testimonials.findIndex(t=>t.id===activeItem.id);
    const na = testimonials[(ci+1)%testimonials.length];
    setActiveItem(na);
    setFloatingItems(testimonials.filter(t=>t.id!==na.id));
  };

  const goPrev = () => {
    const ci = testimonials.findIndex(t=>t.id===activeItem.id);
    const pa = testimonials[(ci-1+testimonials.length)%testimonials.length];
    setActiveItem(pa);
    setFloatingItems(testimonials.filter(t=>t.id!==pa.id));
  };

  const ai  = testimonials.findIndex(t=>t.id===activeItem.id);
  const rc  = roleColors[activeItem.role] ?? { bg:"#f4f4f5", text:"#3f3f46", strip:"#a1a1aa" };

  const cardV = {
    hidden:  { opacity:0, y:32, scale:0.94 },
    visible: { opacity:1, y:0,  scale:1,
      transition:{ duration:0.55, ease:[0.22,1,0.36,1], staggerChildren:0.06 } },
    exit:    { opacity:0, scale:0.94, y:-16, transition:{ duration:0.22 } },
  } as const;

  const childV = {
    hidden:  { opacity:0, y:14 },
    visible: { opacity:1, y:0, transition:{ duration:0.3, ease:"easeOut" } },
  } as const;

  return (
    <section className="relative w-full overflow-hidden select-none"
      style={{ background:"#FAFAF5", minHeight:"100vh" }}>

      {/* ══ BACKGROUND MAP — covers entire section, Chennai centered ══════════════ */}
      <div
        aria-hidden="true"
        style={{
          position:"absolute",
          top:0, left:0, right:0, bottom:0,
          width:"100%",
          height:"100%",
          minHeight:"100vh",
          zIndex:0,
          pointerEvents:"none",
        }}
      >
        {/* MapLibre GL — all interactions disabled */}
        <MapGL
          center={[79.65, 13.10]}
          zoom={9}
          bearing={0}
          pitch={0}
          scrollZoom={false}
          dragPan={false}
          dragRotate={false}
          doubleClickZoom={false}
          touchZoomRotate={false}
          keyboard={false}
          cooperativeGestures={false}
          theme="light"
          styles={{
            light: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
          }}
          className="w-full h-full"
        />

        {/* Ivory veil — more transparent so map is visible (55% opacity) */}
        <div
          style={{
            position:"absolute", inset:0,
            background:"linear-gradient(160deg, rgba(246,250,246,0.58) 0%, rgba(250,250,245,0.52) 50%, rgba(245,245,251,0.58) 100%)",
          }}
        />

        {/* Dot-grid on top for texture depth */}
        <div
          style={{
            position:"absolute", inset:0,
            backgroundImage:`radial-gradient(circle, rgba(31,41,55,0.08) 1.5px, transparent 1.5px)`,
            backgroundSize:"48px 48px",
          }}
        />

        {/* Soft green glow — top-left */}
        <div style={{
          position:"absolute", top:"18%", left:"-6%",
          width:520, height:520, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(46,125,50,0.12) 0%, transparent 65%)",
        }}/>
        {/* Soft blue glow — bottom-right */}
        <div style={{
          position:"absolute", bottom:"5%", right:"-5%",
          width:480, height:480, borderRadius:"50%",
          background:"radial-gradient(circle, rgba(66,133,244,0.10) 0%, transparent 65%)",
        }}/>
      </div>


      {/* ═══════════════════════════ WRAPPER ═══════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-20 pb-14 flex flex-col items-center">

        {/* ── HEADER ──────────────────────────────────────────────────────────── */}
        <div className="w-full flex flex-col items-center text-center mx-auto mb-8" style={{maxWidth:680}}>

          {/* Badge */}
          <motion.span
            initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.5}}
            className="inline-flex items-center gap-2 text-[10px] font-mono tracking-[0.28em] uppercase
              text-[#2E7D32] font-bold bg-[#C8E6C9]/60 px-4 py-1.5 rounded-full mb-6
              border border-[#C8E6C9] shadow-[0_2px_8px_rgba(46,125,50,0.12)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32] animate-pulse"/>
            Human Stories
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.1}}
            className="font-gondens text-[3.4rem] md:text-[4.4rem] text-[#1F2937] mb-5 leading-[1.0] w-full"
          >
            Voices of Impact
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}}
            className="font-citadel text-xl md:text-[1.5rem] text-[#1F2937]/60 leading-relaxed w-full"
          >
            Stories from volunteers, students &amp; communities whose lives have been transformed.
          </motion.p>

        </div>

        {/* ── IMPACT STATS BAR ─────────────────────────────────────────────────── */}
        <motion.div
          initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.32}}
          className="flex items-center gap-6 md:gap-10 mb-10 px-6 py-3.5 rounded-2xl
            bg-white/70 backdrop-blur-sm border border-zinc-100
            shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
        >
          {impactStats.map(({icon:Icon, value, label}, i) => (
            <React.Fragment key={label}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#C8E6C9]/60 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#2E7D32]"/>
                </div>
                <div className="text-left">
                  <p className="text-[13px] font-bold text-[#1F2937] leading-none">{value}</p>
                  <p className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              </div>
              {i < impactStats.length-1 && (
                <div className="w-px h-8 bg-zinc-200"/>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* ── Decorative divider ────────────────────────────────────────────────── */}
        <motion.div
          initial={{scaleX:0,opacity:0}} animate={{scaleX:1,opacity:1}}
          transition={{duration:0.9,delay:0.4,ease:"easeOut"}}
          className="flex items-center gap-3 mb-12" style={{originX:"50%"}}
        >
          <div className="w-20 h-px bg-gradient-to-r from-transparent to-[#2E7D32]/35"/>
          <div className="w-2 h-2 rounded-full bg-[#2E7D32]/40"/>
          <div className="w-10 h-px bg-[#2E7D32]/25"/>
          <div className="w-2 h-2 rounded-full bg-[#F4B400]/60"/>
          <div className="w-20 h-px bg-gradient-to-l from-transparent to-[#2E7D32]/35"/>
        </motion.div>

        {/* ═══════════════════════ DESKTOP LAYOUT ════════════════════════════════ */}
        <div className="relative w-full hidden md:flex items-center justify-center" style={{minHeight:720}}>

          {/* ── Floating portrait cards ─────────────────────────────────────── */}
          {mounted && floatingItems.map((t, idx) => {
            const pos  = floatPositions[idx % floatPositions.length];
            const rcF  = roleColors[t.role] ?? {bg:"#f4f4f5",text:"#3f3f46",strip:"#a1a1aa"};
            const hov  = hoveredIdx === idx;

            return (
              <motion.button
                key={t.id}
                onClick={()=>select(idx)}
                onMouseEnter={()=>setHoveredIdx(idx)}
                onMouseLeave={()=>setHoveredIdx(null)}
                className="absolute cursor-pointer focus:outline-none"
                style={{
                  left:  pos.side==="left"  ? pos.left  : undefined,
                  right: pos.side==="right" ? pos.right : undefined,
                  top:   pos.top,
                  width: pos.w,
                  height:pos.h,
                  zIndex: hov ? 30 : 10,
                }}
                animate={{ y:[0,-11,0] }}
                whileHover={{ scale:1.09 }}
                transition={{
                  y:{ duration:pos.dur, repeat:Infinity, repeatType:"mirror", ease:"easeInOut", delay:pos.del },
                  scale:{ duration:0.22, ease:"easeOut" },
                }}
              >
                {/* Card — big colored shadow */}
                <div
                  className="relative w-full h-full rounded-[22px] overflow-hidden transition-all duration-350"
                  style={{
                    backgroundColor: t.hexColor,
                    border: hov
                      ? `1.5px solid ${rcF.strip}90`
                      : "1.5px solid rgba(255,255,255,0.75)",
                    boxShadow: hov
                      ? `0 0 0 3px ${hexToRgba(rcF.strip,0.18)},
                         0 24px 64px ${hexToRgba(t.hexColor,0.70)},
                         0 10px 28px rgba(0,0,0,0.18)`
                      : `0 12px 40px ${hexToRgba(t.hexColor,0.55)},
                         0 4px 14px rgba(0,0,0,0.12)`,
                  }}
                >
                  {/* Portrait */}
                  <div className="relative w-full h-[86%]">
                    <Image src={t.image} alt={t.name} fill sizes="170px"
                      className="object-cover object-top pointer-events-none" priority/>
                    <div className="absolute bottom-0 left-0 right-0 h-20
                      bg-gradient-to-t from-black/40 to-transparent"/>
                  </div>

                  {/* Role strip */}
                  <div className="absolute bottom-0 left-0 right-0 px-2.5 py-2 flex items-center gap-1.5"
                    style={{backgroundColor: rcF.bg}}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{backgroundColor: rcF.strip}}/>
                    <span className="text-[8.5px] font-mono font-bold uppercase tracking-wider truncate"
                      style={{color: rcF.text}}>
                      {t.role}
                    </span>
                  </div>

                  {/* Hover tooltip */}
                  <AnimatePresence>
                    {hov && (
                      <motion.div
                        initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}
                        exit={{opacity:0,y:4}} transition={{duration:0.16}}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1F2937]
                          text-white text-[9px] font-mono font-bold px-3 py-1.5
                          rounded-lg whitespace-nowrap shadow-2xl pointer-events-none"
                      >
                        {t.name.split(" ")[0]}
                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2
                          w-2 h-2 bg-[#1F2937] rotate-45"/>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            );
          })}

          {/* ═══════════════ CENTER CARD ════════════════════════════════════════ */}
          <div className="relative z-20 flex items-center justify-center" style={{width:448}}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                variants={cardV} initial="hidden" animate="visible" exit="exit"
                className="w-full bg-white rounded-[38px] overflow-hidden"
                style={{
                  boxShadow:[
                    "0 2px  6px rgba(0,0,0,0.04)",
                    "0 10px 24px rgba(0,0,0,0.07)",
                    "0 32px 72px rgba(0,0,0,0.13)",
                    "0 64px 120px rgba(0,0,0,0.09)",
                    "0  0  100px rgba(46,125,50,0.13)",
                    "0  0   40px rgba(46,125,50,0.08)",
                  ].join(","),
                  border:"1px solid rgba(46,125,50,0.14)",
                }}
              >
                {/* Top accent — thicker vivid bar */}
                <div className="w-full h-[6px] bg-gradient-to-r from-[#1b5e20] via-[#66bb6a] to-[#3367d6]"/>

                <div className="p-6 flex flex-col">

                  {/* Event badge */}
                  <motion.div variants={childV} className="flex justify-center mb-4">
                    <span className="inline-flex items-center gap-2 bg-[#064e3b] text-white
                      text-[9px] font-mono font-bold tracking-[0.22em] uppercase
                      px-5 py-1.5 rounded-full
                      shadow-[0_6px_18px_rgba(6,78,59,0.40)]">
                      <span className="w-1 h-1 rounded-full bg-[#6ee7b7] animate-pulse"/>
                      {activeItem.event}
                    </span>
                  </motion.div>

                  {/* Person image */}
                  <motion.div variants={childV}
                    className="relative w-full rounded-[24px] overflow-hidden"
                    style={{
                      aspectRatio:"4/3",
                      boxShadow:"0 8px 32px rgba(0,0,0,0.18), inset 0 0 0 1px rgba(0,0,0,0.05)",
                    }}>
                    <Image src={activeItem.image} alt={activeItem.name}
                      fill sizes="448px" className="object-cover object-top" priority/>
                    <div className="absolute inset-0 bg-gradient-to-t
                      from-black/70 via-black/10 to-transparent"/>
                    {/* Name + location overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-citadel text-white text-[1.75rem] italic
                        leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                        {activeItem.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1.5">
                        <MapPin className="w-3 h-3 text-white/65 flex-shrink-0"/>
                        <span className="text-[9px] font-mono text-white/70 tracking-wide font-semibold">
                          {activeItem.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Role + stars */}
                  <motion.div variants={childV}
                    className="flex items-center justify-between mt-4">
                    <span className="inline-flex items-center gap-1.5 text-[9px] font-mono
                      font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                      style={{backgroundColor:rc.bg, color:rc.text}}>
                      <span className="w-1.5 h-1.5 rounded-full"
                        style={{backgroundColor:rc.strip}}/>
                      {activeItem.role}
                    </span>
                    <div className="flex gap-0.5">
                      {Array.from({length:5}).map((_,i)=>(
                        <Star key={i} className="w-4 h-4 fill-[#F4B400] text-[#F4B400]
                          drop-shadow-[0_1px_4px_rgba(244,180,0,0.5)]"/>
                      ))}
                    </div>
                  </motion.div>

                  {/* Divider */}
                  <motion.div variants={childV} className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"/>
                    <div className="w-1 h-1 rounded-full bg-zinc-300"/>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"/>
                  </motion.div>

                  {/* Quote */}
                  <motion.div variants={childV} className="relative pl-5">
                    <Quote className="absolute -top-1 -left-0.5 w-5 h-5
                      text-[#2E7D32]/25 fill-[#2E7D32]/15"/>
                    <p className="font-sans text-[12.5px] text-zinc-600 leading-[1.85] italic">
                      {activeItem.review}
                    </p>
                  </motion.div>

                  {/* Divider */}
                  <motion.div variants={childV} className="flex items-center gap-3 my-5">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"/>
                    <div className="w-1 h-1 rounded-full bg-zinc-300"/>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"/>
                  </motion.div>

                  {/* Meta grid */}
                  <motion.div variants={childV} className="grid grid-cols-2 gap-3">
                    <div className="bg-[#f8fdf8] rounded-2xl px-4 py-3 border border-[#e8f5e9]
                      shadow-[inset_0_1px_3px_rgba(46,125,50,0.06)]">
                      <p className="text-[7.5px] font-mono uppercase tracking-[0.22em]
                        text-zinc-400 font-bold mb-1.5">Initiative</p>
                      <p className="text-[11px] font-semibold text-[#1F2937] leading-tight">
                        {activeItem.event}
                      </p>
                    </div>
                    <div className="bg-[#f8fdf8] rounded-2xl px-4 py-3 border border-[#e8f5e9]
                      shadow-[inset_0_1px_3px_rgba(46,125,50,0.06)]">
                      <p className="text-[7.5px] font-mono uppercase tracking-[0.22em]
                        text-zinc-400 font-bold mb-1.5">Date</p>
                      <p className="text-[11px] font-semibold text-[#1F2937] leading-tight">
                        {activeItem.date}
                      </p>
                    </div>
                  </motion.div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ═══════════════════════ MOBILE ═════════════════════════════════════════ */}
        <div className="w-full flex flex-col items-center md:hidden gap-5 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={`mob-${activeItem.id}`}
              initial={{opacity:0,y:24,scale:0.97}}
              animate={{opacity:1,y:0,scale:1}}
              exit={{opacity:0,scale:0.97}}
              transition={{duration:0.35}}
              className="w-[340px] bg-white rounded-[28px] overflow-hidden"
              style={{
                boxShadow:"0 24px 72px rgba(0,0,0,0.13),0 0 60px rgba(46,125,50,0.09)",
                border:"1px solid rgba(46,125,50,0.12)",
              }}
            >
              <div className="w-full h-[5px] bg-gradient-to-r from-[#1b5e20] via-[#66bb6a] to-[#3367d6]"/>
              <div className="p-5 flex flex-col">
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-[#064e3b] text-white
                    text-[8px] font-mono font-bold tracking-widest uppercase
                    px-4 py-1 rounded-full shadow-[0_4px_12px_rgba(6,78,59,0.35)]">
                    <span className="w-1 h-1 rounded-full bg-[#6ee7b7] animate-pulse"/>
                    {activeItem.event}
                  </span>
                </div>
                <div className="relative w-full rounded-[18px] overflow-hidden"
                  style={{aspectRatio:"4/3",boxShadow:"0 6px 20px rgba(0,0,0,0.15)"}}>
                  <Image src={activeItem.image} alt={activeItem.name}
                    fill sizes="340px" className="object-cover object-top" priority/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent"/>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-citadel text-white text-xl italic drop-shadow-lg">
                      {activeItem.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <MapPin className="w-2.5 h-2.5 text-white/65"/>
                      <span className="text-[8px] font-mono text-white/70">{activeItem.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <span className="inline-flex items-center gap-1.5 text-[8px] font-mono
                    font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    style={{backgroundColor:rc.bg,color:rc.text}}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:rc.strip}}/>
                    {activeItem.role}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({length:5}).map((_,i)=>(
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F4B400] text-[#F4B400]"/>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"/>
                  <div className="w-1 h-1 rounded-full bg-zinc-300"/>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"/>
                </div>
                <div className="relative pl-4">
                  <Quote className="absolute -top-0.5 -left-0.5 w-4 h-4
                    text-[#2E7D32]/25 fill-[#2E7D32]/15"/>
                  <p className="font-sans text-[11px] text-zinc-600 leading-relaxed italic">
                    {activeItem.review}
                  </p>
                </div>
                <div className="flex items-center gap-2 my-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"/>
                  <div className="w-1 h-1 rounded-full bg-zinc-300"/>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"/>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-[#f8fdf8] rounded-xl px-3 py-2.5 border border-[#e8f5e9]">
                    <p className="text-[7px] font-mono uppercase tracking-widest text-zinc-400 font-bold mb-0.5">
                      Initiative</p>
                    <p className="text-[10px] font-semibold text-[#1F2937] leading-tight">{activeItem.event}</p>
                  </div>
                  <div className="bg-[#f8fdf8] rounded-xl px-3 py-2.5 border border-[#e8f5e9]">
                    <p className="text-[7px] font-mono uppercase tracking-widest text-zinc-400 font-bold mb-0.5">
                      Date</p>
                    <p className="text-[10px] font-semibold text-[#1F2937] leading-tight">{activeItem.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile thumb strip */}
          <div className="w-full flex gap-3 overflow-x-auto py-2 px-2 no-scrollbar">
            {floatingItems.map((t,idx)=>(
              <button key={`mob-${t.id}`} onClick={()=>select(idx)} className="flex-shrink-0">
                <div className="relative rounded-[14px] overflow-hidden
                  hover:scale-105 transition-transform"
                  style={{
                    width:60, height:76,
                    border:`1.5px solid ${hexToRgba(t.hexColor,0.6)}`,
                    boxShadow:`0 6px 18px ${hexToRgba(t.hexColor,0.55)}`,
                  }}>
                  <Image src={t.image} alt={t.name} fill sizes="64px"
                    className="object-cover object-top"/>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ═══════════════════════ PAGINATION ════════════════════════════════════ */}
        <div className="mt-10 md:mt-12 flex items-center justify-center gap-5 z-20">

          <motion.button whileHover={{scale:1.12}} whileTap={{scale:0.9}}
            onClick={goPrev}
            className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center
              text-zinc-500 hover:text-[#2E7D32] hover:border-[#2E7D32]/40 transition-all cursor-pointer
              shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(46,125,50,0.18)]">
            <ChevronLeft className="w-5 h-5 stroke-[2.5]"/>
          </motion.button>

          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono text-zinc-400 font-bold tracking-[0.2em]">
              {String(ai+1).padStart(2,"0")}&nbsp;/&nbsp;{String(testimonials.length).padStart(2,"0")}
            </span>
            <div className="flex gap-1.5 items-center">
              {testimonials.map(t=>(
                <button
                  key={`dot-${t.id}`}
                  onClick={()=>{ setActiveItem(t); setFloatingItems(testimonials.filter(x=>x.id!==t.id)); }}
                  title={t.name}
                  className={`rounded-full transition-all duration-300 ${
                    activeItem.id===t.id
                      ? "w-6 h-2 bg-[#2E7D32] shadow-[0_0_8px_rgba(46,125,50,0.6)]"
                      : "w-2 h-2 bg-zinc-300 hover:bg-zinc-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <motion.button whileHover={{scale:1.12}} whileTap={{scale:0.9}}
            onClick={goNext}
            className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center
              text-zinc-500 hover:text-[#2E7D32] hover:border-[#2E7D32]/40 transition-all cursor-pointer
              shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(46,125,50,0.18)]">
            <ChevronRight className="w-5 h-5 stroke-[2.5]"/>
          </motion.button>

        </div>
      </div>
    </section>
  );
}
