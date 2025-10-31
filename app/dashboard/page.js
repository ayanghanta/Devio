import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BlogsTable from "../_components/ui/BlogsTable";
import Blog from "@/db/model/blogModel";
import { dbConnect } from "@/db/db";

async function page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  await dbConnect();

  const allBlogs = await Blog.find(
    {},
    "title slug blogCoverImage likes createAt editAt publishedAt isPublished"
  ).lean();

  const serializedBlogs = allBlogs.map((blog) => {
    return { ...blog, _id: String(blog._id) };
  });

  return (
    <div className="mt-12">
      <div className="mb-12 bg-gray-200 py-2">
        <p className="text-center font-header text-lg font-semibold text-gray-700">
          Welcome to Your Dashboard
        </p>
        <p className="text-center font-header text-sm text-gray-700">
          [{session.user.email}]
        </p>
      </div>
      <div>
        <p className="font-header text-2xl font-semibold">
          Devhorizon Public Blogs
        </p>
        <BlogsTable
          blogs={serializedBlogs.filter((blog) => blog.isPublished)}
        />
      </div>
      <div>
        <p className="mt-12 font-header text-2xl font-semibold">
          Devhorizon Draft Blogs
        </p>
        <BlogsTable
          blogs={serializedBlogs.filter((blog) => !blog.isPublished)}
        />
      </div>
    </div>
  );
}

export default page;
