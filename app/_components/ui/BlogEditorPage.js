"use client";

import { useState } from "react";
import TextEditor from "../text_editor/TextEditor";
import BlogEditorHeaders from "./BlogEditorHeaders";
import Preview from "./Preview";
import BlogMetaData from "./BlogMetaData";

function BlogEditorPage({ blogId, blogData }) {
  const [blogContent, setBlogContent] = useState(blogData?.content || "");
  const [blogTitle, setBlogTitle] = useState(blogData?.title || "");
  const [blogDescription, setBlogDescription] = useState(
    blogData?.description || ""
  );
  const [showTitleDescription, setShowTitleDescription] = useState(false);
  const [blogCoverImage, setBlogCoverImage] = useState(
    blogData?.blogCoverImage || ""
  );
  const [showPreview, setShowPreview] = useState(false);

  if (showPreview)
    return (
      <Preview
        onBackEditMode={() => setShowPreview(false)}
        blogData={{
          content: blogContent,
          title: blogTitle,
          description: blogDescription,
          blogCoverImage,
        }}
      />
    );

  return (
    <div className="max-w-[1300px] mx-auto mt-12">
      <BlogEditorHeaders
        blogId={blogId}
        blogContent={blogContent}
        isShowingMetaData={setShowTitleDescription}
        onShowPreview={() => setShowPreview(true)}
        blogMetadata={{
          title: blogTitle,
          description: blogDescription,
          blogCoverImage,
        }}
      />
      {showTitleDescription && (
        <BlogMetaData
          blogTitle={blogTitle}
          blogDescription={blogDescription}
          blogCoverImageUrl={blogCoverImage}
          onSetBlogTitle={setBlogTitle}
          onSetBlogDescription={setBlogDescription}
          onSetBlogCoverImageUrl={setBlogCoverImage}
        />
      )}
      <div className="w-4/5 mx-auto">
        <TextEditor
          setBlogContent={setBlogContent}
          existingContnet={blogContent}
        />
      </div>
    </div>
  );
}

export default BlogEditorPage;
