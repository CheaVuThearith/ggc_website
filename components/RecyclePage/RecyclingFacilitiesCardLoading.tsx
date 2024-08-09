import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const RecyclingFacilitiesCardLoading = () => {
  return (
    <div className="relative max-w-fit rounded-lg border bg-white p-6 shadow-md">
      <div className="flex max-w-[350px] flex-col gap-x-6 gap-y-3">
        {/* img */}
        <div className="loading h-[300px] w-[350px] rounded-md"></div>

        {/* text info */}
        <div className="flex flex-col gap-y-4">
          <div className="loading h-6 w-full"></div>
          {/* extra info */}
          <div className="flex flex-col gap-y-2">
            <div className="loading h-4 w-full"></div>
            <div className="loading h-4 w-full"></div>
            <div className="loading h-4 w-full"></div>
            <div className="loading h-4 w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingFacilitiesCardLoading;
