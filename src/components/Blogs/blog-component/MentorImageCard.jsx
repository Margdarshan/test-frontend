import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { GoArrowUpRight } from "react-icons/go";
import peopleImage from '../icons/people.png';

const MentorImageCard = ({ image, bgColor, name, description, navigateToLink }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    navigate(navigateToLink);
  };

  return (
    <div  className="w-full overflow-hidden rounded-xl my-4 shadow-none h-full">
      <div className="flex flex-col sm:flex-row">
        {image && (
          <div className="w-full sm:w-1/2">
            <img 
              src={peopleImage} 
              alt="people" 
              className="w-full h-auto"
            />
          </div>
        )}
        <div className={`bg-[${bgColor}] h-[300px] rounded-xl w-full ${image ? 'sm:w-1/2' : 'w-full'} p-6 flex flex-col justify-between `}>
        <div className="flex flex-col">

          <button className="text-white border border-white rounded-full mb-8 px-6 py-1 text-xs font-medium self-start">
            Product
          </button>

          <p className="text-xl font-semibold text-white mb-2">
            {name}
          </p>

          <p className="text-white text-xs leading-tight ">
            {description}
          </p>
        </div>

          <div className="flex justify-end">
            <div 
              className="p-4 bg-white rounded-full cursor-pointer"
              onClick={handleNavigation}
            >
              <GoArrowUpRight size={28} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MentorImageCard.propTypes = {
  image: PropTypes.string,
};

export default MentorImageCard;
