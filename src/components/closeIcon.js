import React from "react";

function CloseIcon({
  className,
  fontSize = 18,
  onClick,
  width,
  height,
  style,
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fontSize={fontSize}
      style={style}
      width={width ? width : fontSize}
      height={height ? height : fontSize}
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 448 512"
      onClick={onClick}
    >
      <path
        fill="currentColor"
        d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
      ></path>
    </svg>
  );
}

export default CloseIcon;
