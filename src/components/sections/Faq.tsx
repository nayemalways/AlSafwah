"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { FAQS_DATA } from "@/data/faqs";
import { Button } from "@/components/ui/Button";

export function Faq() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: "সবগুলো প্রশ্ন" },
    { id: "Visa", label: "ভিসা সংক্রান্ত" },
    { id: "Air Ticket", label: "এয়ার টিকিট" },
    { id: "Hajj & Umrah", label: "হজ ও ওমরাহ" },
    { id: "General", label: "পেমেন্ট ও পলিসি" },
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS_DATA
      : FAQS_DATA.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#fcfcfd] border-b border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="সাধারণ জিজ্ঞাসা"
          badgeVariant="blue"
          title="হজ ও ওমরাহ নিয়ে"
          highlightText="সচরাচর জিজ্ঞাসিত প্রশ্ন ও উত্তর"
          subtitle="সরকারি নুসুক অনুমোদন, ভিসা রিজেকশন সমাধান, এয়ার টিকিটের মূল্য ও হোটেল সংক্রান্ত সব স্বচ্ছ তথ্য।"
          align="center"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-700 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Accordion items={filteredFaqs} defaultOpenId="faq-1" />
        </motion.div>

        {/* Still have questions banner with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-12 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center flex-shrink-0 border border-blue-200">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                আপনার কোনো নির্দিষ্ট প্রশ্ন বা পরামর্শ প্রয়োজন?
              </h4>
              <p className="text-sm sm:text-base text-slate-600 mt-0.5">
                আমাদের হজ ও ওমরাহ পরামর্শক সরাসরি আপনার প্রশ্নের উত্তর বুঝিয়ে দেবেন।
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            href="tel:+8801819001122"
            animatedIcon="phone"
            className="flex-shrink-0 text-base"
          >
            পরামর্শকের সাথে কথা বলুন
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
