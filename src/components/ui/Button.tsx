"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  PhoneCall,
  RefreshCw,
  Plane,
  CheckCircle,
} from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "gold" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";
export type AnimatedIconType = "arrow" | "phone" | "refresh" | "plane" | "check";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  animatedIcon?: AnimatedIconType;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  href?: string;
  target?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "primary",
      size = "md",
      animatedIcon,
      iconPosition = "right",
      fullWidth = false,
      href,
      target,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none rounded-lg";

    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        "bg-blue-700 hover:bg-blue-800 text-white border border-blue-800 shadow-sm hover:shadow focus:ring-blue-600 active:scale-[0.99]",
      secondary:
        "bg-slate-900 hover:bg-slate-800 text-white border border-slate-800 shadow-sm focus:ring-slate-500 active:scale-[0.99]",
      gold:
        "bg-amber-600 hover:bg-amber-500 text-white border border-amber-700 shadow-sm focus:ring-amber-500 active:scale-[0.99]",
      outline:
        "bg-white text-blue-800 hover:text-blue-900 border border-blue-700 hover:bg-blue-50/70 focus:ring-blue-600 active:scale-[0.99]",
      ghost:
        "bg-transparent text-slate-700 hover:text-blue-800 hover:bg-blue-50/60 focus:ring-slate-400",
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3 gap-2.5 shadow-sm font-semibold",
    };

    const renderAnimatedIcon = () => {
      if (!animatedIcon) return null;

      switch (animatedIcon) {
        case "arrow":
          return (
            <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-out group-hover:translate-x-1 text-current opacity-90" />
          );
        case "phone":
          return (
            <PhoneCall className="w-4 h-4 transition-transform duration-200 group-hover:scale-105 text-current opacity-90" />
          );
        case "refresh":
          return (
            <RefreshCw className="w-4 h-4 transition-transform duration-300 ease-in-out group-hover:rotate-180 text-current opacity-90" />
          );
        case "plane":
          return (
            <Plane className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-current opacity-90" />
          );
        case "check":
          return (
            <CheckCircle className="w-4 h-4 transition-transform duration-200 group-hover:scale-105 text-current opacity-90" />
          );
        default:
          return null;
      }
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth && "w-full",
      className
    );

    if (href) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className={combinedClasses}
        >
          {iconPosition === "left" && renderAnimatedIcon()}
          <span>{children}</span>
          {iconPosition === "right" && renderAnimatedIcon()}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type || "button"}
        disabled={disabled}
        className={combinedClasses}
        {...props}
      >
        {iconPosition === "left" && renderAnimatedIcon()}
        <span>{children}</span>
        {iconPosition === "right" && renderAnimatedIcon()}
      </button>
    );
  }
);

Button.displayName = "Button";
