// This will refactor the logic to utilize wrapping the
// array around itself when the live cells reach the edges

// initial thoughts are to remove the i and j > 0 and just check the individual 8 cells around
// need to somehow add the modulus operator to "go off the edge" and allow to wrap

const wraplogic = (arr) => {
    const newGrid = [];
    for (let i = 0; i < arr.length; i++) { //outer = cols
      const row = [];
      for (let j = 0; j < arr.length; j++) { // inner = rows
        let neighbors = 0;
        //need to deal with i-1 < 0  so if i = -1 then add in arr.length and % by arr.length (0 -1 + 10 % 10)
            for (let x = -1; x < 2;x++) {
                // let neighbors = 0;
                for (let y = -1; y < 2; y++) {
                    let cl = (x + arr.length) % arr.length;
                    let rw = (y + arr.length) % arr.length;
                    if (arr[i + cl][j + rw]) neighbors++;
                    neighbors -= arr[i][j];
                    // return neighbors;
                }
            return neighbors;    
            }
        // if (arr[i - 1][j - 1]) neighbors++;
        // if (arr[i - 1][j]) neighbors++;
        // if (arr[i - 1][j + 1]) neighbors++;
        // if (arr[i][j - 1]) neighbors++;
        // if (arr[i][j + 1]) neighbors++;
        // if (arr[i + 1][j - 1]) neighbors++;
        // if (arr[i + 1][j]) neighbors++;
        // if (arr[i + 1][j + 1]) neighbors++;
  
        if (neighbors === 2) arr[i][j] ? row.push(true) : row.push(false);
        else if (neighbors === 3) row.push(true);
        else row.push(false);
      }
      newGrid.push(row);
    }
    return newGrid;
  };
  
  export default wraplogic;