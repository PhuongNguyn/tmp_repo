import React from "react";

const PrevIcon = ({ color, className }) => {
  return (
    <svg
      className={className ? className : ""}
      fill={color ? color : "black"}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"></path>
    </svg>
  );
};

export default PrevIcon;
