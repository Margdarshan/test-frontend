import React from 'react';
import { FaRegSadTear } from 'react-icons/fa';

const NoDataFound = ({ message = "No data found", iconSize = 50 }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 rounded-2xl border border-dashed border-blue-300 shadow-md bg-blue-50 text-center transition-all duration-500 animate-fadeIn">
      <FaRegSadTear
        size={iconSize}
        className="text-blue-400 mb-4 animate-bounce-slow"
      />
      <h2 className="text-xl font-semibold text-blue-800">{message}</h2>
    </div>
  );
};

export default NoDataFound;
