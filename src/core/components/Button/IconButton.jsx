// components/CustomIconButton.jsx
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const IconButton = ({ onClick, children, className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </button>
  );
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default IconButton;
