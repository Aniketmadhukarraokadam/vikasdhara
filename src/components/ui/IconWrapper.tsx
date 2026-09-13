import { type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "accent" | "warm" | "sky" | "neutral" | "white";
  size?: "sm" | "md" | "lg" | "xl";
}

export function IconWrapper({ className, variant = "primary", size = "md", children, ...props }: IconWrapperProps) {
  const variants = {
    primary: "bg-primary-100 text-primary-800",
    accent: "bg-accent-50 text-accent-700",
    warm: "bg-warm-50 text-warm-700",
    sky: "bg-sky-50 text-sky-600",
    neutral: "bg-neutral-100 text-neutral-800",
    white: "bg-white text-primary-800 shadow-soft",
  };

  const sizes = {
    sm: "w-8 h-8 text-base rounded-lg",
    md: "w-12 h-12 text-xl rounded-xl",
    lg: "w-16 h-16 text-2xl rounded-2xl",
    xl: "w-20 h-20 text-3xl rounded-2xl",
  };

  return (
    <div
      className={cn("inline-flex items-center justify-center flex-shrink-0", variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}