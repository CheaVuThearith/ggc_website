import React from 'react';
import { FaMapMarkerAlt, FaClock, FaRecycle } from 'react-icons/fa';

type Props = { title: string; location: string; hours: string; material: string; opennow: boolean }
const RecyclingFacilitiesCard = ({ title, location, hours, material, opennow }: Props) => {
  return (
    <div className="border rounded-lg shadow-md w-96 p-6 relative">
      {opennow && <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm absolute top-2 left-2">Open now!</span>}
      <div className="flex flex-col items-center mb-2">
        <img src="assets/facilities images/altruistic traveller.png" alt={title} className="mb-4" />
        <div className="text-center">
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <div className="flex items-center text-gray-600 mb-1">
            <FaMapMarkerAlt className="mr-1" />
            <p>{location}</p>
          </div>
          <div className="flex items-center text-gray-600 mb-1">
            <FaClock className="mr-1" />
            <p>{hours}</p>
          </div>
          <div className="flex items-center text-gray-600">
            <FaRecycle className="mr-1" />
            <p>{material}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecyclingFacilitiesCard;
