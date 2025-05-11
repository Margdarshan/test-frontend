// import React from 'react';
// import PropTypes from 'prop-types';
// const CustomSelect = ({
//   label,
//   name,
//   value,
//   onChange,
//   options,
//   required = false,
// }) => {
//   return (
//     <>
//       <label
//         style={{
//           textAlign: 'center',
//           position: 'absolute',
//           top: '10px',
//           marginBottom: '0.5rem',
//           left: '10px',
//           backgroundColor: '#fff',
//           padding: '0px 15px',
//           fontWeight: 600,
//           color: '#16191D',
//           fontFamily: 'Inter',
//           fontSize: '12px',
//         }}
//       >
//         {label}
//         {required && <span style={{ color: 'red', marginLeft: '5px' }}>*</span>}
//       </label>
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         style={{
//           width: '100%',
//           padding: '8px 4px',
//           border: 'none',
//           boxSizing: 'border-box',
//           borderRadius: '4px',
//           appearance: 'none',
//           backgroundColor: '#fff',
//         }}
//       >
//         {options.map((option) => (
//           <option
//             key={option.label}
//             value={option.label}
//             style={{
//               position: 'relative',
//               wordWrap: 'break-word',
//               overflowWrap: 'break-word',
//             }}
//           >
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </>
//   );
// };

// CustomSelect.propTypes = {
//   label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//   onChange: PropTypes.func.isRequired,
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
//         .isRequired,
//       value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     })
//   ),
//   required: PropTypes.bool,
// };

// export default CustomSelect;

import React from 'react';
import PropTypes from 'prop-types';

const CustomSelect = React.forwardRef(({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
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
      <select
        ref={ref}
        name={name}
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          padding: '8px 4px',
          border: 'none',
          boxSizing: 'border-box',
          borderRadius: '4px',
          appearance: 'none',
          backgroundColor: '#fff',
        }}
      >
        {options.map((option) => (
          <option
            key={option.label}
            value={option.label}
            style={{
              position: 'relative',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
});

CustomSelect.displayName = 'CustomSelect';

CustomSelect.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  required: PropTypes.bool,
};

export default CustomSelect;

