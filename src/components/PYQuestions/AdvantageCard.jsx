import React from 'react';

const AdvantageCard = ({ image, header, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 text-center sm:text-left">
      <img
        src={image}
        alt={header}
        className="w-full h-40 sm:h-32 object-cover rounded-lg mb-4"
      />
      what
      <div>
        <h3 className="text-[#4E18CD] font-manrope text-lg sm:text-xl font-semibold mb-2">
          {header}
        </h3>
        <p className="text-[#252525] font-manrope text-sm sm:text-base leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AdvantageCard;
