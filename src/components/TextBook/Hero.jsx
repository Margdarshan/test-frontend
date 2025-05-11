import React from 'react';

const textbookData = [
  {
    title: "Affordable",
    description: "Reduces financial burden on students and families while saving schools money on textbook purchases"
  },
  {
    title: "Accessibility for All Students",
    description: "Ensures all students have access to educational resources anytime, anywhere, reducing dependency on physical copies."
  },
  {
    title: "Extensive Syllabus Coverage",
    description: "Covers a wide range of topics with in-depth information, meeting diverse academic needs and promoting thorough understanding"
  },
  {
    title: "Comprehensive Learning",
    description: "Provides varied explanations and perspectives, catering to different learning styles and enhancing understanding"
  },
];

const Hero = () => {
  return (
    <div className="bg-[#F3F2FF] mt-12">
      <div className="flex flex-col space-y-4 items-center pt-12 ">
        <h1 className="font-semibold font-inter text-[16px] text-[#6941C6]">
          Info
        </h1>
        <p className="font-semibold font-manrope px-5 lg:w-[70%] text-center text-[30px] text-[#101828]">
          What are the advantages of Text Books?
        </p>
        <p className="hidden md:block font-inter text-[15px] text-[#667085] w-[60%] text-center">
          Textbooks offer in-depth knowledge, structured content, and reliable
          information. They provide a tangible learning experience, aid in
          comprehension, and are a trusted academic resource.
        </p>
      </div>
      <div className="flex flex-col space-y-6  lg:flex-row lg:space-y-0 lg:space-x-12 2xl:space-x-2 px-8 2xl:px-16 mt-8 pb-8 lg:mt-16 lg:justify-center">
        <div className="2xl:mx-44 ">
          {textbookData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col space-y-2 mt-6 rounded-lg shadow-md bg-white p-4 pb-5 ${
                index % 2 === 0 ? 'md:ml-24' : 'md:mr-24'
              }`}
            >
              <div className="font-manrope text-[20px] text-[#4E18CD] font-semibold">
                {item.title}
              </div>
              <div className="font-inter text-[13px] text-[#252525]">
                {item.description}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-lg  "
            src="https://i.ibb.co/Wxv3jtW/books-crop.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
