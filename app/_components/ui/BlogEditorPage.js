"use client";

import { useState } from "react";
import TextEditor from "../text_editor/TextEditor";
import BlogEditorHeaders from "./BlogEditorHeaders";
import Preview from "./Preview";
import BlogMetaData from "./BlogMetaData";
import { writeWithAi } from "@/lib/actions/aiWritingAction";
import toast from "react-hot-toast";
import { delay } from "@/app/_utils/helper";

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
  const [showEditor, setShowEditor] = useState(true);

  async function handleWriteBlogWithAi({ prompt, temperature }) {
    const { success, blogData, message } = await writeWithAi({
      prompt,
      temperature,
    });

    if (!success) return toast.error(message);

    setBlogTitle(blogData.title);
    setBlogContent(blogData.content);
    setBlogDescription(blogData.description);
    setShowEditor(false);
    await delay(0.01);
    setShowEditor(true);
  }

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
        onAiWrite={handleWriteBlogWithAi}
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
        {showEditor && (
          <TextEditor
            setBlogContent={setBlogContent}
            existingContnet={blogContent}
          />
        )}
      </div>
    </div>
  );
}

export default BlogEditorPage;
