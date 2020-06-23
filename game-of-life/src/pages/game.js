import React, { useState, useEffect, useRef } from 'react';
import NavBar from '../components/navbar';
import Grid from '../components/grid';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
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
  pentadeca,
  pulsar,
  spaceship,
  toad,
} from '../presets/index';

import logic from '../utils/logic';

const useStyles = makeStyles((theme) => ({
  gameGrid: {
    maxWidth: 'lg',
    margin: '4% auto',
    display: 'flex',
    justifyContent: 'space-around',
  },
  dropControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  dropControls: {
    // marginLeft: '5%',
  },
  gameSetting: {
    margin: '5% 5%',
  },
}));

//keep track of extra boxes outside of display == change this if I go with a wrap around style
const additional = 2;
const makeArray = (size) => {
  return Array(size + additional * 2)
    .fill()
    .map(() => {
      return Array(size + additional * 2).fill(false);
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

  //update Generations counter
  // const updateToGenCount = () => {
  //   setGenCount(genCount);
  // }

  //handle dropdown changes
  const updateToPresets = (e) => {
    setPresets(e.target.value);
  };

  useEffect(() => {
    //blank 
    if (preset === 'blank')
      setActive(
        blank.map((row) => {
          return [...row];
        })
      );
    //blinker 
    else if (preset === 'blinker')
      setActive(
        blinker.map((row) => {
          return [...row];
        })
      );
    //toad 
    else if (preset === 'toad')
      setActive(
        toad.map((row) => {
          return [...row];
        })
      );
    //beacon 
    else if (preset === 'beacon')
      setActive(
        beacon.map((row) => {
          return [...row];
        })
      );
    //pentadeca
    else if (preset === 'pentadeca')
      setActive(
        pentadeca.map((row) => {
          return [...row];
        })
      );
    //pulsar 
    else if (preset === 'pulsar')
      setActive(
        pulsar.map((row) => {
          return [...row];
        })
      );
    //spaceship 
    else if (preset === 'spaceship')
      setActive(
        spaceship.map((row) => {
          return [...row];
        })
      );
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
        <Grid active={active} update={update} additional={additional} />
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
              <MenuItem value='toad'>Toad</MenuItem>
              <MenuItem value='beacon'>Beacon</MenuItem>
              <MenuItem value='pulsar'>Pulsar</MenuItem>
              <MenuItem value='pentadeca'>Pentadecathlon</MenuItem>
              <MenuItem value='spaceship'>Spaceships</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.gameSetting}>
            <p>Speed: {speed}x</p>
            <AddIcon onClick={speedUp} />
            <RemoveIcon onClick={speedDown} />
          </div>
          <Button
            variant='contained'
            color='success'
            onClick={handlePlayButton}
            className={classes.gameSetting}
          >
            {playStatus}
          </Button>
          <Button
            variant='contained'
            color='success'
            onClick={() => setPresets('blank') & setGenCount(0)}
            className={classes.gameSetting}
          >
            Clear
          </Button>
            <p>Generation: {genCount}</p>
          
        </div>
      </Container>
    </div>
  );
};

export default Game;