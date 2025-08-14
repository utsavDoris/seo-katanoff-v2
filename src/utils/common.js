// Animation Variations
export const rightToLeftAnimation = {
  hidden: { opacity: 0, x: 50 }, // Start from the right
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const leftToRightAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export const cardAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};
