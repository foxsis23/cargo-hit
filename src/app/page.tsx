import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FamiliarSituation from "@/components/FamiliarSituation";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import WhenToContact from "@/components/WhenToContact";
import CtaSection from "@/components/CtaSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <FamiliarSituation />
      <WhatWeDo />
      <HowItWorks />
      <WhenToContact />
      <CtaSection />
    </main>
  );
}
