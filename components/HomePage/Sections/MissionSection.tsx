import React from "react";
import Section from "../../Section";
import MissionCard from "../MissionCard";
import recycle_location from "assets/icons/recycle_location.svg";

type Props = {};

const missions = [
  {
    title: "Discover Recycling Facilities",
    subtitle: "Explore Local Recycling Centers and Sustainable Practices",
    icon: "assets/icons/recycle_location.svg",
  },
  {
    title: "Commitment to Sustainability",
    subtitle: "Promoting recycling and sustainability for a greener future",
    icon: "",
  },
  {
    title: "Awareness",
    subtitle: "Join our eco-community for tips on eco-friendly living",
    icon: "",
  },
  {
    title: "Small Action",
    subtitle:
      "Every action counts. Explore our environmental impact initiatives",
    icon: "",
  },
];

const MissionSection = (props: Props) => {
  return (
    <Section title="Our Mission">
      <div className="flex flex-wrap items-stretch justify-center gap-x-4 gap-y-12">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            subtitle={mission.subtitle}
            icon={mission.icon}
          />
        ))}
      </div>
    </Section>
  );
};

export default MissionSection;
