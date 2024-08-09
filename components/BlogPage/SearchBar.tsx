"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  searchOptions: string[];
};
const SearchBar = ({ searchOptions }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<(typeof searchOptions)[number]>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (
      searchParams.get("category") == null &&
      search == "" &&
      selected == ""
    ) {
    } else {
      const updatedParams = new URLSearchParams(searchParams.toString());
      updatedParams.set(
        "category",
        `${selected == "" ? "" : `${selected.toLowerCase()},`}`
      );
      console.log(updatedParams.get("category"));
      updatedParams.set("name", `${search.toLowerCase()}`);

      router.push(`?${updatedParams.toString()}`);
      console.log("searchParams", updatedParams.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected, router, search]);

  return (
    <div className="xl:sticky top-32 flex flex-col gap-y-4">
      {/* search bar */}
      <div className="before:content-search-icon relative w-full before:absolute before:inset-y-0 before:z-10 before:my-auto before:ml-3 before:size-6 before:opacity-35 xl:w-auto">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="h-6 w-full rounded-lg border border-[#00000048] p-6 pl-12 xl:w-96"
          placeholder="Search"
        />
      </div>
      {/* filter options */}
      <ul className="flex flex-row items-start justify-start xl:flex-col xl:items-stretch xl:justify-center max-w-full overflow-y-scroll">
        {searchOptions.map((option, index) => (
          <li
            className={`flex h-[3.125rem] cursor-pointer items-center rounded-full px-4 text-xl transition-all duration-200 xl:rounded-md ${selected == option && "bg-gray-200"}`}
            onClick={() => setSelected((o) => (o == option ? "" : option))}
            key={index}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
