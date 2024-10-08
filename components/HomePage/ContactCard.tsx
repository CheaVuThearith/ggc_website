import Image from "next/image";
import React from "react";

const ContactCard = () => {
  return (
    <div className="border-primary flex max-h-fit max-w-fit flex-col items-center justify-between gap-x-12 gap-y-12 rounded-lg border-0 p-0 xl:flex-row xl:border-[3.5rem] xl:p-20">
      <Image
        src="/assets/icons/ggc_full.svg"
        width={350}
        height={350}
        alt="ggcfullimage"
      ></Image>
      {/* right side */}
      <div className="flex max-w-[36rem]x flex-col gap-y-3">
        {/* text */}
        <h2 className="font-accent text-center text-2xl font-bold">
          Green Growth Cycle
        </h2>
        <div className="flex flex-col items-center justify-center gap-y-5">
          <p className="text-center">
            Join Our Newsletter for Eco-Tips, Exclusive Offers, and
            Sustainability Stories Delivered to Your mail. No spam we promise :p
          </p>

          {/* email input */}
          <div className="before:content-email-svg relative before:absolute before:inset-y-0 before:z-10 before:my-auto before:ml-3 before:size-6">
            <input
              type="text"
              className="h-6 w-96 rounded-lg border border-[#00000048] p-6 pl-12"
              placeholder="Email Address"
            />
          </div>
          {/* subscribe button */}
          <button className="bg-primary max-w-fit rounded-lg px-6 py-2 text-xl font-bold text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
