import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { createMuiTheme } from '@material-ui/core/styles';
import {ThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    maxWidth: '1024px',
    height: '75vh',
  },
  title1: {
    fontSize: '24px',
    display: 'block',
    paddingTop: '10%',
  },
  title2: {
    fontSize: '72px',
  },
  title3: {
    fontSize: '18px',
    paddingTop: '15%', 
  },
  link: {
    textDecoration: 'none',
  },
  homeButton: {
    fontSize: '32px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '2% 15%',
  },
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <div className={classes.container}>
          <p1 className={classes.title1}>John Conway's</p1>
          <p2 className={classes.title2}>Game of Life</p2><br />
          <p3 className={classes.title3}>Implemented in JavaScript and React</p3>
        </div>
      </AppBar>
      </ThemeProvider>
      <div className={classes.buttonContainer}>
        <ThemeProvider theme={theme}>
        <Link to='/game' className={classes.link}>
          <Button
            variant='contained'
            color='primary'
            className={classes.homeButton}
          >
            Start
          </Button>
        </Link>
        <Link to='/about' className={classes.link}>
          <Button
            variant='contained'
            color='primary'
            className={classes.homeButton}
          >
            About
          </Button>
        </Link>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Home;