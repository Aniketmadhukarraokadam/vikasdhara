import React from "react";
import confetti from "canvas-confetti";
import { MagneticButton } from "./MagneticButton";

interface ConfettiButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  strength?: number;
}

/**
 * Vengeance & Skiper UI Confetti Celebration Button
 * Fires vibrant celebratory particles on interaction
 */
export function ConfettiButton({
  children,
  className = "",
  onClick,
  strength = 0.25,
}: ConfettiButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 65,
      spread: 70,
      origin: { x, y },
      colors: ["#0284c7", "#10b981", "#f59e0b", "#38bdf8", "#34d399"],
      disableForReducedMotion: true,
    });

    if (onClick) onClick(e);
  };

  return (
    <MagneticButton strength={strength} onClick={() => {}} className={className}>
      <div onClick={handleClick} className="w-full">
        {children}
      </div>
    </MagneticButton>
  );
}
