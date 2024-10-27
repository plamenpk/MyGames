import sudokuImg1 from "@/assets/tic-tac-toe1.png";
import sudokuImg2 from "@/assets/tic-tac-toe2.png";

export const GAMES = [
  { id: 'id1', name: 'Sudoku', img: sudokuImg1 },
  { id: 'id2', name: 'Tic Toc Toe', img: sudokuImg2 },
  { id: 'id3', name: 'Game', img: sudokuImg1 },
  { id: 'id4', name: 'Sudoku', img: sudokuImg1 },
  { id: 'id5', name: 'Tic Toc Toe', img: sudokuImg2 }
]

export const NEW_SUDOKU_BOARD = [
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null, null]
]
export const SUDOKU_TEMPLATE = [
    [null, 8, null, 7, null, 9, null, null, 2],
    [null, 3, 4, null, 1, null, null, 9, null],
    [null, null, null, 3, null, 8, null, null, null],
    [null, null, 6, 4, 3, null, 8, null, 1],
    [null, null, 1, 2, 7, 6, null, 4, null],
    [null, null, 3, null, null, 1, 2, 5, 6],
    [null, null, null, null, 9, null, null, 2, 7],
    [3, 4, null, 8, 6, 7, 9, null, null],
    [null, 9, null, 5, null, 4, null, null, 3],
];

export const NUMERIC_KEYPAD = [[1, 2, 3], [4, 5, 6], [7, 8, 9],];
