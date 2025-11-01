"use client";

import { PiHeart, PiHeartFill } from "react-icons/pi";
import ShearButton from "../blog/ShearButton";
import { useLocalStorage } from "@/app/_hooks/useLocalStorage";
import { likeBlogAction } from "@/lib/actions/blogActions";

function LikeAndShear({ blogId }) {
  const { localStorageData, handleUpdateLocalStorage } = useLocalStorage();

  const isAlreadyLikedBlog = localStorageData?.likes?.includes(blogId);

  async function handleLike() {
    const prevLikes = localStorageData?.likes ?? [];
    const isAlreadyLiked = prevLikes.includes(blogId);

    const updatedLikes = isAlreadyLiked
      ? prevLikes.filter((id) => id !== blogId)
      : [...prevLikes, blogId];

    handleUpdateLocalStorage("likes", updatedLikes);

    await likeBlogAction({ blogId, isUnLike: isAlreadyLiked });
  }

  return (
    <div className="ml-auto mr-2 flex items-center gap-2 sm:mr-12 sm:gap-4 md:mr-16">
      {isAlreadyLikedBlog ? (
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
  );
}

export default LikeAndShear;
