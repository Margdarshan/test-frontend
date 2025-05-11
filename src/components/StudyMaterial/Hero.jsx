/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Hero = () => {
  return (
    <div className="m-0 p-0 w-full overflow-x-hidden xl:px-24 bg-custom-gradient  max-w-full px-4 pt-12 pb-6 ">
      <div className="flex flex-col items-center mt-8 space-y-3 px-12 py-[4px] ">
        <div className="text-[#4E18CD] text-[35px] font-semibold font-manrope text-center">
          The Ultimate IIT-JEE Study Kit
        </div>
        <div className=" hidden md:block text-[#333] text-[15px] font-inter w-[70%] text-center">
          Master the IIT-JEE with comprehensive study materials, structured
          practice, and strategic revision to ace one of India's toughest
          engineering entrance exams
        </div>
      </div>
      <div className="flex flex-col space-y-7">
        <div className="flex flex-col space-y-4  md:flex-row md:space-x-[44px] md:space-y-0 justify-center mt-12 items-center">
          <div className=" px-4   py-[4px] rounded-xl text-center bg-[#DFD6F4] w-fit ">
            <a href="/frontend" className="text-[#6941C6] font-inter ">
              Comprehensive Formula Books
            </a>
          </div>
          <div className="   px-4   py-[4px] rounded-xl text-center bg-[#CAF2DE] w-fit">
            <a href="/frontend" className="text-[#00692A] font-inter ">
              Revision Notes for Last Minute Preparation
            </a>
          </div>
          <div className="md:hidden xl:block px-4   py-[4px] rounded-xl text-center bg-[#F7D8D6] w-fit">
            <a href="/frontend" className="text-[#C54330] font-inter ">
              Detailed Topic wise Notes
            </a>
          </div>
        </div>
        <div className="flex flex-col space-y-4  md:flex-row justify-center items-center md:space-x-[44px] md:space-y-0 ">
          <div className=" px-4   py-[4px] rounded-xl text-center bg-[#D3DCFB] w-fit">
            <a href="/frontend" className="text-[#3049A2] font-inter ">
              Textbooks and Practice Notebooks
            </a>
          </div>
          <div className=" px-4   py-[4px] rounded-xl text-center bg-[#FAE395] w-fit">
            <a href="/frontend" className="text-[#836600] font-inter ">
              Previous Year Topic-Wise Questions{' '}
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:space-x-2 mt-16 justify-center items-center mb-7 ml-3 sm:ml-9 text-center md:ml-0">
        <div className="hidden md:block w-[30%]">
          <img
            className="w-[365px] h-[322px] rounded-xl"
            src="https://i.ibb.co/hLQXR0M/two-girls.jpg"
            alt=""
          />
        </div>
        <div className="w-[90%] md:w-[30%]">
          <img
            className="w-[365px] h-[322px] rounded-xl"
            src="https://i.ibb.co/G02Jr5R/a-boy-with-bag-book.jpg"
            alt=""
          />
        </div>
        <div className="hidden md:block w-[30%]">
          <img
            className="w-[365px] h-[322px] rounded-xl"
            src="https://i.ibb.co/kgyRK0j/boy-girl.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
