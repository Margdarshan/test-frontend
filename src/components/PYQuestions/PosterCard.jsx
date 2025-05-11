import React from 'react';

const PosterCard = () => {
  return (
    <div className="leading-none px-[30px] sm:px-[30px] md:px-[96px] lg:px-[96px] xl:px-[96px] mt-20 mb-8">
      <div className="rounded-[10px] bg-gradient-to-r from-[#D184A3] to-[#777BE8] text-center p-7 rounded-lg shadow-lg">
        <button className="bg-white text-purple-500 px-6 py-2 mb-4 rounded-full font-semibold shadow">
          Preview Past Questions
        </button>
        <h2 className="text-[#020D2B] text-2xl font-bold mb-4">
          Previous Year Questions
        </h2>
        <p className="text-[#333] text-center font-inter text-[15px] font-medium leading-[22px] tracking-[0.3px] mb-6">
          Our resources offer questions categorized by difficulty, helping you
          progress from basic to advanced problems within each topic. This
          approach builds a strong foundation, boosts proficiency, and prepares
          you to tackle challenging questions with confidence, ensuring a
          thorough understanding.
        </p>
      </div>
    </div>
  );
};

export default PosterCard;
