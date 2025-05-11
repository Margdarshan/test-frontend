import React from 'react';
import PropTypes from 'prop-types';
const ContactUsLabel = ({ label }) => {
  return (
    <label
      style={{
        color: '#020D2B',
        textAlign: 'left',
        fontFamily: 'Inter, sans-serif',
        fontSize: '17px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '24px',
        display: 'block',
        marginBottom: '8px',
      }}
    >
      {label}
    </label>
  );
};
ContactUsLabel.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default ContactUsLabel;
