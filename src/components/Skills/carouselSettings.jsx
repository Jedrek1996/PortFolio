import React from "react";
import {
  LiaChevronCircleLeftSolid,
  LiaChevronCircleRightSolid,
} from "react-icons/lia";

export function SkillsNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LiaChevronCircleRightSolid
      className={`${className} absolute right-0 top-1/2`}
      style={{
        ...style,
        height: "20px",
        width: "20px",
        color: "whitesmoke",
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
      className={`${className} absolute top-1/2 transform -translate-y-1/2`}
      style={{
        ...style,
        height: "20px",
        width: "20px",
        color: "whitesmoke",
        left: "-50px",
        transition: "color 0.3s",
      }}
      onClick={onClick}
    />
  );
}
