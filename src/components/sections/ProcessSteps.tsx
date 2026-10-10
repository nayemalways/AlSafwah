"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  SlidersHorizontal,
  CheckCircle2,
  PlaneLanding,
  Clock,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PROCESS_STEPS } from "@/data/steps";
import { Button } from "@/components/ui/Button";

export function ProcessSteps() {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "FileText":
        return <FileText className="w-5 h-5 text-blue-700" />;
      case "SlidersHorizontal":
        return <SlidersHorizontal className="w-5 h-5 text-blue-700" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5 text-blue-700" />;
      case "PlaneLanding":
        return <PlaneLanding className="w-5 h-5 text-blue-700" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section
      id="how-to-get-services"
      className="py-20 sm:py-28 bg-[#f8faff] border-b border-slate-200/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="সহজ ৪টি ধাপ"
          badgeVariant="blue"
          title="কীভাবে সেবা গ্রহণ করবেন"
          highlightText="সম্পূর্ণ ঝামেলামুক্ত পদ্ধতিতে"
          subtitle="পাসপোর্ট স্ক্যান দেওয়া থেকে শুরু করে জেদ্দা বিমানবন্দরে পৌঁছানো পর্যন্ত প্রতিটি ধাপ অনলাইন ও স্বচ্ছ প্রক্রিয়ায় সম্পন্ন হয়।"
          align="center"
        />

        {/* Steps Grid with Scroll Loading Animation and Clear Bangla Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="relative rounded-2xl bg-white border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 group"
            >
              <div>
                {/* Step Top Bar: Clearly Visible Bangla Numerals + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-sans text-3xl font-black text-slate-400 group-hover:text-blue-700 transition-colors">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-700 group-hover:text-white transition-all">
                    {getStepIcon(step.iconName)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2.5 leading-snug">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Step Deliverable & Duration Badge */}
              <div className="pt-4 border-t border-slate-100 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-slate-600 font-medium">
                  <Clock className="w-4 h-4 text-blue-700" />
                  <span>সময়সীমা: {step.duration}</span>
                </div>
                <div className="text-xs sm:text-sm font-semibold text-blue-900 bg-blue-50 px-3 py-1.5 rounded-md border border-blue-200">
                  <span className="font-bold">আউটপুট:</span> {step.deliverable}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to start Step 1 */}
        <div className="mt-14 text-center">
          <Button
            variant="primary"
            size="lg"
            href="#contact"
            animatedIcon="arrow"
            className="bg-blue-700 hover:bg-blue-800 font-semibold text-base sm:text-lg px-8 py-3.5"
          >
            ধাপ ১ শুরু করুন: ফ্রি পাসপোর্ট ভেরিফিকেশন
          </Button>
        </div>
      </div>
    </section>
  );
}
