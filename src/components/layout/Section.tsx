import { type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLSectionElement> {
  variant?: "default" | "sm" | "lg" | "xl";
  background?: "none" | "primary" | "neutral" | "accent" | "warm" | "sky" | "deep-navy";
  className?: string;
}

export function Section({ className, variant = "default", background = "none", children, ...props }: SectionProps) {
  const variants = {
    default: "py-20 lg:py-28",
    sm: "py-12 lg:py-16",
    lg: "py-24 lg:py-32",
    xl: "py-28 lg:py-36",
  };

  const backgrounds = {
    none: "",
    primary: "bg-primary-50",
    neutral: "bg-neutral-100",
    accent: "bg-accent-50",
    warm: "bg-warm-50",
    sky: "bg-sky-50",
    "deep-navy": "bg-neutral-900 text-white",
  };

  return (
    <section
      className={cn(variants[variant], backgrounds[background], className)}
      {...props}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-center max-w-3xl mx-auto mb-12 lg:mb-16", className)} {...props}>
      {children}
    </div>
  );
}

export function SectionTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-3xl lg:text-4xl font-semibold text-neutral-950 tracking-tight", className)} {...props}>
      {children}
    </h2>
  );
}

export function SectionSubtitle({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-lg lg:text-xl text-neutral-600 mt-4 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function SectionEyebrow({ className, children, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn("inline-block text-sm font-medium text-primary-700 uppercase tracking-wider mb-3", className)} {...props}>
      {children}
    </span>
  );
}