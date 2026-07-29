"use client";

import React from "react";
import { TRACK_RECORD_STATS, PARTNER_LOGOS } from "@/data/enterpriseData";

export default function TrackRecordSection() {
  return (
    <section id="stats" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        <div className="text-center space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our <span className="text-[#1d72f3]">Track Record</span>
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-600">
              The Numbers Behind <span className="text-[#1d72f3]">Our Success</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {TRACK_RECORD_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 pt-6 md:pt-0 px-4">
                <div className="px-7 py-2 bg-[#dbeafe] text-[#1d72f3] font-black text-2xl sm:text-3xl rounded-full shadow-xs">
                  {stat.value}
                </div>
                <p className="text-sm font-semibold text-slate-700 max-w-xs leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="clients" className="text-center space-y-12 pt-6">
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Proven <span className="text-[#1d72f3]">Partnerships</span>
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-600">
              Successful Collaborations With the <span className="text-[#1d72f3]">Industry&apos;s Best</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 pt-4">
            {PARTNER_LOGOS.map((partner) => {
              const isReliance = partner.name.includes("Reliance");
              return (
                <div
                  key={partner.name}
                  className="flex items-center justify-center p-2 transition-transform hover:scale-105"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={`w-auto object-contain ${
                      isReliance
                        ? "h-14 sm:h-16 max-w-[210px] scale-110"
                        : "h-10 sm:h-12 max-w-[160px]"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
