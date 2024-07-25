import React from "react";
import Section from "../Section";
import BlogCard from "../BlogCard";
type Props = {};

const blogs = [
  {
    title: "Waste Management Tips to Use at Home",
    subtitle:
      "Much daily waste ends up in landfills, but it doesn't have to. Simple waste management methods can reduce this. Here are five tips to help make the world greener",
    image: "",
  },
  {
    title: "Five Methods for Waste Disposal",
    subtitle:
      "A significant amount of waste ends up in landfills daily, but this doesn't have to be the case. Simple waste management methods can greatly reduce landfill waste. Here are five tips to help make the world greener",
    image: "",
  },
  {
    title: "Benefits Of Recycling",
    subtitle:
      "Recycling is crucial for preserving the environment and sustaining the planet. Its benefits outweigh those of raw production. While many people recognize recycling as beneficial, they may not fully grasp its importance. Here are some key reasons why recycling matters.",
    image: "",
  },
];

const BlogSection = (props: Props) => {
  return (
    <Section title="Our Blogs">
      <div className="flex flex-col gap-y-12 gap-x-8 items-stretch justify-center xl:flex-row">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            subtitle={blog.subtitle}
            image={blog.image}
          />
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;
