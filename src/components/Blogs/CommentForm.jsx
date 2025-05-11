import React from 'react';
import {
  Typography,
  TextField,
  Button,
  TextareaAutosize,
  Box,
} from '@mui/material';

const CommentForm = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ fontFamily: 'Manrope', color: '#252525', mt: 3 }}
      >
        Post a comment
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '14px', mt: '20px' }}>
        <Box sx={{ flex: '1', minWidth: '220px' }}>
          <Typography variant="body1" sx={{ fontSize: '16px' }}>
            <span style={{ color: '#FF0000', marginRight: '5px' }}>*</span>Full
            Name
          </Typography>
          <TextField
            type="text"
            placeholder="Enter your full name"
            variant="outlined"
            fullWidth
            sx={{ mt: '8px' }}
          />
        </Box>
        <Box sx={{ flex: '1', minWidth: '220px' }}>
          <Typography variant="body1" sx={{ fontSize: '16px' }}>
            <span style={{ color: '#FF0000', marginRight: '5px' }}>*</span>Email
          </Typography>
          <TextField
            type="email"
            placeholder="Enter your email"
            variant="outlined"
            fullWidth
            sx={{ mt: '8px' }}
          />
        </Box>
      </Box>
      <Box sx={{ mt: '20px' }}>
        <Typography variant="body1" sx={{ fontSize: '16px' }}>
          <span style={{ color: '#FF0000', marginRight: '5px' }}>*</span>Your
          comment
        </Typography>
        <TextareaAutosize
          placeholder="Enter your comment"
          minRows={4}
          maxRows={8}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #333',
            borderRadius: '4px',
            resize: 'none',
          }}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          fontFamily: 'Manrope',
          fontSize: '17px',
          borderRadius: '6px',
          color: 'white',
          backgroundColor: '#4E18CD',
          width: '160px',
          height: '40px',
          mt: '20px',
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default CommentForm;
