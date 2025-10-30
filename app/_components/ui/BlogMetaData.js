import {
  BLOG_COVER_HEIGHT,
  BLOG_COVER_QUALITY,
  BLOG_COVER_WIDTH,
} from "@/app/_utils/constants";
import { PiUploadSimpleLight } from "react-icons/pi";
import ImageSelector from "./ImageSelector";
import Modal from "./Modal";

function BlogMetaData({
  blogTitle,
  onSetBlogTitle,
  blogDescription,
  onSetBlogDescription,
  blogCoverImageUrl,
  onSetBlogCoverImageUrl,
}) {
  return (
    <div className="mt-10 mb-10 flex w-4/5 mx-auto flex-col gap-8">
      {/* Blog Title */}
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="blogTitle"
          className="text-slate-700 font-semibold text-sm tracking-wide"
        >
          Blog Title
        </label>
        <textarea
          id="blogTitle"
          value={blogTitle}
          onChange={(e) => onSetBlogTitle(e.target.value)}
          placeholder="Write an engaging blog title..."
          rows={2}
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 text-lg font-semibold placeholder-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200 outline-none transition"
        />
      </div>

      {/* Blog Description */}
      <div className="flex flex-col space-y-2">
        <label
          htmlFor="blogDescription"
          className="text-slate-700 font-semibold text-sm tracking-wide"
        >
          Description
        </label>
        <textarea
          id="blogDescription"
          value={blogDescription}
          onChange={(e) => onSetBlogDescription(e.target.value)}
          placeholder="Write a short description..."
          rows={3}
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 italic placeholder-slate-400 focus:border-slate-400 focus:bg-white focus:ring-2 focus:ring-slate-200 outline-none transition"
        />
      </div>

      {/* Cover Image */}
      {/* eslint-disable */}
      {blogCoverImageUrl ? (
        <div>
          <img
            src={blogCoverImageUrl}
            alt={`Cover image of ${blogTitle}`}
            className="w-2/4 mx-auto"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-48 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-500 italic">
          <p>No cover image uploaded yet</p>
        </div>
      )}

      <div className="flex flex-col space-y-3">
        <Modal>
          <Modal.Open name="coverImage">
            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-slate-800 disabled:bg-slate-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-slate-700 transition w-fit"
            >
              <PiUploadSimpleLight className="w-5 h-5" />
              <span>{blogCoverImageUrl ? "Reupload" : "Upload"}</span>
            </button>
          </Modal.Open>
          <Modal.Window windowName="coverImage">
            <ImageSelector
              isCoverImage={true}
              setBlogImageUrl={onSetBlogCoverImageUrl}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default BlogMetaData;
