import React from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon
import PropTypes from 'prop-types';

const Popup = ({ message, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-75"></div>
        <div className="bg-white rounded p-8 z-20 relative mx-10">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-2 mr-2 p-1 rounded-full text-white bg-gray-500 hover:bg-gray-600"
          >
            <AiOutlineClose />
          </button>
          <div className="mb-4 text-red-600 text-xl text-center">{message}</div>
        </div>
      </div>
    </div>
  );
};
 Popup.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
 }
export default Popup;
