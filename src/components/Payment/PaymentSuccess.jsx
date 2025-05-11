/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';

const PaymentSuccess = ({ closeModal }) => {
  const navigate = useNavigate();
  // background: 'linear-gradient(180deg, rgba(78, 24, 205, 0.14) 0%, rgba(255, 255, 255, 0.00) 100%)'
  useEffect(() => {
    localStorage.removeItem('amount');
  }, []);
  return (
    <div className="modal">
      <MetaTitle title='Payment Success' />
      <Container sx={{ border: 'none' }} maxWidth="md">
        <Box
          sx={{
            mx: 0,
            p: 3,

            borderRadius: '12px',
            textAlign: 'center',
            bgcolor: '#ffffff',
          }}
        >
          <VerifiedUserIcon sx={{ fontSize: 70, color: '#6200EA', mb: 2 }} />{' '}
          <CloseIcon
            onClick={() => navigate('/frontend/')}
            sx={{ float: 'right', cursor: 'pointer' }}
          />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: '#6200EA',
              whiteSpace: 'nowrap',
              fontSize: '21px',
              mb: 2,
              sm: { fontSize: '35px', mb: 3 },
            }}
          >
            Your Payment is Successful
          </Typography>
          <Typography
            paragraph
            sx={{
              fontFamily: 'Inter',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '22px',
              textAlign: 'start',
              mx: 2,
            }}
          >
            Congratulations on securing your spot in our mentorship program!
            Your payment has been successfully processed, and we're excited to
            embark on this academic journey with you. Keep an eye on your inbox
            for important updates, session schedules, and exclusive resources to
            support your learning journey.
          </Typography>
          <Typography
            paragraph
            sx={{
              fontFamily: 'Inter',
              fontSize: '15px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '22px',
              textAlign: 'start',
              mx: 2,
            }}
          >
            Feel free to reach out to us anytime if you have questions or need
            assistance.
            <a
              href="mailto:support@marg-darshan.com"
              style={{ color: '#6200EA', textDecoration: 'none' }}
            >
              {' '}
              support@marg-darshan.com
            </a>
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            sx={{ mt: 2, color: '#6200EA', borderColor: '#6200EA' }}
            onClick={() => navigate('/frontend/')}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </div>
  );
};
PaymentSuccess.propTypes = {
  closeModal: PropTypes.func
}

export default PaymentSuccess;
