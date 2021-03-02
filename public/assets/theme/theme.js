import  createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fc0303',
    },
    secondary: {
      main:'#4d4d4d',
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16,
  },
});

export default theme;