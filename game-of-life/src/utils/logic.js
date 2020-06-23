const logic = (arr) => {
    const newGrid = [];
    for (let i = 0; i < arr.length; i++) {
      const row = [];
      for (let j = 0; j < arr.length; j++) {
        let neighbors = 0;
        if (i > 0 && j > 0 && arr[i - 1][j - 1]) neighbors++;
        if (i > 0 && arr[i - 1][j]) neighbors++;
        if (i > 0 && j < arr.length - 1 && arr[i - 1][j + 1]) neighbors++;
        if (j > 0 && arr[i][j - 1]) neighbors++;
        if (j < arr.length - 1 && arr[i][j + 1]) neighbors++;
        if (i < arr.length - 1 && j > 0 && arr[i + 1][j - 1]) neighbors++;
        if (i < arr.length - 1 && arr[i + 1][j]) neighbors++;
        if (i < arr.length - 1 && j < arr.length - 1 && arr[i + 1][j + 1])
          neighbors++;
  
        if (neighbors === 2) arr[i][j] ? row.push(true) : row.push(false);
        else if (neighbors === 3) row.push(true);
        else row.push(false);
      }
      newGrid.push(row);
    }
    // let genCount = 0;
    // genCount = genCount++;
    return newGrid;
  };
  
  export default logic;