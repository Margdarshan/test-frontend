import React from 'react';

export default function AboutStats() {
  return (
    <div className="px-10 lg:px-20">
      <div className="mt-5 flex justify-evenly lg:space-x-24">
        <div>
          <h6 className="font-manrope font-semibold lg:text-[3rem] text-[24px] leading-[1.366] text-[#4E18CD] text-center">
            20K+
          </h6>
          <p className="font-inter font-normal lg:text-[17px] text-[10px] leading-4 text-[#333333]">
            Active Students
          </p>
        </div>
        <div>
          <h6 className="font-manrope font-semibold lg:text-[3rem] text-[24px] leading-[1.366] text-[#4E18CD] text-center">
            10+
          </h6>
          <p className="font-inter font-normal lg:text-[17px] text-[10px] leading-4 text-[#333333]">
            Mentors
          </p>
        </div>
        <div>
          <h6 className="font-manrope font-semibold lg:text-[3rem] text-[24px] leading-[1.366] text-[#4E18CD] text-center">
            2L+
          </h6>
          <p className="font-inter font-normal lg:text-[17px] text-[10px] leading-4 text-[#333333]">
            YouTube Views
          </p>
        </div>
        <div>
          <h6 className="font-manrope font-semibold lg:text-[3rem] text-[24px] leading-[1.366] text-[#4E18CD] text-center">
            100+
          </h6>
          <p className="font-inter font-normal lg:text-[17px] text-[10px] leading-4 text-[#333333]">
            Videos
          </p>
        </div>
      </div>

      {/* line */}
      <div className="border-t border-[#757575] mx-auto mt-8"></div>
    </div>
  );
}
