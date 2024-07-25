import React from 'react';
type props ={title:string, subtitle:string}
const MissionBox = ({title, subtitle}:props) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-green-100">
        <svg
          xmlns=""
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.5 20h13M5.5 12.5h13M5.5 4.5h13"
          />
        </svg>
      </div>
      <h2 className="text-xl font-semibold text-ellipsis overflow-hidden size-20 text-green-500">{title}</h2>
      <p className="mt-2 text-center text-gray-600">
        {subtitle}
      </p>
    </div>
  );
};

export default MissionBox;
