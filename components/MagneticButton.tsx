"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ReactNode,
  useRef,
} from "react";

interface MagneticButtonProps {

  children: ReactNode;

  className?: string;

  href?: string;

}

export default function MagneticButton({
  children,
  className = "",
  href = "#",
}: MagneticButtonProps) {

  const ref =
    useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 14,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 14,
  });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {

    const rect =
      ref.current?.getBoundingClientRect();

    if (!rect) return;

    const width = rect.width;
    const height = rect.height;

    const centerX =
      rect.left + width / 2;

    const centerY =
      rect.top + height / 2;

    const distanceX =
      e.clientX - centerX;

    const distanceY =
      e.clientY - centerY;

    x.set(distanceX * 0.18);
    y.set(distanceY * 0.18);

  };

  const handleMouseLeave = () => {

    x.set(0);
    y.set(0);

  };

  return (

    <motion.a

      ref={ref}

      href={href}

      style={{
        x: springX,
        y: springY,
      }}

      whileTap={{
        scale: 0.96,
      }}

      onMouseMove={handleMouseMove}

      onMouseLeave={handleMouseLeave}

      className={`magnetic-button ${className}`}
    >

      {/* GLOW */}

      <div className="magnetic-button-glow" />

      {/* CONTENT */}

      <span className="magnetic-button-content">

        {children}

      </span>

    </motion.a>

  );

}