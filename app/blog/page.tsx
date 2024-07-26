import React from "react";
import BlogPost from "@/components/BlogPage/BlogPost";
import Image from "next/image";

type Props = {};
const searchOptions = ["Recent Posts", "Reuse", "Reduce", "Recycle"];

const BlogPage = (props: Props) => {
  return (
    <>
    {/* TODO: sort code */}
      <section className="flex flex-col gap-y-12">
        <div className="bg-primary p-12">
          {/* card */}
          <div className="flex flex-row gap-x-6">
            {/* image */}
            <Image src="" alt="" width={300} height={250}></Image>
            {/* text */}
            <div className="mt-8 flex flex-col text-white">
              <h2 className="text-4xl">Title</h2>
              <p className="text-gray-300">subtitle</p>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="flex flex-row justify-between">
          {/* blog posts */}
          <div className="flex flex-row items-center gap-x-12 justify-center">
            <BlogPost
              describtion="26 july 2028"
              title="Recycle"
              subtitle="Freetext"
              image="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
            />
            <BlogPost
              describtion="26 july 2025"
              title="Recycle"
              subtitle="Freetext"
              image="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
            />
          </div>
          {/* search */}
          <div className="flex flex-col gap-y-4">
            <div className="before:content-search-icon relative before:absolute before:inset-y-0 before:z-10 before:my-auto before:ml-3 before:size-6">
              <input
                type="text"
                className="h-6 w-96 rounded-lg border border-[#00000048] p-6 pl-12"
                placeholder="Search"
              />
            </div>
            {/* filter options */}
            <ul className="flex flex-col items-stretch justify-center">
              {searchOptions.map((option, index) => (
                <li className="bg-primary p-4 text-xl" key={index}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
