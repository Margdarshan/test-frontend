import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import ImageAvatarGroup from '../../../../core/avatarGroup/ImageAvatarGroup';

const ContactCard = ({ images }) => {
  if (!images) return <CircularProgress />;

  return (
    <Box
      sx={{
        my: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
      }}
    >
      <ImageAvatarGroup images={images} />
      <Typography
        variant="h6"
        sx={{
          marginTop: '15px',
          color: '#101828',
          my: 1,
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '20px',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '30px', // 150%
        }}
      >
        Still have questions?
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        sx={{
          marginTop: '10px',
          marginBottom: '20px',
          color: '#667085',
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '28px',
        }}
      >
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          borderRadius: '8px',
          my: 2,
          backgroundColor: '#4E18CD',
          boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          display: 'flex',
          padding: '10px 18px',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          border: '2px solid #4E18CD',
          background: '#4E18CD',
          ':hover': {
            background: '#FFF',
            color: '#4E18CD',
            border: '2px solid #4E18CD',
          },
        }}
      >
        Get in touch
      </Button>
    </Box>
  );
};

ContactCard.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

export default ContactCard;
