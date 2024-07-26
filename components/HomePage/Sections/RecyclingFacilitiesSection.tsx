import React from "react";
import Section from "../../Section";
import RecyclingCard from "../RecyclingCard";

type Props = {};

const showcase = [
  {
    title: "ECO BUSINESS CAMBODIA",
    subtitle: "Business Recycle",
    image: "/assets/facilities images/ecb.png",
  },
  {
    title: "VIRAK RECYCLE",
    subtitle: "Geography Integration Recycle",
    image: "/assets/facilities images/virak recycle.png",
  },
  {
    title: "The Altruistic Traveller",
    subtitle: "Trash to treasure",
    image: "/assets/facilities images/altruistic traveller.png",
  },
];

const RecyclingFacilitiesSection = (props: Props) => {
  return (
    <Section title="Recycling Facilities">
      <div className="flex flex-col items-center justify-center gap-x-8 gap-y-12 xl:flex-row xl:items-stretch">
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
