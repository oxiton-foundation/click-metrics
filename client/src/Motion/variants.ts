import { motion, Variants } from 'framer-motion';

export const fadeIn = (duration: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
};

export const fadeOut = (duration: number): Variants => {
  return {
    hidden: {
      opacity: 1,
      y: 0,
    },
    show: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
};

export const fadeIn2 = (duration: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
};

export const fadeIn3 = (duration: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: -150,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
};

export const fadeIn4 = (duration: number): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: 200,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };
};
