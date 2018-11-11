import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#673445"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#C4CCAB"
      // dark: will be calculated from palette.secondary.main,
    },
    background: {
      default: "#F9F7FF"
    }
    // error: will use the default color
  },

  typography: {
    fontFamily: '"Quicksand", "Work Sans"',
    fontSize: 22
  }
});
export default theme;
