import HomeBlogs from "@/app/_components/blog/HomeBlogs";
import Hero from "@/app/_components/ui/Hero";

import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";
import ApiFeatures from "@/lib/apiFeature";

export const revalidate = 3600;

export const metadata = {
  title: "Devio",
  description:
    "Hey, I’m ayan sharing my coding journey on this website, new tech I learn, projects I build, and lessons I pick up along the way.",
};

async function page() {
  await dbConnect();

  const mostLikeBlogsFeature = new ApiFeatures(
    Blog.find({ isPublished: true }),
    {
      limit: 2,
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

  const [latestBlogs, mostLikedBlogs] = await Promise.all([
    latestBlogsFeature.query,
    mostLikeBlogsFeature.query,
  ]);

  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <HomeBlogs latestBlogs={latestBlogs} mostLikedBlogs={mostLikedBlogs} />
    </div>
  );
}

export default page;
