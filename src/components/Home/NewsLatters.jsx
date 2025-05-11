import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const NewsletterSubscription = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid
        item
        xs={12}
        md={6}
        sx={{ visibility: isSm || isXs ? 'hidden' : 'visible' }}
      >
        <img
          src="https://s3-alpha-sig.figma.com/img/5888/96a7/a5221c9da191a09eb28aa8c0986eb619?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pZ0HOnqm0SUv9qFMGXMUqyXkkWJV88oYJ8kNm1MEDnWdh4g3N64LL4f2oMbYcAh06H7WYCiU6WXE2uYTVwn9LayoBFKE32jAOCpi4xJ~kbjNdS6xTYu8kg14Mnllrrpj4AFLuJsaFS3V3adYI6c0aoMndfZ7-PzfCVWpGxhsStv67OqDJL449du7WMYd5VfLZGM0IaZnewIRbQiG2HnNGxGu-dvbB3xBf1v9ohNxpRHmP66zg8tSeuMO4MeBMD8uvvL9ajxXkh19WDjugCeTtuglTXqEBoQK0HO6Swy3bpGESFxiiWY22tmHyhglO59JJUjip2e7DfAZWgCRHco7NA__"
          alt="Subscribe"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: isXs || isSm ? '1rem' : '2rem',
            backgroundColor: isXs || isSm ? 'white' : '#f4f6f8',
            borderRadius: '10px',
            boxShadow: isXs || isSm ? 'none' : '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: '#000',
              fontFamily: 'Manrope, sans-serif',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: 'normal',
            }}
          >
            Subscribe to our Newsletter!
          </Typography>

          <Typography
            variant="body2"
            gutterBottom
            sx={{
              color: '#908F8F',
              fontFamily: 'Inter, sans-serif',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Be the first to get exclusive offers and the latest news
          </Typography>

          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Mobile Number"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Examination"
            variant="outlined"
            margin="normal"
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,

              flexShrink: 0,
              borderRadius: '10px',
              backgroundColor: '#020D2B',
            }}
          >
            Subscribe Now
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NewsletterSubscription;
