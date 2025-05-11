import React, { useEffect, useState } from 'react';
import { IoCaretDownOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import useNotification from '../../core/components/Notification/useNotifiaction';
import { useForm } from 'react-hook-form';
import useCreate from '../../core/api/hooks/useCreate';
import useAuthStore from '../../store/authStore';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';

const PersonalDetails = () => {
  const tost = useNotification();
  const navigate = useNavigate();
  const location = useLocation();
  // const [isFormCompleted, setIsFormCompleted] = useState(false);

  const receivedEmail = location.state?.email;

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      email: receivedEmail || '',
      name: '',
      phone: '',
      classes: '',
      stream: '',
    },
    mode: 'onChange'
  });
  // setLoginRedirectDone
  const { mutateAsync, isLoading, isSuccess, isError, error: responseError } = useCreate('/user/new-user');
  // const login = useAuthStore((state) => state.login);
  const setLoginRedirectDone = useAuthStore(
    (state) => state.setLoginRedirectDone
  );
  const storedPath = localStorage.getItem('currentRoute');

  // const handlePopState = (event) => {
  //   if (!isFormCompleted) {
  //     event.preventDefault();
  //     window.history.pushState(null, null, location.pathname);
  //   }
  // };

  // useEffect(() => {
  //   window.history.pushState(null, null, location.pathname);
  //   window.addEventListener('popstate', handlePopState);
  //   return () => {
  //     window.removeEventListener('popstate', handlePopState);
  //   };
  // }, [isFormCompleted, location.pathname]);

  const onSubmit = async (data) => {
    const response = await mutateAsync(data);
  };
  useEffect(() => {
    if (isSuccess && !isError) {
      setLoginRedirectDone(true)
      navigate(storedPath || '/frontend/');
      // window.location.reload();
    } if (isError || responseError) {
      tost(responseError.message || 'Something went wrong!', "error");
    }
  })

  return (
    <div className="h-full pt-10 md:pt-20 pb-20 bg-[#EBE8F3] flex justify-center items-center">
      <MetaTitle title="Personal Details" />
      <div className="flex flex-col md:flex-row rounded-lg p-8">
        <div className="md:w-[40%] px-2 md:pr-16 pb-6 mb-2 md:mb-0">
          <div className="font-normal text-xl md:text-lg text-center md:text-left">
            Please enter details for personalisation
          </div>
        </div>
        <div className="md:w-[60%]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm mb-2">
                Enter Full Name
              </label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Full name is required' })}
                className={`w-full text-sm px-5 bg-[#EBE8F3] py-3 border rounded-lg focus:outline-none focus:border-[#4E18CD] ${errors.name ? 'border-red-500' : 'border-[#808080]'}`}
                placeholder="Sandeep Kumar"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm mb-1">
                Enter Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                {...register('phone', {
                  required: 'Mobile number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10 digit number',
                  }
                })}
                className={`w-full text-sm px-5 bg-[#EBE8F3] py-3 border rounded-lg focus:outline-none focus:border-[#4E18CD] ${errors.phone ? 'border-red-500' : 'border-[#808080]'}`}
                placeholder="1234567890"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
              )}
            </div>
            <div className="dropdowns flex justify-between space-x-3 mb-3">
              <div className="mb-4 text-sm w-[48%] relative">
                <label htmlFor="classes" className="block text-sm mb-1">
                  Choose Class
                </label>
                <select
                  id="classes"
                  {...register('classes', { required: 'Class selection is required' })}
                  className={`w-full text-sm px-4 py-3 bg-[#EBE8F3] border rounded-lg focus:outline-none focus:border-[#4E18CD] appearance-none ${errors.classes ? 'border-red-500' : 'border-[#808080]'}`}
                >
                  <option value="">Choose Class</option>
                  {['9th', '10th', '11th', '12th', 'Dropper'].map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {errors.classes && (
                  <p className="text-red-500 text-xs mt-1">{errors.classes.message}</p>
                )}
                <IoCaretDownOutline className="absolute top-1/2 mt-3 right-4 transform -translate-y-1/2 text-black" />
              </div>
              <div className="mb-4 text-sm w-[48%] relative">
                <label htmlFor="stream" className="block text-sm mb-1">
                  Choose Stream
                </label>
                <select
                  id="stream"
                  {...register('stream', { required: 'Stream selection is required' })}
                  className={`w-full text-sm px-4 py-3 bg-[#EBE8F3] border rounded-lg focus:outline-none focus:border-[#4E18CD] appearance-none ${errors.stream ? 'border-red-500' : 'border-[#808080]'}`}
                >
                  <option value="">Stream</option>
                  {['PCM', 'PCB'].map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                {errors.stream && (
                  <p className="text-red-500 text-xs mt-1">{errors.stream.message}</p>
                )}
                <IoCaretDownOutline className="absolute top-1/2 mt-3 right-4 transform -translate-y-1/2 text-black" />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#4E18CD] text-sm w-[100%] justify-center text-white flex rounded-lg py-3 px-6"
                disabled={isLoading}
              >
                {isLoading ? 'Submitting...' : 'Start Learning'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;

