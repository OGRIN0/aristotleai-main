import React from "react";

function CSVIcon({ fill, stroke }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
    //   xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
    >
      <g>
        <rect
          x="1"
          y="1"
          fill={fill ?? "#FFFFFF"}
          stroke={stroke ?? "#000000"}
          stroke-miterlimit="10"
          width="62"
          height="62"
        />
        <polyline
          fill={fill ?? "#FFFFFF"}
          stroke={stroke ?? "#000000"}
          stroke-miterlimit="10"
          points="1,1 1,63 63,63 "
        />
      </g>
      <line
          fill={fill ?? "#FFFFFF"}
          stroke={stroke ?? "#000000"}
        stroke-miterlimit="10"
        x1="39"
        y1="24"
        x2="25"
        y2="24"
      />
      <line
          fill={fill ?? "#FFFFFF"}
          stroke={stroke ?? "#000000"}
        stroke-miterlimit="10"
        x1="39"
        y1="30"
        x2="25"
        y2="30"
      />
      <line
          fill={fill ?? "#FFFFFF"}
          stroke={stroke ?? "#000000"}
        stroke-miterlimit="10"
        x1="39"
        y1="36"
        x2="25"
        y2="36"
      />
      <g>
        <path
          fill="#000000"
          d="M24,48h-3c-0.1,0-0.1,0-0.2,0s-0.1,0-0.2,0h-3v-3.1h2.7v0.7H21v-0.4h1v-0.5h-1v-0.4h1.1v-0.5H21v-0.4h1v0.7h2.7V48z"
        />
        <path
          fill="#000000"
          d="M32,48h-1.5v-3h-1.1v2.9c0,0.1,0,0.1,0,0.1h-1.5v-3h-1.1V48H26v-3h-1.1v2.9c0,0.1,0,0.1,0,0.1H23.5v-3h-1.1V48H21v-3.1h-1.1V48h-1.1v-3h-1.1V48H16v-3.1h-1.1v3.9h1.1v-0.8h1.1v0.8h1.1v-3h1.1v3h1.1v-3h1.1v3h1.1v-3h1.1v3h1.1v-3h1.1v3h1.1v-3h1.1v3h1.1v-3h1.1v3h1.1v-3h1.1v3h1.1v-3h1.1v3h1.1V48z"
        />
      </g>
    </svg>
  );
}

export default CSVIcon;
