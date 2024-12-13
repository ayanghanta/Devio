"use client";

import { formatDate } from "@/app/_utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PiHeartFill, PiHeart } from "react-icons/pi";
import ShearButton from "../blog/ShearButton";

function AuthorInfo({ readTime = 5, blogPublishDate }) {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike((like) => !like);
  }

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
        <div className="ml-auto mr-2 flex items-center gap-2 sm:mr-12 sm:gap-4 md:mr-16">
          {like ? (
            <PiHeartFill
              className="cursor-pointer fill-rose-500 p-1.5 text-3xl text-gray-500 sm:text-4xl"
              onClick={handleLike}
            />
          ) : (
            <PiHeart
              className="cursor-pointer rounded-full p-1.5 text-3xl text-gray-500 transition duration-300 hover:bg-rose-100 hover:fill-rose-500 sm:text-4xl"
              onClick={handleLike}
            />
          )}
          <ShearButton />
        </div>
      </div>
    </div>
  );
}

export default AuthorInfo;
