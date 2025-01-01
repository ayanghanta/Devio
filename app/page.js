import Hero from "@/app/_components/ui/Hero";
import HomeBlogs from "@/app/_components/blog/HomeBlogs";

import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";
import { getLatestBlog, getMostLiedBlogs } from "./_lib/apiBlog";

async function page() {
  // // req.query.limit = "4";
  // // req.query.sort = "-likes";
  // // req.query.fields = "title,blogCoverImage,publishedAt,description,likes,slug";
  // const top2MostLiked = await fetch("/api/blogs");
  // const letestBlogs = await fetch("/api/blogs?limit=1");

  const [latestBlogs, mostLikedBlogs] = await Promise.all([
    getLatestBlog(),
    getMostLiedBlogs(2),
  ]);

  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <HomeBlogs latestBlogs={latestBlogs} mostLikedBlogs={mostLikedBlogs} />
    </div>
  );
}

export default page;
