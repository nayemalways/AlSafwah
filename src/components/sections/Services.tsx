"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Compass,
  PlaneTakeoff,
  ShieldCheck,
  Users,
  Globe2,
  CheckCircle2,
  Building,
  Plane,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SERVICES_DATA } from "@/data/services";

export function Services() {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    { id: "All", label: "সবগুলো সেবা" },
    { id: "Hajj & Umrah", label: "হজ ও ওমরাহ" },
    { id: "Air Ticket", label: "এয়ার টিকিট" },
    { id: "Visa Rescue", label: "ভিসা সমাধান" },
    { id: "Custom", label: "গ্রুপ প্যাকেজ" },
  ];

  const filteredServices =
    filter === "All"
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === filter);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Kaaba":
        return <Building className="w-5 h-5 text-blue-700" />;
      case "Compass":
        return <Compass className="w-5 h-5 text-blue-700" />;
      case "PlaneTakeoff":
        return <PlaneTakeoff className="w-5 h-5 text-blue-700" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-blue-700" />;
      case "Users":
        return <Users className="w-5 h-5 text-blue-700" />;
      case "Globe2":
        return <Globe2 className="w-5 h-5 text-blue-700" />;
      default:
        return <Compass className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/40 to-blue-50/30 border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="আমাদের সেবাসমূহ"
          badgeVariant="blue"
          title="হজ, ওমরাহ ও এয়ার টিকিটের"
          highlightText="বিশেষায়িত প্যাকেজ ও সেবাসমূহ"
          subtitle="সরকারি নুসুক অনুমোদন, IATA সরাসরি টিকিটিং এবং মক্কা-মদিনায় সার্বক্ষণিক প্রতিনিধি সহায়তার মাধ্যমে আপনার পবিত্র সফর হোক নিরাপদ ও আরামদায়ক।"
          align="center"
        />

        {/* Clean Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`px-5 py-2.5 rounded-lg text-sm sm:text-base font-semibold transition-all duration-150 ${
                filter === cat.id
                  ? "bg-blue-700 text-white shadow-sm"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Big & Highly Readable Package Cards with Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="flex"
            >
              <div className="rounded-2xl bg-white border border-slate-200 hover:border-blue-300 p-7 sm:p-8 flex flex-col justify-between w-full shadow-sm hover:shadow-md transition-all duration-200">
                <div>
                  {/* Card Header: Icon + Clean Relevant Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-md bg-blue-50 text-blue-900 border border-blue-200">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title in Secondary Bangla Font Style */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
                    {service.title}
                  </h3>

                  {/* Big Readable Description */}
                  <p className="text-base text-slate-600 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Clean Feature List with Larger Readable Text */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-7">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Professional Action Button */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    href="#contact"
                    animatedIcon="arrow"
                    className="bg-blue-700 hover:bg-blue-800 text-white text-base py-3 font-semibold"
                  >
                    বিস্তারিত ও বুকিং তথ্য
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Realistic Biman Airline Visual Relevancy Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-14 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-blue-50 border border-blue-200 flex-shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=200&q=80"
                alt="বিমান বাংলাদেশ ও সৌদিয়া এয়ারলাইন্স সরাসরি ফ্লাইট"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wide block">
                অফিসিয়াল এয়ারলাইন্স টিকিটিং অংশীদার
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mt-0.5">
                বিমান বাংলাদেশ এয়ারলাইন্স ও সৌদিয়া সরাসরি টিকিট বুকিং
              </h4>
              <p className="text-sm text-slate-600 mt-0.5 font-normal">
                পিক সিজনেও সর্বনিম্ন ফেয়ার লক, ৪৬ কেজি ব্যাগেজ ও জমজম পানির সরকারি অনুমতিপত্র অন্তর্ভুক্ত।
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="md"
            href="#contact"
            animatedIcon="arrow"
            className="flex-shrink-0 text-base"
          >
            ফ্লাইট শিডিউল জানুন
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
