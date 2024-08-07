import GreenPost from "@/components/BlogPage/GreenPost";
import Pagination from "@/components/BlogPage/Pagination";
import SearchBar from "@/components/BlogPage/SearchBar";
import RecyclingFacilitiesCardLoading from "@/components/RecyclePage/RecyclingFacilitiesCardLoading";
import { Suspense } from "react";

const BlogLoading = () => {
  const data: IRecyclingFacilitiesResponse = {
    data: [],
    pagination: { limit: 0, page: 0, totalPages: 0, total: 0 },
  };
  return (
    <>
    <Suspense>
      <section className="-mt-10 flex flex-col gap-y-12">
        <GreenPost title="" subtitle="" image="" />
        {/* bottom section */}
        <div className="flex flex-col-reverse justify-between gap-16 xl:flex-row">
          {/* blog posts */}
          {/* <FacilitiesContainer data={data} /> */}
          <div className="flex min-h-[520px] max-w-5xl shrink-0 grow flex-row flex-wrap items-stretch justify-center gap-12">
            <RecyclingFacilitiesCardLoading />
            <RecyclingFacilitiesCardLoading />
            <RecyclingFacilitiesCardLoading />
            <RecyclingFacilitiesCardLoading />
            <RecyclingFacilitiesCardLoading />
          </div>
          <SearchBar
            searchOptions={["Paper", "Plastic", "Foam", "Aluminium", "Steel"]}
          />
        </div>
      </section>
      <Pagination pagination={data.pagination} />
      </Suspense>
    </>
  );
};

export default BlogLoading;
