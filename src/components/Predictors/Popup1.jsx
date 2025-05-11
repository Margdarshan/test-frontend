import React from 'react';
import { Modal, Paper, Typography } from '@mui/material';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-unused-vars
const StyledPaper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  width: 400,
  //   backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 'none',
}));

const CustomPopup = ({ open, onClose, message }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <StyledPaper>
        <Typography
          className="text-red-600 text-center"
          variant="h6"
          id="popup-title"
          gutterBottom
        >
          Error
        </Typography>
        <Typography
          className="text-red-600 text-center"
          variant="body1"
          id="popup-description"
        >
          {message}
        </Typography>
      </StyledPaper>
    </Modal>
  );
};
CustomPopup.propTypes ={
  open: PropTypes.func,
  onClose: PropTypes.func,
  message: PropTypes.string
}

export default CustomPopup;
