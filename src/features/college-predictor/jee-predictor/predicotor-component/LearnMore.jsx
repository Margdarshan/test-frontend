import React from 'react';
import { PiRanking } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";
import { BsGenderMale } from "react-icons/bs";
import { GoHome } from "react-icons/go";


const learnData = [
  {
    icon: <PiRanking />,
    title: "Rank or Percentile",
    desc : "One of the main factors is how well you did on the JEE Main test."

  },
  {
    icon: <BiCategoryAlt />,
    title: "Category",
    desc : "Various reservation categories have varying cut-offs, the reservation category (General, OBC, SC, ST, EWS, etc.) is important."

  },
  {
    icon: <BsGenderMale />,
    title: "Gender",
    desc : "Various reservation categories have varying cut-offs, the reservation category (General, OBC, SC, ST, EWS, etc.) is important."

  },
  {
    icon: <GoHome />,
    title: "Home state",
    desc : "There are home state quotas for certain colleges. These quotas set aside a specific proportion of seats for applicants from the state in which the institute is situated."

  },
]
const LearnMoreCard = () => {
 

  return (
    <div className='bg-[#F1FCF5] py-10'>
      <div className='flex flex-col items-center'>
        <div className="flex justify-center pb-4">
          <div className="bg-[#F9F5FF] px-4 py-1 rounded-full text-center">
            <a href="/frontend" className="text-[#6941C6] text-sm font-inter font-semibold">
              Usage
            </a>
          </div>
        </div>
        <h1 className='mb-4 font-manrope text-[30px] font-semibold text-[#101828] text-center'>How to use College Predictor</h1>
        <p className='font-inter text-[16px] text-[#667085] text-center px-4 lg:px-0 lg:w-[52%]'>The College Predictor uses a sophisticated algorithm to provide a list of colleges and branches you might have a chance to get into based on your inputs.</p>
      </div>
      <div className='flex flex-col space-y-6 lg:space-y-0 lg:flex-row mt-20 '>
        {learnData.map((item, index) => (
          <div key={index} className='flex flex-col lg:w-[25%] space-y-2 items-center'>
            <div className='p-3 rounded-full bg-[#F9F5FF]'>
              <div className='p-2 rounded-full bg-[#F4EBFF] text-[#7F56D9]'>
                {item.icon}
              </div>
            </div>
            <h1 className='font-inter text-[18px] font-semibold text-[#101828]'>{item.title}</h1>
            <p className='font-inter text-[16px] text-center text-[#667085] w-[70%]'>{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};
export default LearnMoreCard;
