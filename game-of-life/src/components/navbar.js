import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '12vh',
    alignItems: 'center',
  },
  homeIcon: {
    paddingTop: '8px',
    fontSize: '36px',
  },
  infoIcon: {
    paddingTop: '10px',
    paddingLeft: '250px',
    fontSize: '36px'
  },
  homeTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  link: { 
    textDecoration: 'none',
    color: 'white',
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <AppBar position='static'>
      <Container maxWidth='lg'>
        <div className={classes.navbar}>
          <Link to='/' className={classes.link}>
            <p className={classes.homeTitle}>Game of Life</p>
          </Link>
          <Link to='/about' className={classes.link}>
            <InfoIcon className={classes.infoIcon} />
          </Link>
          <Link to='/' className={classes.link}>
            <HomeIcon className={classes.homeIcon} />
          </Link>
        </div>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};

export default NavBar;