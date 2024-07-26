import React from "react";
type props = {
  title: string;
  subtitle: string;
  describtion: string;
  image: string;
};
const BlogPost = ({ title, subtitle, describtion, image }: props) => {
  return (
    <div className="mx-auto max-w-xl overflow-hidden rounded-lg bg-white shadow-md">
      <img
        className="h-[230px] w-[430px] object-cover"
        src={image}
        alt="Blog Post"
      />
      <div className="p-4">
        <div className="text-primary text-sm font-semibold">{describtion}</div>
        <h2 className="mt-2 text-xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default BlogPost;
