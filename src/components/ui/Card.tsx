import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className,
  hoverEffect = true,
  glow = false,
  onClick,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 transition-all duration-300",
        hoverEffect &&
          "hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/5 hover:border-blue-300/60",
        glow &&
          "before:absolute before:-inset-px before:rounded-2xl before:bg-gradient-to-r before:from-blue-500/10 before:to-indigo-500/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:-z-10",
        className
      )}
    >
      {children}
    </div>
  );
}
