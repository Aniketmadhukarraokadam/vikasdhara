import { type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({ className, size = "lg", children, ...props }: ContainerProps) {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-[1440px]",
    xl: "max-w-[1600px]",
    full: "max-w-full px-4 sm:px-8 lg:px-12",
  };

  return (
    <div
      className={cn("mx-auto px-4 sm:px-6 lg:px-10 xl:px-12", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}