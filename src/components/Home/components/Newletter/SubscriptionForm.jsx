import React from 'react';
import FormInput from './FormInput';

function SubscriptionForm() {
  const formInputs = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
    { name: 'mobileNumber', label: 'Mobile Number', type: 'tel' },
    { name: 'examination', label: 'Examination', type: 'text' },
  ];

  return (
    <div className="flex flex-col ml-5 lg:w-6/12 max-md:ml-0 max-md:w-full">
      <form className="flex flex-col mt-24 w-full text-base text-neutral-400 max-md:mt-10">
        <h2 className="self-start text-4xl font-semibold text-black">
          Subscribe to our <br /> Newsletter!
        </h2>
        <p className="self-start mt-8 text-xl">
          Be the first to get exclusive offers <br /> ands the latest news
        </p>
        {formInputs.map((input) => (
          <FormInput key={input.name} {...input} />
        ))}
        <button
          type="submit"
          className="px-16 py-3.5 mt-12 text-xl font-semibold text-white rounded-xl bg-slate-900 max-md:px-5 max-md:mt-10"
        >
          Subscribe Now
        </button>
      </form>
    </div>
  );
}

export default SubscriptionForm;
