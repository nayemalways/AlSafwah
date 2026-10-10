import React from "react";
import { cn } from "@/lib/utils";
import { Badge, BadgeVariant } from "./Badge";

interface SectionHeaderProps {
  badgeText?: string;
  badgeVariant?: BadgeVariant;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  isDark?: boolean;
}

export function SectionHeader({
  badgeText,
  badgeVariant = "blue",
  title,
  highlightText,
  subtitle,
  align = "center",
  className,
  isDark = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-4xl mb-12 sm:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badgeText && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant} className="text-xs sm:text-sm px-3.5 py-1">
            {badgeText}
          </Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.28]",
          isDark ? "text-white" : "text-slate-950"
        )}
      >
        {title}{" "}
        {highlightText && (
          <span
            className={cn(
              "font-serif font-bold tracking-normal",
              isDark ? "text-amber-400" : "text-blue-700 underline decoration-blue-200 underline-offset-8"
            )}
          >
            {highlightText}
          </span>
        )}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg sm:text-xl leading-relaxed font-normal",
            isDark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
