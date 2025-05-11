import React from 'react';

const Tooltip = ({
  children,
  text,
  position = 'top',
}) => {
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative group inline-block">
      {children}
      <div
        className={`
          absolute z-10 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0
          group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
          ${positionClasses[position]}
        `}
      >
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
