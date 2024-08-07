import BlogPost from "@/components/BlogPage/BlogPost";

import GreenPost from "@/components/BlogPage/GreenPost";
import Pagination from "@/components/BlogPage/Pagination";
import SearchBar from "@/components/BlogPage/SearchBar";

type Props = { searchParams: any };

const RecyclePage = async ({ searchParams }: Props) => {
  const updatedParams = new URLSearchParams(searchParams);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.LOCAL_PATH}/api/blog-posts?${updatedParams.toString()}`,
        {
          cache: "no-cache",
        }
      );
      return await response.json();
    } catch (error) {
      console.error("Error fetching blog posts:", error);
    }
  };

  const data: IBlogPostsResponse = await fetchData();
  return (
    <>
      <section className="-mt-10 flex flex-col gap-y-12">
        <GreenPost title="" subtitle="" image="" />
        {/* bottom section */}
        <div className="flex flex-col-reverse justify-between gap-16 xl:flex-row">
          {/* blog posts */}
          <div className="flex max-w-5xl shrink-0 grow flex-row flex-wrap items-center justify-center gap-12">
            {data.data.map((post, index) => (
              <BlogPost
                key={index}
                description={post.content}
                title={post.title}
                author={post.author}
                image={post.image}
              />
            ))}
          </div>
          <SearchBar searchOptions={["Recent", "Reuse", "Reduce", "Recycle"]} />
        </div>
      </section>
      <Pagination pagination={data.pagination} />
    </>
  );
};

export default RecyclePage;
