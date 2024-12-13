import { barlow } from "@/app/layout";
import Image from "next/image";
export const metadata = {
  title: "About me",
};
function page() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1
        className={`${barlow.className} mb-8 mt-14 text-center text-3xl font-medium text-gray-700`}
      >
        Hey,I&apos;m Ayan Ghanta.
      </h1>
      <div className="mb-16 flex justify-center">
        <Image
          height={64}
          width={64}
          src="/myPhoto.jpg"
          alt="photo of ayan ghanta"
          className="w-14 rounded-full opacity-90 grayscale"
        />
      </div>
      <div className="flex flex-col gap-6 px-4 text-gray-700 sm:px-8 sm:text-lg">
        <p>
          A developer passionate about turning ideas into reality through code.
        </p>
        <p>
          I started my journey in Physics, earning my degree in 2024. But it
          wasn&apos;t long before I realized my true passion wasn&apos;t in the
          world of formulas and equations. In 2022, I was introduced to
          programming, and everything changed. I discovered the thrill of
          writing code and watching the world transform, bit by bit, on the
          screen in front of me.
        </p>
        <p>
          Since August of that year, I&apos;ve immersed myself in web
          development, learning and building with one goal in mind: to create
          meaningful apps that can make a real difference. The idea of being an
          indie hacker excites me—working independently, building products that
          help people, and living life on my own terms, with code as my constant
          companion.
        </p>
        <p>
          My dream is simple yet powerful: to be a full-time developer, doing
          what I love every day, creating something new with every line I write.
        </p>
        <p>
          And when I&apos;m not in front of a computer, I&apos;m probably lost
          in the pages of a good thriller novel, always on the lookout for the
          next great story.
        </p>
      </div>
    </div>
  );
}

export default page;
