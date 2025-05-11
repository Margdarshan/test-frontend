import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const FeatureHeading = ({ heading, description }) => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Manrope',
          fontSize: '30px',
          fontWeight: 700,
          lineHeight: 'normal',
          color: '#252525',
          marginBottom: '16px', // Adjust margin bottom as needed
          textAlign: 'left',
        }}
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'Manrope',
          fontSize: '21px',
          fontWeight: 500,
          lineHeight: '28px',
          color: '#525252',
          textAlign: 'left',
          mb: 5,
        }}
      >
        {description}
      </Typography>
    </>
  );
};
FeatureHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureHeading;
