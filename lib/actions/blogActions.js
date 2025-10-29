"use server";

import { headers } from "next/headers";
import { auth } from "../auth";
import { ServerActionError } from "../handleError";
import Blog from "@/db/model/blogModel";
import { revalidatePath } from "next/cache";

export async function blogPubclishAction({ blogId, isPublishing }) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session) throw new Error("you do not have permission");

    await Blog.findByIdAndUpdate(blogId, { isPublished: isPublishing });

    // revalidate the /dasboard cash
    revalidatePath("/dashboard");

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

    await Blog.findByIdAndDelete(blogId);

    // revalidate the /dasboard cash
    revalidatePath("/dashboard");

    return { success: true };
  } catch (err) {
    console.log(err.message);
    return new ServerActionError(err.message).genericError();
  }
}
