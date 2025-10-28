"use client";

import { PiHeart, PiHeartFill } from "react-icons/pi";
import ShearButton from "../blog/ShearButton";
import { useState } from "react";

function LikeAndShear() {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike((like) => !like);
  }
  return (
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
  );
}

export default LikeAndShear;
