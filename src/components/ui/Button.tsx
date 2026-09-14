import { forwardRef, isValidElement, cloneElement, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ElementType, type ReactElement } from "react";
import { cn } from "@/utils/cn";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "warm" | "emerald";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
};

type ButtonProps<C extends ElementType> = ButtonBaseProps & (
  | { as: C; } & (C extends "button" ? ButtonHTMLAttributes<HTMLButtonElement> : AnchorHTMLAttributes<HTMLAnchorElement>)
  | { as?: undefined; } & ButtonHTMLAttributes<HTMLButtonElement>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps<ElementType>>(
  ({ className, variant = "primary", size = "md", isLoading, as: Component = "button", asChild = false, children, disabled, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const variants = {
      primary: "bg-gradient-to-r from-primary-700 to-sky-700 text-white hover:from-primary-600 hover:to-sky-600 shadow-md hover:shadow-lg active:scale-95 border border-primary-500/30 font-bold",
      secondary: "bg-white text-primary-900 border-2 border-primary-800 hover:bg-primary-50 hover:text-primary-950 shadow-xs font-bold active:scale-95",
      outline: "bg-white text-neutral-900 border-2 border-neutral-300 hover:bg-neutral-100 hover:border-neutral-500 shadow-xs font-bold active:scale-95",
      ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100/80 font-bold active:scale-95",
      warm: "bg-gradient-to-r from-warm-500 to-warm-600 text-neutral-950 font-black hover:from-warm-400 hover:to-warm-500 shadow-md hover:shadow-lg active:scale-95 border border-warm-400/40",
      emerald: "bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold hover:from-emerald-500 hover:to-teal-600 shadow-md hover:shadow-lg active:scale-95 border border-emerald-400/40",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-2.5 text-sm",
      lg: "px-8 py-3.5 text-base",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    // If asChild is true, clone the child (e.g. <Link />) without nesting an invalid <button>
    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<any>;
      return cloneElement(child, {
        className: cn(combinedClasses, child.props.className),
        ...props
      });
    }

    const isAnchor = Component === "a";

    return (
      <Component
        ref={ref}
        className={combinedClasses}
        disabled={!isAnchor && (disabled || isLoading)}
        aria-disabled={isAnchor && (disabled || isLoading)}
        tabIndex={isAnchor && (disabled || isLoading) ? -1 : undefined}
        {...props}
      >
        {isLoading && (
          <svg className="animate-spin h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
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