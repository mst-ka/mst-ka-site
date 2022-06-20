import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#be2f37",
    },
    secondary: {
      main: "#c19709",
    },
    grey: {
      main: "#333333",
    },
    white: {
      main: "#f9f9f9"
    },
    background: {
      default: "#f9f9f9",
    },
  },
  typography: {
   fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    
  },
  transitions: {
    duration: {
      standard: 100,
    },
    
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;
