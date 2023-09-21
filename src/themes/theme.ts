import { createTheme } from '@mui/material/styles';

const colorsTheme = {
  primary: {
    light: '#42a5f5',
    main: '#1976d2',
    dark: '#1565c0',
  },
  secondary: {
    light: '#ba68c8',
    main: '#9c27b0',
    dark: '#7b1fa2',
  },
  Success: {
    light: '#4caf50',
    main: '#2e7d32',
    dark: '#1b5e20',
  },
};

const AppTheme = createTheme({
  palette: {
    primary: {
      main: colorsTheme.primary.main,
    },
    secondary: {
      main: colorsTheme.secondary.main,
    },
  },
},
);

export default AppTheme;
