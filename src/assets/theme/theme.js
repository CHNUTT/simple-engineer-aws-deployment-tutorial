import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e32619",
    },
    secondary: {
      main: "#4d4d4d",
      light: "#959596",
    },
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    fontSize: 16,
  },
});

export default theme;
