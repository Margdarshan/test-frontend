import React from 'react';
import care from './icons/care.png';
import health from './icons/health.png';
import meet from './icons/meet.png';
import paid from './icons/paid.png';
import paidLeave from './icons/paidLeave.png';
import work from './icons/work.png';
import OpenRole from './OpenRole.jsx';
import NewsLetter from '../Home/NewsLetter.jsx';
import MetaTitle from '../../core/components/Metatitle/MetaTitle.jsx';

const CareerPage = () => {
  return (
    <>
      <MetaTitle title='Careers' />
      {/* Hero Section */}
      <div className="flex flex-col items-center px-4 py-8 bg-different-gradient -mt-20">
        <div className="w-full max-w-6xl flex justify-center  mt-28">
          <div className="w-[905px] h-[740px] flex flex-col items-center text-center p-8 ">
            <div className="font-Manrope text-[#4E18CD] text-[35px] leading-normal mb-4  ">
              Discover Your Next Career Move
            </div>
            <div className="font-Manrope text-[#252525] text-[21px] leading-normal mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </div>
            <button className="font-Manrope px-[40px] py-[8px] text-white bg-[#4E18CD] text-[21px] leading-normal rounded-full mb-6">
              New openings
            </button>
            <video
              className="w-full max-w-4xl h-auto object-cover rounded-lg mt-8"
              controls
            >
              <source src="./components/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      {/* Benefit Section */}
      <div className="flex justify-center items-center bg-white py-6">
        <div className="w-full max-w-6xl flex flex-col items-center text-left">
          <div className="font-Manrope text-[#4E18CD] text-2xl lg:text-4xl mb-4 text-center font-semibold">
            Benefits of working with us
          </div>
          <div className="font-Inter text-[#020D2B] text-[17px] leading-normal mb-8 text-center">
            We’re passionate about helping our team become the best version of
            themselves. Some perks include:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {[
              {
                title: 'Paid time off',
                icon: paid,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing .',
              },
              {
                title: 'Health & Wellness',
                icon: health,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                title: 'Work your way',
                icon: work,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                title: 'Care Leave',
                icon: care,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                title: 'Paid Leave',
                icon: paidLeave,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
              {
                title: 'Annual team meet up',
                icon: meet,
                description:
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col items-start text-left p-4 border-[1.5px] rounded-lg "
              >
                <img
                  src={benefit.icon}
                  alt={benefit.title}
                  className="w-12 h-12 mb-4"
                />
                <div className="font-Manrope text-[24px] leading-normal text-left text-[#4E18CD] mb-2 font-semibold">
                  {benefit.title}
                </div>
                <div className="font-Manrope text-left text-[#505050] text-[17px] leading-[26px]">
                  {benefit.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OpenRole />
      <NewsLetter />
    </>
  );
};

export default CareerPage;
