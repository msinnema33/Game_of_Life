import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/navbar';
import Grid from '../components/grid';
import Foot from '../components/footer';
import Container from '@material-ui/core/Container';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import {
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from '@material-ui/core';

import {
  beacon,
  blank,
  blinker,
  pulsar,
  spaceship,
  } from '../presets/index';

import logic from '../utils/logic';
import randomFill from '../utils/randomFill';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  gameGrid: {
    maxWidth: 'lg',
    margin: '1% auto',
    display: 'flex',
    justifyContent: 'space-around',
  },
  dropControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  gameSetting: {
    margin: '3% 3%',
  },
}));

//keep track of extra boxes outside of display == change this if I go with a wrap around style
const addBuffer = 2;
const makeArray = (size) => {
  return Array(size + addBuffer * 2)
    .fill()
    .map(() => {
      return Array(size + addBuffer * 2).fill(false);
    });
};

const Game = (props) => {
  const classes = useStyles();

  //set initial specs for the grid
  const gridSize = 30;
  const [active, setActive] = useState(makeArray(gridSize));
  const [preset, setPresets] = useState('');
  const [speed, setSpeed] = useState(1);
  const [playStatus, setPlayStatus] = useState('Start');
  const [genCount, setGenCount] = useState(0);

  //update function for grid component
  const update = (x, y) => {
    const newArray = [...active].map((row, index) => {
      if (index === y) {
        row.splice(x, 1, !active[y][x]);
      }
      return row;
    });
    setActive(newArray);
  };

  // add changeGridSize
  // const updateGridSize = (el) => {
  //   setGridSize(el.target.value);
  // }

  //handle dropdown changes
  const updateToPresets = (e) => {
    setPresets(e.target.value);
  };

  useEffect(() => {
    //blank (click to add your own)
    if (preset === 'blank')
      setActive(
        blank.map((row) => {
          return [...row];
        })
      );
    //blinker demo
    else if (preset === 'blinker')
      setActive(
        blinker.map((row) => {
          return [...row];
        })
      );
    //beacon demo
    else if (preset === 'beacon')
      setActive(
        beacon.map((row) => {
          return [...row];
        })
      );
    //pulsar demo
    else if (preset === 'pulsar')
      setActive(
        pulsar.map((row) => {
          return [...row];
        })
      );
    //spaceship demo 
    else if (preset === 'spaceship')
    setActive(
      spaceship.map((row) => {
        return [...row];
      })
    );
    //sparsely populated random fill 
    else if (preset === 'randomSparse')
      setActive(randomFill(25, gridSize + 2*addBuffer));
    //heavily populated random fill  
      else if (preset === 'randomHeavy')
      setActive(randomFill(75, gridSize + 2*addBuffer));

    setGenCount(0);
  }, [preset]);

  const handlePlayButton = (e) => {
    playStatus === 'Start' ? setPlayStatus('Stop') : setPlayStatus('Start');
  };

  const speedUp = () => {
    if (speed <= 64) setSpeed(speed * 2);
  };

  const speedDown = () => {
    if (speed > 1) setSpeed(speed / 2);
  };

  const getLogic = () => {
    setActive(logic(active));
    setGenCount(genCount + 1);
  };

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  //call the server at each interval
  useInterval(() => {
    if (playStatus === 'Stop') getLogic();
  }, 1000 / speed);

  return (
    <div>
      <NavBar />
      <Container className={classes.gameGrid} maxWidth='lg'>
        <Grid active={active} update={update} addBuffer={addBuffer} canClick = {playStatus} />
        <div className={classes.dropControls}>
          <FormControl className={classes.dropControl}>
            <InputLabel id='prefab-selection'>Choose your Pattern</InputLabel>
            <Select
              labelId='preset-selection'
              value={preset}
              onChange={updateToPresets}
            >
              <MenuItem value='blank'>Blank</MenuItem>
              <MenuItem value='blinker'>Blinker</MenuItem>
              <MenuItem value='beacon'>Beacon</MenuItem>
              <MenuItem value='pulsar'>Pulsar</MenuItem>
              <MenuItem value='spaceship'>Spaceships</MenuItem>
              <MenuItem value='randomSparse'>Sparse Random</MenuItem>
              <MenuItem value='randomHeavy'>Heavy Random</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.gameSetting}>
            <p>Speed: {speed}x</p>
            <KeyboardArrowUpIcon onClick={speedUp} />
            <KeyboardArrowDownIcon onClick={speedDown} />
          </div>
          <ThemeProvider theme={theme}>
          <Button
            variant='contained'
            color='primary'
            onClick={handlePlayButton}
            className={classes.gameSetting}
          >
            {playStatus}
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setPresets('blank') & setGenCount(0)}
            className={classes.gameSetting}
          >
            Clear
          </Button>
            <p>Generation: {genCount}</p>
          </ThemeProvider>  
        </div>
      </Container>
      
      <Foot />
    </div>
  );
};

export default Game;