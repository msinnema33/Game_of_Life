const size = 29;
const pulsar = Array(size)
  .fill()
  .map(() => {
    return Array(size).fill(false);
  });

pulsar[9][10] = true;
pulsar[9][11] = true;
pulsar[9][12] = true;
pulsar[9][16] = true;
pulsar[9][17] = true;
pulsar[9][18] = true;
pulsar[11][8] = true;
pulsar[11][13] = true;
pulsar[11][15] = true;
pulsar[11][20] = true;
pulsar[12][8] = true;
pulsar[12][13] = true;
pulsar[12][15] = true;
pulsar[12][20] = true;
pulsar[13][8] = true;
pulsar[13][13] = true;
pulsar[13][15] = true;
pulsar[13][20] = true;
pulsar[14][10] = true;
pulsar[14][11] = true;
pulsar[14][12] = true;
pulsar[14][16] = true;
pulsar[14][17] = true;
pulsar[14][18] = true;

pulsar[16][10] = true;
pulsar[16][11] = true;
pulsar[16][12] = true;
pulsar[16][16] = true;
pulsar[16][17] = true;
pulsar[16][18] = true;
pulsar[17][8] = true;
pulsar[17][13] = true;
pulsar[17][15] = true;
pulsar[17][20] = true;
pulsar[18][8] = true;
pulsar[18][13] = true;
pulsar[18][15] = true;
pulsar[18][20] = true;
pulsar[19][8] = true;
pulsar[19][13] = true;
pulsar[19][15] = true;
pulsar[19][20] = true;
pulsar[21][10] = true;
pulsar[21][11] = true;
pulsar[21][12] = true;
pulsar[21][16] = true;
pulsar[21][17] = true;
pulsar[21][18] = true;

export default pulsar;