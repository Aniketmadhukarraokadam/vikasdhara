import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  rotationIntensity?: number;
  glareOpacity?: number;
}

/**
 * Animaster Lib 3D Interactive Tilt Card
 * Tilts dynamically with cursor position and casts a subtle moving glare overlay
 */
export function TiltCard({
  children,
  className = "",
  rotationIntensity = 12,
  glareOpacity = 0.15,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotationIntensity, -rotationIntensity]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotationIntensity, rotationIntensity]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 transition-shadow duration-300 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        {children}
      </div>

      {/* Dynamic Cursor Glare Overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255, 255, 255, ${glareOpacity}), transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}
