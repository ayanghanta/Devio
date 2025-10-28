"use server";

import { dbConnect } from "@/db/db";
import Blog from "@/db/model/blogModel";

export async function updateAllBlogs() {
  try {
    await dbConnect();

    const blogs = await Blog.find();
    console.log(`📚 Found ${blogs.length} blogs`);

    for (const blog of blogs) {
      await blog.save();
      console.log(`🔁 Updated slug for: ${blog.title}`);
    }

    return { success: true, message: "All blogs updated successfully." };
  } catch (error) {
    console.error("❌ Error updating blogs:", error);
    return { success: false, message: error.message };
  }
}
