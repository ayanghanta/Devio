"use client";
import { useRouter } from "next/navigation";

function Notfound() {
  const router = useRouter();

  return (
    <div className="max-w-[500px mx-auto mt-36">
      <p className="text-center text-3xl text-gray-500">
        404 There is no page in this url :/
      </p>

      <button
        className="mx-auto mt-4 block text-blue-500 transition duration-300 hover:text-blue-700 hover:underline"
        onClick={() => router.push("/")}
      >
        &larr; Back to home
      </button>
    </div>
  );
}

export default Notfound;
