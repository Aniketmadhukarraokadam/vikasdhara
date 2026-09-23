import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface SkiperSpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

/**
 * Skiper UI Dynamic Mouse Spotlight Glow Card
 * Tracks cursor coordinates on hover to cast a soft radial glow across border and card face
 */
export function SkiperSpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(14, 165, 233, 0.15)",
  borderColor = "rgba(56, 189, 248, 0.4)",
}: SkiperSpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl border border-neutral-200/80 bg-white/90 backdrop-blur-md p-6 sm:p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl overflow-hidden group ${className}`}
    >
      {/* Skiper Spotlight Radial Glow Layer */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 70%)`
            : "none",
        }}
      />

      {/* Skiper Glowing Border Illumination */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl border transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          borderColor: borderColor,
          maskImage: isHovered
            ? `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, black, transparent)`
            : "none",
          WebkitMaskImage: isHovered
            ? `radial-gradient(250px circle at ${coords.x}px ${coords.y}px, black, transparent)`
            : "none",
        }}
      />

      {/* Card Body Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
