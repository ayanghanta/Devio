import { formatDate } from "@/app/_utils/formatDate";
import CollapsText from "@/app/_utils/CollapsText";
import { barlow } from "@/lib/font";

import Link from "next/link";
import Image from "next/image";

function WideBlogCard({ blog = {} }) {
  const { title, description, blogCoverImage, publishedAt, slug } = blog;
  return (
    <div className="mb-12 items-start rounded border border-gray-400 p-3 transition duration-300 hover:shadow-md sm:flex sm:gap-6">
      <Image
        src={`/blogs/${blogCoverImage}`}
        alt={title || "Blog Cover"}
        width={5184}
        height={2916}
        className="rounded sm:w-6/12"
      />

      <div>
        <Link
          href={`/blog/${slug}`}
          className={`${barlow.className} mb-3 block text-lg font-medium text-gray-900 transition duration-200 hover:underline sm:text-2xl`}
        >
          {title}
        </Link>
        <p className="mb-2 text-[10px] font-medium capitalize text-gray-400 sm:text-[12px]">
          {formatDate(publishedAt, "long")}
        </p>
        <p className="text-xs text-gray-600 sm:text-base">
          <CollapsText wordShown={25}>{description}</CollapsText>
        </p>
        <Link
          href={`/blog/${slug}`}
          className="ml-auto mr-2 block w-5 sm:text-2xl"
        >
          &rarr;
        </Link>
      </div>
    </div>
  );
}

export default WideBlogCard;
