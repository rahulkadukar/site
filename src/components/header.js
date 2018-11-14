import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'gatsby';

const styles = {
  'link': {
    color: '#ffffff',
    fontSize: '18px',
    marginRight: '20px',
    textDecoration: 'none'
  },

  'linkEnd': {
    color: '#ffffff',
    fontSize: '18px',
    textDecoration: 'none'
  }
}

const muiStyles = theme => ({
  grow: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  root: {
    width: '100%',
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  }
});

class TopNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      metaData: props.metaData,
      mobileMoreAnchorEl: null,
    };
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <Link to={`/blog`}>Blog</Link>
        </MenuItem>
        <MenuItem>
          <Link to={`/about`}>About</Link>
        </MenuItem>
      </Menu>
    );

    return (
      
        <div className={classes.root}>
          <AppBar position="static" >
            <Toolbar variant="dense">
              <Link style={styles.link} to={'/'}>{this.state.metaData.title}</Link>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Link to = {`/blog/`} style = {styles.link}>Blog</Link>
                <Link to = {`/about/`} style = {styles.linkEnd}>About</Link>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </div>
    );
  }
}

TopNavbar.propTypes = {
  classes: PropTypes.object.isRequired
};
    
export default withStyles(muiStyles)(TopNavbar);