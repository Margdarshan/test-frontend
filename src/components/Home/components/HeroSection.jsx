import React from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme,
} from '@mui/material';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        p: isMobile ? 2 : 4,
        backgroundColor: '#f4f4f4',
        textAlign: 'center',
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Typography
          variant={isMobile ? 'h5' : 'h3'}
          sx={{ color: '#6a1b9a', mb: 2 }}
        >
          Ready to level up? Explore colleges & conquer exams with confidence!
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: 3,
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Mentorship"
            style={{
              width: isMobile ? '100%' : '40%',
              borderRadius: '8px',
              marginBottom: isMobile ? '16px' : '0',
              marginRight: isMobile ? '0' : '16px',
            }}
          />
          <img
            src="https://via.placeholder.com/150"
            alt="Mentorship"
            style={{
              width: isMobile ? '100%' : '40%',
              borderRadius: '8px',
            }}
          />
        </Box>
      </Box>
      <Typography variant="body1" sx={{ color: '#424242', mb: 3 }}>
        Margdarshan: Your comprehensive platform guiding JEE and NEET aspirants
        from preparation to college admission. Revolutionizing exam preparation
        with personalized solutions and invaluable resources for student
        success.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <Button variant="contained" sx={{ mr: 2, backgroundColor: '#6a1b9a' }}>
          Mentorship
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: '#6a1b9a', color: '#6a1b9a' }}
        >
          College Predictor
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 3,
        }}
      >
        <Avatar src="https://via.placeholder.com/40" />
        <Avatar src="https://via.placeholder.com/40" />
        <Avatar src="https://via.placeholder.com/40" />
        <Typography variant="body2" sx={{ ml: 1 }}>
          15K+ Satisfied Students
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ p: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 1 }}>
              Aim
            </Typography>
            <Typography variant="body2">
              Help students achieve success by unlocking the secret to winning
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ p: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 1 }}>
              Plan
            </Typography>
            <Typography variant="body2">
              Provide personalized solutions for JEE Main, JEE Advanced, and NEE
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ p: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ color: '#6a1b9a', mb: 1 }}>
              Achieve
            </Typography>
            <Typography variant="body2">
              Guide students on the perfect trajectory towards their dream
              institution
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
