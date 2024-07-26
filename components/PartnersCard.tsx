import Image from "next/image";
import React from "react";

type Props = { image: string; name: string };

const PartnersCard = ({ image, name }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center max-w-fit gap-y-4">
      <Image src={image} width={170} height={170} alt={image} />
      <h2 className="font-bold text-primary text-2xl">{name}</h2>
    </div>
  );
};

export default PartnersCard;
