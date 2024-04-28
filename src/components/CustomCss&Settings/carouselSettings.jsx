import React from "react";
import {
  LiaChevronCircleLeftSolid,
  LiaChevronCircleRightSolid,
} from "react-icons/lia";

export function SkillsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LiaChevronCircleRightSolid
      className={`${className} absolute right-0 top-1/2 text-blue-400`}
      style={{
        ...style,
        height: "20px",
        width: "20px",
        color: "rgb(147 197 253 / var(--tw-text-opacity))",
        right: "-50px",
        transition: "color 0.3s",
      }}
      onClick={onClick}
    />
  );
}

export function SkillsPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LiaChevronCircleLeftSolid
      className={`${className} absolute top-1/2 transform -translate-y-1/2 text-blue-500`}
      style={{
        ...style,
        height: "20px",
        width: "20px",
        color: "rgb(147 197 253 / var(--tw-text-opacity))",
        left: "-50px",
        transition: "color 0.3s",
      }}
      onClick={onClick}
    />
  );
}
