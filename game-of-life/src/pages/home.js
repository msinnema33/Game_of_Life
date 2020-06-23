import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core';

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
    padding: '2% 10%',
  },
});

const Home = (props) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position='static'>
        <div className={classes.container}>
          <p1 className={classes.title1}>John Conway's</p1>
          <p2 className={classes.title2}>Game of Life</p2><br />
          <p3 className={classes.title3}>Implemented in JavaScript and React</p3>
        </div>
      </AppBar>
      <div className={classes.buttonContainer}>
        <Link to='/game' className={classes.link}>
          <Button
            variant='contained'
            color='success'
            className={classes.homeButton}
          >
            Start
          </Button>
        </Link>
        <Link to='/about' className={classes.link}>
          <Button
            variant='contained'
            color='success'
            className={classes.homeButton}
          >
            About
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;