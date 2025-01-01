import { Suspense } from "react";
import SmallBlogCard from "../_components/blog/SmallBlogCard";
import SquarBlogCard from "../_components/blog/SquareBlogCard";
import WideBlogCard from "../_components/blog/WideBlogCard";
import Spinner from "../_components/ui/Spinner";
import { getAllBlogs, getLatestBlog, getMostLiedBlogs } from "../_lib/apiBlog";

import { barlow } from "../layout";

export const metadata = {
  title: "All blogs",
};

export const revalidate = 3600;

async function page() {
  const [latestBlogs, mostLikedBlogs, allBlogs] = await Promise.all([
    getLatestBlog(),
    getMostLiedBlogs(2),
    getAllBlogs(),
  ]);

  return (
    <div className="mx-auto max-w-4xl px-3 mt-16">
      <div className="letestBlogContainer">
        <p
          className={`${barlow.className} mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
        >
          Newest on the Blog
        </p>
        <Suspense fallback={<Spinner />}>
          <WideBlogCard blog={latestBlogs.at(0)} />
        </Suspense>
      </div>
      <p
        className={`${barlow.className} mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
      >
        Most Read Blogs
      </p>

      <Suspense fallback={<Spinner />}>
        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
          {mostLikedBlogs.map((blog) => (
            <SquarBlogCard blog={blog} key={blog._id} />
          ))}
        </div>
      </Suspense>

      <p
        className={`${barlow.className} mb-4 mt-12 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
      >
        More Great Reads!
      </p>

      <Suspense fallback={<Spinner />}>
        <div className="flex flex-col gap-y-6 sm:grid sm:grid-cols-2 sm:gap-x-5">
          {allBlogs.map((blog) => (
            <SmallBlogCard blog={blog} key={blog._id} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default page;
