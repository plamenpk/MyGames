import { Dispatch, SetStateAction } from "react";
import { SudokuBoardType } from "../interfaces";

export const handleInputChange= (setGameBoard: Dispatch<SetStateAction<SudokuBoardType>>)=>{

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number)=> {
    const value = e.target.value;
  
      if (value === '' || /^[1-9]$/.test(value)) {
        const numericValue = value === '' ? null : Number(value);
        setGameBoard(prevBoard => {
          const newBoard = prevBoard.map((r) => [...r]);
          newBoard[row][col] = numericValue;
          return newBoard;
        });
      }
  }
  return handleInput;
}