import sudokuImg1 from "@/assets/tic-tac-toe1.png";
import sudokuImg2 from "@/assets/tic-tac-toe2.png";

export const GAMES = [
  { id: 'id1', name: 'Sudoku', img: sudokuImg1 },
  { id: 'id2', name: 'Tic Toc Toe', img: sudokuImg2 },
  { id: 'id3', name: 'Game', img: sudokuImg1 },
  { id: 'id4', name: 'Sudoku', img: sudokuImg1 },
  { id: 'id5', name: 'Tic Toc Toe', img: sudokuImg2 }
]

export const newSudokuBoard = [
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
export const sudokuTemplates = [
  [
    [6, 1, 4, 5, 9, 4, 5, 9, 7],
    [4, 7, 4, 5, 9, 4, 5, 9, 7],
    [1, 4, 5, 9, 7, 4, 5, 9, 7],
    [4, 4, 5, 9, 7, 5, 9, 7, 2],
    [6, 1, 4, 5, 9, 4, 5, 9, 7],
    [4, 7, 4, 5, 9, 4, 5, 9, 7],
    [1, 4, 5, 9, 7, 4, 5, 9, 7],
    [4, 4, 5, 9, 7, 5, 9, 7, 2],
    [1, 2, 6, 3, 4, 8, 5, null, null]
  ],
  [
    [1, 7, 9, 5, 3, 8, 4, 2, 6],
    [5, 4, 6, 7, 9, 2, 1, 8, 3],
    [3, 8, 2, 6, 1, 4, 5, 9, 7],
    [8, 2, 4, 3, 7, 1, 6, 5, 9],
    [6, 1, 7, 8, 5, 9, 2, 3, 4],
    [9, 5, 3, 2, 4, 6, 7, 1, 8],
    [4, 3, 5, 9, 2, 7, 8, 6, null],
    [7, 9, 8, 1, 6, 5, 3, 4, null],
    [2, 6, 1, 4, 8, 3, 9, 7, 5]
  ]
];

export const numericKeypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9],];
