"use client";

import React, { useState, useRef, useEffect } from "react";
import ToolButton from "./ToolButton";
import { PiCaretDown } from "react-icons/pi";

const HeadingDropdown = ({ editor }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!editor) return null;

  const headingLevels = [1, 2, 3, 4, 5, 6];
  const activeHeading = headingLevels.find((lvl) =>
    editor.isActive("heading", { level: lvl })
  );

  const toggleHeading = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
    setOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <ToolButton
        onClick={() => setOpen((prev) => !prev)}
        isActive={!!activeHeading}
      >
        <p className="flex gap-1 items-center w-28 justify-center">
          {activeHeading ? `Heading ${activeHeading}` : "Heading"}
          <PiCaretDown className="text-lg" />
        </p>
      </ToolButton>

      {open && (
        <div className="absolute left-0 mt-1 rounded-md border border-slate-300 bg-white shadow-md z-50 p-3">
          {headingLevels.map((level) => (
            <button
              key={level}
              onClick={() => toggleHeading(level)}
              className={`text-nowrap px-3 py-1 text-left text-base rounded-md ${
                editor.isActive("heading", { level })
                  ? "bg-slate-200 font-semibold text-slate-900"
                  : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              Heading {level}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeadingDropdown;
