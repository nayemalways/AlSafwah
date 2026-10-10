"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  Users2,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "বাংলাদেশ ও সৌদি সরকার অনুমোদিত (লাইসেন্স ১৪৩২)",
    description:
      "ধর্ম বিষয়ক মন্ত্রণালয় ও সৌদি হজ মন্ত্রণালয়ের সরাসরি নুসুক পোর্টালে নিবন্ধিত। কোনো প্রকার দালাল বা মধ্যস্থতাকারীর সহায়তা ছাড়াই শতভাগ বৈধ ও স্বচ্ছ কোটায় সেবা।",
  },
  {
    icon: Award,
    title: "IATA অনুমোদিত বিমান ও আন্তর্জাতিক টিকিটিং",
    description:
      "বিমান বাংলাদেশ এয়ারলাইন্স ও সৌদিয়ার সাথে সরাসরি জিডিএস টার্মিনাল লিংক। আমরা নিজেরাই সরাসরি টিকিট ইস্যু ও রিশিডিউল করি, ফলে অতিরিক্ত ফি বা টিকিট কাটার অনিশ্চয়তা থাকে না।",
  },
  {
    icon: Users2,
    title: "অভিজ্ঞ আলেম ও মোয়াল্লেম দ্বারা পরিচালনা",
    description:
      "প্রতিটি কাফেলায় থাকেন অভিজ্ঞ আলেমগণ। ইহরাম বাঁধা থেকে শুরু করে তাওয়াফ, সাঈ ও বিদায়ী তাওয়াফ পর্যন্ত প্রতিটি আমল সঠিকভাবে সম্পন্ন করতে সার্বক্ষণিক দিকনির্দেশনা দেওয়া হয়।",
  },
  {
    icon: MapPin,
    title: "মক্কা ও মদিনায় নিজস্ব দায়িত্বপ্রাপ্ত টিম",
    description:
      "জেদ্দা বিমানবন্দর, মক্কা ও মদিনায় আমাদের সার্বক্ষণিক প্রতিনিধি উপস্থিত থাকেন, যাতে এয়ারপোর্টে অভ্যর্থনা, হোটেল চেক-ইন ও যাতায়াতে কোনো অসুবিধা না হয়।",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fafafa] border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Visual Brand Story & Sliding Text Overlay with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white">
              {/* Realistic Authentic Pilgrimage Image */}
              <div className="relative h-96 sm:h-[450px] w-full bg-slate-900">
                <Image
                  src="https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80"
                  alt="মসজিদুল নববী ও সফল হজযাত্রী কাফেলা"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                {/* Animated Overlay Text: Slides from bottom to top upon entering viewport */}
                <motion.div
                  initial={{ y: 45, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <span className="px-3.5 py-1.5 rounded-md bg-blue-700 text-white text-xs sm:text-sm font-semibold tracking-wide inline-block mb-3">
                    ১৪+ বছরের ধারাবাহিক বিশ্বস্ততা
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug drop-shadow-sm">
                    প্রতিটি পবিত্র সফরকে মর্যাদাপূর্ণ ও নির্বিঘ্ন করাই আমাদের মূল লক্ষ্য।
                  </h3>
                </motion.div>
              </div>

              {/* Bottom Stat Card with Clearly Visible Bangla Numbers */}
              <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-t border-slate-800">
                <div>
                  <div className="font-sans text-3xl sm:text-4xl font-black text-blue-400">
                    ১৪+ বছর
                  </div>
                  <div className="text-sm text-slate-300 mt-0.5">হজযাত্রীদের নিরবচ্ছিন্ন সেবা</div>
                </div>
                <div className="h-10 w-px bg-slate-800" />
                <div>
                  <div className="font-sans text-3xl sm:text-4xl font-black text-blue-400">
                    ৯৯.৮%
                  </div>
                  <div className="text-sm text-slate-300 mt-0.5">ভিসা সন্তুষ্টি ও নিশ্চয়তা</div>
                </div>
              </div>
            </div>

            {/* Reassurance Guarantee Box */}
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3.5">
              <HeartHandshake className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900">
                  আমাদের লিখিত অঙ্গীকার
                </h4>
                <p className="text-sm sm:text-base text-slate-600 mt-1 leading-relaxed font-normal">
                  প্যাকেজে প্রতিশ্রুত হোটেলের দূরত্ব, রুমের ধরন ও বিমান ফ্লাইটের সময়সূচি লিখিত চুক্তিপত্রের মাধ্যমে শতভাগ বাস্তবায়ন করা হয়।
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Mission & 4 Operational Pillars with Scroll Animation */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <SectionHeader
              badgeText="আমাদের পরিচিতি"
              badgeVariant="blue"
              title="স্বচ্ছতা, সততা ও সুন্নাহর ভিত্তিতে"
              highlightText="পরিচালিত হজ ও ওমরাহ এজেন্সি"
              subtitle="হজযাত্রীদের সাথে মিথ্যা প্রতিশ্রুতি, দূরবর্তী হোটেল ও অতিরিক্ত ভাড়ার ভোগান্তি দূর করার লক্ষ্যেই আল-সাফওয়াহ ট্রাভেলসের যাত্রা শুরু। আমরা প্রতিটি হাজীকে আল্লাহর মেহমান মনে করে সেবা দিয়ে থাকি।"
              align="left"
              className="mb-8"
            />

            {/* 4 Pillars Grid with Bigger Titles and Descriptions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
              {PILLARS.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.07 }}
                    className="p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-3.5 border border-blue-100">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-slate-900 text-lg sm:text-xl mb-2 leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-base text-slate-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="#services"
                animatedIcon="arrow"
                className="bg-blue-700 hover:bg-blue-800 text-base"
              >
                প্যাকেজের বিবরণ দেখুন
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="#offices"
                animatedIcon="arrow"
                className="text-base"
              >
                আমাদের অফিসে আসুন
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
