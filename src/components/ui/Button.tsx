import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ElementType } from "react";
import { cn } from "@/utils/cn";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
};

type ButtonProps<C extends ElementType> = ButtonBaseProps & (
  | { as: C; } & (C extends "button" ? ButtonHTMLAttributes<HTMLButtonElement> : AnchorHTMLAttributes<HTMLAnchorElement>)
  | { as?: undefined; } & ButtonHTMLAttributes<HTMLButtonElement>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps<ElementType> & { asChild?: boolean }>(
  ({ className, variant = "primary", size = "md", isLoading, as: Component = "button", asChild: _asChild, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary: "bg-primary-800 text-white hover:bg-primary-900 focus-visible:ring-primary-600 shadow-soft hover:shadow-card font-semibold",
      secondary: "bg-white text-primary-800 border-2 border-primary-800 hover:bg-primary-50 focus-visible:ring-primary-600 font-semibold",
      outline: "bg-transparent text-neutral-800 border-2 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-400 focus-visible:ring-neutral-400 font-medium",
      ghost: "bg-transparent text-neutral-800 hover:bg-neutral-100 focus-visible:ring-neutral-400 font-medium",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const isAnchor = Component === "a";

    return (
      <Component
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={!isAnchor && (disabled || isLoading)}
        aria-disabled={isAnchor && (disabled || isLoading)}
        tabIndex={isAnchor && (disabled || isLoading) ? -1 : undefined}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </Component>
    );
  }
);

Button.displayName = "Button";