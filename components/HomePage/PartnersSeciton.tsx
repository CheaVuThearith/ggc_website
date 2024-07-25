import React from "react";
import Section from "../Section";
import PartnersCard from "../PartnersCard";

type Props = {};

const PartnersSeciton = (props: Props) => {
  return (
    <Section title="Our Partners">
        <div className="flex flex-wrap justify-center items-center">
      <PartnersCard name="Glean Asia" image="/assets/glean.svg" />
        </div>
    </Section>
  );
};

export default PartnersSeciton;
