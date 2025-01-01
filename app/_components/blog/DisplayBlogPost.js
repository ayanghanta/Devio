import Image from "next/image";
import AuthorInfo from "../ui/AuthorInfo";
import BlogContentDisplay from "./BlogContentDisplay";
import { barlow } from "@/app/layout";

function DisplayBlogPost({ blog }) {
  const {
    title,
    blogCoverImage,
    description,
    publishedAt,
    codeTheme,
    codeLanguage,
  } = blog;
  return (
    <>
      <h1
        className={`${barlow.className} mb-10 mt-3 text-3xl font-semibold text-gray-700 sm:text-4xl md:text-5xl`}
      >
        {title}
      </h1>
      <AuthorInfo blogPublishDate={publishedAt} />

      <Image
        className="mx-auto mb-12 max-w-[90%] rounded-sm"
        src={`/blogs/${blogCoverImage}`}
        alt={title || "Blog Cover"}
        width={5184}
        height={2916}
      />
      <p className="mb-12 text-sm italic text-gray-500 sm:text-base">
        {description}
      </p>
      <BlogContentDisplay
        type="presenting"
        codeTheme={codeTheme}
        codeLng={codeLanguage}
      >
        {blog.content}
      </BlogContentDisplay>
    </>
  );
}

export default DisplayBlogPost;
