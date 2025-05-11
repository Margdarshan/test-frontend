import React from 'react';

const StillHaveQuestion = () => {
  return (
    <div className="px-5 py-12 bg-[#DEFAEA] flex flex-col items-center justify-center rounded-xl">
      <div className="avatars">
        <div className="flex -space-x-2 rtl:space-x-reverse">
          <img
            className="w-10 mt-[3px] h-10 border-2 border-white rounded-full "
            src="https://headshots-inc.com/wp-content/uploads/2023/03/professional-Headshot-Example-4-1.jpg"
            alt=""
          />
          <img
            className="w-10 h-10 border-2 border-white rounded-full z-10 "
            src="https://st3.depositphotos.com/1011434/13157/i/450/depositphotos_131572502-stock-photo-happy-woman-smiling.jpg"
            alt=""
          />
          <img
            className="w-10 mt-[3px] h-10 border-2 border-white rounded-full "
            src="https://www.profilebakery.com/wp-content/uploads/2023/04/ai-professional-headshot-6.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="text-part mt-5">
        <div className="text-center font-semibold text-[#101828] text-lg ">
          Still have questions?
        </div>
        <div className="text-[13px] text-center text-[#667085] mt-[6px]">
          Can&apos;t find the answer you&apos;re looking for? Please chat to our
          friendly team.
        </div>
      </div>
      <div className="button-part flex items-center justify-center mt-6">
        <button className="w-fit px-4 py-2 rounded-lg bg-[#4E18CD] text-white text-sm font-semibold">
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default StillHaveQuestion;
