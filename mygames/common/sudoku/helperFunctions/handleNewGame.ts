import { BoardState, updateBoard } from "@/slices/sudokuSlice";
import { Dispatch } from "react";

export const handleNewGame = (boards: (number | null)[][][], dispatch: Dispatch<any>) => {
  if (boards && boards.length > 0) {
    const randomIndex = Math.floor(Math.random() * boards.length);
    const randomBoard: BoardState = boards[randomIndex];
    dispatch(updateBoard(randomBoard));
  }
}