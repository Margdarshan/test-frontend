import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useCreate from '../../core/api/hooks/useCreate';
import useNotification from '../../core/components/Notification/useNotifiaction';

export default function AboutContact() {
  const location = useLocation();
  const toastNotification = useNotification()
  const { mutate: createContact, isLoading, isError, isSuccess } = useCreate('/about/');

  // Set default values for the form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      message: '',
      privacy: false,
    }, mode: 'onChange'
  });

  useEffect(() => {
    if (location.hash === '#contact') {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const onSubmit = async (data) => {
    createContact(data, {
      onSuccess: (response) => {
        if (response) {
          // toastNotification(response?.message || 'Message Sent Successfully!', 'success', 5000);
          toastNotification('Message Sent Successfully!', 'success', 5000);
          reset();
        }
      },
      onError: (error) => {
        toastNotification(error.message || 'Oops Something went wrong!', 'error', 5000);
      }
    });

    document.getElementById('privacyPolicyCheckbox').checked = false;
  };
  return (
    <div className="px-10 lg:px-20" id="contact">
      <div className="mt-10 pb-5">
        <h3 className="font-inter text-center text-[1rem] lg:text-[1.2rem] leading-[25px] text-[#4E18CD] font-semibold">
          CONTACT US
        </h3>
        <p className="font-manrope font-medium text-center text-[1.8rem] lg:text-[2.1rem] leading-10 text-[#020D2B] lg:mt-2">
          Get in touch
        </p>
        <p className="font-inter text-center lg:text-[1rem] text-[12px] lg:font-normal font-semibold text-[#020D2B] mt-2">
          We’d love to hear from you. Please fill out this form{' '}
        </p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mt-10 lg:w-[50%] m-auto">
            <div className="flex space-x-5 items-center">
              <div className="w-[50%]">
                <label htmlFor="first_name" className="block">First Name *</label>
                <input
                  type="text"
                  id="first_name"
                  {...register('first_name', { required: 'First name is required' })}
                  className="form-control w-full h-[55px] bg-white border border-gray-300 rounded-md focus:outline-[#4E18CD] p-2"

                />
                {errors.first_name && (
                  <span className="text-red-500 text-sm">{errors.first_name.message}</span>
                )}
              </div>

              <div className="w-[50%]">
                <label htmlFor="last_name" className="block">Last Name *</label>
                <input
                  type="text"
                  id="last_name"
                  {...register('last_name', { required: 'Last name is required' })}
                  className="form-control w-full h-[55px] bg-white border border-gray-300 rounded-md focus:outline-[#4E18CD] p-2"

                />
                {errors.last_name && (
                  <span className="text-red-500 text-sm">{errors.last_name.message}</span>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="email" className="block">Email *</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                className="form-control w-full h-[55px] bg-white border border-gray-300 rounded-md focus:outline-[#4E18CD] p-2"

              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email.message}</span>
              )}
            </div>

            {/* Phone Field */}
            <div className="mt-5">
              <label htmlFor="phone" className="block">Phone *</label>
              <input
                type="tel"
                id="phone"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid phone number',
                  },
                })}
                className="form-control w-full h-[55px] bg-white border border-gray-300 rounded-md focus:outline-[#4E18CD] p-2"

              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone.message}</span>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block">Message *</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="form-control w-full h-[100px] bg-white border border-gray-300 rounded-md focus:outline-[#4E18CD] p-2"

              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message.message}</span>
              )}
            </div>

            <div className="flex justify-center mt-3">
              <input
                type="checkbox"
                id="privacyPolicyCheckbox"
                {...register('privacy', { required: 'You must agree to the privacy policy' })}
                className="form-checkbox border border-solid border-gray-400 rounded focus:outline-none mr-2"
              />
              <p className="font-inter text-[#020D2B] text-opacity-60 text-[13px] leading-[1.21]">
                You agree to our friendly{' '}
                <a href="/frontend/privacypolicy" target="_blank" className="underline">
                  Privacy policy
                </a>
              </p>
              {errors.privacy && (
                <span className="text-red-500 text-sm">{errors.privacy.message}</span>
              )}
            </div>

            <button
              disabled={isLoading}
              type="submit"
              className="w-full mt-5 mb-5 p-2 text-white font-semibold rounded-[7px] text-center"
              style={{
                backgroundColor: '#4E18CD',
              }}
            >
              {isLoading ? 'Sending.....' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
