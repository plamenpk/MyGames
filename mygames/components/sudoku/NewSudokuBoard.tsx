'use client';
import { newSudokuBoard } from "@/common/sudoku/data"
import { SudokuBoardType } from "@/common/sudoku/interfaces";
import React, { FC, useState } from "react"
import { useSelector } from "react-redux";
import { selectValue } from "@/slices/userStateSlice";
import SudokuGrid from "./SudokuGrid";
import { handleInputChange } from "@/common/sudoku/helperFunctions/handleInputChange";

const NewSudokuBoard: FC = () => {
  const [gameBoard, setGameBoard] = useState<SudokuBoardType>(newSudokuBoard);
  const [savingBoard, setSavingBoard] = useState(false);
  const username = useSelector(selectValue);

  const saveNewGameBoard = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (username) {
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
          setSavingBoard(false);
          alert('Board saved successfully');
          setGameBoard(newSudokuBoard);
          console.log('Board saved successfully');
        } else {
          const errorData = await response.json();
          console.error('Error saving board:', errorData);
          alert('Error saving board');
        }
      } catch (error) {
        console.error('Error saving board', error);
      }
    } else {
      alert('Log in first')
    }
  };

  return (
    <>
      <div className="flex justify-between">
        <SudokuGrid
          gameBoard={gameBoard}
          handleInputChange={handleInputChange(setGameBoard)}
        ></SudokuGrid>
        <div className="">
          {savingBoard ? <div className="border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800">Saving board</div>
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
