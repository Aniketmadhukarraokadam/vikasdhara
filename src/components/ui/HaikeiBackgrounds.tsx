import React from "react";

interface HaikeiWaveProps {
  className?: string;
  fillColor?: string;
  flip?: boolean;
}

/**
 * Haikei Generative Layered Waves
 * Creates smooth organic wave transitions between sections
 */
export function HaikeiWave({ className = "", fillColor = "#f8fafc", flip = false }: HaikeiWaveProps) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        className="relative block w-full h-12 sm:h-20 lg:h-28"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z"
          fill={fillColor}
          fillOpacity="0.4"
        />
        <path
          d="M0,20 C200,100 450,10 700,75 C950,140 1100,50 1200,80 L1200,120 L0,120 Z"
          fill={fillColor}
          fillOpacity="0.7"
        />
        <path
          d="M0,50 C180,120 400,30 650,90 C900,150 1050,60 1200,95 L1200,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

/**
 * Haikei Layered Peaks / Angular Terraces
 * Ideal for modern architectural & high-contrast section dividers
 */
export function HaikeiPeaks({ className = "", fillColor = "#ffffff", flip = false }: HaikeiWaveProps) {
  return (
    <div className={`w-full overflow-hidden leading-none pointer-events-none ${flip ? "rotate-180" : ""} ${className}`}>
      <svg
        className="relative block w-full h-10 sm:h-16 lg:h-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M1200 0L0 0 598.97 114.72 1200 0z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

/**
 * Haikei Organic Fluid Blob Backdrop
 * Renders glowing ambient organic shapes behind hero headers or cards
 */
export function HaikeiBlobBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none ${className}`}>
      {/* Top Right Cyan/Sky Haikei Blob */}
      <svg
        className="absolute -top-32 -right-32 w-[520px] h-[520px] opacity-45 blur-3xl animate-pulse"
        style={{ animationDuration: "9s" }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#blob-grad-sky)"
          d="M44.5,-76.3C57.4,-69.5,67.6,-57.4,75.3,-43.8C83,-30.1,88.2,-15.1,86.6,-0.9C85,13.2,76.6,26.5,68.2,39.6C59.7,52.8,51.2,65.8,39.3,73.1C27.4,80.4,12,82,-3,83.7C-18.1,85.5,-36.1,87.4,-49.2,80.5C-62.3,73.6,-70.5,57.9,-76.9,42.4C-83.3,26.8,-88,11.4,-86.6,-3.4C-85.3,-18.2,-77.9,-32.4,-68.4,-44.6C-58.9,-56.8,-47.3,-67,-34.5,-73.8C-21.6,-80.7,-7.6,-84.1,3.4,-85.8C14.4,-87.5,31.7,-83.1,44.5,-76.3Z"
          transform="translate(100 100)"
        />
        <defs>
          <linearGradient id="blob-grad-sky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom Left Emerald/Teal Haikei Blob */}
      <svg
        className="absolute -bottom-36 -left-36 w-[560px] h-[560px] opacity-40 blur-3xl animate-pulse"
        style={{ animationDuration: "12s" }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#blob-grad-emerald)"
          d="M47.7,-64.3C60.4,-57.1,68.4,-42.2,72.4,-26.8C76.5,-11.4,76.5,4.6,72.5,19.8C68.4,35,60.2,49.5,48.2,60.2C36.2,70.9,20.4,77.8,3.9,74.5C-12.7,71.1,-29.9,57.5,-44.3,44.5C-58.7,31.5,-70.2,19,-74.6,3.6C-79,-11.9,-76.4,-30.2,-66.1,-43.3C-55.9,-56.3,-38,-64,-21.8,-68.8C-5.6,-73.6,8.8,-75.4,23.3,-72.7C37.8,-70,44.8,-62.7,47.7,-64.3Z"
          transform="translate(100 100)"
        />
        <defs>
          <linearGradient id="blob-grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/**
 * Haikei Geometric Mesh Grid
 */
export function HaikeiGridPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 opacity-[0.035] pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
        backgroundSize: "28px 28px",
      }}
    />
  );
}
