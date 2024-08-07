"use client";
import React, { useState } from "react";
import RecyclingFacilitiesCard from "./RecyclingFacilitiesCard";
import { AnimatePresence } from "framer-motion";
import RecyclingFacilitiesCardExpanded from "./RecyclingFacilitiesCardExpanded";

type Props = { data: IRecyclingFacilitiesResponse };

const FacilitiesContainer = ({ data }: Props) => {
  const [selectedId, setSelectedId] = useState<null | string>(null);
  return (
    <div className="flex max-w-5xl shrink-0 grow min-h-[520px] flex-row flex-wrap items-center justify-center gap-12">
      {data.data.map((facility, index) => (
        <RecyclingFacilitiesCard
          onClick={() => setSelectedId(index.toString())}
          endHour={facility.endHour}
          layoutId={index.toString()}
          startHour={facility.startHour}
          typesOfWaste={facility.typesOfWaste}
          key={index}
          image=""
          location={facility.location}
          title={facility.name}
        />
      ))}
      <AnimatePresence>
        {selectedId && (
          <RecyclingFacilitiesCardExpanded
            onClick={() => setSelectedId(null)}
            layoutId={selectedId}
            contact={data.data[parseInt(selectedId)].contact}
            // contact={{ phone: "123-456-7890", email: "" }}
            description={data.data[parseInt(selectedId)].description}
            endHour={data.data[parseInt(selectedId)].endHour}
            iframe={data.data[parseInt(selectedId)].iframe}
            image={data.data[parseInt(selectedId)].image}
            // image=""
            links={data.data[parseInt(selectedId)].links}
            location={data.data[parseInt(selectedId)].location}
            startHour={data.data[parseInt(selectedId)].startHour}
            title={data.data[parseInt(selectedId)].name}
            typesOfWaste={data.data[parseInt(selectedId)].typesOfWaste}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default FacilitiesContainer;
