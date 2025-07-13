import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";

export async function GET(req, { params }) {
  // ceheck repo configure
  const { blogId } = params;
  try {
    await dbConnect();
    const blog = await Blog.findOne({ _id: blogId, isPublished: true });
    return Response.json({
      ok: true,
      blog,
    });
  } catch (err) {
    return Response.json({ message: "Blog not found" }, { status: 404 });
  }
}
