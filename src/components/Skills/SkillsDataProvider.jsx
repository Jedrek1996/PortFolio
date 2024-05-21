import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./skills.css";

const SkillDataProvider = ({ src, width, height, index, name }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={ref}
      className="relative transition-all duration-700 ease-in-out hover:-rotate-12 hover:scale-110"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeInOut" }}
        whileHover={{ rotate: 5, scale: 1.1 }}
        className="transition-transform duration-200 "
        style={{ display: "inline-block", position: "relative" }}
      >
        <img src={src} width={width} height={height} alt="skill image" />
      </motion.div>

      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-20 left-0 bg-[#93f7bdb8] text-white py-2 px-3 rounded-full text-sm"
        >
          {name}
        </motion.div>
      )}
    </div>
  );
};

export default SkillDataProvider;
