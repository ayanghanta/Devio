import TextEditor from "@/app/_components/text_editor/TextEditor";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

async function page({ params }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/login");

  const { blogId } = params;

  return (
    <div className="max-w-[1300px] mx-auto mt-12">
      <h1 className="mt-6 rounded-sm bg-gray-200 py-2 text-center text-lg md:text-xl">
        Write, Share, Inspire: Craft Your Blog Post
      </h1>
      <div>
        <TextEditor />
      </div>
    </div>
  );
}

export default page;
