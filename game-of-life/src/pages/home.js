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
    flexDirection: "column",
    justifyContent: 'center',
  },
  title1: {
    fontSize: '30px',
    display: 'block',
    paddingTop: '10%',
  },
  title2: {
    fontSize: '80px',
    paddingBottom: '5%',
  },
  title3: {
    fontSize: '18px',
    paddingTop: '5%', 
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
    alignContent: 'center',
    paddingTop: '3%',
    padding: '2% 20%',
  },
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
      <AppBar position='static'>
        <div className={classes.container}>
          <p className={classes.title1}>John Conway's</p>
          <p className={classes.title2}>Game of Life</p><br />
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
            Play
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