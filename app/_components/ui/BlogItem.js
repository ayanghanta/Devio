import Link from "next/link";
import BlogActions from "./BlogActions";
import { PUBLIC_URL } from "@/app/_utils/constants";
import { formatDate } from "@/app/_utils/formatDate";

function BlogItem({ blog }) {
  const {
    title,
    blogCoverImage,
    publishedAt,
    _id: id,
    slug,
    likes,
    isPublished,
  } = blog;

  return (
    <div className="grid grid-cols-5 items-center gap-x-5">
      {/* eslint-disable  */}
      <img
        className="max-w-36 text-center"
        src={blogCoverImage}
        alt={`cover image of a blog`}
      />
      <Link className="text-left hover:underline" href={`/blog/${slug}`}>
        {title}
      </Link>
      <p className="text-center"> {formatDate(publishedAt, "long")}</p>
      <p className="text-center">{likes}</p>
      <BlogActions blogId={id} isPublished={isPublished} />
    </div>
  );
}
export default BlogItem;
