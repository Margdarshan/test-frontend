import React from 'react';

const Learning = () => {
  return (
    <div className="bg-[#F3F2FF]">
      <div className="flex flex-col  items-center space-y-4 pt-6 ">
        <h3 className="text-[#6941C6] font-inter font-semibold text-[16px]">
          Learning
        </h3>
        <h1 className="text-[#101828] font-manrope font-semibold text-[30px]">
          Boost Your Achievement
        </h1>
        <p className="font-inter text-[18px] text-[#667085] lg:w-[50%] pl-3 lg:pl-0 text-center">
          Enhance your exam prep with our comprehensive study material and
          diverse learning tools for success.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-between pr-12 mt-12 pb-7">
        <div className=" flex flex-col pl-6 lg:pl-28 space-y-16 ">
          <div className="flex flex-col space-y-4">
            <p className="text-[#7852FE] text-[30px] font-manrope font-semibold ">
              Expert Mentorship
            </p>
            <p className="text-[#667085] font-inter text-[16px]">
              Ensure balance by categorizing colleges based on multiple factors.
            </p>
          </div>
          <div className="flex flex-col space-y-7">
            <p className="text-[#7852FE] text-[30px] font-manrope font-semibold ">
              Comprehensive Test
            </p>
            <p className="text-[#171717] font-inter text-[16px] w-[90%]">
              Selections to be customized to fit aspirations and compare with
              other applicants.
            </p>
            <p className="text-[#667085] font-inter text-[16px] w-[80%]">
              Maximize study time with our comprehensive learning package for
              confident preparation and excellence.
            </p>
          </div>
          <div className="border-2 border-[#7852FE] py-3  px-3 w-fit  text-center rounded-xl">
            <button className="text-[#4E18CD] font-inter text-[16px]">
              Visit Mentorship
            </button>
          </div>
        </div>
        <div className="mt-8 ml-6 lg:mt-0 lg:mr-0">
          <img
            src="laptop.png"
            className="h-[450px] sm:h-[560px] md:w-[600px] lg:h-[560px] rounded-lg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Learning;
