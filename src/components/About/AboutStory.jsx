/* eslint-disable react/no-unescaped-entities */
import React from 'react';

export default function AboutStory() {
  return (
    <div className="px-10 lg:px-20">
      <div className="mt-8">
        <div className="lg:flex lg:gap-8">
          <h4 className="lg:w-[50%] font-manrope font-medium text-xl text-[#4E18CD] leading-9">
            Our Founding Story
          </h4>
          <p className="lg:w-[50%] font-inter text-[17px] leading-6 lg:mt-0 mt-2 text-[#565656]">
            Margdarshan was initiated with the intent of guiding aspirants
            towards their destiny. We specialize in advising and mentoring
            individuals gearing up for entrance exams such as JEE and NEET. For
            over two years now, we've been dedicated to assisting candidates in
            realizing their aspirations. Our primary goal revolves around
            offering mentorship, equipping them with resources and tools, and
            fostering a supportive community. Initially conceived as a platform
            for educational resources, our vision has expanded to encompass
            career counselling, aiming to enlighten candidates about aspects of
            their career path they may not yet be aware of.
          </p>
        </div>

        <div className="lg:flex mt-8 gap-8">
          <div className="lg:w-[50%]">
            <h4 className="font-manrope font-medium text-2xl leading-6 text-[#4E18CD]">
              Our Vision
            </h4>
            <p className="font-inter font-normal text-[17px] leading-6 text-[#565656] mt-3">
              Our vision is to empower every aspirant to achieve their dreams.
            </p>
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-10">
            <h2 className="font-manrope font-medium text-2xl leading-[1] text-[#4E18CD]">
              Our Mission
            </h2>
            <p className="font-inter font-normal text-[17px] leading-6 text-[#565656] mt-3">
              We aspire to achieve our vision by delivering personalized support
              and a deep understanding of competitive exams, ensuring that each
              student receives the guidance they need to excel.
            </p>
          </div>
        </div>
      </div>

      {/* line */}
      <div className="border-t border-[#757575] mx-auto mt-8"></div>
    </div>
  );
}
