import { NewSudokuBoard } from "@/models/sudokuBoard";
import { Dispatch } from "react";

export  const fetchBoards = async (setBoards: Dispatch<any>) => {
  try {
    const response = await fetch('/api/newGame', { method: 'POST' });
    const data: NewSudokuBoard[] = await response.json();
    const arrOfBoards = data.map((obj: NewSudokuBoard) => obj.board.board);
    setBoards(arrOfBoards);
  } catch (error) {
    console.error('Failed to fetch boards', error);
    console.log(error)
  }
};