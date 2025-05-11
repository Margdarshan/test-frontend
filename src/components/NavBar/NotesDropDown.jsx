import React from 'react';
import PropTypes from 'prop-types';

const NotesDropDown = (props) => {
  const handleNotesMouseEnter = () => {
    props.setshowNotesDropdown(true);
  };

  const handleNotesMouseLeave = () => {
    props.setshowNotesDropdown(false);
  };

  const handleItemClick = (url) => {
    window.location.href = url;
  };

  return (
    <div
      className="bg-white flex -ml-20 pl-28 "
      onMouseEnter={handleNotesMouseEnter}
      onMouseLeave={handleNotesMouseLeave}
    >
      {props.isEngineering ? (
        <div className="container w-[230px] flex-col space-y-3 ">
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
        <div className="container w-[230px] flex-col space-y-4">
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

NotesDropDown.propTypes = {
  setshowNotesDropdown: PropTypes.func,
  isEngineering: PropTypes.bool,
  engOptions: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.node),
  }),
  medicalOptions: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.node),
  }),
};


export default NotesDropDown;
