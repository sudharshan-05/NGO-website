import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JoinModal from "./components/JoinModal";
import DonateModal from "./components/DonateModal";

export default function App() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);

  return (
    <div 
      id="app-root" 
      className="min-h-screen bg-bg-ivory text-text-charcoal font-sans antialiased overflow-x-hidden selection:bg-secondary-gold/30 selection:text-text-charcoal flex flex-col justify-start pb-12"
    >
      {/* Decorative radial lighting in top background */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[400px] bg-primary-forest/5 rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Navigation Header from image */}
      <Header 
        onJoinClick={() => setJoinModalOpen(true)} 
        onDonateClick={() => setDonateModalOpen(true)}
        onGalleryClick={() => {}}
      />

      {/* Hero Section Banner */}
      <main className="relative z-10 w-full flex-grow flex items-center">
        <Hero 
          onJoinClick={() => setJoinModalOpen(true)} 
          onDonateClick={() => setDonateModalOpen(true)} 
        />
      </main>

      {/* Interactive Action Modals for fully-functional interactive fidelity */}
      <JoinModal isOpen={joinModalOpen} onClose={() => setJoinModalOpen(false)} />
      <DonateModal isOpen={donateModalOpen} onClose={() => setDonateModalOpen(false)} />
    </div>
  );
}
