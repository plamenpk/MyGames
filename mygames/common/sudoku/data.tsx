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
    [6, null, 4, 5, 9, 7, null, 1, null],
    [null, 7, null, null, null, null, null, 5, null],
    [1, null, null, null, null, null, null, null, null],
    [4, null, null, 8, 1, 5, null, null, 2],
    [2, null, null, 4, null, 3, null, null, 5],
    [5, null, null, 9, 2, 6, null, null, 3],
    [null, null, null, null, null, null, null, null, 7],
    [null, 4, null, null, null, null, null, 3, null],
    [null, 2, null, 3, 4, 8, 5, null, 9]
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
