import Pagination from "@/components/BlogPage/Pagination";
import SearchBar from "@/components/BlogPage/SearchBar";
import FacilitiesContainer from "@/components/RecyclePage/FacilitiesContainer";

type Props = { searchParams: any };

const RecyclePage = async ({ searchParams }: Props) => {
  const updatedParams = new URLSearchParams(searchParams);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.LOCAL_PATH}/api/recycling-facilities?${updatedParams.toString()}`,
        {
          cache: "no-store",
        }
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  const data: IRecyclingFacilitiesResponse = await fetchData();
  return (
    <>
      <section className="-mt-10 flex flex-col gap-y-12">
        {/* <GreenPost title="" subtitle="" image="" /> */}
        {/* bottom section */}
        <div className="flex flex-col-reverse justify-between gap-16 xl:flex-row">
          {/* blog posts */}
          <FacilitiesContainer data={data} />
          <SearchBar searchOptions={["Paper", "Plastic", "Nothing"]} />
        </div>
      </section>
      <Pagination pagination={data.pagination} />
    </>
  );
};

export default RecyclePage;
