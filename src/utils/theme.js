import { createMuiTheme } from '@material-ui/core/styles';
import primary from '@material-ui/core/colors/blueGrey';
import secondary from '@material-ui/core/colors/deepOrange';

export default createMuiTheme({
  typography: {
    fontFamily: [
      '"Fira Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto'
    ].join(','),
    useNextVariants: true,
  },

  palette: {
    primary: primary,
    secondary: secondary,
    background: {
      paper: "#fff",
      default: "#B0BEC5"
    }
  }
});