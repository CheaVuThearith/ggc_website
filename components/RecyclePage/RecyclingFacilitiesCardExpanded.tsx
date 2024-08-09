import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { FaFacebookSquare, FaMapMarkerAlt, FaRecycle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

type Props = {
  iframe: string;
  image: string;
  title: string;
  contact: { phone: string; email: string };
  typesOfWaste: string[];
  startHour: Date;
  endHour: Date;
  location: string;
  links: { [key: string]: string };
  layoutId: string;
  onClick: () => void;
  description: string;
};

const RecyclingFacilitiesCardExpanded = ({
  iframe,
  onClick,
  image,
  title,
  contact,
  typesOfWaste,
  startHour,
  endHour,
  location,
  links,
  description,
  layoutId,
}: Props) => {
  return (
    <AnimatePresence>
      {/* bg */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      >
        <div onClick={onClick} className="fixed inset-0"></div>

        {/* card */}
        <motion.div
          layoutId={layoutId}
          className="relative z-10 mx-4 flex max-w-full flex-wrap items-center justify-center gap-x-24 gap-y-8 rounded-lg bg-white p-4 py-8 shadow-lg xl:max-w-screen-2xl xl:flex-nowrap xl:justify-between xl:px-24 xl:py-16"
        >
          <XMarkIcon
            onClick={onClick}
            className="absolute right-4 top-4 size-8 cursor-pointer fill-gray-700 hover:fill-black"
          />
          {/* map */}
          <motion.iframe
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            src={iframe}
            className="rounded-lg xl:shrink-0"
            width={500}
            height={425}
          />
          <div className="flex flex-col gap-y-6">
            {/* title and logo */}
            <div className="flex items-center gap-x-4">
              {/* image div */}
              <motion.div className="" layoutId={layoutId + "image"}>
                <Image
                  width={150}
                  height={150}
                  className="shrink-0"
                  src={image}
                  alt={image}
                />
              </motion.div>
              <div className="flex grow flex-col justify-center">
                <motion.h2
                  layoutId={layoutId + "title"}
                  layout="position"
                  className="text-xl font-bold"
                >
                  {title}
                </motion.h2>
                <p className="line-clamp-2 overflow-hidden xl:line-clamp-3">
                  {description}
                </p>
              </div>
            </div>
            {/* extra info */}
            <motion.div
              layoutId={layoutId + "info"}
              layout="position"
              className="flex flex-col gap-y-2"
            >
              <p className="flex flex-row items-center gap-x-2 text-lg font-bold">
                <FaMapMarkerAlt className="size-4" />
                Location:<span className="font-normal">{location}</span>
              </p>
              <p className="flex flex-row items-center gap-x-2 text-lg font-bold">
                <ClockIcon className="size-4" />
                Work Hours:{" "}
                <span className="font-normal">
                  {new Date(startHour).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  -{" "}
                  {new Date(endHour).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </p>
              <p className="flex flex-row items-center gap-x-2 text-lg font-bold">
                <FaRecycle className="size-4 shrink-0" />
                Waste:
                <span className="line-clamp-1 font-normal">
                  {typesOfWaste
                    .map(
                      (waste) => waste.charAt(0).toUpperCase() + waste.slice(1)
                    )
                    .join(", ")}
                </span>
              </p>
              <p className="flex flex-row items-center gap-x-2 text-lg font-bold">
                <PhoneIcon className="size-4" />
                Phone Number:{" "}
                <span className="font-normal">{contact.phone}</span>
              </p>
              <p className="flex flex-row items-center gap-x-2 text-lg font-bold">
                <EnvelopeIcon className="size-4" />
                Email: <span className="font-normal">{contact.email}</span>
              </p>
            </motion.div>
            {/* links */}
            <div className="flex flex-row items-center justify-end gap-x-4">
              <a href={links.facebook}>
                <FaFacebookSquare className="size-10 rounded-xl fill-gray-700 hover:fill-black" />
              </a>
              <a href={links.instagram}>
                <RiInstagramFill className="size-[2.8em] fill-gray-700 hover:fill-black" />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RecyclingFacilitiesCardExpanded;
