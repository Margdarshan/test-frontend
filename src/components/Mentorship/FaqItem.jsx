import React from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const FaqItem = ({ question, answer, isOpen, onClick, isLast }) => {
  return (
    <div
      className={`bg-[#F1FCF5] px-5 py-7 flex w-full justify-between ${!isLast ? 'border-b border-b-[#EAECF0]' : ''}`}
      onClick={onClick}
    >
      <div className="textpart flex flex-col pr-3 lg:pr-5">
        <div className="text-base lg:text-lg font-semibold">{question}</div>
        <motion.div
          initial={false}
          animate={
            isOpen ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }
          }
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="text-xs lg:text-sm text-[#667085] mt-3 text-justify">
            {answer}
          </div>
        </motion.div>
      </div>

      <div className="icon-part text-xl pt-[6px] text-[#7852FE] cursor-pointer">
        {isOpen ? <FiMinusCircle /> : <FiPlusCircle />}
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
  isLast: PropTypes.bool,
  };
  
export default FaqItem;
