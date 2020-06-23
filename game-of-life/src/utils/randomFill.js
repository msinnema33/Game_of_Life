const randomFill = (num, gridSize) => {
    const output = [];
    for(let i =0 ; i < gridSize; i++) {
        const row = [];
        for(let j = 0; j < gridSize; j++) {
            Math.floor(Math.random() * 100) < num ? row.push(true) : row.push(false);
        }
        output.push(row);
    }
    return output;
};

export default randomFill;