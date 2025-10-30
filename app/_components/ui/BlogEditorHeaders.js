"use client";

import { saveBlogAction } from "@/lib/actions/blogActions";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  PiCaretDownFill,
  PiFolderOpen,
  PiHighlighter,
  PiRocket,
  PiScan,
} from "react-icons/pi";

function BlogEditorHeaders({
  blogContent,
  isShowingMetaData,
  blogId,
  blogMetadata,
  onShowPreview,
}) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleSaveBlog(isDarft = false) {
    // NOTEME:
    console.log(blogContent);
    return;
    setIsLoading(true);
    const res = await saveBlogAction({
      blogId,
      blogData: {
        ...blogMetadata,
        content: blogContent,
        isPublished: !isDarft,
      },
    });
    setIsLoading(false);
    if (!res.success) return toast.error(res.message);
    toast.success("Blog successfully saved");
  }
  return (
    <div className="flex items-center justify-between">
      <div></div>

      <div className="flex items-center gap-4">
        <button
          className="flex gap-2 items-center bg-sky-500 rounded-sm text-white hover:bg-sky-600 transition px-3 py-1.5 shadow-sm"
          onClick={onShowPreview}
        >
          <PiScan className="text-xl" />
          <span>Preview</span>
        </button>
        <button
          className="flex gap-2 items-center bg-stone-400 rounded-sm text-white hover:bg-stone-500 transition px-3 py-1.5 shadow-sm"
          onClick={() => isShowingMetaData((s) => !s)}
        >
          <PiCaretDownFill className="text-xl" />
          <span>Meta Data</span>
        </button>

        <button
          className="flex gap-2 items-center bg-zinc-500 rounded-sm text-white hover:bg-zinc-600 transition px-3 py-1.5 shadow-sm disabled:bg-zinc-300"
          onClick={() => handleSaveBlog(true)}
          disabled={isLoading}
        >
          <PiFolderOpen className="text-xl" />
          <span>Save as darft</span>
        </button>

        <button
          className="flex gap-2 items-center bg-green-500 rounded-sm text-white hover:bg-green-600 transition px-3 py-1.5 shadow-sm disabled:bg-green-100"
          onClick={handleSaveBlog}
          disabled={isLoading}
        >
          <PiRocket className="text-xl" />
          <span>Publish</span>
        </button>
      </div>
    </div>
  );
}

export default BlogEditorHeaders;
