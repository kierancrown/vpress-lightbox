import React from "react";

const LoadingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      version="1"
      viewBox="0 0 128 128"
    >
      <g>
        <circle cx="108.5" cy="89.75" r="12.5" fill="#fff"></circle>
        <circle
          cx="108.5"
          cy="89.75"
          r="12.5"
          fill="#fff"
          transform="rotate(180 64 64)"
        ></circle>
        <animateTransform
          attributeName="transform"
          dur="540ms"
          from="0 64 64"
          repeatCount="indefinite"
          to="180 64 64"
          type="rotate"
        ></animateTransform>
      </g>
    </svg>
  );
};

export default LoadingIcon;
