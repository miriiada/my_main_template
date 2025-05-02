import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { FaTelegram, FaGithub, FaLinkedin } from 'react-icons/fa';

const ConnectWithMe = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        mt: 8,
        mb: 4,
      }}
    >
      <Typography 
        variant="h5" 
        gutterBottom
        sx={{
          color: '#00f7ff',
          fontWeight: 600,
          textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
          mb: 4,
        }}
      >
        Connect With Me
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          gap: 3,
          mb: 4,
        }}
      >
        <IconButton
          size="large"
          href="https://t.me/your_telegram"
          target="_blank"
          sx={{ 
            color: '#00f7ff',
            '&:hover': {
              color: '#ff00ff',
              transform: 'scale(1.1)',
              transition: 'all 0.3s',
            },
          }}
        >
          <FaTelegram />
        </IconButton>
        <IconButton
          size="large"
          href="https://github.com/your_github"
          target="_blank"
          sx={{ 
            color: '#00f7ff',
            '&:hover': {
              color: '#ff00ff',
              transform: 'scale(1.1)',
              transition: 'all 0.3s',
            },
          }}
        >
          <FaGithub />
        </IconButton>
        <IconButton
          size="large"
          href="https://linkedin.com/in/your_linkedin"
          target="_blank"
          sx={{ 
            color: '#00f7ff',
            '&:hover': {
              color: '#ff00ff',
              transform: 'scale(1.1)',
              transition: 'all 0.3s',
            },
          }}
        >
          <FaLinkedin />
        </IconButton>
      </Box>
      <Typography 
        variant="body1" 
        sx={{ 
          color: '#ffffff',
          maxWidth: '400px',
        }}
      >
        Feel free to reach out to me for any questions or opportunities.
        I'm always open to discussing new projects and collaborations.
      </Typography>
    </Box>
  );
};

export default ConnectWithMe; 