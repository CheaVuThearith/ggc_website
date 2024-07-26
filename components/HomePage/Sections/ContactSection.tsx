import React from "react";
import Section from "../../Section";
import ContactCard from "../ContactCard";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <Section title="Contact Us">
      <div className="flex items-center justify-center">
        <ContactCard />
      </div>
    </Section>
  );
};

export default ContactSection;
