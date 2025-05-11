import React from 'react';
import { Card, Stack, Button, Typography, Box } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const MentorshipCard = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/frontend/mentorship');
  };

  return (
    <Card sx={{ boxShadow: 'none' }}>
      <Stack
        sx={{
          backgroundColor: '#BA16FF',

          p: 3,
          justifyContent: 'center',
        }}
        spacing={2}
      >
        <Button
          variant="outlined"
          sx={{
            borderRadius: '50px',
            borderColor: 'white',
            color: 'white',
            textTransform: 'none',
            fontWeight: 'medium',
            fontSize: '1rem',
            alignSelf: 'flex-start',
            px: 3,
          }}
        >
          Product
        </Button>

        <Typography
          variant="h5"
          component="p"
          sx={{
            color: 'white',
          }}
        >
          Need Mentorship?
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'white',
            lineHeight: 1.6,
            fontFamily: 'monrope',
          }}
        >
          Discover your path: Elevate your studies with Personalized Mentorship.
          Let’s achieve your academic goals together.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            cursor: 'pointer',
          }}
          onClick={handleNavigation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="71"
            height="72"
            viewBox="0 0 71 72"
            fill="none"
          >
            <ellipse cx="35.5" cy="36" rx="35.5" ry="36" fill="white" />
            <path
              d="M45.5342 26.9654C45.5342 26.4131 45.0864 25.9654 44.5342 25.9654L35.5342 25.9654C34.9819 25.9654 34.5342 26.4131 34.5342 26.9654C34.5342 27.5176 34.9819 27.9654 35.5342 27.9654L43.5342 27.9654L43.5342 35.9654C43.5342 36.5176 43.9819 36.9654 44.5342 36.9654C45.0864 36.9654 45.5342 36.5176 45.5342 35.9654L45.5342 26.9654ZM27.172 45.7418L45.2413 27.6725L43.827 26.2583L25.7577 44.3276L27.172 45.7418Z"
              fill="black"
            />
          </svg>
        </Box>
      </Stack>
    </Card>
  );
};

export default MentorshipCard;
