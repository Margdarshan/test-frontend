import React from 'react';

const ProbabiltyCell = ({ value, isMobile }) => {
  function colorAndBg(val, isMobile) {
    if (isMobile === 0) {
      if (val === 'high') {
        return (
          <span className="flex w-24 items-center justify-center gap-[5px] p-[5px_20px] rounded-[12px] bg-[rgba(39,174,96,0.3)] text-[#072C18] font-inter text-[15px] font-normal leading-[20px]">
            High
          </span>
        );
      }
      if (val === 'medium') {
        return (
          <span className="flex w-32 items-center justify-center gap-[5px] p-[5px_20px] rounded-[12px] bg-[rgba(255,215,0,0.30)] text-[#442604] font-inter text-[15px] font-normal leading-[20px]">
            Medium
          </span>
        );
      }
      if (val === 'low') {
        return (
          <span className="flex w-24  items-center justify-center gap-[5px] p-[5px_20px] rounded-[12px] bg-[rgba(255,87,51,0.30)] text-[#44060A] font-inter text-[15px] font-normal leading-[20px]">
            Low
          </span>
        );
      }
    }

    if (isMobile === 1) {
      if (val === 'high') {
        return (
          <p className=" flex w-24  flex-row items-center justify-center gap-[5px] py-[5px_20px] rounded-[12px] pl-2 first-line:items-center bg-[rgba(134,222,171,0.3)] font-inter text-[15px] font-normal leading-[20px]">
            Probability:{" "}
            <span className="flex items-center justify-center gap-[5px] p-[5px_20px] rounded-[12px] bg-[rgba(39,174,96,0.3)] text-[#072C18] font-inter text-[15px] font-normal leading-[20px]">
              High
            </span>
          </p>
        );
      }
      if (val === 'medium') {
        return (
          <p className="flex w-24  flex-row  items-center justify-center gap-[5px] py-[5px_20px] rounded-[12px] pl-2 first-line:items-center bg-[rgba(255,217,0,0.19)] font-inter text-[15px] font-normal leading-[20px]">
            Probability:{" "}
            <span className="flex w-32 items-center justify-center gap-[5px] p-[5px_20px] rounded-[12px] bg-[rgba(255,215,0,0.30)] text-[#442604] font-inter text-[15px] font-normal leading-[20px]">
              Medium
            </span>
          </p>
        );
      }
      if (val === 'low') {
        return (
          <p className="flex w-24  flex-row  items-center justify-center gap-[5px] py-[5px_20px] rounded-[12px] pl-2 first-line:items-center bg-[rgba(218,153,138,0.3)] font-inter text-[15px] font-normal leading-[20px]">
            Probability:{" "}
            <span className="flex items-center justify-center gap-[5px] p-[5px_20px] rounded-[12px] bg-[rgba(255,87,51,0.30)] text-[#44060A] font-inter text-[15px] font-normal leading-[20px]">
              Low
            </span>
          </p>
        );
      }
    }

    return "N/A";
  }

  return <div>{colorAndBg(value, isMobile)}</div>;
};

export default ProbabiltyCell;
