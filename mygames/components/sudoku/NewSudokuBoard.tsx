'use client';
import { newSudokuBoard } from "@/common/sudoku/data"
import { SudokuBoardType } from "@/common/sudoku/interfaces";
import React, { FC, useState } from "react"
import { useSelector } from "react-redux";
import { selectValue } from "@/slices/userStateSlice";
import SudokuGrid from "./SudokuGrid";


const NewSudokuBoard: FC = () => {
  const [gameBoard, setGameBoard] = useState<SudokuBoardType>(newSudokuBoard);
  const [boardSaved, setBoardSaved] = useState(false);
  const [savingBoard, setSavingBoard] = useState(false);
  const username = useSelector(selectValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = e.target.value;

    if (value === '' || /^[1-9]$/.test(value)) {
      const numericValue = value === '' ? null : Number(value);
      setGameBoard(prevBoard => {
        const newBoard = prevBoard.map((r) => [...r]);
        newBoard[row][col] = numericValue;
        return newBoard;
      });
    }
  };

  const saveNewGameBoard = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      setSavingBoard(true);
      const response = await fetch('/api/saveSudokuBoard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: username,
          board: gameBoard
        }),
      });

      if (response.ok) {
        setBoardSaved(true);
        setTimeout(() => {
          setBoardSaved(false);
        }, 2000);
        setGameBoard(newSudokuBoard);
        setSavingBoard(false);
        console.log('Board saved successfully');
      } else {
        const errorData = await response.json();
        console.error('Error saving board:', errorData);
      }
    } catch (error) {
      console.error('Error saving board', error);
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <SudokuGrid
          gameBoard={gameBoard}
          handleInputChange={handleInputChange}
        ></SudokuGrid>
        <div className="">
          {boardSaved ? <div className="border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800">Board saved successfully</div>
            : savingBoard ? <div className="border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800">Saving board</div>
              : <button
                className="border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800"
                onClick={saveNewGameBoard}
              >SAVE</button>}
        </div>
      </div>
    </>
  );
}

export default NewSudokuBoard;
