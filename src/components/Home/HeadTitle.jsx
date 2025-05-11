import React from 'react';
import PropTypes from 'prop-types';

const HeadTitle = ({ heading, number }) => {
  return (
    <div className="flex  items-center mb-4 mt-2">
      <h2 className="text-[#4E18CD] font-inter text-lg lg:text-2xl font-normal capitalize">
        {heading}
      </h2>
      <div className="flex items-center">
        <div className="w-[50px] lg:w-[137px] h-[0.5px] mt-1 ml-3 lg:ml-6  bg-[rgba(78,24,205,0.4)]"></div>
        <span className="text-white  font-lato text-[12px] font-semibold mt-1 px-[10px]  py-1 bg-[#4E18CD] mx-1 rounded-full capitalize">
          {number}
        </span>
      </div>
    </div>
  );
};

HeadTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

export default HeadTitle;
