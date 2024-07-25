import Image from "next/image";
import React from "react";
type props = { title: string; subtitle: string; image: string };
const BlogCard = ({ title, subtitle, image }: props) => {
  return (
    <div className="border-primary flex max-w-96 flex-col gap-y-4 rounded-xl border bg-white p-6">
      <Image
        src={image}
        className="rounded-lg"
        width={350}
        height={200}
        alt={image}
      ></Image>
      <div className="flex flex-col h-full gap-y-6 justify-between">
        <h2 className="text-center text-xl max-h-7 text-ellipsis overflow-hidden whitespace-nowrap font-semibold text-gray-800">
          {title}
        </h2>
        <p className="mt-2 text-center text-gray-600">{subtitle}</p>
        <div className="mt-4 flex justify-center">
          <button className="bg-primary rounded-md px-4 py-2 font-bold text-white">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
