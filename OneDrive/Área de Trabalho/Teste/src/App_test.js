import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Create a simple theme
const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ 
        background: 'linear-gradient(0deg, #022244, #58c8da)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{ color: 'white', fontSize: '3rem', textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          🌊 Teste Oceânico 🐠
        </h1>
      </div>
    </ThemeProvider>
  );
}

export default App;