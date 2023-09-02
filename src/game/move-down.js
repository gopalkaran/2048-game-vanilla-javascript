import { rotateGrid, flip, operate } from './utils';

export default function moveDown(inputBoard) {
  var board = [];
  let score = 0;

  let grid = rotateGrid(inputBoard);
  grid = flip(grid);

  for (let i = 0; i < 4; i++) {
    grid[i] = operate(grid[i]);
  }

  grid = flip(grid);
  board = rotateGrid(grid);

  return { board, score };
}
