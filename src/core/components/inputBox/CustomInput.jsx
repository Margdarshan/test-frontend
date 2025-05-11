import React from 'react';
import PropTypes from 'prop-types';
import './input.css'

const CustomInput = React.forwardRef(({
  disabled,
  type,
  label,
  placeholder,
  name,
  value,
  onChange,
  required = false,
  helperText,
}, ref) => {
  return (
    <>
      <label
        style={{
          textAlign: 'center',
          position: 'absolute',
          top: '10px',
          marginBottom: '0.5rem',
          left: '10px',
          backgroundColor: '#fff',
          padding: '0px 15px',
          fontWeight: 600,
          color: '#16191D',
          fontFamily: 'Inter',
          fontSize: '12px',

        }}
      >
        {label}
        {required && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
      </label>
      <input

        // ref={ref}
        ref={(el) => {
          if (ref) {
            if (typeof ref === 'function') {
              ref(el);
            } else {
              ref.current = el;
            }
          }
          if (el && type === 'number') {
            el.addEventListener('wheel', function (e) {
              e.preventDefault();
            }, { passive: false });
          }
        }}
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        onChange={onChange}
        style={{
          width: '100%',
          minHeight: '2rem',
          marginTop: '8px',
          paddingTop: '8px',
          paddingBottom: '8px',
          paddingLeft: '4px',
          border: 'none',
          boxSizing: 'border-box',
          borderRadius: '4px',
          outline: 'none',
          MozAppearance: type === 'number' ? 'textfield' : undefined,
          WebkitAppearance: type === 'number' ? 'none' : undefined,
        }}
      />
      {helperText ? <p className='text-start text-red-500'>{helperText}</p> : null}
    </>
  );
});

CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default CustomInput;
