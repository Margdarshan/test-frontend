import * as React from 'react';

export default function Animation() {
  return (
    <section className="bg-white px-7 lg:px-20 py-16">
      <div className="flex gap-5 max-lg:flex-col max-lg:gap-0 bg-[#F3F5FE] border border-[#511DCC] border-opacity-70 rounded-2xl">
        <div className="flex-col w-full max-lg:ml-0 max-lg:w-full hidden lg:flex">
          <div className="flex flex-col py-10 px-5 lg:px-10  w-full">
            <h1 className="text-3xl text-[#020D2B] font-semibold w-full max-lg:max-w-full">
              {/* JEE Mains {currentYear} Strategy to Score 200+ | Last 20 days
              Preparation Tips| Margdarshan */}
              Empowering Aspirants with Personalized AI-Enabled Learning
            </h1>
            <p className="mt-6 text-sm  leading-[22px] text-[#525252] max-lg:max-w-full">
              {/* JEE Mains {currentYear} 4th Attempt is just 20 days away, and
              students might get a doubt whether to prepare for JEE Mains or JEE
              Advanced? JEE Aspirants are also confused about whether to give JEE
              in {currentYear} or take a drop? There is so much confusion
              regarding the Mains exam. So, this video will help you to get your
              answer. I've also shared the preparation strategy to score 200+ for
              those aspirants who already scored 150+ marks in previous JEE
              attempts. Scoring 200+ is a difficult task for any student
              therefore, it is necessary to understand the hurdles well. These 20
              days preparation tips will help aspirants to score from 150+ to 200+ */}
              At Margdarshan, we are dedicated to making quality education
              accessible to all. Our personalized mentorship, curated study
              materials, advanced college predictor, and comprehensive test
              series are designed to support aspirants preparing for entrance
              exams like JEE Main, JEE Advanced, CAT, UCEED, and more. Our
              vision is to revolutionize education by integrating cutting-edge
              AI technology, helping students achieve their dreams with smarter
              and more efficient learning solutions. Join us on this journey to
              unlock your full potential
            </p>
          </div>
        </div>
        <div className="flex flex-col  xl:w-[50%] p-1 md:p-5 lg:p-0 lg:py-10 lg:px-10 xl:px-0 xl:pr-10">
          <div className="flex flex-col grow justify-center px-2 lg:px-0 ">
            <div className="flex overflow-hidden relative flex-col items-center w-full min-h-[300px] border border-gray-300 rounded-2xl">
              <iframe
                src="https://www.youtube.com/embed/FufEPOAlywU"
                title="Welcome Video"
                width=""
                height=""
                allowFullScreen
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
