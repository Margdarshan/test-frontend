import React from 'react';
import PropTypes from 'prop-types';

const DescriptionComponent = ({ description }) => {
  return (
    <p className="text-[#333] font-inter text-[13px] lg:text-[15px] font-normal leading-[30px] mb-3">
      {description}
    </p>
  );
};

DescriptionComponent.propTypes = {
  description: PropTypes.string,
};

export default DescriptionComponent;
