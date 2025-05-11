import React from 'react';
import { useState } from 'react';
import { FaCircleDot } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa';

const Customize = () => {
  const [value, setValue] = useState(10); // Initial value of the slider

  let total_Cost = value * 350;

  // Handle slider change
  const handleSliderChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="bg-[#FFF2ED]">
      <div className="flex flex-col space-y-3 items-center pt-12">
        <p className="font-semibold text-[30px] font-manrope text-[#020D2B]">
          Customize your Plan
        </p>
        <p className="font-inter  text-[#667085]">
          We care and we know you want control in your own hand
        </p>
      </div>

      <div className="flex flex-col items-center pb-4">
        <div className="flex flex-col 2xl:w-[70%] xl:w-[80%] px-5 xl:px-0">
          <div className="flex flex-col space-y-5 xl:space-y-0 xl:flex-row xl:justify-between  mt-10 pb-8   xl:space-x-10 ">
            {/* first compo */}
            <div className="bg-white border border-[#D6D6D6] xl:w-[50%] rounded-xl shadow-xl px-8 pb-6 pt-3">
              <div className="">
                <div className="flex space-x-7  mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                  >
                    <rect
                      x="0.5"
                      y="1"
                      width="39"
                      height="39"
                      rx="3.5"
                      fill="white"
                    />
                    <rect
                      x="0.5"
                      y="1"
                      width="39"
                      height="39"
                      rx="3.5"
                      stroke="#585555"
                    />
                    <path
                      d="M35 6.75C35 7.08152 34.8683 7.39946 34.6339 7.63388C34.3995 7.8683 34.0815 8 33.75 8H6.25C5.91848 8 5.60054 7.8683 5.36612 7.63388C5.1317 7.39946 5 7.08152 5 6.75C5 6.41848 5.1317 6.10054 5.36612 5.86612C5.60054 5.6317 5.91848 5.5 6.25 5.5H33.75C34.0815 5.5 34.3995 5.6317 34.6339 5.86612C34.8683 6.10054 35 6.41848 35 6.75ZM32.5 13V28C32.5 28.663 32.2366 29.2989 31.7678 29.7678C31.2989 30.2366 30.663 30.5 30 30.5H23.75C23.087 30.5 22.4511 30.2366 21.9822 29.7678C21.5134 29.2989 21.25 28.663 21.25 28V13C21.25 12.337 21.5134 11.7011 21.9822 11.2322C22.4511 10.7634 23.087 10.5 23.75 10.5H30C30.663 10.5 31.2989 10.7634 31.7678 11.2322C32.2366 11.7011 32.5 12.337 32.5 13ZM30 13H23.75V28H30V13ZM18.75 13V34.25C18.75 34.913 18.4866 35.5489 18.0178 36.0178C17.5489 36.4866 16.913 36.75 16.25 36.75H10C9.33696 36.75 8.70107 36.4866 8.23223 36.0178C7.76339 35.5489 7.5 34.913 7.5 34.25V13C7.5 12.337 7.76339 11.7011 8.23223 11.2322C8.70107 10.7634 9.33696 10.5 10 10.5H16.25C16.913 10.5 17.5489 10.7634 18.0178 11.2322C18.4866 11.7011 18.75 12.337 18.75 13ZM16.25 13H10V34.25H16.25V13Z"
                      fill="#333333"
                    />
                  </svg>
                  <p className="text-[23px] font-manrope font-semibold text-[#020D2B]">
                    Customize your Plan
                  </p>
                </div>
                <div className="w-full  ">
                  <div className="text-center mt-1  font-semibold text-black font-manrope text-[50px]">
                    {value}{' '}
                    <span className="text-[#020D2B] font-inter text-[15px] font-medium">
                      Sessions
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={value}
                    onChange={handleSliderChange}
                    className="w-[100%] mt-2"
                  />
                </div>
                <div className="flex flex-col mt-8 space-y-4">
                  <div className="flex justify-between ">
                    <div className="font-inter text-[13px] text-[#252525]">
                      Months Validity:{' '}
                      <span className="text-[#4E18CD] font-semibold"> 4</span>
                    </div>
                    <div className="font-inter text-[13px] text-[#252525]">
                      Cost per session:{' '}
                      <span className="text-[#4E18CD] font-semibold">
                        {' '}
                        ₹350
                      </span>
                    </div>
                    <div className="font-inter text-[13px] text-[#252525]">
                      Total Cost :{' '}
                      <span className="text-[#4E18CD] font-semibold">
                        {total_Cost}
                      </span>
                    </div>
                  </div>
                  <p className="font-inter text-[13px] text-[#252525]  pb-4">
                    Discount :{' '}
                    <span className="text-[#4E18CD] font-semibold">XX%</span>
                  </p>
                </div>
              </div>
            </div>
            {/* Component 2 */}
            <div className="xl:w-[50%] bg-[#7751FF] rounded-xl shadow-xl pt-4 pb-6 px-5">
              <div className="flex justify-between">
                <p className="font-inter text-[15px] font-semibold text-[#DFDFDF]">
                  Customized Plan Details{' '}
                </p>
                <FaCircleDot className=" text-white text-[20px]" />
              </div>
              <div className="mt-6 flex flex-col space-y-3">
                <div className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 14L8.5 17.5L19 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#E7E7E7] font-inter text-[15px]">
                    Ideal for mid-term preparation and skill enhancement
                  </p>
                </div>
                <div className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 14L8.5 17.5L19 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#E7E7E7] font-inter text-[15px]">
                    {value} sessions over 3 months
                  </p>
                </div>
                <div className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 14L8.5 17.5L19 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#E7E7E7] font-inter text-[15px]">
                    Personalized Study Plan
                  </p>
                </div>
                <div className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 14L8.5 17.5L19 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#E7E7E7] font-inter text-[15px]">
                    Cost per session: ₹350
                  </p>
                </div>
                <div className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M5 14L8.5 17.5L19 6.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-[#E7E7E7] font-inter text-[15px]">
                    Additional sessions available at ₹325 each within the plan
                  </p>
                </div>
              </div>
              <div className=" bg-white py-2 rounded-xl flex justify-between mt-5">
                <span className="font-inter text-[16px] text-[#4E18CD] font-semibold pl-4">
                  Add to Cart
                </span>
                <div>
                  <FaArrowRight className="mr-4 mt-1 text-[#4E18CD]" />
                </div>
              </div>
            </div>
          </div>
          {/* Expert Advice */}
          <div className="border rounded-xl bg-white  px-8 pt-5 pb-8 shadow-xl mb-6 w-full">
            <div className="flex flex-col space-y-5">
              <p className="text-[23px] font-manrope font-semibold">
                Expert Advice : Find your perfect mentorship Plan{' '}
              </p>
              <div className="flex flex-col space-y-4 font-semibold text-[15px] text-[#941EC5] font-inter">
                <p>
                  To truly experience the benefits of our mentorship, we
                  recommend starting with at least 4 sessions.
                </p>
                <p>
                  For fast-track exam preparation, consider booking 8 to 12
                  sessions over a period of 2 to 3 months.
                </p>
                <p>
                  One-Stop Solution: Choose our 6-month mentorship plan for
                  comprehensive guidance and all the support you need to excel
                  in your examination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customize;
