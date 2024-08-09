import React from "react";
import Section from "../../Section";
import MissionCard from "../MissionCard";

const missions = [
  {
    title: "Discover Recycling Facilities",
    subtitle: "Explore Local Recycling Centers and Sustainable Practices",
    icon: "/assets/icons/recycle_location.png",
    className: "size-20 ",
  },
  {
    title: "Commitment to Sustainability",
    subtitle: "Promoting recycling and sustainability for a greener future",
    icon: "/assets/icons/earth_eco.png",
    className: "size-24 ",
  },
  {
    title: "Awareness",
    subtitle: "Join our eco-community for tips on eco-friendly living",
    icon: "/assets/icons/earth_leaf.png",
    className: "size-20 ",
  },
  {
    title: "Small Action",
    subtitle:
      "Every action counts. Explore our environmental impact initiatives",
    icon: "/assets/icons/eco_awareness.png",
    className: "size-20 ",
  },
];

const MissionSection = () => {
  return (
    <Section title="Our Mission">
      <div className="flex flex-wrap items-stretch justify-center gap-x-4 gap-y-12">
        {missions.map((mission, index) => (
          <MissionCard
            key={index}
            title={mission.title}
            subtitle={mission.subtitle}
            icon={mission.icon}
            imgClass={mission.className}
          />
        ))}
      </div>
    </Section>
  );
};

export default MissionSection;
