import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section className="flex flex-row items-center justify-center xl:justify-between">
      {/* left side */}
      <div className="flex max-w-2xl flex-col gap-y-12">
        {/* big text */}
        <div className="flex flex-col gap-y-6">
          <h1 className="text-primary font-accent after:content-leaf-element relative text-7xl after:absolute after:bottom-0 after:-ml-2 after:mb-1">
            Welcome to GGC
          </h1>
          <h2 className="flex flex-col gap-y-3 text-4xl">
            Your Journey to a{" "}
            <span className="text-primary text-5xl font-bold">
              Sustainable Lifestyle{" "}
            </span>
            Starts Here.
          </h2>
        </div>
        {/* call to action */}
        <div className="flex flex-col gap-y-4">
          <p className="text-gray-700">
            Browse our blog to learn more about the environment or take a look
            at some recycling facilities and start taking action!
          </p>
          <button className="bg-primary max-w-fit rounded-md px-12 py-3 font-bold text-white">
            Learn More
          </button>
        </div>
      </div>
      {/* right side */}
      <Image
        src="/assets/toadbag.png"
        className="hidden xl:block"
        width={710}
        height={610}
        alt="toadbag"
      ></Image>
    </section>
  );
};
export default HeroSection;
