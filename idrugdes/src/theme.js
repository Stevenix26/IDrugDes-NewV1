import { createTheme } from '@mui/material/styles';

export const shades ={
  primary: {
    100: "#ccdcee",
    200: "#99badc",
    300: "#6797cb",
    400: "#3475b9",
    500: "#0152a8",
    600: "#014286",
    700: "#013165",
    800: "#002143",
    900: "#001022"
  },

  secondary: {
    100: "#cff9ef",
    200: "#9ff4df",
    300: "#6feecf",
    400: "#3fe9bf",
    500: "#0fe3af",
    600: "#0cb68c",
    700: "#098869",
    800: "#065b46",
    900: "#032d23"
  },

  neutral: {
    100: "#d0d6dc",
    200: "#a1aeb9",
    300: "#728596",
    400: "#435d73",
    500: "#143450",
    600: "#102a40",
    700: "#0c1f30",
    800: "#081520",
    900: "#040a10"
  },

};




export const theme = createTheme({
  palette: {
    primary:{
      main: shades.primary[500],
    },
    secondary:{
      main: shades.secondary[500],
    },
    neutral:{
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },

  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontSize:11,
    h1: {
      fontFamily: ["Montserrat", "sans-sarif"].join(","),
      fontSize: 48,
    },
     h2: {
      fontFamily: ["Montserrat", "sans-sarif"].join(","),
      fontSize: 36,
    },
     h3: {
      fontFamily: ["Montserrat", "sans-sarif"].join(","),
      fontSize: 20,
    },
     h4: {
      fontFamily: ["Montserrat", "sans-sarif"].join(","),
      fontSize: 14,
    },



  } ,

}) ;

