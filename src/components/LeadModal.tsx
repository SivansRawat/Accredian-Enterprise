"use client";

import React, { useState } from "react";
import { X, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [domain, setDomain] = useState("");
  const [candidates, setCandidates] = useState("");
  const [deliveryMode, setDeliveryMode] = useState("");
  const [location, setLocation] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          companyName,
          domain,
          candidates,
          deliveryMode,
          location,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Failed to submit enquiry.");
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
        setName("");
        setEmail("");
        setPhone("");
        setCompanyName("");
        setDomain("");
        setCandidates("");
        setDeliveryMode("");
        setLocation("");
      }, 2000);
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 relative max-h-[90vh]">
        <div className="hidden md:block md:col-span-5 relative bg-slate-900 overflow-hidden">
          <img
            src="/accredian/imgi_3_business-v2.webp"
            alt="Accredian Corporate Enquiry Business"
            className="w-full h-full object-cover opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent flex items-end p-6">
            <div className="relative z-10 text-white space-y-1">
              <div className="text-lg font-extrabold">Accredian Enterprise</div>
              <div className="text-xs font-medium text-blue-100 leading-snug">
                Transform your workforce with expert corporate learning solutions.
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 p-6 sm:p-8 overflow-y-auto space-y-6 relative">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-xl font-bold text-slate-900">Enquire Now</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
              <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted!</h3>
              <p className="text-xs text-slate-600">
                Thank you for contacting Accredian Enterprise. Our advisor will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div>
                <input
                  type="text"
                  required
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-2 px-1 text-sm border-b border-slate-300 focus:border-[#1d72f3] focus:outline-none placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-2 px-1 text-sm border-b border-slate-300 focus:border-[#1d72f3] focus:outline-none placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>

              <div className="flex items-center gap-2 border-b border-slate-300 focus-within:border-[#1d72f3] py-1">
                <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                  <span>🇮🇳</span> +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full py-1 text-sm focus:outline-none placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Enter company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full py-2 px-1 text-sm border-b border-slate-300 focus:border-[#1d72f3] focus:outline-none placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>

              <div>
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full py-2 px-1 text-sm border-b border-slate-300 focus:border-[#1d72f3] focus:outline-none text-slate-700 font-medium bg-transparent"
                >
                  <option value="" disabled>Select Domain</option>
                  <option value="Product & Innovation">Product & Innovation</option>
                  <option value="Gen-AI Mastery">Gen-AI Mastery</option>
                  <option value="Leadership Elevation">Leadership Elevation</option>
                  <option value="Tech & Data Insights">Tech & Data Insights</option>
                  <option value="Operations Excellence">Operations Excellence</option>
                  <option value="Digital Enterprise">Digital Enterprise</option>
                  <option value="Fintech Innovation Lab">Fintech Innovation Lab</option>
                </select>
              </div>

              <div>
                <input
                  type="number"
                  placeholder="Enter No. of candidates"
                  value={candidates}
                  onChange={(e) => setCandidates(e.target.value)}
                  className="w-full py-2 px-1 text-sm border-b border-slate-300 focus:border-[#1d72f3] focus:outline-none placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>

              <div>
                <select
                  required
                  value={deliveryMode}
                  onChange={(e) => setDeliveryMode(e.target.value)}
                  className="w-full py-2 px-1 text-sm border-b border-slate-300 focus:border-[#1d72f3] focus:outline-none text-slate-700 font-medium bg-transparent"
                >
                  <option value="" disabled>Select Mode of Delivery *</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                </select>
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Eg: Gurgoan, Delhi, India"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full py-2 px-1 text-sm border-b border-slate-300 focus:border-[#1d72f3] focus:outline-none placeholder:text-slate-400 text-slate-800 font-medium"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#1d72f3] hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  <span>Submit</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
