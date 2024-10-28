import { Dispatch } from "react";
import { setSelectedNumber } from "@/slices/selectedNumberSlice";

export const handleInputSudokuBoard = (dispatch: Dispatch<any>) => {

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = e.target.value;

    if (value === '' || /^[1-9]$/.test(value)) {
      const numericValue = value === '' ? null : Number(e.target.value);
      dispatch(setSelectedNumber(numericValue));
    }
  };

  return handleInput;
}