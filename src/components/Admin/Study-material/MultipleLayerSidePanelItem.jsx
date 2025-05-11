import React, { useEffect, useState } from 'react';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const MultipleLayerSidePanelItem = ({ icon, optionName, isActive, childItem = [], onLayerOneClick }) => {
  const [showLayer2, setShowLayer2] = useState(false);
  const [expandedLayer2, setExpandedLayer2] = useState(null);  

  return (
    <div className={`w-full text-sm rounded-xl pb-2 ${isActive ? 'bg-white ' : ''} `}>
      {/* Layer 1 */}
      <div
        onClick={onLayerOneClick}
        className={`flex justify-start w-full drop-shadow-sm my-1 rounded-lg px-4 py-2 space-x-2 cursor-pointer 
        }`}
      >
        <div className="flex space-x-2 items-center">
          <div className={`icon-bg rounded-lg drop-shadow-md py-2 px-2 ${
          isActive ? 'text-white bg-[#17C1E8]' : 'bg-white text-[#3A416F]'
          }`}>
            {icon}
          </div>
          <span className={`option-name flex items-center text-sm ${
            isActive ? 'text-[#3A416F] font-semibold' : 'text-[#67748e]'
          }`}>
            {optionName}
          </span>
        </div>
        <span className="text-[#3A416F] p-1 h-fit rounded-full mt-1 bg-white shadow-sm">
          {isActive ? <IoIosArrowDown /> : <IoIosArrowForward />}
        </span>
      </div>

      {/* Layer 2 */}
      {isActive && childItem.map(layer2 => (
        <div key={layer2.id} className="ml-6 mt-1">
          <div
            onClick={() => setExpandedLayer2(expandedLayer2 === layer2.id ? null : layer2.id)}
            className="flex items-center justify-between cursor-pointer px-4 py-2 rounded-lg "
          >
            <div className="flex items-center space-x-2">
              <span className={`icon-bg rounded-lg drop-shadow-md py-2 px-2 ${expandedLayer2 === layer2.id ?"text-white bg-[#17C1E8]":"bg-white text-[#3A416F]"}`}>{layer2.icon}</span>
              <span className={`option-name flex items-center text-sm ${expandedLayer2 === layer2.id ?"text-[#3A416F] font-semibold":"text-[#67748e]"} `}>{layer2.optionName}</span>
            </div>
            <span className="text-[#3A416F] p-1 h-fit rounded-full mt-1 bg-white shadow-sm">
              {expandedLayer2 === layer2.id ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </span>
          </div>

          {/* Layer 3 */}
          {expandedLayer2 === layer2.id && layer2.childItem?.map(layer3 => (
            <div key={layer3.id} className="ml-6 mt-1">
              <div className="px-4 py-2 text-[#67748e] rounded-lg cursor-pointer">
                <div className="flex items-center space-x-2">
                  <span className={`icon-bg rounded-lg drop-shadow-md py-2 px-2 bg-white text-[#3A416F]`}>{layer3.icon}</span>
                  <span className='text-[#67748e] text-xs'>{layer3.optionName}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MultipleLayerSidePanelItem;