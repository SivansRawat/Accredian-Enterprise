"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrackRecordSection from "@/components/TrackRecordSection";
import AccredianEdgeSection from "@/components/AccredianEdgeSection";
import DomainSection from "@/components/DomainSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-700">
      <Header onOpenModal={openModal} />

      <main>
        <Hero onOpenModal={openModal} />
        <TrackRecordSection />
        <AccredianEdgeSection />
        <DomainSection />
        <ProcessSection />
        <FAQSection onOpenModal={openModal} />
        <TestimonialsSection onOpenModal={openModal} />
      </main>

      <Footer onOpenModal={openModal} />
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
