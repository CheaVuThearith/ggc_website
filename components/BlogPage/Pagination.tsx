"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  pagination: IPagination;
};

const Pagination = ({ pagination }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPage = parseInt(searchParams.get("page") ?? "1");
  const totalPages = pagination.totalPages;
  const rangeSize = 5; // Number of pages to display in the range

  const updatedParams = new URLSearchParams(searchParams.toString());

  // copy params
  for (const [key, value] of searchParams.entries()) {
    updatedParams.set(key, value);
  }

  const handlePageChange = (page: number) => {
    updatedParams.set("page", page.toString());
    router.push(`${pathname}?${updatedParams.toString()}`);
  };

  // Calculate the start and end of the page range
  const startPage = Math.max(1, currentPage - Math.floor(rangeSize / 2));
  const endPage = Math.min(totalPages, startPage + rangeSize - 1);

  // Adjust startPage if endPage is at the end
  const adjustedStartPage = Math.max(1, endPage - rangeSize + 1);

  const pageNumbers = [];
  for (let i = adjustedStartPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex w-full items-center justify-between">
      {/* prev button */}
      <button
        className="h-10 w-fit rounded-md border border-black text-center"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon className="aspect-auto h-10" />
      </button>
      <ul className="flex w-full items-center justify-center gap-x-12 text-xl">
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`h-10 w-10 rounded-md ${page === currentPage ? "bg-primary text-white" : "border border-black"}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      {/* next button */}
      <button
        className="h-10 w-fit rounded-md border border-black text-center"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon className="aspect-auto h-10" />
      </button>
    </div>
  );
};

export default Pagination;
