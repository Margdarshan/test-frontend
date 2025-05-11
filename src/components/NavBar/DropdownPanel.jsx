import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DropdownPanel = (props) => {
  const handleMouseEnter = () => {
    props.setShowDropdown({ ...props.showDropdown, [props.id]: true });
  };

  const handleMouseLeave = () => {
    props.setShowDropdown({ ...props.showDropdown, [props.id]: false });
  };

  const handleItemClick = (url) => {
    window.location.href = url;
  };

  return (
    <div
      className="bg-white flex -ml-20 pl-28"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container w-[230px] flex-col space-y-3 ">
        {props.options.items.map((item, index) => (
          <div
            key={index}
            className="each-link z-40 text-[#656565] hover:text-[#4E18CD] text-sm flex"
          >
            <Link
              onClick={() => handleItemClick(item[1])}
              className="z-50"
              to={item[1]}
            >
              {item[0]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

DropdownPanel.propTypes = {
  options: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
    ).isRequired,
  }).isRequired,
  showDropdown: PropTypes.object.isRequired,
  setShowDropdown: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default DropdownPanel;
