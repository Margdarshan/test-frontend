/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

const Usage = () => {
  return (
    <div className="">
      <div className="flex flex-col  items-center space-y-4 mt-12 mb-12">
        <h3 className="text-[#6941C6] font-inter font-semibold text-[16px]">
          Usage
        </h3>
        <h1 className="text-[#101828] font-manrope font-semibold text-[30px]">
          How to use
        </h1>
        <p className="font-inter text-[18px] text-[#667085] w-[50%] text-center">
          Lorem ipsum dolor sit amet consectetur. Fringilla quisque enim
          fermentum nec. Duis lobortis tincidunt at sed. Vestibulum.
        </p>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:w-[50%] lg:space-x-4 space-y-4 lg:space-y-0 mx-6 sm:mx-9 md:mx-16 lg:mx-0">
          <div className=" bg-[#DFD6F4] lg:w-[50%] flex space-x-4 rounded-xl pt-4 px-4">
            <div>
              <FaRegCheckCircle className="text-[#2563EB] w-[21px] h-[21px] pt-1 font-bold" />
            </div>
            <p className="font-inter  text-[16px] text-[#333333]">
              <span className="text-[#333] font-semibold">Sign Up: </span>Visit
              our website and sign up for a free account to gain access to our
              study material and other resources.
            </p>
          </div>
          <div className=" bg-[#F7D8D6] lg:w-[50%] flex space-x-3 rounded-xl pt-4 px-3">
            <div>
              <FaRegCheckCircle className="text-[#2563EB] w-[21px] h-[21px] pt-1 font-bold" />
            </div>
            <p className="font-inter  text-[16px] text-[#333333]">
              <span className="text-[#252525] font-semibold">
                Product Finder:{' '}
              </span>
              Find study materials easily. Browse our catalog, filter by
              subject, topic, or exam, and download what you need.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:w-[50%] lg:space-x-4 space-y-4 lg:space-y-0 mx-6 sm:mx-9 md:mx-16 lg:mx-0">
          <div className=" bg-[#FAE395] lg:w-[50%] flex space-x-3 rounded-xl py-4 px-4">
            <div>
              <FaRegCheckCircle className="text-[#2563EB] w-[21px] h-[21px] pt-1 font-bold" />
            </div>
            <p className="font-inter  text-[16px] text-[#333333]">
              <span className="text-[#333] font-semibold">
                Download Materials:{' '}
              </span>{' '}
              Download materials with ease. Click to download and access
              anytime, anywhere.
            </p>
          </div>
          <div className=" bg-[#CAF2DE] lg:w-[50%] flex space-x-3 rounded-xl py-4 px-3">
            <div>
              <FaRegCheckCircle className="text-[#2563EB] w-[21px] h-[21px] pt-1 font-bold" />
            </div>
            <p className="font-inter  text-[16px] text-[#333333]">
              <span className="text-[#252525] font-semibold">
                Happy Studying!
              </span>{' '}
              Study confidently with everything you need. We're here to support
              your success!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usage;
