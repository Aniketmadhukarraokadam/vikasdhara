import React from "react";
import { motion } from "framer-motion";

interface VengeanceBadgeProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "sky" | "emerald" | "amber" | "indigo";
  pulsing?: boolean;
}

/**
 * Vengeance UI Cyber-Glow Pill Badge
 * Combines an animated shimmering border-beam with glassmorphism and pulsing indicator
 */
export function VengeanceBadge({
  children,
  className = "",
  glowColor = "sky",
  pulsing = true,
}: VengeanceBadgeProps) {
  const colorMap = {
    sky: {
      border: "border-sky-500/30",
      bg: "bg-sky-500/10",
      text: "text-sky-800",
      glow: "from-sky-500/20 via-cyan-400/30 to-blue-600/20",
      dot: "bg-sky-500",
    },
    emerald: {
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
      text: "text-emerald-800",
      glow: "from-emerald-500/20 via-teal-400/30 to-green-600/20",
      dot: "bg-emerald-500",
    },
    amber: {
      border: "border-amber-500/30",
      bg: "bg-amber-500/10",
      text: "text-amber-800",
      glow: "from-amber-500/20 via-yellow-400/30 to-orange-600/20",
      dot: "bg-amber-500",
    },
    indigo: {
      border: "border-indigo-500/30",
      bg: "bg-indigo-500/10",
      text: "text-indigo-800",
      glow: "from-indigo-500/20 via-purple-400/30 to-blue-600/20",
      dot: "bg-indigo-500",
    },
  };

  const selected = colorMap[glowColor];

  return (
    <div
      className={`relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md text-xs font-bold tracking-wide shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${selected.border} ${selected.bg} ${selected.text} ${className}`}
    >
      {/* Vengeance UI Rotating Gradient Shimmer Border Beam */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30 pointer-events-none"
        animate={{
          x: ["-150%", "150%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 3.5,
          ease: "linear",
        }}
      />

      {pulsing && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${selected.dot}`}
          />
          <span
            className={`relative inline-flex rounded-full h-2 w-2 ${selected.dot}`}
          />
        </span>
      )}

      <span className="relative z-10">{children}</span>
    </div>
  );
}
