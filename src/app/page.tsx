import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-ivory text-text-charcoal flex flex-col font-sans select-none">
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <div id="stories" className="w-full">
          <TestimonialsSection />
        </div>
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}

