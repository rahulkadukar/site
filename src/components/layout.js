import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Header from './header'

import { MuiThemeProvider} from '@material-ui/core/styles';
import theme from '../utils/theme';
/*
require("prismjs/themes/prism-hopscotch.css")
*/
const styles = theme => ({
  paper: {
    margin: '0 auto',
    marginTop: '20px',
    minHeight: '1000px',
    maxWidth: '1200px',
    padding: '50px'
  },
});

function CenteredGrid(props) {
  const { classes } = props;
              
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper} elevation={8}>
        {props.children}
      </Paper>
    </Grid>
  );
}

const MyGrid = withStyles(styles)(CenteredGrid);

export default ({ children }) => (  
  <StaticQuery
    query = { graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }`
    }
    
    render = { data => (
      <div>
        <MuiThemeProvider theme={theme}>
          <Header metaData={data.site.siteMetadata}/>
          <MyGrid>{children}</MyGrid>
        </MuiThemeProvider>
      </div>
    )}
  />
)
