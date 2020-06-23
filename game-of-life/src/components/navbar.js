import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  homeIcon: {
    paddingTop: '18px',
    fontSize: '36px',
  },
  infoIcon: {
    paddingTop: '18px',
    fontSize: '36px'
  },
  homeTitle: {
    fontSize: '24px',
  },
  link: { 
    textDecoration: 'none',
    color: 'white',
  },
});

const NavBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Container maxWidth='lg'>
        <div className={classes.navbar}>
          <Link to='/' className={classes.link}>
            <p className={classes.homeTitle}>Game of Life</p>
          </Link>
          <Link to='/about' className={classes.link}>
            <InfoIcon className={classes.InfoIcon} />
          </Link>
          <Link to='/' className={classes.link}>
            <HomeIcon className={classes.homeIcon} />
          </Link>
        </div>
      </Container>
    </AppBar>
  );
};

export default NavBar;