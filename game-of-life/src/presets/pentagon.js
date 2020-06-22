const size = 29;
const pentadeca = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

pentadeca[5][13] = true;
pentadeca[5][14] = true;
pentadeca[5][15] = true;
pentadeca[6][12] = true;
pentadeca[6][16] = true;
pentadeca[7][12] = true;
pentadeca[7][16] = true;
pentadeca[8][13] = true;
pentadeca[8][14] = true;
pentadeca[8][15] = true;

pentadeca[13][13] = true;
pentadeca[13][14] = true;
pentadeca[13][15] = true;
pentadeca[14][12] = true;
pentadeca[14][16] = true;
pentadeca[15][12] = true;
pentadeca[15][16] = true;
pentadeca[16][13] = true;
pentadeca[16][14] = true;
pentadeca[16][15] = true;

export default pentadeca;