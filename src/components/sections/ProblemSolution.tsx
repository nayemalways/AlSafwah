"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  MinusCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROBLEM_SOLUTIONS } from "@/data/problems";
import { Button } from "@/components/ui/Button";

export function ProblemSolution() {
  return (
    <section
      id="solving-process"
      className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="আমাদের সেবার মান"
          badgeVariant="blue"
          title="হজ ও ওমরাহর সাধারণ সমস্যা এবং"
          highlightText="আমাদের কার্যকর সমাধান"
          subtitle="অনভিজ্ঞ এজেন্টের কারণে হজযাত্রীদের নানা ভোগান্তিতে পড়তে হয়। জেনে নিন কীভাবে আমরা সরাসরি সরকারি সিস্টেমের মাধ্যমে প্রতিটি ধাপ সহজ ও নিরাপদ করি।"
          align="center"
        />

        {/* Big & Highly Readable Comparison Cards with Scroll Loading Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {PROBLEM_SOLUTIONS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl bg-white border border-slate-200/90 shadow-sm p-7 sm:p-8 flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              <div className="space-y-6">
                {/* Header with index number & metric (Clean Bengali numerals) */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-sans text-base font-bold text-slate-500">
                    বিষয় ০{index + 1}
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-sans font-bold bg-blue-50 text-blue-900 border border-blue-200">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    {item.metric} {item.metricLabel}
                  </span>
                </div>

                {/* The Problem Box */}
                <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-slate-700 text-xs sm:text-sm font-bold uppercase tracking-wide">
                    <MinusCircle className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>সাধারণ সমস্যা</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                    {item.problemTitle}
                  </h4>
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {item.problemDesc}
                  </p>
                </div>

                {/* The Solution Box */}
                <div className="rounded-xl bg-blue-50/70 border border-blue-200 p-5 space-y-2.5">
                  <div className="flex items-center gap-2 text-blue-900 text-xs sm:text-sm font-bold uppercase tracking-wide">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0" />
                    <span>আমাদের নির্ভরযোগ্য সমাধান</span>
                  </div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-blue-950 leading-snug">
                    {item.solutionTitle}
                  </h4>
                  <p className="text-base text-slate-700 leading-relaxed font-normal">
                    {item.solutionDesc}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  লিখিত চুক্তিপত্রের মাধ্যমে সেবা প্রদান
                </span>

                <a
                  href="#contact"
                  className="font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 group transition-colors text-sm sm:text-base"
                >
                  <span>পরামর্শ নিন</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Bottom Reassurance Banner with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-14 rounded-2xl bg-slate-900 text-white p-7 sm:p-9 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-slate-800"
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <h4 className="text-2xl sm:text-3xl font-bold text-white">
              জরুরি ভিসা বা টিকিটের সমস্যা রয়েছে?
            </h4>
            <p className="text-base sm:text-lg text-slate-300">
              আমাদের কনস্যুলার ও টিকিটিং টিম আপনার পাসপোর্ট ফাইল সরাসরি পর্যালোচনা করবে।
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            href="tel:+8801819001122"
            animatedIcon="phone"
            className="flex-shrink-0 font-semibold bg-blue-700 hover:bg-blue-800 border-blue-800 text-base sm:text-lg px-8 py-3.5"
          >
            জরুরি হেল্পলাইনে কল করুন
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
