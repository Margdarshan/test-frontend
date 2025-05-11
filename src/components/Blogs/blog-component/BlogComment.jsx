import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import AvatarName from '../../../core/avatarGroup/AvatarName';

const BlogComment = ({ name, profilephoto, username, comment }) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <AvatarName authorName={name} />
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {username || ''}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 1 }}>
        <Typography variant="body1">{comment}</Typography>
      </Box>
    </Box>
  );
};

BlogComment.propTypes = {
  name: PropTypes.string.isRequired,
  profilephoto: PropTypes.string,
  username: PropTypes.string,
  comment: PropTypes.string.isRequired,
};

export default BlogComment;
