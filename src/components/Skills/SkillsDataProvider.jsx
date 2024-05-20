import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./skills.css";

const SkillDataProvider = ({ src, width, height, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [isHovered, setIsHovered] = React.useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      className="ripple-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }}
        className="hover:scale-110 transition-transform duration-200"
        style={{ display: "inline-block", position: "relative" }}
      >
        <img src={src} width={width} height={height} alt="skill image" />
      </motion.div>
      {isHovered && <div className="ripple"></div>}
    </div>
  );
};

export default SkillDataProvider;
