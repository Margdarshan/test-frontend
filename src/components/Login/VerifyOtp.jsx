/* eslint-disable react/no-unescaped-entities */
import React, { useState, useRef, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import api from '../../api';
import { storeToken } from '../../utils/indexedDB';
import PropTypes from 'prop-types';
import { useVerifyOtp } from './hooks/useVerifyOtp';

const VerifyOtp = ({ closeModal, emailLogin }) => {
  const navigate = useNavigate();
  const email = emailLogin;
  const { verifyOtpMutation, resendOtpMutation, } = useVerifyOtp(closeModal, email);

  const [otp, setOtp] = useState(['', '', '', '']);
  const [isOtpComplete, setIsOtpComplete] = useState(false);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    setIsOtpComplete(otp.every((digit) => digit !== ''));
  }, [otp]);

  const handleInputChange = (index, e) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < 3 && value !== '') {
        otpInputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0) {
      if (otp[index] === '') {
        otpInputRefs[index - 1].current.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = '';
        setOtp(newOtp);
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
      }
    } else if (e.key.match(/[0-9]/) && index < 3 && otp[index] !== '') {
      otpInputRefs[index + 1].current.focus();
    }
  };
  const handleVerify = async (e) => {
    e.preventDefault();
    verifyOtpMutation.mutate(otp.join(''));
  };

  const handleResend = async () => {
    resendOtpMutation.mutate();
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 bg-white pt-20 px-10 sm:py-20 sm:px-28 sm:rounded-[26px] md:w-[480px] md:max-w-[90%]">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-xl px-1 py-1 rounded-full bg-[#CFCDCD] text-black hover:bg-[#CFCDDF] focus:outline-none"
        >
          <IoClose />
        </button>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center mb-5">
            <div className="text-black">Please Enter the OTP sent to</div>
            <div className="email text-[#352b2b]">{email}</div>
          </div>
          <div className="flex space-x-2 sm:space-x-1 justify-between items-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={otpInputRefs[index]}
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="1"
                className="w-[20%] h-14 sm:h-12 sm:w-12 border bg-[#EBE8F3] border-[#808080] rounded-md text-3xl text-center focus:outline-none focus:border-blue-500"
                value={digit}
                onChange={(e) => handleInputChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
          <div className="buttons mt-5 flex flex-col space-y-2">
            <button
              onClick={handleVerify}
              className={`flex justify-center items-center bg-[#4E18CD] text-[#E8E3F2] text-sm py-2 px-4 rounded-lg ${!verifyOtpMutation.isLoading
                ? 'cursor-pointer'
                : 'cursor-not-allowed opacity-50'
                }`}
              disabled={verifyOtpMutation.isLoading}
            >
              {verifyOtpMutation.isLoading ? 'Verifying...' : 'Verify'}
            </button>
            <button
              onClick={closeModal}
              className="flex justify-center items-center text-sm py-2 px-4 rounded-lg border border-solid border-[#808080]"
            >
              Cancel
            </button>
          </div>
          <div className="resend mt-4">
            <div className="text-xs flex justify-center items-center space-x-1">
              <span> Didn't get a code?</span>
              <span>
                <button
                  onClick={handleResend}
                  className="text-xs text-[#4E18CD]"
                >
                  Click To Resend
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

VerifyOtp.propTypes = {
  closeModal: PropTypes.func,
  emailLogin: PropTypes.func,
}

export default VerifyOtp;
