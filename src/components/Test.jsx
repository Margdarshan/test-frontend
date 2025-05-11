/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useState } from 'react';

// import image1 from "./icons/image1.png";
// import image2 from "./icons/image2.png";
// import image3 from "./icons/image3.png";
// import image4 from "./icons/image4.png";

const Test = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <>
      {/* title section */}
      <div className=" max-w-screen-xl w-full mx-auto flex flex-col items-center p-6">
        <h1 className="text-3xl font-Manrope font-bold mb-4 text-center">
          College Predictor 2025
        </h1>
        <p className="text-center mb-6 max-w-2xl font-Inter">
          Enter your overall or category rank, and it will help us recommend you
          better colleges. With our advanced algorithm, know your chances of
          getting a particular college!
        </p>
        <div className="flex items-center justify-center text-[#27AE60] font-semibold">
          <div className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.30526 0.910779C7.10584 0.847449 6.8917 0.847449 6.69228 0.910779C6.54555 0.957389 6.43443 1.03574 6.35114 1.10427C6.27674 1.16547 6.19639 1.24323 6.11863 1.31849L5.19194 2.21497C5.16922 2.23695 5.15174 2.25385 5.13653 2.26829C5.11574 2.26555 5.09167 2.26215 5.06037 2.25772L3.78374 2.07715C3.67659 2.06197 3.56587 2.04629 3.4697 2.0405C3.36203 2.03402 3.22608 2.03595 3.07999 2.08449C2.88142 2.15047 2.70818 2.27634 2.58407 2.44479C2.49276 2.56874 2.44892 2.69744 2.42181 2.80184C2.39759 2.89509 2.37829 3.00523 2.35962 3.11183L2.13685 4.38178C2.13139 4.41292 2.12718 4.43686 2.12337 4.45748C2.10493 4.46748 2.08346 4.47888 2.05554 4.4937L0.916578 5.098C0.820968 5.1487 0.722188 5.20109 0.640978 5.25294C0.550068 5.31098 0.441208 5.39245 0.351548 5.51759C0.229688 5.68768 0.163518 5.89134 0.162128 6.10058C0.161108 6.25452 0.201288 6.38441 0.240718 6.48481C0.275938 6.57448 0.325068 6.67493 0.372608 6.77215L0.938848 7.9305C0.952728 7.9589 0.963408 7.98075 0.972438 7.99967C0.963408 8.0186 0.952728 8.04044 0.938848 8.06884L0.372608 9.2272C0.325068 9.3244 0.275938 9.4249 0.240718 9.5145C0.201288 9.6149 0.161108 9.7448 0.162128 9.8988C0.163518 10.108 0.229688 10.3117 0.351548 10.4817C0.441208 10.6069 0.550068 10.6884 0.640978 10.7464C0.722188 10.7983 0.820968 10.8506 0.916578 10.9013L2.05554 11.5056C2.08346 11.5205 2.10493 11.5319 2.12337 11.5419C2.12718 11.5625 2.13139 11.5864 2.13685 11.6176L2.35961 12.8875C2.37829 12.9941 2.3976 13.1043 2.42181 13.1975C2.44892 13.3019 2.49276 13.4306 2.58407 13.5546C2.70818 13.723 2.88142 13.8489 3.07999 13.9149C3.22608 13.9634 3.36203 13.9653 3.4697 13.9588C3.56586 13.9531 3.67655 13.9374 3.78368 13.9222L5.06037 13.7416C5.09167 13.7372 5.11574 13.7338 5.13653 13.7311C5.15174 13.7455 5.16922 13.7624 5.19194 13.7844L6.11862 14.6808C6.19638 14.7561 6.27674 14.8339 6.35114 14.8951C6.43443 14.9636 6.54555 15.042 6.69228 15.0886C6.8917 15.1519 7.10584 15.1519 7.30526 15.0886C7.45199 15.042 7.56311 14.9636 7.64641 14.8951C7.7208 14.8339 7.80115 14.7561 7.87891 14.6809L8.8056 13.7844C8.8283 13.7624 8.8458 13.7455 8.861 13.7311C8.8818 13.7338 8.9059 13.7372 8.9372 13.7416L10.2139 13.9222C10.321 13.9374 10.4317 13.9531 10.5278 13.9588C10.6355 13.9653 10.7715 13.9634 10.9176 13.9149C11.1161 13.8489 11.2894 13.723 11.4135 13.5546C11.5048 13.4306 11.5486 13.3019 11.5757 13.1975C11.6 13.1042 11.6192 12.9941 11.6379 12.8875L11.8607 11.6176C11.8662 11.5864 11.8704 11.5625 11.8742 11.5419C11.8926 11.5319 11.9141 11.5205 11.942 11.5056L13.081 10.9013C13.1766 10.8506 13.2754 10.7982 13.3566 10.7464C13.4475 10.6884 13.5563 10.6069 13.646 10.4817C13.7679 10.3117 13.834 10.108 13.8354 9.8988C13.8364 9.7448 13.7963 9.6149 13.7568 9.5145C13.7216 9.4248 13.6725 9.3244 13.6249 9.2271L13.0587 8.06884C13.0448 8.04044 13.0341 8.01859 13.0251 7.99967C13.0341 7.98074 13.0448 7.9589 13.0587 7.9305L13.625 6.77211C13.6725 6.67494 13.7216 6.57444 13.7568 6.48481C13.7963 6.38441 13.8364 6.25452 13.8354 6.10058C13.834 5.89134 13.7679 5.68768 13.646 5.51759C13.5563 5.39245 13.4475 5.31098 13.3566 5.25294C13.2754 5.20109 13.1766 5.1487 13.0809 5.09799L11.942 4.4937C11.9141 4.47888 11.8926 4.46748 11.8742 4.45748C11.8704 4.43686 11.8662 4.41292 11.8607 4.38178L11.6379 3.11185C11.6193 3.00525 11.6 2.89509 11.5757 2.80184C11.5486 2.69744 11.5048 2.56874 11.4135 2.44479C11.2894 2.27634 11.1161 2.15047 10.9176 2.08449C10.7715 2.03595 10.6355 2.03402 10.5278 2.0405C10.4317 2.04629 10.321 2.06197 10.2138 2.07714L8.9372 2.25772C8.9059 2.26215 8.8818 2.26555 8.861 2.26829C8.8458 2.25385 8.8283 2.23695 8.8056 2.21497L7.87893 1.3185C7.80116 1.24324 7.72081 1.16548 7.64641 1.10427C7.56311 1.03574 7.45199 0.957389 7.30526 0.910779ZM9.5788 6.89775C9.7984 6.67808 9.7984 6.32192 9.5788 6.10225C9.3591 5.88258 9.0029 5.88258 8.7833 6.10225L6.18102 8.7045L5.21513 7.73862C4.99546 7.51895 4.63931 7.51895 4.41964 7.73862C4.19997 7.95829 4.19997 8.31444 4.41964 8.53411L5.78327 9.8977C6.00294 10.1174 6.3591 10.1174 6.57877 9.8977L9.5788 6.89775Z"
                fill="#27AE60"
              />
            </svg>
          </div>
          No Hidden Charges, 100% Free
        </div>
      </div>
      {/* form section */}
      <div className="w-full mx-auto flex flex-col items-center px-4 md:px-24">
        <div className="w-full flex flex-col md:flex-row">
          <div className="sm:hidden hidden md:flex flex-col gap-1 mr-1">
            <img
              src={'image4'}
              alt="College"
              className="w-[323px] h-[397px] object-cover rounded-lg"
            />
            <img
              src={'image2'}
              alt="College"
              className="w-[323px] h-[126px] object-cover rounded-lg"
            />
          </div>
          <div className="hidden md:flex flex-col gap-1 ml-1">
            <img
              src={'image3'}
              alt="College"
              className="w-[304px] h-[193px] object-cover rounded-lg"
            />
            <img
              src={'image1'}
              alt="College"
              className="w-[304px] h-[332px] object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-14 mx-4 md:mx-12 pt-7">
            <div className="flex flex-col p-2 border rounded-lg font-Inter text-[12px]">
              <label className="mb-2 font-bold">JEE Main Rank</label>
              <input
                type="text"
                className="p-2 border rounded-lg font-Inter text-[16px]"
                placeholder="Enter your Rank"
              />
            </div>
            <div className="flex flex-col p-2 border rounded-lg">
              <label className="mb-2 font-bold font-Inter text-[12px]">
                JEE Main Percentile
              </label>
              <input
                type="text"
                className="p-2 border rounded-lg font-Inter text-[16px]"
                placeholder="Percentile (Optional)"
              />
            </div>
            <div className="flex flex-col p-2 border rounded-lg font-Inter text-[12px]">
              <label className="mb-2 font-bold">
                Category <span className="text-red-500">*</span>
              </label>
              <select className="p-2 border rounded-lg font-Inter text-[16px]">
                <option>Select Category</option>
                <option>General</option>
                <option>OBC</option>
                <option>SC</option>
                <option>ST</option>
              </select>
            </div>
            <div className="flex flex-col p-2 border rounded-lg font-Inter text-[12px]">
              <label className="mb-2 font-bold">
                Gender <span className="text-red-500">*</span>
              </label>
              <select className="p-2 border rounded-lg font-Inter text-[16px]">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="flex flex-col p-2 border rounded-lg">
              <label className="mb-2 font-bold font-Inter text-[12px]">
                Home State <span className="text-red-500">*</span>
              </label>
              <select className="p-2 border rounded-lg font-Inter text-[16px]">
                <option>Select State</option>
                <option>State 1</option>
                <option>State 2</option>
                <option>State 3</option>
                <option>State 4</option>
              </select>
            </div>
            <div className="flex items-center p-2 border rounded-lg">
              <label
                htmlFor="specialAbled"
                className="font-bold mr-3 font-Inter text-[12px]"
              >
                Special Abled
              </label>
              <div
                className={`relative inline-block w-10 mr-2 align-middle rounded-full select-none transition duration-200 ease-in
      ${isEnabled ? 'bg-blue-500' : 'bg-gray-300'}
    `}
                onClick={toggleSwitch}
              >
                <input
                  type="checkbox"
                  id="specialAbled"
                  className="absolute opacity-0 w-0 h-0"
                  checked={isEnabled}
                  onChange={toggleSwitch}
                />
                <span
                  className={`block w-6 h-6 rounded-full bg-white shadow transform
        ${isEnabled ? 'translate-x-4' : 'translate-x-0'}
        transition-transform duration-200 ease-in-out
      `}
                ></span>
              </div>
            </div>

            <div className="md:col-span-2 m-auto pb-7">
              <button className="mt-6 bg-[#4E18CD] font-Manrope text-white p-2 rounded-lg px-32 py-4">
                Predict
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* description section */}
      <div className="mt-12 w-full mx-auto items-center px-4 md:px-24">
        <h2 className="text-2xl font-bold font-Manrope text-[#333333] mb-4">
          Our College Predictor
        </h2>
        <p className="font-Inter leading-6 text-[#576175] text-[17px]">
          The JEE Main College Predictor 2025 is an advanced tool designed to
          assist students in estimating which colleges they might gain admission
          to based on their JEE Main rank or percentile. This tool requires
          students to input several key details, including their JEE Main score,
          category (General, OBC, SC, ST, etc.), home state, and any specific
          preferences for engineering branches. By analyzing this information
          against a comprehensive database of past admission trends and cutoff
          data from various colleges, the predictor generates a customized list
          of potential colleges and branches for which the student might be
          eligible.
        </p>
        <p className=" mt-4 font-Inter leading-6 text-[#576175] text-[17px]">
          The process begins with the student entering their rank or percentile,
          along with other pertinent details. The tool then uses sophisticated
          algorithms and historical data to compare the student's profile with
          previous years' admission statistics. This comparison helps to
          identify the likelihood of admission into various institutions,
          considering factors such as category-specific cutoffs and state
          quotas.
        </p>
        <p className="mt-4 font-Inter leading-6 text-[#576175] text-[17px]">
          The results provided by the JEE Main College Predictor are presented
          in a user-friendly format, often ranking the colleges based on the
          probability of admission. Additionally, the tool may offer filters for
          refining results according to preferences like college state, program
          details, field, and other relevant criteria.
        </p>
        <p className="mt-4 font-Inter leading-6 text-[#576175] text-[17px]">
          This predictive capability is invaluable for students, allowing them
          to make well-informed decisions about their college preferences. By
          understanding their chances of admission to different institutions,
          students can strategically plan their counseling sessions, prioritize
          applications, and focus their efforts on colleges where they have a
          higher probability of acceptance. Overall, the JEE Main College
          Predictor 2025 serves as a critical resource in navigating the complex
          and competitive landscape of engineering admissions.
        </p>
      </div>
    </>
  );
};

export default Test;
