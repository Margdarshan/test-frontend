import * as React from 'react';
import { useState } from 'react';
import api from '../../api';
import PropTypes from 'prop-types';

function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="justify-center items-start p-3.5 mt-3 md:mt-5 mr-3.5 ml-1.5 md:ml-3.5 rounded-xl bg-violet-800 bg-opacity-10 max-md:pr-5 max-md:mr-2.5 max-md:max-w-full">
      <label htmlFor={type} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={type}
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none"
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};


function Form() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [classes, setClasses] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleClassesChange = (e) => {
    setClasses(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/consult/', {
        name,
        phone,
        classes,
        city,
        email,
      });
      if (response.status === 200) {
        alert('Thank you for booking a free online counselling session!');
        setName('');
        setPhone('');
        setEmail('');
        setCity('');
        setClasses('');
      } else {
        alert('An error occurred. Please try again.');
      }
    } catch (err) {
      alert('An error occurred. Please try again.');
    }
  };

  const inputFields = [
    {
      label: 'Full Name',
      type: 'text',
      placeholder: 'Full Name',
      value: name,
      onChange: handleNameChange,
    },
    {
      label: 'Phone Number',
      type: 'tel',
      placeholder: 'Phone Number',
      value: phone,
      onChange: handlePhoneChange,
    },
    {
      label: 'Email',
      type: 'email',
      placeholder: 'Email',
      value: email,
      onChange: handleEmailChange,
    },
    {
      label: 'City',
      type: 'text',
      placeholder: 'City',
      value: city,
      onChange: handleCityChange,
    },
  ];

  return (
    <div className="px-2 py-2.5 w-full text-sm font-medium bg-white rounded-2xl text-slate-900 text-opacity-40 max-md:mt-10 max-md:max-w-full mt-12 border-black ">
      <div className="bg-black mt-4 mx-6 rounded-lg">
        <p className="text-white py-1 text-center font-semibold text-[17px] font-manrope">
          Book a Free online counselling Session
        </p>
      </div>

      <div className="flex flex-col">
        <form onSubmit={handleSubmit}>
          {inputFields.map((field, index) => (
            <InputField
              key={index}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={field.value}
              onChange={field.onChange}
            />
          ))}
          <div className="flex gap-5 justify-between px-4 py-3 mt-3 md:mt-5 mr-3.5 ml-1.5 md:ml-3.5 rounded-xl bg-violet-800 bg-opacity-10 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
            <select
              id="classSelect"
              className="bg-transparent outline-none w-full"
              aria-label="Select Class"
              value={classes}
              onChange={handleClassesChange}
            >
              <option disabled>Select Class</option>
              <option value="Class IX">Class IX</option>
              <option value="Class X">Class X</option>
              <option value="Class XI">Class XI</option>
              <option value="Class XII">Class XII</option>
            </select>
          </div>
          <div className="flex justify-end mx-3">
            <button
              type="submit"
              className="px-6 py-3.5 mt-2 mb-0 text-base whitespace-nowrap rounded-xl text-zinc-50 max-md:px-5 transition duration-300 ease-in-out hover:bg-black"
              style={{ backgroundColor: '#4E18CD' }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
