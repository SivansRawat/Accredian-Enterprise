"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section id="hero" className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-[#eaf3ff] via-[#f0f7ff] to-[#eaf3ff] rounded-3xl p-6 sm:p-10 lg:p-14 overflow-hidden border border-blue-100 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6 text-slate-900 z-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
                Next-Gen <br className="hidden sm:inline" />
                <span className="text-[#1d72f3]">Expertise</span> For <br className="hidden sm:inline" />
                Your <span className="text-[#1d72f3]">Enterprise</span>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-slate-700 max-w-xl leading-relaxed">
                Cultivate high-performance teams through expert learning.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full text-xs sm:text-sm font-semibold text-slate-800 border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Tailored Solutions</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full text-xs sm:text-sm font-semibold text-slate-800 border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Industry Insights</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1.5 bg-white rounded-full text-xs sm:text-sm font-semibold text-slate-800 border border-slate-200/80 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Expert Guidance</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenModal}
                  className="px-8 py-3.5 bg-[#1d72f3] hover:bg-blue-600 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all transform active:scale-95"
                >
                  Enquire Now
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg">
                <img
                  src="/accredian/imgi_2_corporate-big-hero-v4.webp"
                  alt="Accredian Enterprise Corporate Learning"
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
