export const hiddenStyles = {
  opacity: 0,
  transform: "translateY(14px)",
  transitionProperty: "opacity, transform",
  transitionDuration: "2.5s",
  transitionTimingFunction: "ease",
};

export const showStyles = {
  opacity: 1,
  transform: "translateY(0)",
  transitionProperty: "opacity, transform",
  transitionDuration: "3.9s",
  transitionTimingFunction: "ease",
};

export const hiddenHeroStyles = {
  opacity: 0,
  transform: "translateY(14px)",
  transitionProperty: "opacity, transform",
  transitionDuration: "3s",
  transitionTimingFunction: "ease",
};

export const showHeroStyles = {
  opacity: 1,
  transform: "translateY(0)",
  transitionProperty: "opacity, transform",
  transitionDuration: "3.9s",
  transitionTimingFunction: "ease",
};

export function slideInFromLeft(delay) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};
