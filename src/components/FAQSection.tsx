"use client";

import React, { useState } from "react";
import { FAQ_CATEGORIES } from "@/data/enterpriseData";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQSectionProps {
  onOpenModal: () => void;
}

export default function FAQSection({ onOpenModal }: FAQSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState("course");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategory = FAQ_CATEGORIES.find((cat) => cat.id === activeCategoryId) || FAQ_CATEGORIES[0];

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-[#1d72f3]">Questions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto pt-4">
          <div className="lg:col-span-4 flex flex-col space-y-3">
            {FAQ_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategoryId(cat.id);
                    setOpenIndex(0);
                  }}
                  className={`w-full py-4 px-6 rounded-2xl font-bold text-center text-sm transition-all border ${
                    isActive
                      ? "bg-white text-[#1d72f3] border-blue-200 shadow-md"
                      : "bg-slate-50 text-slate-600 border-slate-200/80 hover:bg-slate-100"
                  }`}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 space-y-4">
            {activeCategory.items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-slate-200 pb-4 pt-2 transition-all"
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between text-left py-2 focus:outline-none group"
                  >
                    <span className={`font-bold text-sm sm:text-base pr-4 transition-colors ${
                      isOpen ? "text-[#1d72f3]" : "text-slate-800 group-hover:text-[#1d72f3]"
                    }`}>
                      {item.question}
                    </span>
                    <span className="text-slate-400 group-hover:text-[#1d72f3] flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#1d72f3]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-2 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed animate-fadeIn pt-1">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center pt-6">
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
