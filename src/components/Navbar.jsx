import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'transparent', 
        boxShadow: 'none',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 247, 255, 0.1)',
      }}
    >
      <Toolbar>
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ 
            flexGrow: 1,
            color: '#00f7ff',
            fontWeight: 600,
            textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
          }}
        >
          Miriiada
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            href="#about" 
            sx={{ 
              color: '#ffffff',
              mx: 1,
              '&:hover': {
                color: '#00f7ff',
                textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
              },
            }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            href="#projects" 
            sx={{ 
              color: '#ffffff',
              mx: 1,
              '&:hover': {
                color: '#00f7ff',
                textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
              },
            }}
          >
            Projects
          </Button>
          <Button 
            color="inherit" 
            href="#contact" 
            sx={{ 
              color: '#ffffff',
              mx: 1,
              '&:hover': {
                color: '#00f7ff',
                textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
              },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 