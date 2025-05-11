/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useForm } from 'react-hook-form';
import usePost from '../../core/hooks/usePost';

const NewsLetter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset
  } = useForm({ mode: 'onChange' }); // onChange mode enabled

  const { mutate } = usePost('/newsletter', {
    resourceName: 'You have Subscribed News Letter',
  });

  const selectedClass = watch('class');
  const selectedStream = watch('stream');
  const subscribe = watch('subscribe');

  const onSubmit = (data) => {
    const payloadData = {
      name: data.name,
      email: data.email,
      mobile: String(data.phone),
      classes: data.class,
      stream: data.stream || '',
    };
    mutate(payloadData);
    reset();
  };

  return (
    <div className="flex justify-center items-center bg-[#020D2B] py-16 mt-7">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center bg-white text-[#0A043C] p-8 rounded-lg">
        <div className="lg:w-1/2 lg:pr-8 text-center lg:text-left mb-8 lg:mb-0">
          <div className="font-Manrope text-xl font-semibold lg:text-2xl mb-4">
            Newsletter
          </div>
          <div className="font-Manrope font-semibold text-[35px] leading-[53px] mb-4">
            GET STARTED WITH <span className="text-[#4E18CD]">MARGDARSHAN</span>
          </div>
          <div className="font-Manrope text-[16px] leading-[35px] mb-8">
            “Nurture Your Potential: Empowering Students with Engaging Content
            and Essential Resources through Our Impactful Newsletter!”
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg lg:w-1/2" noValidate>
          <div className="flex flex-col gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Full Name"
              {...register('name', { required: 'Full Name is required' })}
              className={`w-full p-2 border-b-2 focus:outline-none focus:border-[#4E18CD] ${errors.name ? 'border-red-500' : ''}`}
              aria-describedby="nameHelper"
              required
            />
            {errors.name && (
              <p id="nameHelper" className="text-red-500 text-xs mt-1">
                {errors.name.message}
              </p>
            )}

            <input
              type="text"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  message: 'Please enter a valid email address'
                }
              })}
              className={`w-full p-2 border-b-2 focus:outline-none focus:border-[#4E18CD] ${errors.email ? 'border-red-500' : ''}`}
              aria-describedby="emailHelper"
              required
            />
            {errors.email && (
              <p id="emailHelper" className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              {...register('phone', {
                required: 'Phone number is required',
                minLength: {
                  value: 10,
                  message: 'Phone number must be 10 digits.'
                },
                maxLength: {
                  value: 10,
                  message: 'Phone number must be 10 digits.'
                },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be 10 digits.'
                },
              })}
              className={`w-full p-2 border-b-2 focus:outline-none focus:border-[#4E18CD] ${errors.phone ? 'border-red-500' : ''}`}
              aria-describedby="phoneHelper"
              required
            />
            {errors.phone && (
              <p id="phoneHelper" className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
            <div className='sm:flex justify-between'>
              <div className='grid w-full  mb-6 md:mb-0 sm:pr-4'>
                <select
                  {...register('class', {
                    required: 'Class is required',
                    validate: value =>
                      ['IX', 'X', 'XI', 'XII', 'Dropper'].includes(value) || "Class must be IX, X, XI, or XII",
                  })}
                  className={`w-full p-2 border-b-2 focus:outline-none focus:border-[#4E18CD] ${errors.class ? 'border-red-500' : ''}`}
                  aria-describedby="classHelper"
                  defaultValue=""
                >
                  <option value="" disabled>Select Class</option>
                  <option value="IX">IX</option>
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                  <option value="XII">XII</option>
                  <option value="Dropper">Dropper</option>
                </select>
                {errors.class && (
                  <p id="classHelper" className="text-red-500 text-xs mt-1">
                    {errors.class.message}
                  </p>
                )}
              </div>
              <div className='grid w-full  sm:pl-4'>
                <select
                  {...register('stream', {
                    required: 'Stream is required',
                    validate: value =>
                      ['PCM', 'PCB'].includes(value) || "Stream must be PCM or PCB",
                  })}
                  className={`w-full p-2 border-b-2 mb-3 sm:mb-0 focus:outline-none focus:border-[#4E18CD] ${errors.stream ? 'border-red-500' : ''}`}
                  aria-describedby="streamHelper"
                  defaultValue=""
                >
                  <option value="" disabled>Select Stream</option>
                  <option value="PCM">PCM</option>
                  <option value="PCB">PCB</option>
                </select>
                {errors.stream && (
                  <p id="streamHelper" className="text-red-500 text-xs mt-1">
                    {errors.stream.message}
                  </p>)}
              </div>
            </div>
          </div>

          <div className="flex items-start text-left mb-4">
            <input
              type="checkbox"
              {...register('subscribe', { required: 'You must agree to subscribe' })}
              className="mr-2 mt-[7px]"
              required
            />
            <div>
              {errors.subscribe && (
                <p id="subscribeHelper" className="text-red-500 text-xs mt-1">
                  {errors.subscribe.message}
                </p>
              )}
              {!errors.subscribe && subscribe && isValid && (
                <p className="text-green-500 text-xs mt-1">You're ready to go!</p>
              )}
              <span className="text-xs leading-[20px]">
                Stay in the Loop: Get Notified! Subscribe to Our Newsletter for
                Timely Updates, Exclusive Content, and Exciting Opportunities.
              </span>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              className="px-[20px] py-[8px] md:px-[40px] md:py-[10px] text-white font-semibold rounded-full font-Manrope 
              bg-[#4E18CD] hover:bg-[#62e33b] transition duration-200 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
