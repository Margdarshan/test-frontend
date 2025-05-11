import React from 'react';
import PathTree from './PathTree';
import PropTypes from 'prop-types';

const HowTo = ({ name, title, description, treeData }) => {
  return (
    <div className='py-16 px-5 bg-[#F1FCF5]'>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col w-[70%] mb-10 items-center justify-center space-y-4">
          <div className="text-center text-[16px] text-[#6941C6] font-inter font-semibold">{name}</div>
          <div className="text-2xl font-semibold text-[30px] font-manrope text-center">{title}</div>
          <div className="text-center text-[#667085] font-inter text-[15px]">{description}</div>
        </div>
        <PathTree treeData={treeData} />
      </div>
    </div>
  );
};

HowTo.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  treeData: PropTypes.arrayOf(PropTypes.object),
};

HowTo.defaultProps = {
  name: '',
  title: '',
  description: '',
  treeData: [],
};

export default HowTo;
