import React, { useState } from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const jobs = [
  {
    team: 'Design',
    title: 'Junior UI/UX Designer',
    location: 'Remote India',
    salary: '$30K-60K /Year',
  },
  {
    team: 'Design',
    title: 'Junior UI/UX Designer',
    location: 'Mumbai India',
    salary: '$30K-60K /Year',
  },
  {
    team: 'Sales',
    title: 'Account Executive',
    location: 'Remote India',
    salary: '$30K-60K /Year',
  },
];

const OpenRole = () => {
  // State to manage the dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-6 sm:mx-44">
      <div className="flex justify-center text-[#4E18CD] font-manrope text-[27px] font-semibold">
        Open Roles
      </div>
      <div className="flex flex-col space-y-3 sm:flex-row mt-8 sm:space-x-7 sm:space-y-0">
        <div className="sm:flex sm:justify-center sm:items-center text-[21px] text-[#020D2B] font-manrope sm:w-[10%]">
          Filter By
        </div>

        {/* Dropdown Button */}
        <div className="sm:w-[45%]">
          <button
            onClick={toggleDropdown} // Use the toggleDropdown function
            className="flex items-center justify-between w-full p-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100"
          >
            <span className="flex items-center">
              <HiOutlineLocationMarker className="text-[#4E18CD] mr-2 ml-2 text-[22px]" />
              <span className="text-black font-semibold">By Location</span>
            </span>
            <span className="text-gray-500">
              {/* Arrow down icon */}
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 8a1 1 0 01.707.293l3 3a1 1 0 11-1.414 1.414L10 10.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 8z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute mt-2 w-fit bg-white shadow-lg rounded-lg border">
              <ul className="p-2">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Remote India
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Mumbai, India
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="sm:w-[45%]">
          <button
            onClick={toggleDropdown} // Use the toggleDropdown function
            className="flex items-center justify-between w-full p-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100"
          >
            <span className="flex items-center">
              <HiOutlineLocationMarker className="text-[#4E18CD] mr-2 ml-2 text-[22px]" />
              <span className="text-black font-semibold">By Team</span>
            </span>
            <span className="text-gray-500">
              {/* Arrow down icon */}
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 111.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 8a1 1 0 01.707.293l3 3a1 1 0 11-1.414 1.414L10 10.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 8z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute mt-2 w-fit bg-white shadow-lg rounded-lg border">
              <ul className="p-2">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Remote India
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Mumbai, India
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="mt-6 ml-4">
        {jobs.map((job, index) => (
          <div key={index} className="ml-5 mb-4">
            <div className="bg-white border border-[#E5E5E5] flex justify-between px-10 py-6 rounded-xl ">
              <div className="flex flex-col space-y-2 w-[40%]">
                <h1 className="text-[16px] text-[#979797] font-manrope">
                  {job.team}
                </h1>
                <h1 className="text-[18px] text-[#020D2B] font-manrope font-semibold">
                  {job.title}
                </h1>
              </div>
              <div className="flex flex-col space-y-2 w-[30%]">
                <h1 className="text-[16px] text-[#979797] font-manrope">
                  Location
                </h1>
                <h1 className="text-[18px] text-[#020D2B] font-manrope font-semibold">
                  {job.location}
                </h1>
              </div>
              <div className="flex flex-col  justify-center items-center space-y-2 w-[20%]">
                <h1 className="text-[#020D2B] font-semibold">
                  {job.salary.split(' ')[0]}{' '}
                  <span className="text-[#7D7D7D] font-normal">
                    {job.salary.split(' ')[1]}
                  </span>
                </h1>
                <button className="bg-[#4E18CD] px-6 py-1 rounded-2xl text-white">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenRole;
