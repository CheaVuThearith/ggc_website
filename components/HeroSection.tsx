import Image from "next/image";
import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
  <section className="flex flex-row justify-between items-center">
      {/* left side */}
      <div className="flex flex-col gap-y-2">
        {/* big text */}
        <div className="flex flex-col gap-y-5">
          <h1 className="text-primary font-accent after:content-leaf-element relative text-5xl after:absolute after:bottom-0 after:mb-1 after:-ml-2">
            Welcome to GGC
          </h1>
          <h2 className="text-2xl">
            Your Journey to a{" "}
            <span className="text-3xl text-primary font-bold">Sustainable Lifestyle </span>
            Starts Here.
          </h2>
        </div>
        {/* call to action */}
        <div className="flex flex-col gap-y-2">
          <p>
            Browse our blog to learn more about the environment or take a look
            at some recycling facilities and start taking action!
          </p>
          <button className="bg-primary text-white rounded-md max-w-fit px-6 py-3 font-bold">
            Learn More
          </button>
        </div>
      </div>
      {/* right side */}
      <Image src="/assets/toadbag.png" className="xl:block hidden" width={710} height={610} alt="toadbag" ></Image>
    </section>
  );
};
export default HeroSection;
