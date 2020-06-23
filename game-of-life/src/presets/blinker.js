const size = 29;
const blinker = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

blinker[6][5] = true;
blinker[6][6] = true;
blinker[6][7] = true;
blinker[6][12] = true;
blinker[6][13] = true;
blinker[6][14] = true;
blinker[6][19] = true;
blinker[6][20] = true;
blinker[6][21] = true;

blinker[10][5] = true;
blinker[10][6] = true;
blinker[10][7] = true;
blinker[10][19] = true;
blinker[10][20] = true;
blinker[10][21] = true;

blinker[14][5] = true;
blinker[14][6] = true;
blinker[14][7] = true;
blinker[14][19] = true;
blinker[14][20] = true;
blinker[14][21] = true;

blinker[18][5] = true;
blinker[18][6] = true;
blinker[18][7] = true;
blinker[18][12] = true;
blinker[18][13] = true;
blinker[18][14] = true;
blinker[18][19] = true;
blinker[18][20] = true;
blinker[18][21] = true;

export default blinker;