/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import RoadMap from './RoadMap';
import useNotification from '../../../core/components/Notification/useNotifiaction';
// import home from './home.png'

const MentorComponent = () => {

  return (
    <div className="m-0 w-full overflow-x-hidden xl:px-24 bg-custom-gradient  max-w-full px-4 pt-4  pb-6  ">
      <div className="flex flex-col xl:flex-row mt-[40px] px-12 pt-[4px]">
        <div className="xl:w-[50%] flex flex-col  justify-between">
          <div className="flex flex-col  space-y-4 xl:space-y-8  lg:pt-12 ">
            <div className="text-start bg-[#4E18CD] bg-clip-text text-transparent text-2xl xl:text-4xl font-medium flex flex-col space-y-4">
              <div className="text-center xl:text-start xl:w-[90%] leading-7 xl:leading-[60px]">
                Explore colleges & conquer exams with confidence!
              </div>
            </div>
            <div>
              <p className="hidden xl:text-start xl:block text-[#454545]  font-inter text-lg xl:text-base">
                Master the IIT-JEE with comprehensive study materials, structured
                practice, and strategic revision to ace one of India's toughest
                engineering entrance exams
              </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center xl:justify-start space-x-3">
              <div className="flex -space-x-2  overflow-hidden">
                <img
                  className="inline-block h-12 w-12 xl:h-8 xl:w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 xl:h-8 xl:w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 xl:h-8 xl:w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt=""
                />
                <img
                  className="inline-block h-12 w-12 xl:h-8 xl:w-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center justify-center lg:justify-start">
                  <svg
                    className=" w-6 h-6 xl:w-4 xl:h-4 text-[#FBB040] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-6 h-6 xl:w-4 xl:h-4 text-[#FBB040] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-6 h-6 xl:w-4 xl:h-4 text-[#FBB040] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-6 h-6 xl:w-4 xl:h-4 text-[#FBB040] ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <svg
                    className="w-6 h-6 xl:w-4 xl:h-4 ms-1 text-[#FBB040]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                </div>
                <p className="text-[13px] xl:text-xs pl-1">
                  Trusted by 100K Students
                </p>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex space-x-2">
            <a
              className="flex justify-center mr-8 max-h-16 items-center py-4 text-center border border-[#4E18CD] bg-[#4E18CD] text-white rounded-xl px-8 max-w-56 font-manrope whitespace-nowrap"
              href="/frontend/mentorship"
            >
              Mentorship
            </a>
            <a
              className="flex justify-center items-center  max-h-16 py-4 border-2 border-[#4E18CD] text-[#4E18CD] rounded-xl text-center px-8 font-manrope whitespace-nowrap"
              href="/frontend/collegepredictor"
            >
              College Predictor
            </a>
          </div>
        </div>
        <div className="relative flex justify-center xl:justify-end xl:w-[50%]">
          <div className="hidden xl:block absolute top-[55%] left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
            {' '}
            {/* Increased width and height */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="400"
              viewBox="0 0 319 374"
              fill="none"
              className="w-full h-full"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M188.333 0.1478C230.431 2.90608 255.83 44.4097 281.392 77.4628C302.465 104.71 318.718 134.853 318.997 169.101C319.278 203.639 301.661 233.039 282.896 262.219C255.753 304.429 238.14 362.777 188.333 372.292C135.617 382.364 84.2964 346.24 48.2432 307.051C13.8773 269.696 -5.54834 219.039 1.40039 169.101C7.67701 123.993 47.9449 95.1854 82.0076 64.399C113.855 35.6148 145.2 -2.6783 188.333 0.1478Z"
                fill="#4E18CD"
              />
            </svg>
          </div>
          <div className="xl:hidden absolute inset-0 flex justify-center items-center z-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="199"
              height="181"
              viewBox="0 0 319 374"
              fill="none"
              className="w-[300px] h-[300px] mt-24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M188.333 0.1478C230.431 2.90608 255.83 44.4097 281.392 77.4628C302.465 104.71 318.718 134.853 318.997 169.101C319.278 203.639 301.661 233.039 282.896 262.219C255.753 304.429 238.14 362.777 188.333 372.292C135.617 382.364 84.2964 346.24 48.2432 307.051C13.8773 269.696 -5.54834 219.039 1.40039 169.101C7.67701 123.993 47.9449 95.1854 82.0076 64.399C113.855 35.6148 145.2 -2.6783 188.333 0.1478Z"
                fill="#4E18CD"
              />
            </svg>
          </div>
          <img
            src="https://i.ibb.co/Lt2J4zk/boy-with-book.png"
            className="relative z-10 w-[320px] h-[320px] xl:w-[470px] xl:h-[470px] mt-20 xl:mt-0"
            alt="Boy with books"
          />
        </div>
        <div className=" xl:hidden flex flex-col md:flex-row md:justify-center md:space-x-4 items-center mt-10 ">
          <a
            className="flex justify-center  items-center w-fit  py-4 border-2 border-[#4E18CD] text-[#4E18CD] rounded-xl text-center px-8 font-manrope "
            href="/frontend/collegepredictor"
          >
            College Predictor
          </a>
          <a
            className="flex justify-center mt-4 md:mt-0 w-fit items-center py-4 text-center border border-[#4E18CD] bg-[#4E18CD] text-white rounded-xl px-8 max-w-56 font-manrope "
            href="/frontend/mentorship"
          >
            Mentorship
          </a>
        </div>
      </div>
      <RoadMap />
    </div>
  );
};

export default MentorComponent;
