import BlogEditorPage from "@/app/_components/ui/BlogEditorPage";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { Types } from "mongoose";
import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";
import { redirect } from "next/navigation";

async function page({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  const { blogId } = params;
  let blogData = null;

  if (blogId === "new") {
    const newId = new Types.ObjectId().toString();
    redirect(`/editor/${newId}`);
  } else {
    await dbConnect();
    blogData = await Blog.findById(blogId).lean();
  }

  return (
    <BlogEditorPage
      blogId={blogId}
      blogData={blogData && { ...blogData, _id: blogData._id.toString() }}
    />
  );
}

export default page;
