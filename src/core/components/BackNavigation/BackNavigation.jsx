import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai'; // Importing back arrow icon

const BackNavigation = ({ title, path }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (path) {
      navigate(path);
    } else {
      navigate(-1); 
    }
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={handleBackClick}>
      <AiOutlineArrowLeft className="text-2xl mr-2" />
      <span className="text-[#000000] font-inter text-[17px] font-medium leading-[24px]">
        {title}
      </span>
    </div>
  );
};

BackNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
};

export default BackNavigation;
