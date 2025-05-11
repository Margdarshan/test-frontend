import React from 'react';
import PropType from 'prop-types';
function FormInput({ name, label, type }) {
  return (
    <div className="mt-5 first:mt-12">
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={label}
        className="w-full px-5 py-4 rounded-xl border border-solid border-zinc-400 min-h-[50px]"
        aria-label={label}
      />
    </div>
  );
}

FormInput.propTypes = {
  name: PropType.string.isRequired,
  label: PropType.string.isRequired,
  type: PropType.string.isRequired,
};

export default FormInput;
