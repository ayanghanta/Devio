import Image from "next/image";
import Link from "next/link";

import { barlow } from "@/app/layout";

function SmallBlogCard({ blog }) {
  const { title, blogCoverImage, _id: id } = blog;
  return (
    <div className="relative flex flex-col gap-3 rounded border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:shadow-md sm:flex-row">
      <Image
        src={`/blogs/${blogCoverImage}`}
        alt={title || "Blog Cover"}
        width={5184}
        height={2916}
        className="rounded sm:w-6/12"
      />
      <Link
        href={`/blogs/${id}`}
        className={`${barlow.className} mb-3 block text-base transition duration-200 hover:underline text-gray-600`}
      >
        {title}
      </Link>
      <Link
        href={`/blogs/${id}`}
        className="absolute bottom-0 right-5 block cursor-pointer text-lg sm:bottom-3"
      >
        &rarr;
      </Link>
    </div>
  );
}

export default SmallBlogCard;
