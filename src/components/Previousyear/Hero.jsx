import React from 'react'
import image1 from '../PYQuestions/assests/images/image 1.png';
import image3 from '../PYQuestions/assests/images/image 3.png';
import image4 from '../PYQuestions/assests/images/image 4.png';
import image5 from '../PYQuestions/assests/images/image 5.png';

const previousData = [
    {
        title: "Focused Practice",
        desc: "Students can target specific areas of their syllabus, allowing them to strengthen their understanding of individual topics. This focused practice ensures that they thoroughly cover all aspects of the syllabus.",
        img: image1
        
    },
    {
        title: "Identifying Trends",
        desc: "Topic-wise previous years' questions help students identify the types of questions that are frequently asked from specific topics, enabling them to anticipate what might appear in the exam.",
        img: image3
        
    },
    {
        title: "Efficient Revision",
        desc: "By practicing topic-wise questions, students can efficiently revise key concepts and ensure that they haven’t missed any important points, leading to better retention of information.",
        img: image4
        
    },
    {
        title: "Building Confidence",
        desc: "Regular practice of topic-specific questions from past exams helps students become familiar with the exam pattern and difficulty level, boosting their confidence",
        img: image5
        
    },


]

const Hero = () => {
  return (
    <div className="bg-[#F3F2FF] mt-12">
    <div className="flex flex-col space-y-4 items-center pt-12 ">
      <h1 className="font-semibold font-inter text-[16px] text-[#6941C6]">
        Info
      </h1>
      <p className="font-semibold font-manrope px-5 lg:w-[70%] text-center text-[30px] text-[#101828]">
      Advantages of Previous Year Question Paper
      </p>
    </div>
          <div className='flex flex-col items-center pb-5 lg:px-20  space-y-5 mt-10 lg:flex-row lg:justify-center lg:items-start lg:space-x-4 lg:space-y-0'>
              {previousData.map((item, index) => (
                  <div key={index} className='bg-white  h-[420px] lg:w-[25%] px-0  rounded-2xl flex flex-col space-y-4'>
                      <div className='flex justify-center rounded-2xl'>
                          <img className='w-[268px] h-[194px]  rounded-t-2xl ' src={item.img} alt="" />
                      </div>
                      <div className='flex flex-col space-y-2 pb-5 '>
                          <p className='px-4 font-manrope text-[20px] text-[#4E18CD] font-semibold'>{item.title}</p>
                          <p className='px-4 mr-2 pb-4 font-inter text-[13px] text-[#515151]'>{item.desc}</p>
                      </div>
                  </div>
              ))}
            
    </div>    
  </div>
  )
}

export default Hero
