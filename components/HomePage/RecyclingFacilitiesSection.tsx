import React from "react";
import Section from "../Section";
import RecyclingCard from "../RecyclingCard";

type Props = {};

const showcase = [
  {
    title: "ECO BUSINESS CAMBODIA",
    subtitle: "Business Recycle",
    image: "/assets/ecb.png",
  },
  {
    title: "VIRAK RECYCLE",
    subtitle: "Geography Integration Recycle",
    image: "/assets/virak recycle.png",
  },
  {
    title: "The Altruistic Traveller",
    subtitle: "Trash to treasure",
    image: "/assets/altruistic traveller.png",
  },
];

const RecyclingFacilitiesSection = (props: Props) => {
  return (
    <Section title="Recycling Facilities">
      <div className="flex flex-col gap-y-12 gap-x-8 items-center xl:items-stretch justify-center xl:flex-row">
        {showcase.map((item, index) => (
          <RecyclingCard
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        ))}
      </div>
    </Section>
  );
};

export default RecyclingFacilitiesSection;
