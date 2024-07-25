import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

const RecyclingCard = ({ image, title, subtitle }: Props) => {
  return (
    <div className="flex max-w-fit flex-col items-center justify-center gap-y-5">
      <Image src={image} width={400}  height={400} alt={image} />
      {/* text */}
      <div className="flex flex-col gap-y-1">
        <h2 className="text-primary font-bold text-center text-2xl">{title}</h2>
        <p className="text-center">{subtitle}</p>
      </div>
      {/* button */}
      <button className="bg-primary -mt-2 max-w-fit rounded-md px-12 py-2 font-bold text-white">
        Visit
      </button>
    </div>
  );
};

export default RecyclingCard;
