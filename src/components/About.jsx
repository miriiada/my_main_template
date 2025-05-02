import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'Telegram API',
    'Web Automation',
    'Data Parsing',
    'SQL',
  ];

  return (
    <Box id="about" sx={{ py: 8, position: 'relative' }}>
      <Container>
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
            About Me
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ flex: 1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  background: 'linear-gradient(145deg, rgba(10, 10, 26, 0.8), rgba(20, 20, 40, 0.8))',
                  border: '1px solid rgba(0, 247, 255, 0.2)',
                  borderRadius: '20px',
                  p: 4,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 20px rgba(0, 247, 255, 0.3)',
                    borderColor: '#00f7ff',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    color: '#00f7ff',
                    mb: 3,
                    fontWeight: 600,
                    textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
                  }}
                >
                  Who I Am
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ffffff',
                    lineHeight: 1.8,
                  }}
                >
                  I am a passionate developer specializing in Telegram bots, web automation, and data parsing.
                  With a strong background in Python and JavaScript, I create efficient and scalable solutions
                  that help businesses automate their processes and improve productivity.
                </Typography>
              </Paper>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ flex: 1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  background: 'linear-gradient(145deg, rgba(10, 10, 26, 0.8), rgba(20, 20, 40, 0.8))',
                  border: '1px solid rgba(0, 247, 255, 0.2)',
                  borderRadius: '20px',
                  p: 4,
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 0 20px rgba(0, 247, 255, 0.3)',
                    borderColor: '#00f7ff',
                  },
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{
                    color: '#00f7ff',
                    mb: 3,
                    fontWeight: 600,
                    textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
                  }}
                >
                  My Skills
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 2,
                  }}
                >
                  {skills.map((skill, index) => (
                    <Typography
                      key={index}
                      variant="body2"
                      sx={{
                        background: 'rgba(0, 247, 255, 0.1)',
                        color: '#00f7ff',
                        px: 2,
                        py: 1,
                        borderRadius: '12px',
                        border: '1px solid rgba(0, 247, 255, 0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(0, 247, 255, 0.2)',
                          transform: 'scale(1.05)',
                        },
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 