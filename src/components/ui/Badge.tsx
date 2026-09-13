import { type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "warm" | "neutral";
  size?: "sm" | "md";
}

export function Badge({ className, variant = "primary", size = "md", children, ...props }: BadgeProps) {
  const variants = {
    primary: "bg-primary-100 text-primary-800",
    accent: "bg-accent-100 text-accent-800",
    warm: "bg-warm-100 text-warm-800",
    neutral: "bg-neutral-100 text-neutral-800",
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}