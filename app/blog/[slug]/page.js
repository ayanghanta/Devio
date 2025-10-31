import DisplayBlogPost from "@/app/_components/blog/DisplayBlogPost";
import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";
import { notFound } from "next/navigation";

// export const revalidate = 86400;

export async function generateMetadata({ params }) {
  const { slug } = params;
  await dbConnect();
  const blog = await Blog.findOne(
    { slug, isPublished: true },
    "title description blogCoverImage publishedAt"
  );
  if (!blog) notFound();

  return {
    title: blog.title,
    description: blog.description,

    openGraph: {
      title: blog.title,
      description: blog.description,
      url: blog.blogCoverImage,
      publishedTime: blog.publishedAt,
      author: "Ayan Ghanta",
      images: [
        {
          url: blog.blogCoverImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.blogCoverImage],
    },
  };
}

// export async function generateStaticParams() {
//   await dbConnect();
//   const blogs = await Blog.find({ isPublished: true }, "slug");

//   const allBlogSlugs = blogs.map((blog) => {
//     return {
//       slug: blog.slug,
//     };
//   });
//   return allBlogSlugs;
// }

async function page({ params }) {
  const { slug } = params;
  await dbConnect();
  const blog = await Blog.findOne({ slug, isPublished: true });

  if (!blog) notFound();

  return (
    <div className="mx-auto mt-20 max-w-80 pb-24 sm:max-w-xl md:max-w-2xl lg:max-w-4xl px-3">
      <DisplayBlogPost blog={blog} />
    </div>
  );
}

export default page;
