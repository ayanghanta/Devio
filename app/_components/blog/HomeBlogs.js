import { barlow } from "@/app/_lib/font";
import SquarBlogCard from "./SquareBlogCard";
import WideBlogCard from "./WideBlogCard";

async function HomeBlogs({ latestBlogs, mostLikedBlogs }) {
  return (
    <div className="mx-auto max-w-4xl px-3">
      <div>
        <p
          className={` ${barlow.className} mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
        >
          Newest on the Blog
        </p>
        {<WideBlogCard blog={latestBlogs.at(0)} />}
      </div>
      <div>
        <p
          className={` ${barlow.className} mb-4 text-xs font-bold uppercase tracking-wider text-gray-500 sm:text-sm`}
        >
          Most Read Blogs
        </p>

        <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
          {mostLikedBlogs.map((blog) => (
            <SquarBlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeBlogs;
