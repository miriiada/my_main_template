import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a2e 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 
            'radial-gradient(circle at 20% 20%, rgba(0, 247, 255, 0.1) 0%, transparent 50%),' +
            'radial-gradient(circle at 80% 80%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)',
          zIndex: 1,
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
              background: 'linear-gradient(45deg, #00f7ff, #ff00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 10px rgba(0, 247, 255, 0.5)',
            }}
          >
            Hi, I'm Miriiada
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              textAlign: 'center',
              color: '#00f7ff',
              mb: 4,
              textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
            }}
          >
            Telegram Bot Developer & Web Automation Specialist
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              color: '#ffffff',
              mb: 4,
            }}
          >
            Creating innovative solutions for Telegram automation, web parsing, and bot development
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #00f7ff, #ff00ff)',
                color: '#0a0a1a',
                fontWeight: 600,
                '&:hover': {
                  background: 'linear-gradient(45deg, #ff00ff, #00f7ff)',
                  boxShadow: '0 0 20px rgba(0, 247, 255, 0.8)',
                },
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#00f7ff',
                color: '#00f7ff',
                '&:hover': {
                  borderColor: '#ff00ff',
                  color: '#ff00ff',
                  boxShadow: '0 0 20px rgba(0, 247, 255, 0.5)',
                },
              }}
            >
              Contact Me
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 