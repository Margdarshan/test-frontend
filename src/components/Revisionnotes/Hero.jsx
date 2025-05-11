import React from 'react'
import revisionImage from '../../assest/revision_notes.jpg';


const Hero = () => {
  return (
    <div className="bg-[#F3F2FF] mt-12">
      <div className="flex flex-col space-y-4 items-center pt-12 ">
        <h1 className="font-semibold font-inter text-[16px] text-[#6941C6]">
          Info
        </h1>
        <p className="font-semibold font-manrope px-5 lg:w-[70%] text-center text-[30px] text-[#101828]">
        What are revision notes
        </p>
        <p className="hidden md:block font-inter text-[15px] text-[#667085] lg:w-[37%] text-center">
        Enhance your exam prep with our comprehensive study material and diverse learning tools for success.
        </p>
      </div>   
      <div className='flex flex-col space-y-12 lg:space-y-0 lg:flex-row lg:space-x-6 2xl:space-x-0 mx-8 mt-20 lg:mx-12 2xl:ml-32 pb-20 '>
        <div className='lg:w-[60%] 2xl:w-[50%] flex flex-col space-y-12'>
            <div className='flex flex-col space-y-6'>
                <h1 className='font-manrope text-[30px] text-[#7852FE] font-semibold'> Revision Notes?</h1>
                <p className='font-inter text-[16px] text-[#667085]'> Revision notes are concise summaries of key concepts, formulas, and  facts, enhanced with visual aids like diagrams and charts. They include  practice questions and space for personalized annotations, helping  students focus on essential material, track mistakes, and streamline  study sessions for better exam preparation.</p>
            </div>
            <div className='flex flex-col space-y-6'>
                <h1 className='font-manrope text-[30px] text-[#7852FE] font-semibold'>Advantages of Revision Notes</h1>
                <div className='flex flex-col space-y-2'>
                    <li className='font-inter text-[16px] text-[#667085] '>Summarize material into concise, digestible chunks for  efficient study.</li>
                    <li className='font-inter text-[16px] text-[#667085]'>Enhance retention with mnemonics and visual aids.</li>
                    <li className='font-inter text-[16px] text-[#667085]'> Support personalized learning with custom annotations and  mistake tracking.</li>
                    <li className='font-inter text-[16px] text-[#667085]'>Focus on relevant questions and likely exam topics for  effective exam preparation.</li>
                </div>
            </div>
        </div>  
        <div className='lg:w-[40%] 2xl:w-[50%] flex lg:justify-center  '>
            <img  className='h-[450px] w-[560px] rounded-lg' src={revisionImage} alt="" />
        </div>     
      </div>
    </div>
  )
}

export default Hero
