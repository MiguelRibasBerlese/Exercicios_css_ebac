import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ 
      py: 4, 
      position: 'relative', 
      zIndex: 1,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 'bold', 
            color: '#ffffff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            fontSize: { xs: '2.5rem', md: '3.5rem' }
          }}
        >
          Sobre Nós
        </Typography>
        <Typography 
          variant="h5" 
          sx={{ 
            maxWidth: '800px', 
            mx: 'auto',
            color: '#f5f5f5',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            fontSize: { xs: '1.2rem', md: '1.5rem' }
          }}
        >
          Somos uma equipe de estudantes universitários apaixonados por tecnologia e inovação
        </Typography>
      </Box>
      
      <Box sx={{ textAlign: 'center', mt: 8 }}>
        <Typography 
          variant="h4" 
          sx={{ 
            color: '#ffffff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            mb: 2
          }}
        >
          🌊 Background Oceânico Implementado! 🐠
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#f5f5f5',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            fontSize: '1.2rem'
          }}
        >
          Aproveite as animações de ondas, bolhas e peixe nadando!
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
