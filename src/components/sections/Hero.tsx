"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Lock,
  Plane,
  ArrowRight,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-28 pb-18 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50/60 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Big Bold Meaningful Headline with Scroll Animation */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 shadow-xs text-xs sm:text-sm font-semibold text-slate-800">
                <span className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Lock className="w-3 h-3 fill-white text-white" />
                </span>
                <span>ধর্ম বিষয়ক মন্ত্রণালয় ও সৌদি নুসুক অনুমোদিত এজেন্সি</span>
              </div>
            </motion.div>

            {/* Simpler, Impactful Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.2] text-slate-950"
            >
              সহজে ও নিশ্চিন্তে{" "}
              <span className="font-serif font-bold text-blue-700 underline decoration-blue-200 underline-offset-8">
                হজ ও ওমরাহ
              </span>{" "}
              পালন করুন
            </motion.h1>

            {/* Easy, Friendly, Meaningful Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl font-normal"
            >
              দালালদের অতিরিক্ত ফি বা প্রতারণা ছাড়াই সরাসরি সরকারি কোটায় নিশ্চিত ভিসা, সাশ্রয়ী বিমান টিকিট ও হারামের হাঁটার দূরত্বের হোটেল সেবা।
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="#services"
                animatedIcon="arrow"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-base sm:text-lg px-8 py-3.5 shadow-md shadow-blue-900/10"
              >
                প্যাকেজ ও খরচের তালিকা দেখুন
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="tel:+8801819001122"
                animatedIcon="phone"
                className="bg-slate-900 hover:bg-slate-800 text-white text-base sm:text-lg px-7 py-3.5"
              >
                পরামর্শকের সাথে কথা বলুন
              </Button>
            </motion.div>

            {/* Trust Metrics with High-Contrast, Clearly Visible Bangla Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="grid grid-cols-3 gap-6 pt-7 sm:pt-9 border-t border-slate-200"
            >
              <div>
                <div className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-blue-700 tracking-normal">
                  ১৫,০০০+
                </div>
                <div className="text-sm sm:text-base text-slate-700 mt-1 font-semibold">
                  অনুমোদিত হজ ও ওমরাহ ভিসা
                </div>
              </div>
              <div>
                <div className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-blue-700 tracking-normal">
                  ৯৯.৪%
                </div>
                <div className="text-sm sm:text-base text-slate-700 mt-1 font-semibold">
                  সময়মতো ফ্লাইট নিশ্চয়তা
                </div>
              </div>
              <div>
                <div className="font-sans text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-normal">
                  ১০০%
                </div>
                <div className="text-sm sm:text-base text-slate-700 mt-1 font-semibold">
                  সরাসরি সরকারি কোটা
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bigger, Realistic Hero Image Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              {/* Bigger Image Height */}
              <div className="relative h-[460px] sm:h-[520px] lg:h-[560px] w-full">
                <Image
                  src="https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=85"
                  alt="পবিত্র কাবা শরিফে তাওয়াফরতো হজযাত্রীগণ"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 550px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              </div>

              {/* Realistic Pilgrim Trust & Biman Airline Highlights */}
              <div className="absolute bottom-5 left-5 right-5 space-y-2.5">
                <div className="p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-slate-900">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-950 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Lock className="w-5 h-5 fill-white text-white" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-950 block font-serif">
                        সরকারি লাইসেন্স নং ১৪৩২ • IATA সদস্য
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                        মক্কা ও মদিনায় হারামের নিকটবর্তী নিশ্চিত হোটেল ও সার্বক্ষণিক মোয়াল্লেম গাইড
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-4 py-2.5 rounded-lg bg-slate-900/90 backdrop-blur-sm text-white text-xs font-semibold">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <Plane className="w-3.5 h-3.5" />
                    বিমান বাংলাদেশ ও সৌদিয়ার সরাসরি ফ্লাইট
                  </span>
                  <span className="text-slate-300 font-sans font-bold">ঢাকা ⇄ জেদ্দা / মদিনা</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
