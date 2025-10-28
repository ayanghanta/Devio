import Link from "next/link";
import CollapsText from "@/app/_utils/CollapsText";
import { formatDate } from "@/app/_utils/formatDate";
import Image from "next/image";
import { barlow } from "@/app/layout";

function SquarBlogCard({ blog = {} }) {
  const { title, description, blogCoverImage, publishedAt, slug } = blog;

  return (
    <div className="rounded border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:shadow-md">
      <Image
        src={`/blogs/${blogCoverImage}`}
        alt={title || "Blog Cover"}
        width={5184}
        height={2916}
        className="rounded"
      />
      <div>
        <Link
          className={`${barlow.className} mb-3 block text-lg text-gray-600 transition duration-200 hover:underline sm:mt-2 sm:text-2xl`}
          href={`/blog/${slug}`}
        >
          {title}
        </Link>
        <p className="mb-2 text-[10px] font-medium capitalize text-gray-400">
          {formatDate(publishedAt, "long")}
        </p>
        <p className="text-xs text-gray-500 sm:text-sm">
          <CollapsText>{description}</CollapsText>
        </p>
        <div className="text-right">
          <Link
            className="ml-auto w-5 cursor-pointer sm:text-2xl"
            href={`/blog/${slug}`}
          >
            &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SquarBlogCard;
