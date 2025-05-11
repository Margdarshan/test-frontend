/* eslint-disable react/prop-types */
import React from 'react';

const TestDropDown = (props) => {
  const handleTestMouseEnter = () => {
    props.setshowTestDropdown(true);
  };

  const handleTestMouseLeave = () => {
    props.setshowTestDropdown(false);
  };

  const handleItemClick = (url) => {
    window.location.href = url;
  };

  return (
    <div
      className="bg-white flex -ml-20 pl-28 "
      onMouseEnter={handleTestMouseEnter}
      onMouseLeave={handleTestMouseLeave}
    >
      {props.isEngineering ? (
        <div className="container w-[230px] flex-col space-y-5">
          {props.engOptions.items.map((item, index) => (
            <div
              key={index}
              className="each-link text-[#656565] hover:text-[#4E18CD] text-sm flex"
              onClick={() => handleItemClick(item.props.to)}
            >
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className="container w-[230px] flex-col space-y-5">
          {props.medicalOptions.items.map((item, index) => (
            <div
              key={index}
              className="each-link text-[#656565] hover:text-[#4E18CD] text-sm flex"
              onClick={() => handleItemClick(item.props.to)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestDropDown;
