"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Phone,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "আমাদের কথা", href: "#about" },
  { label: "প্যাকেজসমূহ", href: "#services" },
  { label: "সেবার মান", href: "#solving-process" },
  { label: "পদ্ধতি", href: "#how-to-get-services" },
  { label: "হাজীদের মতামত", href: "#testimonials" },
  { label: "প্রশ্নোত্তর", href: "#faq" },
  { label: "অফিস", href: "#offices" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Single Main Navigation Bar (Secondary top bar removed for cleaner look) */}
      <nav
        className={`transition-all duration-200 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-200"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-slate-200/80"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Simple Clean Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 block leading-tight">
                আল-সাফওয়াহ
              </span>
              <p className="text-xs text-slate-500 font-medium">
                হজ, ওমরাহ ও এয়ার টিকিট সেবা
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-semibold text-slate-700 hover:text-blue-700 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+8801819001122"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100/80 px-3.5 py-2 rounded-lg border border-blue-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-700" />
              <span className="font-sans font-bold">০১৮১৯ ০০১১২২</span>
            </a>

            <div className="hidden sm:block">
              <Button
                variant="primary"
                size="md"
                href="#contact"
                animatedIcon="arrow"
                className="bg-blue-700 hover:bg-blue-800 border-blue-800 font-semibold text-sm px-4 py-2"
              >
                ফ্রি পরামর্শ নিন
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="মেনু খুলুন"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden px-5 py-6"
          >
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-blue-700 py-1 border-b border-slate-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-2 space-y-3">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  href="#contact"
                  animatedIcon="arrow"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-blue-700 hover:bg-blue-800"
                >
                  ফ্রি পরামর্শ নিন
                </Button>
                <a
                  href="tel:+8801819001122"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>জরুরি কল: ০১৮১৯ ০০১১২২</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
