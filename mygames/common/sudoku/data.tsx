import sudokuImg1 from "@/assets/tic-tac-toe1.png";
import sudokuImg2 from "@/assets/tic-tac-toe2.png";
export const GAMES = [
  { id: 'id1', name: 'Sudoku', img: sudokuImg1 },
  { id: 'id2', name: 'Tic Toc Toe', img: sudokuImg2 },
  { id: 'id3', name: 'Game', img: sudokuImg1 },
  { id: 'id4', name: 'Sudoku', img: sudokuImg1 },
  { id: 'id5', name: 'Tic Toc Toe', img: sudokuImg2 }
]
export const sudokuTemplates = [
  [
  [1, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [1, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, 1, null, null],
  [null, null, null, null, null, null, null, 6, null],
  [1, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null]
],
[
  [2, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, 2, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [2, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, 2, null, null],
  [null, null, null, null, null, null, null, 6, null],
  [2, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null]
]
]
