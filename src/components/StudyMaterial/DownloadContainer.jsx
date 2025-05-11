import React, { useState } from 'react'
import DownloadItem from './DownloadItem';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';

const DownloadContainer = ({ contentName, materialData }) => {
  const options = Object.keys(materialData);
  const [selectedOption, setSelectedOption] = useState(options[0] || "");

  return (
    <div className='py-12 lg:px-20'>
      <MetaTitle title={contentName} />
      <div className="flex flex-col space-y-4 items-center pt-12 ">
        <h1 className='text-lg lg:text-3xl font-semibold'>Download {contentName || "Material"}</h1>

        {/* Subject Selection Buttons */}
        <div className="options-list flex flex-wrap gap-3 mt-4">
          {options.map((option, index) => (
            <button
              key={index}
              className={`option-button px-4 py-2 rounded-lg text-xs font-semibold border border-[#7852FE] ${selectedOption === option ? 'active bg-[#7852FE] text-white' : 'text-[#7852FE]'
                }`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Mapped Items */}
        <div className='material-data-map grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 px-5 lg:px-0'>
          {materialData[selectedOption]?.map((item) => (
            <DownloadItem
              key={item.id}
              title={item.title}
              description={item.description}
              fileUrl={item.fileUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DownloadContainer;
