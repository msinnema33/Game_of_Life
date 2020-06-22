const size = 29;
const pentagon = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

pentagon[5][13] = true;
pentagon[5][14] = true;
pentagon[5][15] = true;
pentagon[6][12] = true;
pentagon[6][16] = true;
pentagon[7][12] = true;
pentagon[7][16] = true;
pentagon[8][13] = true;
pentagon[8][14] = true;
pentagon[8][15] = true;

pentagon[13][13] = true;
pentagon[13][14] = true;
pentagon[13][15] = true;
pentagon[14][12] = true;
pentagon[14][16] = true;
pentagon[15][12] = true;
pentagon[15][16] = true;
pentagon[16][13] = true;
pentagon[16][14] = true;
pentagon[16][15] = true;

export default pentagon;