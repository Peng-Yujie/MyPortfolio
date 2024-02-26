import { useRef } from "react";
import { useInView } from "framer-motion";

export const PreviewAnimation = {
  initial: { y: 30, opacity: 0, scale: 0.9 },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 0.8 },
  },
};

export const motionProps = {
  initial: "initial",
  whileInView: "animate",
  variants: PreviewAnimation,
};

export const SkillsMotion = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export const skillsMotionProps = {
  initial: "hidden",
  variants: SkillsMotion,
};

export const useScroll = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return { ref, isInView };
};
