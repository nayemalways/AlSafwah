"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  id: string;
  title: string;
  content: string;
  category?: string;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  id,
  title,
  content,
  category,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300 overflow-hidden bg-white",
        isOpen
          ? "border-blue-400 shadow-md ring-1 ring-blue-400/30"
          : "border-slate-200 hover:border-slate-300 shadow-sm"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      >
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5">
          {category && (
            <span
              className={cn(
                "inline-block self-start text-xs sm:text-sm font-semibold tracking-wide px-3 py-1 rounded-md border",
                isOpen
                  ? "bg-blue-100 text-blue-900 border-blue-200"
                  : "bg-slate-100 text-slate-700 border-slate-200"
              )}
            >
              {category}
            </span>
          )}
          <span
            className={cn(
              "font-serif font-bold text-lg sm:text-xl transition-colors leading-snug",
              isOpen ? "text-blue-900" : "text-slate-900"
            )}
          >
            {title}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={cn(
            "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors",
            isOpen
              ? "bg-blue-700 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-0 text-slate-700 text-base sm:text-lg leading-relaxed border-t border-slate-100 font-normal">
              <div className="pt-4">{content}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface AccordionProps {
  items: {
    id: string;
    question: string;
    answer: string;
    category?: string;
  }[];
  defaultOpenId?: string;
}

export function Accordion({ items, defaultOpenId }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(
    defaultOpenId || items[0]?.id || null
  );

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.question}
          content={item.answer}
          category={item.category}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        />
      ))}
    </div>
  );
}
