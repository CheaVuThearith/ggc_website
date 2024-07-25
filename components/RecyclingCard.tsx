import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  subtitle: string;
};

const RecyclingCard = ({ image, title, subtitle }: Props) => {
  return (
    <div className="flex max-w-fit flex-col gap-y-5 justify-center items-center">
      <Image src={image} width={400} height={400} alt={image} />
      {/* text */}
      <div className="flex flex-col gap-y-1">
        <h2 className="text-primary text-center text-2xl">{title}</h2>
        <p className="text-center">{subtitle}</p>
      </div>
      {/* button */}
      <button className="bg-primary max-w-fit -mt-2 px-12 text-white py-2 font-bold rounded-md">
        Visit
      </button>
    </div>
  );
};

export default RecyclingCard;
