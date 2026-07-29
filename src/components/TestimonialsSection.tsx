"use client";

import React, { useState } from "react";
import { TESTIMONIALS } from "@/data/enterpriseData";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  onOpenModal: () => void;
}

export default function TestimonialsSection({ onOpenModal }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const currentItem = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Client <span className="text-[#1d72f3]">Testimonials</span>
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-600">
            What Leading Organizations Say About <span className="text-[#1d72f3]">Our Impact</span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/70 relative">
            <Quote className="w-12 h-12 text-blue-200/70 absolute top-6 right-6 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="h-10 flex items-center">
                <img
                  src={currentItem.logo}
                  alt={currentItem.company}
                  className="h-9 w-auto object-contain"
                />
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed italic">
                &ldquo;{currentItem.quote}&rdquo;
              </blockquote>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-base font-bold text-slate-900">
                    {currentItem.author}
                  </div>
                  <div className="text-xs font-medium text-slate-500">
                    {currentItem.role}, <span className="text-[#1d72f3] font-semibold">{currentItem.company}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full bg-slate-100 hover:bg-[#1d72f3] hover:text-white text-slate-700 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-slate-100 hover:bg-[#1d72f3] hover:text-white text-slate-700 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 pt-6">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? "w-8 bg-[#1d72f3]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <button
            onClick={onOpenModal}
            className="px-8 py-3.5 bg-[#1d72f3] hover:bg-blue-600 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-500/25 transition-all transform active:scale-95"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
