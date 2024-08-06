"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FaMapMarkerAlt, FaClock, FaRecycle } from "react-icons/fa";
type Props = {
  title: string;
  location: string;
  typesOfWaste: string[];
  startHour: Date;
  endHour: Date;
  image: string;
  onClick: () => void;
  layoutId: string;
};
const RecyclingFacilitiesCard = ({
  onClick,
  title,
  location,
  typesOfWaste,
  startHour,
  endHour,
  image,
  layoutId,
}: Props) => {
  const openStatus = false;
  return (
    <AnimatePresence>
      <motion.div
        onClick={onClick}
        className="relative rounded-lg border p-6 shadow-md"
        layoutId={layoutId}
      >
        {/* open status */}
        <span
          className={`${openStatus ? "bg-primary" : "bg-red-600"} absolute left-2 top-2 rounded-full px-2 py-1 text-sm text-white`}
        >
          {openStatus ? "Open Now!" : "Closed!"}
        </span>

        <div className="flex flex-col gap-x-6 gap-y-3">
          {/* img */}
          <motion.div layoutId={layoutId + "image"} layout="position">
            <Image
              src={image}
              alt={title}
              height={300}
              width={350}
              style={{
                objectFit: "cover",
                maxWidth: "350px",
                maxHeight: "300px",
              }}
              className="rounded-md object-cover"
            />
          </motion.div>

          {/* text info */}
          <div className="flex flex-col gap-y-4">
            <motion.h2
              layoutId={layoutId + "title"}
              layout="position"
              className="text-xl font-bold"
            >
              {title}
            </motion.h2>
            {/* extra info */}
            <motion.div
              layoutId={layoutId + "info"}
              layout="position"
              className="flex flex-col gap-y-2"
            >
              <div className="flex items-center gap-x-2 text-gray-600">
                <FaMapMarkerAlt className="" />
                <p>{location}</p>
              </div>
              <div className="flex items-center gap-x-2 text-gray-600">
                <FaClock className="" />
                <p>
                  {new Date(startHour).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}{" "}
                  -{" "}
                  {new Date(endHour).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
              <div className="flex items-center gap-x-2 text-gray-600">
                <FaRecycle className="" />
                <p>
                  {typesOfWaste
                    .map(
                      (waste) => waste.charAt(0).toUpperCase() + waste.slice(1)
                    )
                    .join(", ")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RecyclingFacilitiesCard;
