import React from 'react';

const Advertisement = ({ message = 'Advertisement', className }) => {
  return (
    <div className={`bg-white p-4 rounded-lg ${className}`}>
      <div className="bg-gray-200 h-80 rounded-lg text-center flex items-center justify-center">
        {message}
      </div>
    </div>
  );
};

export default Advertisement;
