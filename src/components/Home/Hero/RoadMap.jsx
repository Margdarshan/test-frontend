import React from 'react';
import { TbTargetArrow } from 'react-icons/tb';
import { PiBrainFill } from 'react-icons/pi';
import { HiCheckCircle } from 'react-icons/hi2';

const cardData = [
  {
    title: 'Aim',
    icon: <TbTargetArrow />,
    description:
      'Help students achieve success by unlocking the secret to winning',
  },
  {
    title: 'Plan',
    icon: <PiBrainFill />,
    description: 'Provide personalized solutions for JEE Main and JEE Advanced',
  },
  {
    title: 'Achieve',
    icon: <HiCheckCircle />,
    description:
      'Guide students on the perfect trajectory towards their dream institution',
  },
];

const RoadMap = () => (
  <div className="mt-16 mb-8">
    <div className="flex justify-center mb-6">
      <p className="font-semibold text-[17px] text-[#4e18cd] font-inter">
        Perfect Roadmap for you
      </p>
    </div>

    <div className="flex flex-col items-center space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4 px-2 xl:px-0">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="border border-[#4e18cd] sm:max-w-[450px]  xl:max-w-none xl:w-[31%] bg-white pt-2 px-3 pb-[14px] rounded-lg flex space-x-3 shadow-lg"
        >
          <div>
            <div className="text-[#4E18CD] text-xl mt-2">{card.icon}</div>
          </div>
          <div className="flex flex-col space-y-[6px]">
            <p className="text-[#4E18CD] text-[22px]">{card.title}</p>
            <p className="text-[#777] text-[14px]">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RoadMap;
