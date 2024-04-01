// themes/createTheme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#151314',
    },
    text: {
      primary: '#f0beff',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    textShadow: '1px 1px 0px #f61aba',
  },
  spacing: 4,
});

export default theme;
