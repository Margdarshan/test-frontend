import React from 'react';
import { Box, Button, Paper, Container, Typography } from '@mui/material';
import { CancelRounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import MetaTitle from '../../core/components/Metatitle/MetaTitle';

const PaymentUnSuccess = () => {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        py: 5,
        boxShadow: 'none',
        background:
          'linear-gradient(180deg, rgba(78, 24, 205, 0.14) 0%, rgba(255, 255, 255, 0.00) 100%)',
      }}
    >
      <MetaTitle title='Payment UnSuccess' />
      <Container maxWidth="md" sx={{ my: 5 }}>
        <Box
          sx={{
            mt: 5,
            p: 3,
            borderRadius: '12px',
            border: '1px solid #333',
            textAlign: 'center',
            bgcolor: '#ffffff',
          }}
        >
          <CancelRounded sx={{ fontSize: '60px', color: '#C92121', mb: 2 }} />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: '#6200EA',
              whiteSpace: 'nowrap',
              fontSize: '21px',
              mb: 2,
              sm: { fontSize: '35px', mb: 4 },
            }}
          >
            Your Payment was UnSuccessful
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
            We regret to inform you that your payment for our mentorship program
            was unsuccessful. Please review your payment details and try again
            to secure your spot in our program. If you need assistance or have
            any questions.
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
            Feel free to contact us at:
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
    </Paper>
  );
};

export default PaymentUnSuccess;
