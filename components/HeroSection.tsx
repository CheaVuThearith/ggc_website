import React from "react";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section>
      <div className="flex flex-col gap-y-10">
        {/* big text */}
        <div className="flex flex-col gap-y-5">
          <h1 className="text-primary font-accent text-5xl">Welcome to GGC</h1>
          <h2 className="text-primary text-2xl">
            Your Journey to a{" "}
            <span className="text-3xl font-bold">Sustainable Lifestyle </span>
            Starts Here.
          </h2>
        </div>
        {/* call to action */}
        <div className="text-primary flex flex-col gap-y-2">
          <p>
            Browse our blog to learn more about the environment or take a look
            at some recycling facilities and start taking action!
          </p>
          <button className="bg-primaryLight text-primary px-6 py-3 max-w-fit font-bold">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
