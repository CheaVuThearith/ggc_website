import React, { ReactNode } from "react";
type props = { title: string; subtitle: string; icon: ReactNode };
const MissionCard = ({ title, subtitle, icon }: props) => {
  return (
    <div className="flex max-w-fit flex-col items-center justify-between rounded-lg bg-white p-6">
      <div className="flex flex-col items-center justify-center gap-y-3">
        {/* circle */}
        <div
          className="flex size-28 items-center justify-center rounded-full bg-white"
          style={{ boxShadow: "0px 1px 7px -3px #20B07C" }}
        >
          {icon}
        </div>
        {/* title */}
        <h2 className="text-primary max-w-64 overflow-hidden text-ellipsis text-center text-xl font-semibold">
          {title}
        </h2>
      </div>
      <p className="mt-3 max-w-64 text-center text-gray-600">{subtitle}</p>
    </div>
  );
};

export default MissionCard;
