import { formatDate } from "@/app/_utils/helper";
import Image from "next/image";
import Link from "next/link";
import LikeAndShear from "./LikeAndShear";
import { Suspense } from "react";

function AuthorInfo({ readTime = 5, blogPublishDate, blogId }) {
  return (
    <div className="mb-12">
      <div className="ml-4 flex items-center gap-4 sm:ml-10">
        <Image
          src="/myPhoto.jpg"
          alt="photo of ayan"
          height={64}
          width={64}
          className="w-7 rounded-full opacity-90 grayscale sm:w-8"
        />
        <div>
          <Link href="/about" className="text-xs hover:underline sm:text-sm">
            Ayan Ghanta
          </Link>
          <p className="text-xs text-gray-400 sm:text-sm">
            {readTime} min read | {formatDate(blogPublishDate)}
          </p>
        </div>
        <Suspense fallback={<p>Loading...</p>}>
          <LikeAndShear blogId={blogId?.toString()} />
        </Suspense>
      </div>
    </div>
  );
}

export default AuthorInfo;
