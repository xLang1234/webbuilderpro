'use client';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useEffect, useState, useMemo, createContext, useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Create theme context
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'dark',
});

export default function ThemeRegistry({ children }) {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState('dark'); // Default to dark theme
  
  // Color mode toggle function
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        // Save preference to localStorage
        if (typeof window !== 'undefined') {
          localStorage.setItem('theme-preference', mode === 'light' ? 'dark' : 'light');
        }
      },
      mode,
    }),
    [mode],
  );

  // Create theme based on current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#764ba2',
          },
          secondary: {
            main: '#667eea',
          },
          background: {
            default: mode === 'dark' ? '#121212' : '#fff',
            paper: mode === 'dark' ? '#1e1e1e' : '#fff',
          },
        },
        typography: {
          fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
          h1: {
            fontWeight: 700,
          },
          h2: {
            fontWeight: 600,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 8,
                textTransform: 'none',
              },
            },
          },
          MuiPaper: {
            styleOverrides: {
              root: {
                transition: 'background-color 0.3s ease',
              },
            },
          },
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                transition: 'background-color 0.3s ease, color 0.3s ease',
              },
            },
          },
        },
      }),
    [mode],
  );
  
  useEffect(() => {
    setMounted(true);
    
    // Remove server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    
    // Check for saved theme preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme-preference');
      if (savedTheme) {
        setMode(savedTheme);
      } else {
        // Check system preference if no saved preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setMode(prefersDark ? 'dark' : 'light');
      }
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

// Export a reusable theme toggle button component
export function ThemeToggle() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  
  return (
    <IconButton 
      onClick={toggleColorMode} 
      color="inherit" 
      aria-label="toggle light/dark theme"
      sx={{ 
        ml: 1,
        '&:hover': {
          backgroundColor: mode === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)',
        }
      }}
    >
      {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
