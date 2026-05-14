export const fadeUp = {

  initial: {
    opacity: 0,
    y: 40,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

};

export const fadeDown = {

  initial: {
    opacity: 0,
    y: -40,
  },

  animate: {
    opacity: 1,
    y: 0,
  },

};

export const fadeLeft = {

  initial: {
    opacity: 0,
    x: -40,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

};

export const fadeRight = {

  initial: {
    opacity: 0,
    x: 40,
  },

  animate: {
    opacity: 1,
    x: 0,
  },

};

export const scaleIn = {

  initial: {
    opacity: 0,
    scale: 0.9,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

};

export const blurReveal = {

  initial: {
    opacity: 0,
    filter: "blur(20px)",
  },

  animate: {
    opacity: 1,
    filter: "blur(0px)",
  },

};

export const staggerContainer = {

  animate: {

    transition: {
      staggerChildren: 0.12,
    },

  },

};

export const cinematicReveal = {

  initial: {
    opacity: 0,
    y: 80,
    scale: 0.96,
    filter: "blur(14px)",
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },

};

export const hoverLift = {

  whileHover: {
    y: -8,
    scale: 1.02,
  },

};

export const magneticHover = {

  whileHover: {
    scale: 1.04,
  },

  whileTap: {
    scale: 0.96,
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

export const pulseGlow = {

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

export const rotateSlow = {

  animate: {
    rotate: [0, 360],
  },

  transition: {
    duration: 40,
    repeat: Infinity,
    ease: "linear",
  },

};

export const revealTransition = {

  duration: 0.8,

  ease: [
    0.25,
    0.1,
    0.25,
    1,
  ],

};

export const smoothTransition = {

  duration: 0.5,

  ease: "easeInOut",

};

export const premiumSpring = {

  type: "spring",

  stiffness: 120,

  damping: 18,

};

export const ultraSmoothSpring = {

  type: "spring",

  stiffness: 80,

  damping: 20,

};

export const glowAnimation = {

  animate: {
    opacity: [0.3, 0.7, 0.3],
  },

  transition: {
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  },

};