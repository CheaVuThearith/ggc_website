import Image from "next/image";
import React from "react";

type Props = { image: string; title: string; subtitle: string };
const searchOptions = ["Recent Posts", "Reuse", "Reduce", "Recycle"];

const GreenPost = ({ image, title, subtitle }: Props) => {
  return (
    <div className="bg-primary p-12">
      {/* card */}
      <div className="flex flex-row gap-x-6">
        {/* image */}
        <Image src={image} alt={image} width={300} height={250}></Image>
        {/* text */}
        <div className="mt-8 flex flex-col text-white">
          <h2 className="text-4xl">{title}</h2>
          <p className="text-gray-300">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default GreenPost;
