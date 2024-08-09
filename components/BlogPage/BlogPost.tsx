import Image from "next/image";
import React from "react";

type props = {
  title: string;
  description: string;
  author: string;
  image: string;
};
const BlogPost = ({ title, description, author, image }: props) => {
  return (
    <div className="max-w-fit grow overflow-hidden rounded-lg bg-white shadow-md">
      <Image
        width={432}
        height={224}
        className="aspect-auto min-h-[14rem] w-full min-w-[27rem] object-cover"
        src={image}
        alt={image}
      />
      <div className="p-4">
        <div className="text-primary text-sm font-semibold">{author}</div>
        <h2 className="mt-2 text-xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
