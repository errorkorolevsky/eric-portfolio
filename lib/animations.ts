export const pageReveal = {

  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },

  transition: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
  },

};

export const heroReveal = {

  initial: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(12px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },

  transition: {
    duration: 1.2,
    ease: [0.25, 0.1, 0.25, 1],
  },

};

export const sectionReveal = {

  initial: {
    opacity: 0,
    y: 60,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.15,
  },

  transition: {
    duration: 0.9,
    ease: [0.25, 0.1, 0.25, 1],
  },

};

export const staggerReveal = {

  whileInView: {

    transition: {
      staggerChildren: 0.12,
    },

  },

};

export const cardReveal = {

  initial: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },

  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
  },

};

export const floatingAnimation = {

  animate: {
    y: [0, -12, 0],
  },

  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },

};

export const floatingSlow = {

  animate: {
    y: [0, -20, 0],
  },

  transition: {
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  },

};

export const floatingRotate = {

  animate: {
    y: [0, -14, 0],
    rotate: [0, 2, 0],
  },

  transition: {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut",
  },

};

export const pulseAnimation = {

  animate: {
    opacity: [0.4, 1, 0.4],
    scale: [1, 1.04, 1],
  },

  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },

};

export const glowPulse = {

  animate: {
    opacity: [0.2, 0.6, 0.2],
  },

  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },

};

export const rotateInfinity = {

  animate: {
    rotate: [0, 360],
  },

  transition: {
    duration: 40,
    repeat: Infinity,
    ease: "linear",
  },

};

export const hoverLift = {

  whileHover: {
    y: -10,
    scale: 1.02,
  },

  transition: {
    type: "spring",
    stiffness: 160,
    damping: 16,
  },

};

export const hoverScale = {

  whileHover: {
    scale: 1.04,
  },

  whileTap: {
    scale: 0.97,
  },

};

export const magneticHover = {

  whileHover: {
    scale: 1.05,
    y: -4,
  },

  whileTap: {
    scale: 0.96,
  },

};

export const revealLeft = {

  initial: {
    opacity: 0,
    x: -60,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.9,
    ease: [0.25, 0.1, 0.25, 1],
  },

};

export const revealRight = {

  initial: {
    opacity: 0,
    x: 60,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
  },

  transition: {
    duration: 0.9,
    ease: [0.25, 0.1, 0.25, 1],
  },

};

export const blurReveal = {

  initial: {
    opacity: 0,
    filter: "blur(18px)",
  },

  animate: {
    opacity: 1,
    filter: "blur(0px)",
  },

  transition: {
    duration: 1,
  },

};

export const cinematicEntrance = {

  initial: {
    opacity: 0,
    y: 100,
    scale: 0.92,
    filter: "blur(20px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },

  transition: {
    duration: 1.4,
    ease: [0.25, 0.1, 0.25, 1],
  },

};

export const smoothSpring = {

  type: "spring",

  stiffness: 120,

  damping: 18,

};

export const ultraSmoothSpring = {

  type: "spring",

  stiffness: 80,

  damping: 20,

};

export const staggerFast = {

  animate: {

    transition: {
      staggerChildren: 0.08,
    },

  },

};

export const staggerSlow = {

  animate: {

    transition: {
      staggerChildren: 0.2,
    },

  },

};