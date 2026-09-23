import React from "react";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number; // seconds for one loop
  pauseOnHover?: boolean;
  className?: string;
}

/**
 * Skiper UI Infinite Marquee Ticker
 * Smooth continuous ticker scrolling left or right with automatic duplication
 */
export function InfiniteMarquee({
  children,
  direction = "left",
  speed = 30,
  pauseOnHover = true,
  className = "",
}: InfiniteMarqueeProps) {
  const animClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";

  return (
    <div
      className={`relative w-full overflow-hidden select-none ${className}`}
      style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
    >
      {/* Edge Gradient Mask for Smooth Fade */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      <div className={`${animClass} ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}>
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12">
          {children}
        </div>
        <div className="flex items-center gap-8 sm:gap-12 shrink-0 pr-8 sm:pr-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
