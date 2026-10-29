/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUs from "./components/WhyChooseUs";
import BeforeAfterShowcase from "./components/BeforeAfterShowcase";
import TestimonialsSection from "./components/TestimonialsSection";
import ServiceAreasSection from "./components/ServiceAreasSection";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("");

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceId: string) => {
    setSelectedService(serviceId);
    scrollTo("quote-form");
  };

  const handleBookCleanout = (projectTitle: string) => {
    // Map project title to quote form service
    if (projectTitle.includes("GARAGE")) {
      setSelectedService("garage");
    } else if (projectTitle.includes("DUMPSTER")) {
      setSelectedService("commercial");
    } else if (projectTitle.includes("SHED") || projectTitle.includes("OUTBUILDING")) {
      setSelectedService("shed");
    } else {
      setSelectedService("construction");
    }
    scrollTo("quote-form");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-brandgold selection:text-navydark-950">
      {/* 1. Header Bar */}
      <Header onOpenQuote={() => scrollTo("quote-form")} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onSeeServices={() => scrollTo("services")} />

        {/* 3. About / Local Fleet Preview */}
        <AboutSection onGetEstimate={() => scrollTo("quote-form")} />

        {/* 4. Services Grid */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 5. Why Choose Junk Bolt */}
        <WhyChooseUs />

        {/* 6. Before & After Showcase with interactive slider */}
        <BeforeAfterShowcase onBookCleanout={handleBookCleanout} />

        {/* 7. Customer Reviews & Google Review CTA */}
        <TestimonialsSection />

        {/* 8. Service Areas & Southeastern Michigan Coverage */}
        <ServiceAreasSection onRequestQuote={() => scrollTo("quote-form")} />

        {/* 9. Quote Request Form */}
        <QuoteSection prefilledService={selectedService} />
      </main>

      {/* 10. Footer & Contact Cards */}
      <Footer onNavClick={(id) => scrollTo(id)} />

      {/* Floating Quick Call Button for Mobile */}
      <aside aria-label="Quick contact" className="fixed bottom-4 right-4 z-40 sm:hidden">
        <a
          href="tel:2487097911"
          aria-label="Call Junk Bolt at 248-709-7911"
          className="flex items-center gap-2 bg-brandgold text-navydark-950 px-4 py-3 rounded-full font-montserrat font-extrabold text-xs tracking-wider uppercase shadow-2xl border-2 border-white hover:bg-brandgold-hover transition-transform active:scale-95"
        >
          <span className="material-symbols-outlined text-lg">call</span>
          <span>Call 248-709-7911</span>
        </a>
      </aside>
    </div>
  );
}
