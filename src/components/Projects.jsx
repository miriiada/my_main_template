import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Telegram Bot',
      description: 'A bot that helps users manage their tasks and schedule.',
      technologies: ['Python', 'Telegram API', 'SQLite'],
    },
    {
      title: 'Web Automation',
      description: 'Automated web scraping and data collection system.',
      technologies: ['Python', 'Selenium', 'BeautifulSoup'],
    },
    {
      title: 'Data Parser',
      description: 'Efficient data parsing and processing tool.',
      technologies: ['Python', 'Pandas', 'NumPy'],
    },
    {
      title: 'Todo App',
      description: 'A simple and intuitive to-do list application.',
      technologies: ['React', 'Vite', 'JavaScript'],
      demoUrl: 'https://todo-app-mirii.vercel.app/',
    },
  ];

  return (
    <Box id="projects" sx={{ py: 8, position: 'relative' }}>
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
            My Projects
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 4,
              justifyContent: 'center',
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    background: 'linear-gradient(145deg, rgba(10, 10, 26, 0.8), rgba(20, 20, 40, 0.8))',
                    border: '1px solid rgba(0, 247, 255, 0.2)',
                    borderRadius: '20px',
                    p: 4,
                    width: { xs: '100%', sm: '300px' },
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                      mb: 2,
                      fontWeight: 600,
                      textShadow: '0 0 5px rgba(0, 247, 255, 0.5)',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#ffffff',
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      mb: project.demoUrl ? 2 : 0, // Add margin if demo button exists
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <Typography
                        key={techIndex}
                        variant="caption"
                        sx={{
                          background: 'rgba(0, 247, 255, 0.1)',
                          color: '#00f7ff',
                          px: 2,
                          py: 1,
                          borderRadius: '12px',
                          border: '1px solid rgba(0, 247, 255, 0.2)',
                        }}
                      >
                        {tech}
                      </Typography>
                    ))}
                  </Box>
                  {project.demoUrl && (
                    <Box sx={{ mt: 'auto' }}>
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          display: 'inline-block',
                          background: 'linear-gradient(90deg, #00f7ff, #ff00ff)',
                          color: '#ffffff',
                          padding: '10px 20px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          fontWeight: 'bold',
                          textAlign: 'center',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 0 10px rgba(0, 247, 255, 0.5)',
                        }}
                      >
                        Demo
                      </motion.a>
                    </Box>
                  )}
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;