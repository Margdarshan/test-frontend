import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, AvatarGroup } from '@mui/material';

const ImageAvatarGroup = ({ images }) => {
  return (
    <AvatarGroup max={4}>
      {images.map((img, index) => (
        <Avatar key={index} alt={`Avatar ${index + 1}`} src={img} />
      ))}
    </AvatarGroup>
  );
};

ImageAvatarGroup.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // Required array of image URLs
};

export default ImageAvatarGroup;
