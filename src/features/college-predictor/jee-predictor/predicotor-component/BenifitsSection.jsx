import React from 'react';
const benefitData = [
  {
    title: "Categorize",
    desc:"Ensure balance by categorizing colleges based on multiple factors."
  },
  {
    title: "Customized",
    desc:"Selections to be customized to fit aspirations and compare with other applicants."
  },
  {
    title: "Time Saving",
    desc:"Focus efforts on colleges with a high probability of acceptance."
  },
  {
    title: "Persistent",
    desc:"Focus efforts on colleges with a high probability of acceptance."
  },
]

const BenefitsSection = () => {
  return (
    <div className='bg-[#F3F2FF] pb-8'>
      <div className='flex flex-col items-center py-8 space-y-4'>
        <h1 className='font-inter text-[16px] text-[#6941C6] font-semibold'>Benefits</h1>
        <h1 className='font-manrope text-[30px] text-[#101828] font-semibold'>How is it Beneficial ?</h1>
        <p className='hidden sm:block font-inter text-[16px] text-[#667085] lg:w-[50%] text-center'>The College Predictor uses a sophisticated algorithm to provide a list of colleges and branches you might have a chance to get into based on your inputs.</p>
      </div>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex justify-left lg:px-20  items-center lg:w-[50%]'>
        <div className='pl-8  grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-y-10 lg:gap-y-20  '>
          {benefitData.map((item, index) => (
            <div key={index} className='flex flex-col space-y-2'>
              <h1 className='text-left text-[30px] text-inter font-semibold text-[#7852FE]'>{item.title}</h1>
              <p className='text-left  font-inter text-[16px] text-[#667085]'>{item.desc}</p>
            </div>
          ))}
          </div>
          </div>

        <div className='lg:w-[50%] mt-8 flex justify-center px-6  lg:px-0'>
          <img className=' w-[560px] h-[460px] rounded-lg ' src="https://i.ibb.co/2y45MKk/planttt-croppp.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
