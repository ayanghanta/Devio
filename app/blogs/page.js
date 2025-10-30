import SmallBlogCard from "../_components/blog/SmallBlogCard";
import SquarBlogCard from "../_components/blog/SquareBlogCard";
import WideBlogCard from "../_components/blog/WideBlogCard";

import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";
import { barlow } from "@/lib/font";
import ApiFeatures from "@/lib/apiFeature";

export const metadata = {
  title: "All blogs",
  description:
    "All my blogs in one place, from coding experiments to new tech I’m learning and projects I’m building as an indie developer.",
};

export const revalidate = 3600;

async function page() {
  await dbConnect();

  const mostLikeBlogsFeature = new ApiFeatures(
    Blog.find({ isPublished: true }),
    {
      limit: 4,
      sort: "-likes",
    }
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const latestBlogsFeature = new ApiFeatures(Blog.find({ isPublished: true }), {
    limit: 1,
  })
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const allBlogFeature = new ApiFeatures(Blog.find({ isPublished: true }), {})
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const [latestBlogs, mostLikedBlogs, allBlogs] = await Promise.all([
    latestBlogsFeature.query,
    mostLikeBlogsFeature.query,
    allBlogFeature.query,
  ]);

  return (
    <div className="mx-auto max-w-4xl px-3 mt-16">
      <div className="letestBlogContainer">
        <p
          className={`${barlow.className} mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
        >
          Newest on the Blog
        </p>
        <WideBlogCard blog={latestBlogs.at(0)} />
      </div>
      <p
        className={`${barlow.className} mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
      >
        Most Read Blogs
      </p>

      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
        {mostLikedBlogs.map((blog) => (
          <SquarBlogCard blog={blog} key={blog._id} />
        ))}
      </div>

      <p
        className={`${barlow.className} mb-4 mt-12 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
      >
        More Great Reads!
      </p>

      <div className="flex flex-col gap-y-6 sm:grid sm:grid-cols-2 sm:gap-x-5">
        {allBlogs.map((blog) => (
          <SmallBlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
}

export default page;
