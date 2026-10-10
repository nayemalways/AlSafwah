"use client";

import React from "react";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Phone,
  Lock,
  Globe,
  MessageSquare,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-700 pt-16 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple & Light 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          {/* Column 1: Brand & Credentials */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-sm">
                <Compass className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-tight">
                  আল-সাফওয়াহ ট্রাভেলস
                </span>
                <span className="text-xs text-blue-700 font-semibold tracking-wide">
                  হজ, ওমরাহ ও এয়ার টিকিট সেবা
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              ধর্ম বিষয়ক মন্ত্রণালয় (বাংলাদেশ) ও সৌদি হজ মন্ত্রণালয় অনুমোদিত এজেন্সি। দালালদের অতিরিক্ত ফি বা প্রতারণা ছাড়াই সরাসরি সরকারি কোটায় নিরাপদ হজ ও ওমরাহ পালন করুন।
            </p>

            {/* Accreditations */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-900 flex items-center gap-2 font-bold shadow-xs">
                <span className="w-4 h-4 rounded-full bg-slate-950 text-white flex items-center justify-center flex-shrink-0">
                  <Lock className="w-2.5 h-2.5 fill-white text-white" />
                </span>
                লাইসেন্স নং ১৪৩২
              </span>
              <span className="px-3 py-1.5 rounded-md bg-white border border-slate-200 text-blue-700 flex items-center gap-1.5 font-bold shadow-xs">
                <Globe className="w-4 h-4 text-blue-600" />
                IATA অনুমোদিত
              </span>
            </div>
          </div>

          {/* Column 2: Working Navigation Links */}
          <div className="space-y-3.5">
            <h4 className="text-slate-900 font-bold text-base tracking-wide border-l-2 border-blue-600 pl-2.5">
              প্রয়োজনীয় লিংক
            </h4>
            <ul className="space-y-2 text-base text-slate-600 font-medium">
              <li>
                <a href="#about" className="hover:text-blue-700 transition-colors">
                  আমাদের পরিচিতি
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-700 transition-colors">
                  প্যাকেজ ও খরচ
                </a>
              </li>
              <li>
                <a href="#solving-process" className="hover:text-blue-700 transition-colors">
                  আমাদের সেবার মান
                </a>
              </li>
              <li>
                <a href="#how-to-get-services" className="hover:text-blue-700 transition-colors">
                  সেবা নেওয়ার ৪ ধাপ
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-blue-700 transition-colors">
                  হাজীদের বাস্তব মতামত
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-700 transition-colors">
                  সাধারণ প্রশ্নোত্তর
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Working Service Links */}
          <div className="space-y-3.5">
            <h4 className="text-slate-900 font-bold text-base tracking-wide border-l-2 border-blue-600 pl-2.5">
              আমাদের সেবাসমূহ
            </h4>
            <ul className="space-y-2 text-base text-slate-600 font-medium">
              <li>
                <a href="#services" className="hover:text-blue-700 transition-colors">
                  সরকারি কোটায় হজ ২০২৫/২০২৬
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-700 transition-colors">
                  এক্সপ্রেস ওমরাহ ই-ভিসা (২৪-৪৮ ঘণ্টা)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-700 transition-colors">
                  সুলভ মূল্যে এয়ার টিকিট (IATA)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-700 transition-colors">
                  ভিসা রিজেকশন আইনি সমাধান
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-700 transition-colors">
                  পরিবারসহ ভিআইপি ওমরাহ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Real Working Contacts & Offices */}
          <div className="space-y-3.5">
            <h4 className="text-slate-900 font-bold text-base tracking-wide border-l-2 border-blue-600 pl-2.5">
              জরুরি যোগাযোগ ও অফিস
            </h4>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-700 mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-semibold">ঢাকা প্রধান অফিস:</strong>
                  <span>মহাখালী সি/এ, বীর উত্তম এ কে খন্দকার রোড, ঢাকা-১২১২</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-700 flex-shrink-0" />
                <a
                  href="tel:+8801819001122"
                  className="font-sans font-bold text-slate-900 hover:text-blue-700"
                >
                  +৮৮০ ১৮১৯ ০০১১২২
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/8801819001122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>হোয়াটসঅ্যাপে সরাসরি চ্যাট</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Simple Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>
            © {new Date().getFullYear()} আল-সাফওয়াহ ট্রাভেলস লিমিটেড। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-700 transition-colors">
              আমাদের অঙ্গীকার
            </a>
            <a href="#offices" className="hover:text-blue-700 transition-colors">
              শাখা সমূহ
            </a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">
              যোগাযোগ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
