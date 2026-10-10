"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { OFFICE_LOCATIONS } from "@/data/offices";
import { Button } from "@/components/ui/Button";

export function OfficeLocation() {
  const [selectedCity, setSelectedCity] = useState(OFFICE_LOCATIONS[0].city);

  const activeOffice =
    OFFICE_LOCATIONS.find((o) => o.city === selectedCity) || OFFICE_LOCATIONS[0];

  return (
    <section id="offices" className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="আমাদের অফিসসমূহ"
          badgeVariant="blue"
          title="সরাসরি কথা বলতে আমাদের"
          highlightText="নিবন্ধিত কর্পোরেট অফিসে আসুন"
          subtitle="আমরা শুধু অনলাইনে সীমাবদ্ধ নই। ঢাকা, চট্টগ্রাম, জেদ্দা বা লন্ডনের যে কোনো শাখায় সরাসরি এসে সামনাসামনি পরামর্শ নিতে পারেন।"
          align="center"
        />

        {/* Office Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {OFFICE_LOCATIONS.map((office) => (
            <button
              key={office.city}
              type="button"
              onClick={() => setSelectedCity(office.city)}
              className={`px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                selectedCity === office.city
                  ? "bg-blue-700 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span>{office.city}</span>
            </button>
          ))}
        </div>

        {/* Active Office Details Card with Scroll Animation */}
        <motion.div
          key={activeOffice.city}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Details */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-slate-200 p-7 sm:p-9 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs sm:text-sm font-bold text-blue-700 uppercase tracking-wide block mb-1">
                    {activeOffice.country}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    {activeOffice.city}
                  </h3>
                </div>
                {activeOffice.isHeadquarter && (
                  <span className="px-3.5 py-1.5 rounded-md bg-blue-100 text-blue-900 text-xs sm:text-sm font-bold">
                    প্রধান কার্যালয়
                  </span>
                )}
              </div>

              <div className="space-y-4 pt-1">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide block">
                      অফিসের ঠিকানা
                    </span>
                    <p className="text-base sm:text-lg font-medium text-slate-800 mt-0.5">
                      {activeOffice.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide block">
                      অফিস সময়সূচি
                    </span>
                    <p className="text-base sm:text-lg font-medium text-slate-800 mt-0.5">
                      {activeOffice.hours}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide block">
                        সরাসরি ফোন / হটলাইন
                      </span>
                      <a
                        href={`tel:${activeOffice.phone.split("/")[0].trim()}`}
                        className="text-base font-sans font-bold text-blue-700 hover:underline mt-0.5 block"
                      >
                        {activeOffice.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wide block">
                        ইমেইল ঠিকানা
                      </span>
                      <a
                        href={`mailto:${activeOffice.email}`}
                        className="text-base font-semibold text-slate-800 hover:text-blue-700 mt-0.5 block"
                      >
                        {activeOffice.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-7 mt-5 border-t border-slate-100 flex flex-wrap items-center gap-3.5">
              <Button
                variant="primary"
                size="md"
                href={`https://wa.me/${activeOffice.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                animatedIcon="arrow"
                className="bg-blue-700 hover:bg-blue-800 text-base"
              >
                হোয়াটসঅ্যাপে মেসেজ পাঠান
              </Button>
              <Button
                variant="outline"
                size="md"
                href="#contact"
                className="text-base"
              >
                অ্যাপয়েন্টমেন্ট বুক করুন
              </Button>
            </div>
          </div>

          {/* Right Preview Card */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-7 sm:p-8 flex flex-col justify-between shadow-sm border border-slate-800">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-wide">
                <Building className="w-4 h-4" />
                <span>অফিসে সরাসরি যেসব সেবা পাবেন</span>
              </div>
              <h4 className="font-serif text-2xl font-bold text-white">
                সরাসরি এসে সেবা গ্রহণ
              </h4>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                পাসপোর্টের সঠিকতা যাচাই, হোটেল রুমের ছবি ও ভিডিও দেখা, ভিসা ফাইল জমা বা সরাসরি ব্যাংক ড্রাফটের মাধ্যমে নিশ্চিত লেনদেন করতে পারেন।
              </p>

              <div className="space-y-2.5 pt-1 text-sm sm:text-base text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="font-semibold text-blue-400 block mb-0.5">
                    ✓ ফ্রি পাসপোর্ট ও ফটো অডিট
                  </span>
                  সৌদি দূতাবাসের নিয়মানুযায়ী আপনার পাসপোর্ট ও ছবির মাপ যাচাই।
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="font-semibold text-blue-400 block mb-0.5">
                    ✓ লাইভ এয়ার সিট ইনভেন্টরি
                  </span>
                  সৌদিয়া ও বিমান বাংলাদেশের উপলব্ধ আসনের তালিকা সরাসরি এজেন্টের স্ক্রিনে দেখুন।
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs sm:text-sm text-slate-400">
              <span>পরিবারসহ বসার মনোরম পরিবেশ</span>
              <span className="text-blue-400 font-semibold">পরামর্শ সম্পূর্ণ ফ্রি</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
