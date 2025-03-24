import React from "react";

function Logo() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 100 100"
      fill="url(#gradient)"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#6A0DAD">
            <animate
              attributeName="stop-color"
              values="#6A0DAD;rgb(0, 255, 26);rgb(165, 173, 13)"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#007BFF">
            <animate
              attributeName="stop-color"
              values="#007BFF;rgb(13, 173, 13);rgb(255, 251, 0)"
              dur="6s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <g stroke="url(#gradient)" strokeWidth="2.5" fill="none">
        <ellipse rx="40" ry="15" cx="50" cy="50" transform="rotate(30 50 50)" />
        <ellipse rx="40" ry="15" cx="50" cy="50" transform="rotate(90 50 50)" />
        <ellipse rx="40" ry="15" cx="50" cy="50" transform="rotate(-30 50 50)" />
      </g>
      <circle cx="50" cy="50" r="5" fill="url(#gradient)" />
    </svg>
  );
}

export default Logo;
