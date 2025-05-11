import React from 'react';
import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const ArrowButton = ({ btnName, buttonLink }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <div className="flex flex-wrap items-center">
      {btnName.map((btn, index) => (
        <Link to={buttonLink[index]} key={btn} onClick={scrollToTop}>
          <button 
            className="flex items-center justify-between border border-[#4E18CD] text-[#4E18CD] whitespace-nowrap font-manrope text-[12px] lg:text-[14px]  leading-normal capitalize rounded-full mr-2 my-1 pl-4 pr-1 py-1 space-x-4 transition-all duration-200 ease-in-out hover:bg-[#4E18CD] hover:text-white"
            >
            <div>{btn}</div>
            <div className="">
              <ArrowRightIcon className="w-6 h-6  bg-[#4E18CD]  text-white  rounded-full p-1 transition-transform duration-200" />
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
};

ArrowButton.propTypes = {
  btnName: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ArrowButton;
