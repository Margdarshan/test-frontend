import React from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const CustomBox = ({ children, required = false }) => {
  return (
    <Box sx={{ marginBottom: '16px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: '30px',
          px: 2.5,
          pb: 1.7,
          border: '1px solid #ccc',
          borderRadius: '8px',
          minHeight: '5rem',
          position: 'relative',
          width: '100%',
          boxSizing: 'border-box',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

CustomBox.propTypes = {
  children: PropTypes.node.isRequired, // Required prop that can be any renderable content
  required: PropTypes.bool, // Optional required flag
};

export default CustomBox;
