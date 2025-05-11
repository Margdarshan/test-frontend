import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const LoadMoreButton = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        className="px-[20px] py-[8px] md:px-[40px] md:py-[10px] text-white bg-[#4E18CD] rounded-lg font-Manrope"
        onClick={onClick}
      >
        Load more Blogs
      </button>
    </div>
  );
};

// PropTypes definition
LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
