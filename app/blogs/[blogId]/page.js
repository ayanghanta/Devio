import DisplayBlogPost from "@/app/_components/blog/DisplayBlogPost";
import Loader from "@/app/_components/ui/Loader";
import { getBlog } from "@/app/_lib/apiBlog";
import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { blogId } = params;
  await dbConnect();
  const blog = await Blog.findById(blogId);

  return { title: `Blog : ${blog.title}` };
}

async function page({ params }) {
  const { blogId } = params;
  await dbConnect();
  const blog = await Blog.findById(blogId);

  return (
    <div className="mx-auto mt-20 max-w-80 pb-24 sm:max-w-xl md:max-w-2xl lg:max-w-4xl px-3">
      <Suspense fallback={<Loader />}>
        <DisplayBlogPost blog={blog} />
      </Suspense>
    </div>
  );
}

export default page;
