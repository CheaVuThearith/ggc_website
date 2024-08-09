import React from "react";
import Section from "../../Section";
import ContactCard from "../ContactCard";

const ContactSection = () => {
  return (
    <Section title="Contact Us">
      <div className="flex items-center justify-center">
        <ContactCard />
      </div>
    </Section>
  );
};

export default ContactSection;
