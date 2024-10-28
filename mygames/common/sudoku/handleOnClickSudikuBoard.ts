import { Dispatch } from "react";
import { SudokuBoard } from "./interfaces";
import { useDispatch } from "react-redux";
import { setSelectedNumber } from "@/slices/selectedNumberSlice";

export const useHandleOnClickSudokuBoard = (
  gameBoard: SudokuBoard,
  selectedCell: number[],
  setSelectedCell: Dispatch<any>,
  setPreviousCell: Dispatch<any>,
) => {
  const dispatch = useDispatch()

  const handleOnClick = (rowIndex: number, colIndex: number) => {
    const num = gameBoard[rowIndex][colIndex];

    dispatch(setSelectedNumber(num));
    setPreviousCell([...selectedCell]);
    setSelectedCell([rowIndex, colIndex]);
  }
  return handleOnClick;
}
