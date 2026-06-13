"use client";

import { motion } from "framer-motion";
import { Heart, MapPin, Mail, Phone, ArrowRight, ExternalLink } from "lucide-react";

// ─── Inline brand SVGs (lucide-react v1 dropped all brand icons) ──────────────
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}
function IconTwitter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function IconYoutube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12z"/>
    </svg>
  );
}

// ─── Brand token re-use ────────────────────────────────────────────────────────
const GREEN  = "#2E7D32";
const GOLD   = "#F4B400";
const BLUE   = "#4285F4";

// ─── Nav columns ──────────────────────────────────────────────────────────────
const columns = [
  {
    label: "About",
    links: [
      { text: "Our Mission",      href: "#" },
      { text: "Who We Are",       href: "#" },
      { text: "Leo Club History", href: "#" },
      { text: "Leadership Team",  href: "#" },
      { text: "Annual Reports",   href: "#" },
    ],
  },
  {
    label: "Programs",
    links: [
      { text: "Community Drives",     href: "#" },
      { text: "Youth Empowerment",    href: "#" },
      { text: "Environmental Action", href: "#" },
      { text: "Health Camps",         href: "#" },
      { text: "Skill Development",    href: "#" },
    ],
  },
  {
    label: "Get Involved",
    links: [
      { text: "Volunteer",     href: "#" },
      { text: "Donate",        href: "#" },
      { text: "Partner With Us", href: "#" },
      { text: "Events",        href: "#" },
      { text: "Contact Us",    href: "#" },
    ],
  },
];

const socials = [
  { Icon: IconInstagram, href: "#", label: "Instagram" },
  { Icon: IconFacebook,  href: "#", label: "Facebook"  },
  { Icon: IconTwitter,   href: "#", label: "Twitter / X" },
  { Icon: IconYoutube,   href: "#", label: "YouTube"   },
];

// ─── Stagger variants ─────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export function FooterSection() {
  return (
    <footer
      className="relative w-full overflow-hidden font-sans select-none"
      style={{ background: "#111816" }}
    >
      {/* ── Subtle top gradient bar ──────────────────────────────────────────── */}
      <div
        className="w-full h-[3px]"
        style={{
          background: `linear-gradient(90deg, ${GREEN} 0%, ${GOLD} 40%, ${BLUE} 80%, ${GREEN} 100%)`,
        }}
      />

      {/* ── Ambient background glows ────────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: "-120px", left: "-80px",
          width: 500, height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(46,125,50,0.10) 0%, transparent 68%)`,
        }}
      />
      <div
        className="pointer-events-none absolute"
        style={{
          bottom: "-60px", right: "-60px",
          width: 420, height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(244,180,0,0.07) 0%, transparent 68%)`,
        }}
      />

      {/* ═══════════════════ MAIN CONTENT ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">

        {/* ── Top Section ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 pb-12 border-b border-white/[0.07]">

          {/* Brand Column */}
          <motion.div
            className="lg:col-span-4"
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Logo Mark */}
            <div className="flex items-start gap-4 mb-6">
              {/* Icon badge */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: `linear-gradient(135deg, ${GREEN} 0%, #1b5e20 100%)`,
                  boxShadow: `0 8px 24px rgba(46,125,50,0.30)` }}
              >
                <Heart className="w-6 h-6 text-white fill-white" />
              </div>

              {/* Brand text block */}
              <div className="flex flex-col gap-0">
                {/* Sub-label */}
                <span className="text-[9px] font-mono font-bold uppercase tracking-[0.28em] mb-1"
                  style={{ color: `${GREEN}` }}>
                  Leo Club
                </span>
                {/* Main name */}
                <span
                  className="font-gondens text-[2rem] leading-[1.1] tracking-tight text-white"
                >
                  Mavericks
                </span>
                {/* Thin gold accent line */}
                <div className="mt-1 h-[2px] w-12 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
              </div>
            </div>


            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs">
              Empowering young leaders to serve, grow, and transform communities
              across Tamil Nadu — one initiative at a time.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              {[
                { Icon: MapPin, text: "Chennai, Tamil Nadu, India" },
                { Icon: Mail,   text: "mavericks@leoclub.org" },
                { Icon: Phone,  text: "+91 98765 43210" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 group cursor-default">
                  <Icon
                    className="w-3.5 h-3.5 flex-shrink-0 transition-colors duration-200"
                    style={{ color: `${GREEN}` }}
                  />
                  <span className="text-xs text-white/45 group-hover:text-white/70 transition-colors duration-200">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-7">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center
                    border border-white/10 bg-white/[0.05]
                    hover:border-white/20 hover:bg-white/[0.12]
                    transition-all duration-200 group"
                >
                  <Icon className="w-3.5 h-3.5 text-white/35 group-hover:text-white transition-colors duration-200" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Nav Columns */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-8">
            {columns.map((col, ci) => (
              <motion.div
                key={col.label}
                custom={ci + 1} variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] mb-4"
                  style={{ color: GREEN }}>
                  {col.label}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.text}>
                      <a
                        href={link.href}
                        className="text-xs text-white/45 hover:text-white/90 transition-colors duration-200
                          flex items-center gap-1 group"
                      >
                        <span className="w-0 overflow-hidden group-hover:w-2.5 transition-all duration-200 opacity-0 group-hover:opacity-100"
                          style={{ color: GOLD }}>
                          ›
                        </span>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <motion.div
            className="lg:col-span-3"
            custom={4} variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="text-[10px] font-mono font-bold uppercase tracking-[0.22em] mb-4"
              style={{ color: GREEN }}>
              Stay Updated
            </p>
            <p className="text-xs text-white/45 leading-relaxed mb-5">
              Get impact stories, event invites, and community updates delivered to your inbox.
            </p>

            {/* Email input */}
            <div className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl
                  px-4 py-2.5 text-xs text-white placeholder-white/25
                  focus:outline-none focus:border-[#2E7D32]/60 focus:bg-white/[0.09]
                  transition-all duration-200"
              />
              <button
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4
                  rounded-xl text-xs font-semibold text-white
                  transition-all duration-200 group"
                style={{ background: `linear-gradient(135deg, ${GREEN} 0%, #1b5e20 100%)` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 8px 24px rgba(46,125,50,0.45)`;
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "";
                  (e.currentTarget as HTMLButtonElement).style.transform = "";
                }}
              >
                Subscribe
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Association badge */}
            <div className="mt-6 flex items-center gap-2 p-3 rounded-xl border border-white/[0.07] bg-white/[0.03]">
              <div
                className="w-6 h-6 rounded-md flex-shrink-0 flex items-center justify-center"
                style={{ background: `rgba(244,180,0,0.15)` }}
              >
                <ExternalLink className="w-3 h-3" style={{ color: GOLD }} />
              </div>
              <div>
                <p className="text-[9px] font-mono uppercase tracking-widest text-white/30">
                  Affiliated with
                </p>
                <p className="text-[10px] font-semibold text-white/60 leading-tight">
                  Lions Clubs International
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom Bar ───────────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6"
          custom={5} variants={fadeUp} initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="text-[10px] text-white/25 font-mono tracking-wide">
            © {new Date().getFullYear()} Leo Club Mavericks · Chennai, India · All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Accessibility"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[10px] text-white/25 hover:text-white/60
                  font-mono tracking-wide transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-white/20 font-mono">Made with</span>
            <Heart
              className="w-2.5 h-2.5 fill-current"
              style={{ color: `${GREEN}` }}
            />
            <span className="text-[10px] text-white/20 font-mono">for Chennai</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
