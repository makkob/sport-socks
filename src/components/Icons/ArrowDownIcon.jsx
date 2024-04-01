import React from "react";

export default function GutiarIcon({
  color = "#000000",
  width = 24,
  height = 24,
}) {
  return (
    <svg
      viewBox="0 0 512 512"
      width={width}
      height={height}
      style={{ marginBottom: "4px" }}
    >
      <path
       fill={color}
        d="M493.12 3.22c4.3-4.27 11.3-4.3 15.62-.04a10.85 10.85 0 0 1 .05 15.46L263.83 263.55c-4.3 4.28-11.3 4.3-15.63.05L3.21 18.64a10.85 10.85 0 0 1 .05-15.46c4.32-4.26 11.32-4.23 15.62.04L255.99 240.3 493.12 3.22z" />
    </svg>
  );
}
