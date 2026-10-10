import React from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant = "blue" | "gold" | "slate" | "accent";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  withDot?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "blue",
  withDot = true,
  className,
  icon,
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    blue:
      "bg-blue-50 text-blue-900 border-blue-200",
    gold:
      "bg-amber-50 text-amber-950 border-amber-200",
    slate:
      "bg-slate-100 text-slate-800 border-slate-200",
    accent:
      "bg-blue-900 text-blue-100 border-blue-800",
  };

  const dotStyles: Record<BadgeVariant, string> = {
    blue: "bg-blue-600",
    gold: "bg-amber-600",
    slate: "bg-slate-500",
    accent: "bg-blue-400",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold tracking-wide border",
        variantStyles[variant],
        className
      )}
    >
      {withDot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full inline-block", dotStyles[variant])}
        />
      )}
      {icon && <span className="inline-flex items-center">{icon}</span>}
      {children}
    </span>
  );
}
