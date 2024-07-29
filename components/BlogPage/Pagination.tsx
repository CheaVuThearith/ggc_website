import React from "react";

type Props = {};

const Pagination = (props: Props) => {
  return (
    <div className="w-full flex justify-between">
      <button className=" w-24 h-10 rounded-md text-center border border-black ">Prev</button>
      <ul className=" flex w-full items-center justify-center gap-x-12 text-xl">
        {Array.from({ length: 5 }, (_, i) => i).map((_, index) => (
          <li key={index}>{index + 1}</li>
        ))}
      </ul>
      <button className=" w-24 h-10 rounded-md text-center border border-black ">Next</button>
    </div>
  );
};

export default Pagination;
