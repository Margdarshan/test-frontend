/* eslint-disable react/prop-types */
import React from 'react';

const SelectInput = ({ label, name, id, options, value, onChange, required = false }) => (
    <div className='my-2'>
        <label htmlFor={id} className="block px-1 text-sm font-medium leading-6 text-[#344767]">
            {label} {required && <span className="text-red-600">*</span>}
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <select
                name={name}
                id={id}
                className="block w-full rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={value}
                onChange={onChange}
            >
                <option disabled value={'0'}>Select category</option>
                {options.map((option, index) => (
                    <option value={option} key={index}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    </div>
);

export default SelectInput;
