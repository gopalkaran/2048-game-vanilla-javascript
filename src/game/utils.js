export function rotateRight(matrix) {
  let result = [];

  for (let c = 0; c < matrix.length; c++) {
    let row = [];
    for (let r = matrix.length - 1; r >= 0; r--) {
      row.push(matrix[r][c]);
    }
    result.push(row);
  }

  return result;
}

export function rotateLeft(matrix) {
  let result = [];

  for (let c = matrix.length - 1; c >= 0; c--) {
    let row = [];
    for (let r = matrix.length - 1; r >= 0; r--) {
      row.unshift(matrix[r][c]);
    }
    result.push(row);
  }

  return result;
}

export function slide(row) {
  let nonZeros = row.filter((val) => val);
  let missing = row.length - nonZeros.length;
  let zeros = Array(missing).fill(0);
  let arr = nonZeros.concat(zeros);
  return arr;
}

export function combine(row) {
  for (let i = 0; i < 3; i++) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row[i + 1] = 0;
    }
  }
  return row;
}

export function operate(row) {
  row = slide(row);
  row = combine(row);
  row = slide(row);
  return row;
}

export function flip(matrix) {
  for (let i = 0; i < 4; i++) {
    matrix[i].reverse();
  }
  return matrix;
}

export function rotateGrid(grid) {
  let temp = newGrid();
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      temp[i][j] = grid[j][i];
    }
  }
  return temp;
}

function newGrid() {
  return [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
}
