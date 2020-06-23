const size = 29;
const beacon = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

beacon[5][5] = true;
beacon[5][6] = true;
beacon[6][5] = true;
beacon[7][8] = true;
beacon[8][7] = true;
beacon[8][8] = true;

beacon[5][12] = true;
beacon[5][13] = true;
beacon[6][12] = true;
beacon[7][15] = true;
beacon[8][14] = true;
beacon[8][15] = true;

beacon[12][5] = true;
beacon[12][6] = true;
beacon[13][5] = true;
beacon[14][8] = true;
beacon[15][7] = true;
beacon[15][8] = true;

beacon[12][12] = true;
beacon[12][13] = true;
beacon[13][12] = true;
beacon[14][15] = true;
beacon[15][14] = true;
beacon[15][15] = true;

beacon[19][19] = true;
beacon[19][20] = true;
beacon[20][19] = true;
beacon[21][22] = true;
beacon[22][21] = true;
beacon[22][22] = true;

export default beacon;