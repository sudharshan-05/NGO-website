import { NavbarSection } from "@/components/sections/NavbarSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ImpactMapSection } from "@/components/sections/ImpactMapSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-[#1F2937] flex flex-col overflow-x-hidden">
      <NavbarSection />

      <main className="flex-1 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <ImpactMapSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <FooterSection />
    </div>
  );
}
