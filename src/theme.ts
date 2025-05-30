import {createTheme} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: 'IBMPlexSansRegular',
    h1: {
      color: '#626262',
      fontFamily: 'IBMPlexSansRegular',
      fontSize: '2.25rem',
      fontWeight: 400,
    },
    h2: {
      color: '#626262',
      fontFamily: 'IBMPlexSansRegular',
      fontSize: '2rem'
    },
    h4: {
      color: '#626262',
      fontFamily: 'IBMPlexSansRegular',
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h5: {
      color: '#626262',
      fontFamily: 'IBMPlexSansMedium',
      fontSize: '1.25rem',
      fontWeight: 400,

    },
    h6: {
      color: '#626262',
      fontFamily: 'IBMPlexSansRegular',
      fontSize: '1.25rem',
      letterSpacing: 4
    },
    subtitle1: {
      color: '#626262',
      fontFamily: 'IBMPlexSansMedium',
      fontSize: '1rem',
    },
    body1: {
      color: '#626262',
      fontFamily: 'IBMPlexSansRegular',
      fontSize: '1rem',
    },
    allVariants: {
      color: '#626262',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'IBMPlexSansRegular'
        },
        text: {
          fontFamily: 'IBMPlexSansRegular'
        }
      }
    },
    MuiLink: {
      defaultProps: {
        variant: 'body2',
      },
      styleOverrides: {
        root: {
          fontFamily: 'IBMPlexSansRegular',
          textDecoration: 'none',
          color: '#626262',
        },
        text: {
          fontFamily: 'IBMPlexSansRegular'
        }
      }
    },
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
