import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * Animaster Lib Smooth Interactive Cursor Spotlight
 * Floats a soft, ambient glow following the user's cursor across the screen
 */
export function InteractiveCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.1 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-50 rounded-full mix-blend-screen -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        left: cursorX,
        top: cursorY,
        width: 320,
        height: 320,
        background: "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(16, 185, 129, 0.03) 45%, transparent 70%)",
      }}
    />
  );
}
