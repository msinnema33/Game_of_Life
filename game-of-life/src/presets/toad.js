  
const size = 29;
const toad = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

toad[5][6] = true;
toad[5][7] = true;
toad[5][8] = true;
toad[6][5] = true;
toad[6][6] = true;
toad[6][7] = true;

toad[5][13] = true;
toad[5][14] = true;
toad[5][15] = true;
toad[6][12] = true;
toad[6][13] = true;
toad[6][14] = true;

toad[5][20] = true;
toad[5][21] = true;
toad[5][22] = true;
toad[6][19] = true;
toad[6][20] = true;
toad[6][21] = true;

toad[11][6] = true;
toad[11][7] = true;
toad[11][8] = true;
toad[12][5] = true;
toad[12][6] = true;
toad[12][7] = true;

toad[11][13] = true;
toad[11][14] = true;
toad[11][15] = true;
toad[12][12] = true;
toad[12][13] = true;
toad[12][14] = true;

toad[11][20] = true;
toad[11][21] = true;
toad[11][22] = true;
toad[12][19] = true;
toad[12][20] = true;
toad[12][21] = true;

toad[17][6] = true;
toad[17][7] = true;
toad[17][8] = true;
toad[18][5] = true;
toad[18][6] = true;
toad[18][7] = true;

toad[17][13] = true;
toad[17][14] = true;
toad[17][15] = true;
toad[18][12] = true;
toad[18][13] = true;
toad[18][14] = true;

toad[17][20] = true;
toad[17][21] = true;
toad[17][22] = true;
toad[18][19] = true;
toad[18][20] = true;
toad[18][21] = true;

export default toad;