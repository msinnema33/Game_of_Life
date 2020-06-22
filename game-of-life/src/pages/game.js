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
  blank,
  blinker,
  toad,
  beacon,
  pentagon,
  pulsar,
  spaceship,
} from '../presets/index';

const useStyles = makeStyles((theme) => ({
  gameBody: {
    maxWidth: 'lg',
    margin: '4% auto',
    display: 'flex',
    justifyContent: 'space-around',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  gameControls: {
    // marginLeft: '5%',
  },
  gameSetting: {
    margin: '5% 5%',
  },
}));

//keep track of extra boxes outside of display
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
  const gridSize = 25;
  const [active, setActive] = useState(makeArray(gridSize));
  const [prefab, setPrefab] = useState('');
  const [speed, setSpeed] = useState(1);
  const [playStatus, setPlayStatus] = useState('Start');

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

  //handle dropdown prefab change
  const updateToPrefab = (e) => {
    setPrefab(e.target.value);
  };

  useEffect(() => {
    //blank option
    if (prefab === 'blank')
      setActive(
        blank.map((row) => {
          return [...row];
        })
      );
    //blinkers option
    else if (prefab === 'blinkers')
      setActive(
        blinker.map((row) => {
          return [...row];
        })
      );
    //toads option
    else if (prefab === 'toads')
      setActive(
        toad.map((row) => {
          return [...row];
        })
      );
    //beacons option
    else if (prefab === 'beacons')
      setActive(
        beacon.map((row) => {
          return [...row];
        })
      );
    //penta option
    else if (prefab === 'penta')
      setActive(
        pentagon.map((row) => {
          return [...row];
        })
      );
    //pulsar option
    else if (prefab === 'pulsar')
      setActive(
        pulsar.map((row) => {
          return [...row];
        })
      );
    //space option
    else if (prefab === 'space')
      setActive(
        spaceship.map((row) => {
          return [...row];
        })
      );
  }, [prefab]);

  const handlePlayButton = (e) => {
    playStatus === 'Start' ? setPlayStatus('Stop') : setPlayStatus('Start');
  };

  const speedUp = () => {
    if (speed <= 64) setSpeed(speed * 2);
  };

  const speedDown = () => {
    if (speed > 1) setSpeed(speed / 2);
  };

  const getStep = () => {
    fetch('/step', {
      method: 'POST',
      cache: 'no-cache',
      headers: { content_type: 'application/json' },
      body: JSON.stringify({ active: active }),
    })
      .then((res) => res.json())
      .then((data) => {
        setActive(data['active']);
      });
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

  //make call to the server at each interval
  useInterval(() => {
    if (playStatus === 'Stop') getStep();
  }, 1000 / speed);

  return (
    <div>
      <NavBar />
      <Container className={classes.gameBody} maxWidth='lg'>
        <Grid active={active} update={update} additional={additional} />
        <div className={classes.gameControls}>
          <FormControl className={classes.formControl}>
            <InputLabel id='prefab-selection'>Choose a Pattern</InputLabel>
            <Select
              labelId='prefab-selection'
              value={prefab}
              onChange={updateToPrefab}
            >
              <MenuItem value='blank'>Blank</MenuItem>
              <MenuItem value='blinkers'>Blinkers</MenuItem>
              <MenuItem value='toads'>Toads</MenuItem>
              <MenuItem value='beacons'>Beacons</MenuItem>
              <MenuItem value='pulsar'>Pulsar</MenuItem>
              <MenuItem value='penta'>Pentadecathlon</MenuItem>
              <MenuItem value='space'>Spaceships</MenuItem>
            </Select>
          </FormControl>
          <div className={classes.gameSetting}>
            <p>Speed: {speed}x</p>
            <AddIcon onClick={speedUp} />
            <RemoveIcon onClick={speedDown} />
          </div>
          <Button
            variant='contained'
            color='primary'
            onClick={handlePlayButton}
            className={classes.gameSetting}
          >
            {playStatus}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Game;