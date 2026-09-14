import { type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface IconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "accent" | "warm" | "sky" | "emerald" | "neutral" | "white";
  size?: "sm" | "md" | "lg" | "xl";
}

export function IconWrapper({ className, variant = "primary", size = "md", children, ...props }: IconWrapperProps) {
  const variants = {
    primary: "bg-primary-100 text-primary-900 border border-primary-300/60 shadow-xs",
    accent: "bg-emerald-100 text-emerald-900 border border-emerald-300/60 shadow-xs",
    warm: "bg-warm-100 text-warm-900 border border-warm-300/60 shadow-xs",
    sky: "bg-sky-100 text-sky-900 border border-sky-300/60 shadow-xs",
    emerald: "bg-emerald-100 text-emerald-900 border border-emerald-300/60 shadow-xs",
    neutral: "bg-neutral-100 text-neutral-900 border border-neutral-200/80 shadow-xs",
    white: "bg-white text-primary-900 shadow-soft border border-neutral-200",
  };

  const sizes = {
    sm: "w-9 h-9 text-base rounded-xl [&>svg]:w-4.5 [&>svg]:h-4.5",
    md: "w-12 h-12 text-xl rounded-2xl [&>svg]:w-6 [&>svg]:h-6",
    lg: "w-16 h-16 text-2xl rounded-2xl [&>svg]:w-8 [&>svg]:h-8",
    xl: "w-20 h-20 text-3xl rounded-3xl [&>svg]:w-10 [&>svg]:h-10",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center flex-shrink-0 [&>svg]:stroke-current [&>svg]:shrink-0 transition-transform duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}