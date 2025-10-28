"use client";

import { useRouter } from "next/navigation";

function Error({ error }) {
  const router = useRouter();
  return (
    <div className="max-w-[500px mx-auto mt-36">
      <p className="text-center text-3xl text-orange-500">
        Something went worng :/
      </p>
      <button
        className="mx-auto mt-4 block text-blue-500 transition duration-300 hover:text-blue-700 hover:underline"
        onClick={() => router.push("/")}
      >
        &larr; Back
      </button>
    </div>
  );
}

export default Error;
