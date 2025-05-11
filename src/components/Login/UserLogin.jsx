import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import PropTypes from 'prop-types';
import useLogin from './hooks/useLogin';
import GoogleLoginButton from './Components/GoogleLoginButton';
import VerifyOtp from './VerifyOtp';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';


const LoginForm = ({ email, setEmail, handleSendCode, onCloseModel }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { handleLogin, isLoading } = useLogin();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsButtonDisabled(true);

    try {
      await handleLogin(email);
      handleSendCode();
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsButtonDisabled(false);
    }
  };

  return (
    <div className="flex flex-col w-full lg:w-1/2">
      <MetaTitle title='Login' />
      <section className="text-center lg:text-left mb-4">
        <h1 className="text-xl lg:text-2xl font-bold text-neutral-800 text-center text-[#4E18CD]">
          Login or Create an Account!
        </h1>
        <p className="mt-3 lg:mt-5 text-sm lg:text-base text-black">
          Quickly get started by signing in using your existing accounts.
        </p>
      </section>

      <div className="text-lg text-neutral-800">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="block text-sm text-black mt-5 ">
            Enter your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@domain.com"
            value={email}
            onChange={handleEmailChange}
            className="mt-2 w-full px-4 py-3 text-sm border-2 border-gray-900 rounded-lg focus:outline-none focus:border-purple-500"
          />
          <p className="mt-4 text-xs text-gray-600">
            We&apos;ll email you an OTP for a password-free registration.
          </p>
          <button
            type="submit"
            className="mt-4 w-full py-3 text-lg font-semibold text-white rounded-lg"
            style={{
              backgroundColor: isButtonDisabled ? '#aaa' : '#4E18CD',
              cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
            }}
            disabled={isButtonDisabled}
          >
            Send code
          </button>
        </form>
        <p className="mt-4 text-xs  text-black">
          By proceeding, you agree to Margdarshan{' '}
          <a href="/frontend/terms-and-conditions" className="underline">
            T&C
          </a>{' '}
          and{' '}
          <a href="/frontend/privacypolicy" className="underline">
            Privacy policy
          </a>
        </p>
        <div className="flex items-center py-4 mt-6 text-sm text-gray-500">
          <div className="flex-grow border-t border-gray-500" />
          <span className="mx-4">Or</span>
          <div className="flex-grow border-t border-gray-500" />
        </div>
        <GoogleLoginButton onClose={onCloseModel} />
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
  handleSendCode: PropTypes.func,
  onCloseModel: PropTypes.func,
};
function UserLogin({ onClose }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
  const { email, setEmail } = useLogin();

  const tempfunct = onClose || (() => { });

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    tempfunct();
  };

  const openOtpModal = () => {
    setIsOtpModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeOtpModal = () => {
    setIsOtpModalOpen(false);
    closeLoginModal();
  }

  return (
    <>
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50  bg-black bg-opacity-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow-lg w-11/12 lg:w-2/3 max-h-screen overflow-y-auto p-6 lg:p-10">
            <button
              onClick={closeLoginModal}
              className="absolute top-4 right-4 text-xl px-1 py-1 rounded-full bg-[#CFCDCD] text-black hover:bg-[#CFCDDF] focus:outline-none"
            >
              <IoClose />
            </button>

            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-10">
              <LoginForm
                onCloseModel={closeLoginModal}
                email={email}
                setEmail={setEmail}
                handleSendCode={openOtpModal}
              />
            </div>
          </div>
        </div>
      )}

      {isOtpModalOpen && (
        <VerifyOtp
          emailLogin={email}
          closeModal={closeOtpModal}
        />
      )}
    </>
  );
}

UserLogin.propTypes = {
  onClose: PropTypes.func,
};


export default UserLogin;
