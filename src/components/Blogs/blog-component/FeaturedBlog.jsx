import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

const FeaturedBlog = ({ href, imgSrc, date, title }) => {
  return (
    <Box
      component="a"
      href={href}
      sx={{
        position: 'relative',
        width: 420,
        height: 356,
        backgroundColor: 'gray.200',
        borderRadius: '8px',
        overflow: 'hidden',
        m: 2,
        display: 'block',
        textDecoration: 'none',
      }}
    >
      <img
        src={imgSrc}
        alt={title}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          p: 2,
          width: '100%',
        }}
      >
        <Typography color="textSecondary" variant="body2">
          {date}
        </Typography>
        <Typography color="textPrimary" variant="h6">
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
FeaturedBlog.propTypes = {
  href: PropTypes.string,
  imgSrc: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
};
export default memo(FeaturedBlog);
