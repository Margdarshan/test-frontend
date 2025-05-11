import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { IoClose } from 'react-icons/io5';

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50  pt-44  sm:pt-16 mt-8 ">
      <div className="bg-white rounded-lg p-6 w-[400px]  sm:w-[600px] shadow-lg relative">
        
              <button
              onClick={onClose}
              className="absolute top-2 right-2 text-xl px-1 py-1 rounded-full bg-[#CFCDCD] text-black hover:bg-[#CFCDDF] focus:outline-none"
            >
              <IoClose />
            </button>
        <h2 className="text-[32px] text-[#4E18CD] font-semibold font-inter text-center mb-4">
          🎉 Your Free Session is Booked! 🎉
        </h2>
        <p className="text-center text-[20px] font-inter text-[#101828]">
          Thank you for booking your free session with us! We’ve received your
          request and are excited to assist you on your exam preparation journey.
        </p>
        <div className="mt-4 text-left">
          <h3 className="text-[23px] text-[#055E32] text-center font-inter font-semibold">Next Steps:</h3>
          <div className="flex flex-col space-y-4 list-decimal list-inside font-inter text-[20px] text-[#3D3759] mt-2">
            <li>Check Your Email: We’ve sent you an email with details on how and when your session will take place. Make sure to check your inbox (and spam folder, just in case)!</li>
            <li>Prepare for Your Session: Review the information provided in the email to make the most of your free session.</li>
          </div>
          <p className="text-center text-[#941EC5] font-inter text-[20px] mt-4">
            If you have questions, feel free to contact us.
          </p>
        </div>
        <p className="text-center font-bold mt-6 font-manrope text-[20px] text-[#7751FF]">Happy Learning!</p>
      </div>
    </div>
  );
}

SuccessModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

export default SuccessModal

