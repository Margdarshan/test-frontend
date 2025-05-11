import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const BenefitItem = ({ title, description }) => {
  return (
    <Box textAlign="center" px={2}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: '#7F56D9',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '30px',
          fontWeight: 600,
          lineHeight: '72px',
          letterSpacing: '-0.6px',
          textTransform: 'capitalize',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#667085',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
BenefitItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BenefitItem;
