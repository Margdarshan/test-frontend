import React from 'react';
import PropTypes from 'prop-types';

const BlogTitle = ({ title, description }) => {
  return (
    <div className="absolute bottom-0 w-full h-full flex flex-col justify-end bg-gradient-to-t from-black/70 to-black/0 px-6 pt-4 pb-9 rounded-xl">
      <div>
        <h6 className="text-white font-medium text-lg leading-8 font-inter">
          {title}
        </h6>
        <p className="text-gray-400 text-sm leading-6 h-[64px] overflow-hidden font-inter">
          {description.length > 80 ? description.slice(0, 80) + "..." : description}
        </p>
      </div>
    </div>
  );
};

BlogTitle.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogTitle;
