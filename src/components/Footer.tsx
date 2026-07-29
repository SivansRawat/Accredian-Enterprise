"use client";

import React from "react";

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-white border-t border-slate-200 pt-12 pb-8 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-4">
            <a href="#hero" className="flex items-center gap-2 group w-fit">
              <img
                src="/accredian/imgi_1_logo.webp"
                alt="Accredian Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <div className="flex items-center space-x-3 text-slate-600">
              <a
                href="https://www.facebook.com/accredianlearn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-[#1d72f3] rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>

              <a
                href="https://www.linkedin.com/company/accredianedu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-[#1d72f3] rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>

              <a
                href="https://x.com/accredianedu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-[#1d72f3] rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>

              <a
                href="https://www.instagram.com/accredian_edu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-[#1d72f3] rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>

              <a
                href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-100 hover:bg-blue-50 hover:text-[#1d72f3] rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end space-y-1">
            <button
              onClick={onOpenModal}
              className="px-8 py-3 bg-[#1d72f3] hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-md transition-all"
            >
              Enquire Now
            </button>
            <span className="text-xs font-medium text-slate-500">
              Speak with our Advisor
            </span>
          </div>
        </div>

        <hr className="border-slate-200" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-2">
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 tracking-wide">
              Accredian
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                <a
                  href="https://accredian.com/About"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d72f3] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="https://blog.accredian.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d72f3] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://accredian.com/whyaccredian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1d72f3] transition-colors"
                >
                  Why Accredian
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h3 className="text-sm font-extrabold text-slate-900 tracking-wide">
              Contact Us
            </h3>
            <ul className="space-y-2 text-xs font-semibold text-slate-600">
              <li>
                Email us:{" "}
                <a
                  href="mailto:enterprise@accredian.com"
                  className="text-[#1d72f3] hover:underline"
                >
                  enterprise@accredian.com
                </a>
              </li>
              <li className="leading-relaxed">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-slate-200" />

        <div className="text-center text-xs font-medium text-slate-500 pt-2">
          &copy; 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
