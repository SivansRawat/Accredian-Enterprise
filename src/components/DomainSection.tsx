"use client";

import React from "react";
import {
  DOMAIN_EXPERTISE,
  COURSE_SEGMENTATION,
  STRATEGIC_TARGETS,
} from "@/data/enterpriseData";
import {
  Lightbulb,
  Brain,
  Users,
  BarChart3,
  Settings,
  Globe,
  Wallet,
  MonitorCheck,
  MonitorX,
  GraduationCap,
  Briefcase,
} from "lucide-react";

export default function DomainSection() {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case "Lightbulb":
        return <Lightbulb className="w-10 h-10 text-[#1d72f3] stroke-[1.75]" />;
      case "Brain":
        return <Brain className="w-10 h-10 text-[#1d72f3] stroke-[1.75]" />;
      case "Users":
        return <Users className="w-10 h-10 text-[#1d72f3] stroke-[1.75]" />;
      case "BarChart3":
        return <BarChart3 className="w-10 h-10 text-[#1d72f3] stroke-[1.75]" />;
      case "Settings":
        return <Settings className="w-10 h-10 text-[#1d72f3] stroke-[1.75]" />;
      case "Globe":
        return <Globe className="w-10 h-10 text-[#1d72f3] stroke-[1.75]" />;
      case "Wallet":
        return <Wallet className="w-10 h-10 text-[#1d72f3] stroke-[1.75]" />;
      default:
        return <Lightbulb className="w-10 h-10 text-[#1d72f3] stroke-[1.75]" />;
    }
  };

  const getTargetIcon = (iconName: string) => {
    switch (iconName) {
      case "MonitorCheck":
        return <MonitorCheck className="w-9 h-9 text-white stroke-[1.75]" />;
      case "MonitorX":
        return <MonitorX className="w-9 h-9 text-white stroke-[1.75]" />;
      case "GraduationCap":
        return <GraduationCap className="w-9 h-9 text-white stroke-[1.75]" />;
      case "Briefcase":
        return <Briefcase className="w-9 h-9 text-white stroke-[1.75]" />;
      default:
        return <MonitorCheck className="w-9 h-9 text-white stroke-[1.75]" />;
    }
  };

  const row1 = DOMAIN_EXPERTISE.slice(0, 3);
  const row2 = DOMAIN_EXPERTISE.slice(3, 6);
  const row3 = DOMAIN_EXPERTISE.slice(6, 7);

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        <div className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our <span className="text-[#1d72f3]">Domain Expertise</span>
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-600">
              <span className="text-[#1d72f3]">Specialized Programs</span> Designed to Fuel Innovation
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {row1.map((domain) => (
                <div
                  key={domain.id}
                  className="p-8 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all flex flex-col items-center text-center space-y-4 group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {getDomainIcon(domain.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 leading-snug">
                    {domain.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {row2.map((domain) => (
                <div
                  key={domain.id}
                  className="p-8 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all flex flex-col items-center text-center space-y-4 group"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {getDomainIcon(domain.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 leading-snug">
                    {domain.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              {row3.map((domain) => (
                <div
                  key={domain.id}
                  className="p-8 bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:border-blue-200 transition-all flex flex-col items-center text-center space-y-4 group w-full md:w-1/3"
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {getDomainIcon(domain.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 leading-snug">
                    {domain.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Tailored <span className="text-[#1d72f3]">Course Segmentation</span>
            </h2>
            <p className="text-sm sm:text-base font-semibold text-slate-600">
              Explore <span className="text-[#1d72f3]">Custom-fit Courses</span> Designed to Address Every Professional Focus
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {COURSE_SEGMENTATION.map((seg) => (
              <div
                key={seg.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-md overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
              >
                <div className="h-44 overflow-hidden relative bg-slate-100">
                  <img
                    src={seg.image}
                    alt={seg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 text-center space-y-2 flex-1 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-[#1d72f3]">
                    {seg.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-600 leading-relaxed max-w-xs mx-auto">
                    {seg.tags}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1d72f3] rounded-3xl p-8 sm:p-12 lg:p-14 text-white shadow-xl max-w-6xl mx-auto relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-1">
                <span className="text-sm font-semibold text-blue-100">
                  Who Should Join?
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  Strategic Skill Enhancement
                </h2>
              </div>

              <div className="pt-4 flex items-end justify-start">
                <img
                  src="/accredian/imgi_15_imagehuman.png"
                  alt="Accredian Strategic Professionals"
                  className="w-full max-w-xs sm:max-w-sm h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {STRATEGIC_TARGETS.map((target) => (
                <div key={target.id} className="space-y-2">
                  <div>{getTargetIcon(target.iconName)}</div>
                  <h3 className="text-lg font-bold text-white">
                    {target.title}
                  </h3>
                  <p className="text-xs font-medium text-blue-100 leading-relaxed">
                    {target.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
