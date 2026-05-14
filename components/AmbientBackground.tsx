"use client";

import { motion } from "framer-motion";

const particles = Array.from(
  { length: 20 },
  () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  })
);

export default function AmbientBackground() {
  return (
    <div className="ambient-wrapper">
      {/* MAIN GRADIENTS */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-gradient ambient-gradient-1"
      />

      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-gradient ambient-gradient-2"
      />

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="ambient-gradient ambient-gradient-3"
      />

      {/* PARTICLES */}

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -120, 0],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="ambient-particle"
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}

      {/* LIGHT LINES */}

      <motion.div
        animate={{
          opacity: [0.05, 0.12, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="ambient-line ambient-line-1"
      />

      <motion.div
        animate={{
          opacity: [0.04, 0.1, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="ambient-line ambient-line-2"
      />
    </div>
  );
}