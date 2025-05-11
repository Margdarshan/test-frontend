import React from 'react';
import PropTypes from 'prop-types';

const MoreLikeBlogCard = ({ img, postDate, description }) => {
  return (
    <div className="p-4 rounded-lg">
      <img src={img} alt="" className="w-full h-auto rounded-lg mb-4" />
      <p className="text-gray-500">{postDate}</p>
      <h4 className="font-bold text-gray-800">{description}</h4>
    </div>
  );
};

MoreLikeBlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MoreLikeBlogCard;
