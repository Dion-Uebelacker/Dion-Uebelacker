import {createTheme} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'IBMPlexSansRegular',
    h1: {
      color: '#626262',
      fontFamily: 'IBMPlexSansMedium',
      fontSize: '2.25rem',
      fontWeight: 400,
    },
    h2: {
      color: '#505050',
      fontFamily: 'IBMPlexSansSemiBold',
      fontSize: '2rem'
    },
    h4: {
      color: '#646464',
      fontFamily: 'IBMPlexSansSemiBold',
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h5: {
      color: '#646464',
      fontFamily: 'IBMPlexSansMedium',
      fontSize: '1.25rem',
      fontWeight: 400,

    },
    h6: {
      color: '#646464',
      fontFamily: 'IBMPlexSansRegular',
      fontSize: '1.25rem',
      letterSpacing: 4
    },
    subtitle1: {
      color: '#646464',
      fontFamily: 'IBMPlexSansMedium',
      fontSize: '1rem',
    },
    body1: {
      color: '#646464',
      fontFamily: 'IBMPlexSansRegular',
      fontSize: '1rem',
    },
    allVariants: {
      color: '#646464',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      html,body{
        font-family: MerriweatherSansRegular;
        background-color: #f9f9f9;
      }
      `,
    },
  }
});

export default theme;
