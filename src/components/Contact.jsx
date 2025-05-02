import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ConnectWithMe from './ConnectWithMe';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, position: 'relative' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontSize: { xs: '2rem', md: '3rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100px',
                height: '3px',
                background: 'linear-gradient(90deg, #00f7ff, #ff00ff)',
                borderRadius: '2px',
              },
            }}
          >
            Get In Touch
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box
              component="form"
              sx={{
                width: '100%',
                maxWidth: '600px',
                '& .MuiTextField-root': { 
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: '#ffffff',
                    '& fieldset': {
                      borderColor: 'rgba(0, 247, 255, 0.2)',
                    },
                    '&:hover fieldset': {
                      borderColor: '#00f7ff',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#00f7ff',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255, 255, 255, 0.7)',
                    '&.Mui-focused': {
                      color: '#00f7ff',
                    },
                  },
                },
              }}
            >
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                required
                type="email"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                required
                multiline
                rows={4}
              />
              <Button
                variant="contained"
                size="large"
                fullWidth
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
                Send Message
              </Button>
            </Box>
          </Box>
          <ConnectWithMe />
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 