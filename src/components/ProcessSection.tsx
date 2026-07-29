"use client";

import React from "react";
import { DELIVERY_STEPS } from "@/data/enterpriseData";
import { TrendingUp, Monitor, Tv } from "lucide-react";

export default function ProcessSection() {
  const getDeliveryIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-white" />;
      case "Monitor":
        return <Monitor className="w-6 h-6 text-white" />;
      case "Tv":
        return <Tv className="w-6 h-6 text-white" />;
      default:
        return <TrendingUp className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="cat" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The <span className="text-[#1d72f3]">CAT Framework</span>
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-600">
              Our Proven Approach to <span className="text-[#1d72f3]">Learning Excellence</span>
            </p>
          </div>

          <div className="flex justify-center my-6">
            <img
              src="/accredian/imgi_16_catV2.svg"
              alt="The CAT Framework Concept Application Tools"
              className="w-full max-w-4xl h-auto object-contain drop-shadow-xs"
            />
          </div>
        </div>

        <div id="how-it-works" className="space-y-12 pt-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How We <span className="text-[#1d72f3]">Deliver Results</span> That Matter?
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-600">
              A Structured Three-Step Approach to <span className="text-[#1d72f3]">Skill Development</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {DELIVERY_STEPS.map((step) => (
              <div
                key={step.id}
                className="bg-[#f4f8fe] rounded-2xl p-6 border-l-4 border-l-[#1d72f3] border border-blue-200/70 shadow-xs hover:shadow-md transition-all text-center relative flex flex-col justify-between space-y-4"
              >
                <div className="absolute top-4 left-4 w-6 h-6 rounded-full border border-blue-400 bg-white text-[#1d72f3] text-xs font-bold flex items-center justify-center">
                  {step.stepNumber}
                </div>

                <div className="pt-2">
                  <div className="w-13 h-13 rounded-full bg-[#1d72f3] flex items-center justify-center mx-auto shadow-xs">
                    {getDeliveryIcon(step.iconName)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
