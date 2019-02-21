import { createMuiTheme } from '@material-ui/core/styles';
import {
  blueGrey,
  amber,
  indigo,
  teal,
} from '@material-ui/core/colors';

export default createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[700],
    },
    secondary: {
      main: amber.A400,
      light: amber[200],
      dark: amber[700],
    },
    textBlue: {
      backgroundColor: indigo[500],
      color: '#fff',
    },
    productTeal: {
      backgroundColor: teal[500],
      color: '#fff',
    },
    featuredAmber: {
      backgroundColor: amber[700],
      color: '#fff',
    },
    textText: {
      color: indigo[500],
    },
    productText: {
      color: teal[500],
    },
    featuredText: {
      color: amber[700],
    },

  },
  typography: {
    useNextVariants: true,
  },
});
