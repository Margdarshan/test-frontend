import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip } from '@mui/material';

const BlogTag = ({ tags }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 16,
        right: 15,
        display: 'flex',
        gap: '8px',
      }}
    >
      {tags.map((tag, tagIndex) => (
        <Chip
          key={tagIndex}
          label={tag}
          sx={{
            padding: '0px 10px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '10px',
            color: '#4E18CD',
            backgroundColor: '#FFF',
          }}
          variant="filled"
        />
      ))}
    </Box>
  );
};

BlogTag.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default BlogTag;
