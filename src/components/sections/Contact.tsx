"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "এক্সপ্রেস ওমরাহ ই-ভিসা ও হারাম-ভিউ প্যাকেজ",
    travelMonth: "আগামী ৩০ দিনের মধ্যে",
    travelersCount: "২ জন",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      serviceType: "এক্সপ্রেস ওমরাহ ই-ভিসা ও হারাম-ভিউ প্যাকেজ",
      travelMonth: "আগামী ৩০ দিনের মধ্যে",
      travelersCount: "২ জন",
      notes: "",
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-blue-50/20 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badgeText="যোগাযোগ ও পরামর্শ"
          badgeVariant="blue"
          title="হজ ও ওমরাহ ভিসা যাচাই এবং"
          highlightText="বুকিংয়ের জন্য তথ্য দিন"
          subtitle="নিচের সাধারণ তথ্যগুলো পূরণ করুন। আমাদের অভিজ্ঞ কনস্যুলার অফিসার ১৫ মিনিটের মধ্যে আপনাকে ফোন করে বিস্তারিত তথ্য ও খরচ জানিয়ে দেবেন।"
          align="center"
          isDark={false}
        />

        {/* Form and Contact Cards with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          {/* Left Column: Direct Contact & Hotline */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2.5">
                <ShieldCheck className="w-6 h-6 text-blue-700" />
                কেন আমাদের সাথে যোগাযোগ করবেন?
              </h3>

              <div className="space-y-4 text-base text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-950 block text-base sm:text-lg font-bold">
                      ফ্রি পাসপোর্ট ও বায়ো-ডাটা স্ক্যান
                    </strong>
                    কোনো টাকা দেওয়ার আগেই আপনার পাসপোর্টের সঠিকতা যাচাই করে দেওয়া হয়।
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-950 block text-base sm:text-lg font-bold">
                      ন্যায্য ও নির্ধারিত ভাড়ায় টিকিট
                    </strong>
                    এয়ারলাইন্সের অযৌক্তিক বাড়তি ফি ছাড়া সর্বনিম্ন মূল্যে টিকিট ব্লক করা হয়।
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-950 block text-base sm:text-lg font-bold">
                      কোনো লুকানো বা অতিরিক্ত খরচ নেই
                    </strong>
                    ভিসা, হোটেল ও যাতায়াতের প্রতিটি খরচের লিখিত আইটেমাইজড রসিদ প্রদান করা হয়।
                  </div>
                </div>
              </div>

              {/* Direct Instant Action Boxes */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a
                  href="tel:+8801819001122"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all text-base"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-slate-500 text-xs block font-medium">জরুরি হটলাইন</span>
                      <strong className="text-slate-900 font-sans text-base sm:text-lg font-bold">+৮৮০ ১৮১৯ ০০১১২২</strong>
                    </div>
                  </div>
                  <span className="text-blue-700 text-sm font-bold">সরাসরি কল →</span>
                </a>

                <a
                  href="https://wa.me/8801819001122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-blue-50/80 hover:bg-blue-100/70 border border-blue-200 transition-all text-base"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-200 text-blue-800 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-blue-800 text-xs block font-medium">হোয়াটসঅ্যাপ চ্যাট</span>
                      <strong className="text-slate-900 font-sans text-base sm:text-lg font-bold">+৮৮০ ১৮১৯ ০০১১২২</strong>
                    </div>
                  </div>
                  <span className="text-blue-700 text-sm font-bold">মেসেজ দিন →</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Lead Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-slate-200 p-7 sm:p-9 shadow-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto border border-blue-200">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                    আপনার তথ্য সফলভাবে জমা হয়েছে!
                  </h3>
                  <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    ধন্যবাদ, <span className="font-semibold text-slate-900">{formData.fullName}</span>।
                    আমাদের সিনিয়র কনস্যুলার অফিসার খুব শীঘ্রই <span className="text-blue-700 font-sans font-bold">{formData.phone}</span> নম্বরে যোগাযোগ করবেন।
                  </p>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 max-w-xs mx-auto text-sm text-slate-600">
                    ট্র্যাকিং রেফারেন্স: <span className="font-mono font-bold text-slate-900">AL-SAF-2025-9842</span>
                  </div>
                  <div className="pt-3 flex justify-center gap-3">
                    <Button variant="outline" size="md" onClick={handleReset} className="text-base">
                      অন্য ফাইল জমা দিন
                    </Button>
                    <Button
                      variant="primary"
                      size="md"
                      href={`https://wa.me/8801819001122?text=আসসালামু%20আলাইকুম%2C%20আমি%20ওয়েবসাইটে%20ইনকোয়ারি%20জমা%20দিয়েছি%20(${encodeURIComponent(
                        formData.fullName
                      )})`}
                      target="_blank"
                      className="bg-blue-700 hover:bg-blue-800 text-base"
                    >
                      হোয়াটসঅ্যাপে কথা বলুন
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-slate-800 block mb-1.5">
                        আপনার পূর্ণ নাম *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="যেমন: ডা. তরিকুল ইসলাম"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-800 block mb-1.5">
                        মোবাইল / হোয়াটসঅ্যাপ নম্বর *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="০১৮১৯ ০০০০০০"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 font-sans"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-slate-800 block mb-1.5">
                        ইমেইল ঠিকানা (ঐচ্ছিক)
                      </label>
                      <input
                        type="email"
                        placeholder="example@mail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 font-sans"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-800 block mb-1.5">
                        সেবার ধরন *
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) =>
                          setFormData({ ...formData, serviceType: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option>এক্সপ্রেস ওমরাহ ই-ভিসা ও হারাম-ভিউ প্যাকেজ</option>
                        <option>সরকারি কোটায় নিশ্চিত হজ প্যাকেজ ২০২৫/২০২৬</option>
                        <option>সুলভ মূল্যে এয়ার টিকিট ও সিট নিশ্চয়তা</option>
                        <option>ভিসা রিজেকশন সমাধান ও কনস্যুলার সাপোর্ট</option>
                        <option>ভিআইপি ফ্যামিলি ও গ্রুপ ওমরাহ পরিচালনা</option>
                        <option>সৌদি ৯৬ ঘণ্টার ফ্রি ট্রানজিট ও ওমরাহ ভিসা</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-slate-800 block mb-1.5">
                        সম্ভাব্য ভ্রমণের সময়
                      </label>
                      <select
                        value={formData.travelMonth}
                        onChange={(e) =>
                          setFormData({ ...formData, travelMonth: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option>জরুরি / আগামী ৭ দিনের মধ্যে</option>
                        <option>আগামী ৩০ দিনের মধ্যে</option>
                        <option>আসন্ন পবিত্র রমজান মাস</option>
                        <option>হজ মৌসুম ২০২৫ / ১৪৪৬ হিজরি</option>
                        <option>সুবিধাজনক যে কোনো সময়</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-800 block mb-1.5">
                        যাত্রীর সংখ্যা
                      </label>
                      <select
                        value={formData.travelersCount}
                        onChange={(e) =>
                          setFormData({ ...formData, travelersCount: e.target.value })
                        }
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 font-sans"
                      >
                        <option>১ জন</option>
                        <option>২ জন (দম্পতি/জোড়া)</option>
                        <option>৩ – ৫ জন (পরিবার)</option>
                        <option>৬ – ১৫ জন (গ্রুপ)</option>
                        <option>১৫ জনের বেশি (দলীয়)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-800 block mb-1.5">
                      বিশেষ কোনো অনুরোধ বা সমস্যা (ঐচ্ছিক)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="যেমন: বয়স্ক বাবা-মায়ের জন্য হুইলচেয়ার প্রয়োজন, পূর্বে ভিসা বাতিল হয়েছিল, কিংবা ক্লক টাওয়ার হোটেলের রুম পছন্দ..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      type="submit"
                      disabled={isSubmitting}
                      animatedIcon="arrow"
                      className="bg-blue-700 hover:bg-blue-800 font-bold text-base sm:text-lg py-3.5"
                    >
                      {isSubmitting ? "তথ্য পাঠানো হচ্ছে..." : "পরামর্শের জন্য তথ্য জমা দিন"}
                    </Button>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 text-center font-normal">
                    🔒 আপনার পাসপোর্ট ও যোগাযোগের তথ্য সম্পূর্ণ গোপনীয়তার সাথে সংরক্ষিত রাখা হয়।
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
