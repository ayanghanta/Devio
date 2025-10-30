"use client";

import { useState } from "react";
import TextEditor from "../text_editor/TextEditor";
import BlogEditorHeaders from "./BlogEditorHeaders";

function BlogEditorPage({ blogId, blogData }) {
  const [blogConet, setBlogContent] = useState(blogData?.content || "");
  const [blogTitle, setBlogTitle] = useState(blogData?.title || "");
  const [blogDescription, setBlogDescription] = useState(
    blogData?.description || ""
  );
  const [showTitleDescription, setShowTitleDescription] = useState(false);
  return (
    <div className="max-w-[1300px] mx-auto mt-12">
      <BlogEditorHeaders
        blogId={blogId}
        blogContent={blogConet}
        isShowingMetaData={setShowTitleDescription}
        blogMetadata={{
          title: blogTitle,
          description: blogDescription,
          blogCoverImage: "defaul-cover.png", // FIXME:
        }}
      />
      {showTitleDescription && (
        <div className="mt-8 mb-3 flex w-11/12 mx-auto flex-col gap-4">
          <div>
            <label for="blogTitle" className="mb-3 text-slate-700">
              Title
            </label>
            <textarea
              value={blogTitle}
              id="blogTitle"
              placeholder="Write blog title..."
              rows={2}
              className="w-full text-slate-700 block bg-slate-50 px-3 py-2 outline-slate-300 text-xl font-bold"
              onChange={(e) => setBlogTitle(e.target.value)}
            />
          </div>
          <div>
            <label for="blogDescription" className="mb-3 text-slate-700">
              Description
            </label>
            <textarea
              value={blogDescription}
              id="blogDescription"
              placeholder="Write blog description..."
              rows={3}
              className="w-full text-slate-600 block italic bg-slate-50 px-3 py-2 outline-slate-300"
              onChange={(e) => setBlogDescription(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="w-4/5 mx-auto">
        <TextEditor
          setBlogContent={setBlogContent}
          existingContnet={blogConet}
        />
      </div>
    </div>
  );
}

export default BlogEditorPage;
