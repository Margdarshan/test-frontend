import React from 'react';
import { Controller } from 'react-hook-form';

const TextField = ({
  control,
  name,
  label,
  type = 'text',
  placeholder = '',
  helperText = '',
  errorMessage = '',
  className = '',
  inputClass = '',
  rules = {},
  customPattern = null,
  variant = 'outlined',  // Default to 'outlined'
  ...rest
}) => {
  // Determine the appropriate pattern based on the field type
  const getPattern = (type) => {
    switch (type) {
      case 'email':
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      case 'tel':
        return /^[+]?[0-9]{1,4}?[.-\s]?[0-9]{1,3}[.-\s]?[0-9]{3}[.-\s]?[0-9]{4}$/;
      case 'number':
        return /^[0-9]+$/;
      default:
        return customPattern || undefined;
    }
  };

  const pattern = getPattern(type);

  const combinedRules = {
    ...rules,
    pattern: pattern ? { value: pattern, message: `Invalid ${type} format` } : undefined,
  };

  // Define the classNames based on the variant
  const getVariantClasses = (variant) => {
    switch (variant) {
      case 'outlined':
        return 'border border-gray-300 focus:outline-none focus:ring focus:border-blue-500';
      case 'filled':
        return 'bg-gray-100 border-2 border-gray-300 focus:outline-none focus:ring focus:border-blue-500';
      case 'standard':
        return 'border-b border-gray-300 focus:outline-none focus:ring focus:border-blue-500';
      default:
        return 'border border-gray-300 focus:outline-none focus:ring focus:border-blue-500';
    }
  };

  const variantClasses = getVariantClasses(variant);

  return (
    <div className={`mb-4 ${className}`}>
      {label && <label htmlFor={name} className="block text-sm mb-1">{label}</label>}

      <Controller
        control={control}
        name={name}
        rules={combinedRules}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`block w-full p-2 rounded ${variantClasses} ${inputClass}`}
            {...rest}
          />
        )}
      />

      {helperText && (
        <p className="text-sm text-gray-500 mt-1">
          {helperText}
        </p>
      )}

      {errorMessage && (
        <p className="text-sm text-red-500 mt-1">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default TextField;
