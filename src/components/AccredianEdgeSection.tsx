"use client";

import React from "react";

export default function AccredianEdgeSection() {
  return (
    <section id="edge" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The <span className="text-[#1d72f3]">Accredian Edge</span>
          </h2>
          <p className="text-sm sm:text-base font-semibold text-slate-600">
            Empowering Workforce Transformation Through <span className="text-[#1d72f3]">Excellence</span>
          </p>
        </div>

        <div className="hidden sm:flex justify-center my-4">
          <img
            src="/accredian/imgi_9_accredian-edge-usp-v3.svg"
            alt="The Accredian Edge Desktop Diagram"
            className="w-full max-w-5xl h-auto object-contain drop-shadow-xs"
          />
        </div>

        <div className="sm:hidden flex justify-center my-4">
          <img
            src="/accredian/imgi_10_accredian-edge-usp-mobile.svg"
            alt="The Accredian Edge Mobile Diagram"
            className="w-full max-w-sm h-auto object-contain drop-shadow-xs"
          />
        </div>
      </div>
    </section>
  );
}
