import { NavbarSection }      from "@/components/sections/NavbarSection";
import { HeroSection }         from "@/components/sections/HeroSection";
import { LeoClubSection }      from "@/components/sections/LeoClubSection";
import { AboutSection }        from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FooterSection }       from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#1F2937] flex flex-col select-none overflow-x-hidden">
      {/* ── Fixed Navbar ────────────────────────────────────────────────────── */}
      <NavbarSection />

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <main className="flex-1 flex flex-col">

        {/* 1. Hero — full-screen image slider with CTA */}
        <section id="home" aria-label="Hero">
          <HeroSection />
        </section>

        {/* 2. Leo Club — identity, stats, core values */}
        <section id="leo-club" aria-label="Leo Club Mavericks">
          <LeoClubSection />
        </section>

        {/* 3. About — story, mission, vision, impact areas */}
        <section id="about" aria-label="About Us">
          <AboutSection />
        </section>

        {/* 4. Testimonials — floating avatars, active card, map background */}
        <section id="stories" aria-label="Voices of Impact">
          <TestimonialsSection />
        </section>

      </main>

      {/* ── Footer ─────────────────────────────────────────────────────────── */}
      <FooterSection />
    </div>
  );
}
