import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00f7ff', // Neon cyan
    },
    secondary: {
      main: '#ff00ff', // Neon magenta
    },
    background: {
      default: '#0a0a1a', // Dark space background
      paper: '#1a1a2e', // Slightly lighter space background
    },
    text: {
      primary: '#ffffff',
      secondary: '#00f7ff',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", sans-serif',
    h1: {
      fontWeight: 700,
      background: 'linear-gradient(45deg, #00f7ff, #ff00ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 600,
      color: '#00f7ff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '0 0 10px rgba(0, 247, 255, 0.5)',
          '&:hover': {
            boxShadow: '0 0 20px rgba(0, 247, 255, 0.8)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1a1a2e, #0a0a1a)',
          border: '1px solid rgba(0, 247, 255, 0.2)',
          boxShadow: '0 0 15px rgba(0, 247, 255, 0.3)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 25px rgba(0, 247, 255, 0.5)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
