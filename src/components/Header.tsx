"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [activeSection, setActiveSection] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Stats", href: "#stats" },
    { label: "Clients", href: "#clients" },
    { label: "Accredian Edge", href: "#edge" },
    { label: "CAT", href: "#cat" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQs", href: "#faqs" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const target = document.querySelector(item.href);
        if (target) {
          const top = (target as HTMLElement).offsetTop;
          const height = (target as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.label);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <img
            src="/accredian/imgi_1_logo.webp"
            alt="Accredian Credentials That Matter"
            className="h-10 sm:h-11 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.label;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(item.label)}
                className={`text-sm font-semibold transition-colors relative py-1 ${
                  isActive ? "text-[#1d72f3]" : "text-slate-700 hover:text-[#1d72f3]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#1d72f3] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActiveSection(item.label);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                activeSection === item.label
                  ? "bg-blue-50 text-[#1d72f3]"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full py-3 bg-[#1d72f3] text-white font-bold rounded-xl text-center shadow-md text-sm"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
