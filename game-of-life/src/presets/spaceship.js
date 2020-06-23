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

export default spaceship;