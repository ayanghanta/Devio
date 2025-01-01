import ApiFeatures from "@/app/_lib/apiFeature";
import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";

export async function GET(req, { params }) {
  try {
    await dbConnect();
    const url = new URL(req.url);
    const searchParams = Object.fromEntries(
      new URLSearchParams(url.searchParams)
    );

    searchParams.fields =
      "title,blogCoverImage,publishedAt,description,likes,slug,isPublished";
    // AWAIT FOR QUERY
    const features = new ApiFeatures(
      Blog.find({ isPublished: true }),
      searchParams
    )
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const blogs = await features.query;
    // const blogs = await Blog.find();
    return Response.json({
      ok: true,
      blogs,
    });
  } catch (err) {
    return Response.json({ message: "Blogs not found" }, { status: 404 });
  }
}
