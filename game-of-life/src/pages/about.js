import React from 'react';
import NavBar from '../components/navbar';
import Foot from '../components/footer';
import { Container } from '@material-ui/core';

const About = (props) => {
  return (
    <div>
      <NavBar />
      <Container>
        <h1>All about Conway's Game of Life</h1>
        <p>
          Devised by British Mathematician John H. Conway in 1970, the Game of Life
          plays by a small set of rules. It is considered a zero-player game in which the
          user inputs initial configuration choices, presses the start button and observes
          how the simulation evolves. It is categorized as a cellular automaton and considered
          Turing complete.
        </p>
        <h2>The Rules of Life</h2>
        <ol>
          <li>
          Any live cell with fewer than two live neighbors dies. (underpopulation)
          </li>
          <li>
          Any live cell with two or three neighbors lives on to the next generation.
          </li>
          <li>
          Any live cell with more than three live neighbors dies. (overpopulation)
          </li>
          <li>
          Any dead cell with exactly three live neighbors becomes alive. (reproduction)
          </li>
        </ol>
      </Container>
      <Foot />
    </div>
  );
};

export default About;