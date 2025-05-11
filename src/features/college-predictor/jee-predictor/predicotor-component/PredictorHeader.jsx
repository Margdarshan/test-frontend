
import React from 'react';
import { PiSealCheckFill } from "react-icons/pi";



const PredictorHeader = () => {
  return (
    <div className='bg-[#F1FCF5] -mt-20'>
      <div className='flex flex-col items-center space-y-5 pb-7'>
        <h1 className='pt-36 font-manrope text-[35px] text-[#4E18CD] font-semibold'>College Predictor 2025</h1>
        <p className='hidden md:block font-inter text-[15px] text-[#333333] w-[55%] text-center'>The JEE Main College Predictor 2025 is a sophisticated tool that helps students estimate which engineering colleges they might gain admission based on their JEE Main rank or percentile.</p>
        <div className='flex space-x-1'>
          <div className=''>
            <PiSealCheckFill className='text-[#27AE60] text-[15px] mt-[2px] ' />
          </div>
          <p className='font-inter text-[13px] font-semibold text-[#27AE60]'>No Hidden Charges, 100% Free</p>
        </div>
      </div>
    </div>
  );
};

export default PredictorHeader;
