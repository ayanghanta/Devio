import { barlow } from "@/app/_lib/font";
import Image from "next/image";

import heroImg from "@/public/hero-bg2.jpg";

function Hero() {
  return (
    <section className="mb-6 rounded-sm px-4 pb-10 pt-10 font-medium text-gray-700 sm:mb-10 sm:px-6 sm:pb-12 sm:pt-20 lg:pl-36 xl:pl-56 relative">
      <div className="relative z-10">
        <h1
          className={`${barlow.className} mb-5 font-header text-2xl font-medium sm:text-4xl`}
        >
          Making Things That Make Me Think.
        </h1>
        <p className="text-xs font-normal sm:text-base">
          Sharing builds, experiments, and ideas that challenge my skills, spark
          curiosity, and push my understanding of how tech actually works...
        </p>
      </div>
      <Image
        src={heroImg}
        alt="hero image of Indev"
        fill
        placeholder="blur"
        className="object-cover object-center"
      />
    </section>
  );
}

export default Hero;
