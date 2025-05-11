import React from 'react';
// Note: FaBook import is kept as is
import { FaBook } from "react-icons/fa";

const DownloadItem = ({title, description, fileUrl}) => {

  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    // Set download attribute with optional file name
    link.setAttribute('download', title || '');
    // Append to body
    document.body.appendChild(link);
    // Trigger click
    link.click();
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <div className='py-5 px-6 rounded-xl bg-white shadow-md flex flex-col justify-between h-[250px]'>
        <div>
          <div className="icon p-2 rounded-full bg-[#ECFDF3] w-fit">
              <div className="icon-bg p-2 rounded-full bg-[#D1FADF] text-[#039855] w-fit">
                  <FaBook/>
              </div>
          </div>
          <div className="text mt-3">
              <h1 className='text-lg font-semibold'>{title}</h1>
              <p className='text-[#667085] text-xs'>{description.length > 130 ? description.slice(0, 130) + '...' : description}</p>
          </div>
        </div>
        <div className="button mt-8">
            <button 
              onClick={handleDownload}
              className='rounded-lg w-full px-5 py-2.5 bg-[#7852FE] hover:bg-[#4E18CD] text-white text-xs font-semibold'
            >
              Download
            </button>
        </div>
    </div>
  );
};

export default DownloadItem;
