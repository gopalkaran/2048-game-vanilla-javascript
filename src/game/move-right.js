import { flip, operate } from './utils';

export default function moveRight(inputBoard) {
  let board = [];
  let score = 0;
  let grid = flip(inputBoard);

  for (let i = 0; i < 4; i++) {
    grid[i] = operate(grid[i]);
  }

  board = flip(grid);

  return { board, score };
}
