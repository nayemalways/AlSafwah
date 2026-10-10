"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ShieldCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[#fafafc] text-slate-900 relative overflow-hidden border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="হাজীদের বাস্তব অভিজ্ঞতা"
          badgeVariant="blue"
          title="আমাদের সম্মানিত মেহমানদের"
          highlightText="সন্তুষ্টি ও বাস্তব মতামত"
          subtitle="যাঁরা আমাদের মাধ্যমে সরাসরি সরকারি কোটায় পবিত্র হজ ও ওমরাহ পালন করেছেন, তাঁদের সতস্ফূর্ত অনুভূতি।"
          align="center"
          isDark={false}
        />

        {/* Testimonials Grid on Clean White Cards with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.07 }}
              className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-blue-300 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Rating Stars & Service Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <span className="text-xs sm:text-sm font-semibold text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-md">
                    {item.serviceUsed}
                  </span>
                </div>

                {/* Big Readable Quote Text */}
                <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-blue-300 flex-shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold text-slate-900 flex items-center gap-1.5">
                      {item.name}
                      {item.verified && (
                        <ShieldCheck
                          className="w-4 h-4 text-blue-600"
                          aria-label="ভেরিফাইড হজযাত্রী"
                        />
                      )}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium">{item.location}</p>
                  </div>
                </div>

                <span className="text-xs sm:text-sm text-slate-400 font-sans">{item.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Aggregate Credibility Summary with Big Clear Bengali Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-14 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3.5">
            <div className="flex -space-x-2 overflow-hidden">
              {TESTIMONIALS_DATA.map((t, i) => (
                <div
                  key={i}
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white relative overflow-hidden"
                >
                  <Image src={t.avatar} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div>
              <span className="font-serif text-base sm:text-lg font-bold text-slate-900 block">
                <span className="font-sans font-black text-blue-700">৪,২০০+</span> সম্মানিত হাজীর গুগল ও ফেইসবুকে <span className="font-sans font-black text-amber-600">৪.৯৭</span> স্টার রেটিং
              </span>
              <span className="text-sm text-slate-600 font-normal">
                ঢাকা, চট্টগ্রাম ও প্রবাসীদের নির্ভরযোগ্য হজ কাফেলা
              </span>
            </div>
          </div>

          <a
            href="#contact"
            className="text-sm sm:text-base font-bold text-blue-700 hover:text-blue-900 underline underline-offset-4"
          >
            আপনার পরিবারের জন্য পরামর্শ চান? →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
