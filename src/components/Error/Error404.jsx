/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';

const handleGoToHome = () => {
  window.location.assign('/frontend');
};


// Error Component
export default function Error() {
  return (
    <div className="flex justify-center items-center h-screen">
      <MetaTitle title='Error 404' />
      <div className='error-card max-w-[330px]'>
        <div className="icon-part flex justify-center mb-3">
          <div className="icon-outer-ring p-2 rounded-full bg-[#FFFAEB] w-fit">
            <div className="icon p-2 rounded-full bg-[#FEF0C7] text-[#DC6803]">
              <IoWarningOutline size={24} />
            </div>
          </div>
        </div>
        <div className="text-prat">
          <div className="bold-part mb-4">
            <h1 className='font-semibold text-[#101828] mb-6 text-center'>Error 404</h1>
            <p className='font-semibold text-[#101828] text-center'>Something went wrong...</p>
          </div>
          <div className="light-part mb-6">
            <p className='text-sm text-[#667085] text-center'>
              We had some trouble loading this page. Please refresh the page to try again or get in touch if the problem sticks around!
            </p>
          </div>
        </div>
        <div className="buttons-part w-full">
          <div className="buttons flex  w-full">
            <button
              onClick={handleGoToHome}
              className="px-5 py-3 w-full rounded-lg border border-[#7852FE] bg-[#7852FE] text-white text-sm font-semibold"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
