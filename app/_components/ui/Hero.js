import { barlow } from "@/lib/font";
import Image from "next/image";

import heroImg from "@/public/hero-bg2.jpg";

function Hero() {
  return (
    <section className="mb-6 rounded-sm px-4 pb-10 pt-10 font-medium text-gray-700 sm:mb-10 sm:px-6 sm:pb-12 sm:pt-20 lg:pl-36 xl:pl-56 relative">
      <div className="relative z-10">
        <h1
          className={`${barlow.className} mb-5 font-header text-2xl font-medium sm:text-4xl`}
        >
          Hello, welcome to Devio.
        </h1>
        <p className="text-xs font-normal sm:text-base">
          Where ideas take shape in code, and every keystroke is a step toward
          creating something extraordinary...
        </p>
      </div>
      <Image
        src={heroImg}
        alt="hero image of devio"
        fill
        placeholder="blur"
        className="object-cover object-center"
      />
    </section>
  );
}

export default Hero;
