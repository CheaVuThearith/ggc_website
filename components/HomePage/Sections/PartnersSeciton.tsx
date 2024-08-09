import React from "react";
import Section from "../../Section";
import PartnersCard from "../PartnersCard";

const PartnersSeciton = () => {
  return (
    <Section title="Our Partners">
      <div className="flex flex-wrap items-center justify-center">
        <PartnersCard name="Glean Asia" image="/assets/partners/glean.svg" />
      </div>
    </Section>
  );
};

export default PartnersSeciton;
