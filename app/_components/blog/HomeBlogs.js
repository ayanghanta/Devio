import { Suspense } from "react";

import { barlow } from "@/app/layout";
import Spinner from "../ui/Spinner";
import SquarBlogCard from "./SquareBlogCard";
import WideBlogCard from "./WideBlogCard";

export const revalidate = 3600;

async function HomeBlogs({ latestBlogs, mostLikedBlogs }) {
  return (
    <div className="mx-auto max-w-4xl px-3">
      <div>
        <p
          className={` ${barlow.className} mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
        >
          Newest on the Blog
        </p>
        <Suspense fallback={<Spinner />}>
          {<WideBlogCard blog={latestBlogs.at(0)} />}
        </Suspense>
      </div>
      <div>
        <p
          className={` ${barlow.className} mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
        >
          Most Read Blogs
        </p>

        <Suspense fallback={<Spinner />}>
          <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
            {mostLikedBlogs.map((blog) => (
              <SquarBlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}

export default HomeBlogs;
