import { updateBoard } from "@/slices/sudokuSlice";
import { Dispatch } from "react";
import { SudokuBoard } from "../interfaces";

export const handleNewGame = (boards: SudokuBoard[], dispatch: Dispatch<any>) => {
  if (boards && boards.length > 0) {
    const randomIndex = Math.floor(Math.random() * boards.length);
    const randomBoard: SudokuBoard = boards[randomIndex];
    dispatch(updateBoard(randomBoard));
  }
}