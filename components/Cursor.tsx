"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {

    const moveCursor = (e: MouseEvent) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const target = e.target as HTMLElement;

      const clickable =
        target.closest("a")
        || target.closest("button");

      setIsPointer(!!clickable);

    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () => {

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

    };

  }, []);

  return (

    <>

      {/* MAIN CURSOR */}

      <motion.div

        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isPointer ? 1.8 : 1,
        }}

        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.4,
        }}

        className="custom-cursor"
      />

      {/* GLOW */}

      <motion.div

        animate={{
          x: position.x - 180,
          y: position.y - 180,
          scale: isPointer ? 1.15 : 1,
        }}

        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
        }}

        className="cursor-glow"
      />

      {/* SECONDARY RING */}

      <motion.div

        animate={{
          x: position.x - 26,
          y: position.y - 26,
          scale: isPointer ? 1.4 : 1,
        }}

        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}

        className="cursor-ring"
      />

    </>

  );

}