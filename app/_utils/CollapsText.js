"use client";
import { useState } from "react";

function CollapsText({ children, wordShown = 18, colaps = true }) {
  const [isColaps, setIsColaps] = useState(colaps);
  return (
    <>
      {isColaps
        ? children.split(" ").slice(0, wordShown).join(" ") + "... "
        : children}
      <span
        onClick={() => setIsColaps((c) => !c)}
        className="cursor-pointer font-semibold text-gray-400"
      >
        {isColaps ? "See more" : " Hide"}
      </span>
    </>
  );
}

export default CollapsText;
