"use server";

import { headers } from "next/headers";
import { auth } from "../auth";
import { ServerActionError } from "../handleError";
import Blog from "@/db/model/blogModel";
import { revalidatePath } from "next/cache";
import { dbConnect } from "@/db/db";

export async function blogPubclishAction({ blogId, isPublishing }) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) throw new Error("you do not have permission");

    await dbConnect();

    await Blog.findByIdAndUpdate(blogId, { isPublished: isPublishing });

    // revalidate the /dasboard cash
    revalidatePath("/dashboard");
    revalidatePath("/");

    return { success: true };
  } catch (err) {
    return new ServerActionError(err.message).genericError();
  }
}

export async function blogDeleteAction({ blogId }) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) throw new Error("you do not have permission");

    await dbConnect();
    await Blog.findByIdAndDelete(blogId);

    // revalidate the /dasboard cash
    revalidatePath("/dashboard");
    revalidatePath("/");

    return { success: true };
  } catch (err) {
    return new ServerActionError(err.message).genericError();
  }
}

export async function saveBlogAction({ blogId, blogData }) {
  try {
    if (!blogId) throw new Error("No Blog ID");
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) throw new Error("you do not have permission");

    await dbConnect();
    let blog = await Blog.findById(blogId);

    if (blog) {
      Object.assign(blog, blogData);
    } else {
      blog = new Blog({ _id: blogId, ...blogData });
    }

    await blog.save();

    revalidatePath("/");

    if (blog.slug) {
      revalidatePath(`/blog/${blog.slug}`);
      console.log(`/blog/${blog.slug}`);
    }
    // revalidate the /dasboard cash
    revalidatePath("/dashboard");

    return { success: true };
  } catch (err) {
    return new ServerActionError(err.message).genericError();
  }
}
