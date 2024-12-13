"use client";

import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  PiFacebookLogo,
  PiLinkedinLogo,
  PiShareFatDuotone,
  PiXLogo,
} from "react-icons/pi";

function ShearButton() {
  const [blogUrl, setBlogUrl] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const modal = useRef(null);

  useEffect(function () {
    setBlogUrl(window.location.href);

    function outSideClike(e) {
      if (!e.target || !e.target.contains(modal.current)) return;

      setModalOpen(false);
    }

    document.addEventListener("click", outSideClike);

    return () => document.removeEventListener("click", outSideClike);
  }, []);

  function handleCoppy() {
    navigator.clipboard.writeText(blogUrl);
    toast.success("Link copied to clipboard!");
    setModalOpen(false);
  }

  return (
    <div className="relative">
      <PiShareFatDuotone
        className="cursor-pointer rounded-full p-1.5 text-3xl text-gray-500 hover:bg-gray-200 sm:text-4xl"
        onClick={() => setModalOpen((open) => !open)}
      />

      {modalOpen && (
        <div
          className="absolute right-0 w-80 rounded-sm bg-white shadow-lg md:w-96"
          ref={modal}
        >
          <div className="flex items-start justify-end gap-3 rounded-t-sm bg-gray-100 px-4 py-2 text-gray-500">
            <div className="flex items-center space-x-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  blogUrl
                )}`}
                rel="noopener noreferrer"
              >
                <PiFacebookLogo className="cursor-pointer text-2xl hover:text-blue-600" />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20blog!%20${blogUrl}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <PiXLogo className="cursor-pointer text-2xl hover:text-blue-400" />
              </a>

              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  blogUrl
                )}&title=Check%20out%20this%20blog&summary=This%20is%20a%20great%20blog%20post!`}
                rel="noopener noreferrer"
              >
                <PiLinkedinLogo className="cursor-pointer text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>

          <div className="p-4">
            <div className="flex items-center justify-between">
              <p className="flex-1 whitespace-normal break-all text-gray-700">
                {blogUrl}
              </p>
              <button
                className="ml-2 rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-600 hover:bg-gray-200"
                onClick={handleCoppy}
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShearButton;
