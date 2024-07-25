import React, { ReactNode } from "react";

type Props = { title: string; children: ReactNode };

const Section = ({ title, children }: Props) => {
  return (
    <section className="flex flex-col">
      <h2 className="text-primary mb-10 font-accent flex w-full items-center justify-center text-center text-4xl font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
