import { operate } from './utils';

export default function moveLeft(inputBoard) {
  let board = [];
  let score = 0;
  for (let i = 0; i < 4; i++) {
    inputBoard[i] = operate(inputBoard[i]);
    board.push(inputBoard[i]);
  }
  return { board, score };
}
