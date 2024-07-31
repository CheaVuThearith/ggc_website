"use client";
import React, { useState } from "react";

type Props = {};
const searchOptions = ["Recent", "Reuse", "Reduce", "Recycle"] as const;
const SearchBar = (props: Props) => {
  const [selected, setselected] =
    useState<(typeof searchOptions)[number]>("Recent");
  return (
    <div className="">
      <div className="sticky top-32 flex flex-col gap-y-4">
        {/* search bar */}
        <div className="before:content-search-icon relative w-full before:absolute before:inset-y-0 before:z-10 before:my-auto before:ml-3 before:size-6 before:opacity-35 xl:w-auto">
          <input
            type="text"
            className="h-6 w-full rounded-lg border border-[#00000048] p-6 pl-12 xl:w-96"
            placeholder="Search"
          />
        </div>
        {/* filter options */}
        <ul className="flex flex-row items-start justify-start xl:flex-col xl:items-stretch xl:justify-center">
          {searchOptions.map((option, index) => (
            <li
              className={`flex h-[3.125rem] cursor-pointer items-center rounded-full px-4 text-xl transition-all duration-200 xl:rounded-md ${selected == option && "bg-gray-200"}`}
              onClick={() => setselected(option)}
              key={index}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
