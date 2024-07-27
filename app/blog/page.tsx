import BlogPost from "@/components/BlogPage/BlogPost";
import GreenPost from "@/components/BlogPage/GreenPost";
import SearchBar from "@/components/BlogPage/SearchBar";

type Props = {};
// make responsive
const BlogPage = (props: Props) => {
  return (
    <>
      <section className="flex flex-col gap-y-12">
        <GreenPost title="" subtitle="" image="" />
        {/* bottom section */}
        <div className="flex flex-row justify-between gap-x-16">
          {/* blog posts */}
          <div className="flex max-w-5xl shrink-0 grow flex-row flex-wrap items-center justify-center gap-12">
            <BlogPost
              description="26 july 2028"
              title="Recycle"
              subtitle="Freetext"
              image="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
            />
            <BlogPost
              description="26 july 2025"
              title="Recycle"
              subtitle="Freetext"
              image="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
            />
            <BlogPost
              description="26 july 2028"
              title="Recycle"
              subtitle="Freetext"
              image="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
            />
            <BlogPost
              description="26 july 2025"
              title="Recycle"
              subtitle="Freetext"
              image="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
            />
            <BlogPost
              description="26 july 2028"
              title="Recycle"
              subtitle="Freetext"
              image="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
            />
            <BlogPost
              description="26 july 2025"
              title="Recycle"
              subtitle="Freetext"
              image="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
            />
          </div>
          <SearchBar />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
