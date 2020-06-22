const size = 29;
const spaceship = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

spaceship[4][5] = true;
spaceship[4][6] = true;
spaceship[4][7] = true;
spaceship[4][8] = true;
spaceship[5][4] = true;
spaceship[5][8] = true;
spaceship[6][8] = true;
spaceship[7][4] = true;
spaceship[7][7] = true;

spaceship[11][5] = true;
spaceship[11][6] = true;
spaceship[11][7] = true;
spaceship[11][8] = true;
spaceship[11][9] = true;
spaceship[12][4] = true;
spaceship[12][9] = true;
spaceship[13][9] = true;
spaceship[14][4] = true;
spaceship[14][8] = true;
spaceship[15][6] = true;

spaceship[21][8] = true;
spaceship[21][9] = true;
spaceship[22][4] = true;
spaceship[22][5] = true;
spaceship[22][6] = true;
spaceship[22][7] = true;
spaceship[22][9] = true;
spaceship[22][10] = true;
spaceship[23][4] = true;
spaceship[23][5] = true;
spaceship[23][6] = true;
spaceship[23][7] = true;
spaceship[23][8] = true;
spaceship[23][9] = true;
spaceship[24][5] = true;
spaceship[24][6] = true;
spaceship[24][7] = true;
spaceship[24][8] = true;

export default spaceship;