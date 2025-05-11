import React from 'react';
import PropTypes from "prop-types";

const ClearAllButton = ({ clearAll }) => {
  return (
    <button
      onClick={clearAll}
      className="px-4 py-2 bg-[#DDDDDD] text-black rounded-[20px]  shadow-sm ml-4 hover:bg-white border-[1px] hover:border-[#DDDDDD]"
    >
      Clear All
    </button>
  );
};
ClearAllButton.propTypes = {
  clearAll: PropTypes.func.isRequired,
};
export default ClearAllButton;

