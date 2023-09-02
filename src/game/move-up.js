import { rotateGrid, operate } from './utils';

export default function moveUp(inputBoard) {
  let board = [];
  let score = 0;
  let grid = rotateGrid(inputBoard);

  for (let i = 0; i < 4; i++) {
    grid[i] = operate(grid[i]);
  }

  board = rotateGrid(grid);

  return { board, score };
}
