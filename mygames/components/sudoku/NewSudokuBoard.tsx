'use client';
import { newSudokuBoard } from "@/common/sudoku/data"
import { NewSudokuBoardType } from "@/common/sudoku/interfaces";
import React, { FC, useState } from "react"

const NewSudokuBoard: FC = () => {
  const [gameBoard, setGameBoard] = useState<NewSudokuBoardType>(newSudokuBoard);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = e.target.value === '' ? null : Number(e.target.value);

    setGameBoard(prevBoard => {
      const newBoard = prevBoard.map((row) => [...row]);
      newBoard[row][col] = value;
      return newBoard;
    });
  };

  const saveNewGameBoard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(gameBoard);
  }
  console.log(gameBoard);
  return (
    <form >
      <div id='container' className="grid grid-cols-3 min-h-screen m-0 p-0">
        <div className="col-span-2 flex justify-center items-center m-0 p-0">
          <div className="grid grid-cols-9 gap-1  border-4 border-blue-800 rounded-sm">
            {gameBoard.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <input
                    key={colIndex}
                    className={`w-12 h-12 text-center text-4xl font-medium rounded-sm border border-blue-800 ${colIndex === 2 || colIndex === 5 ? 'border-r-4' : ''
                      } ${rowIndex === 2 || rowIndex === 5 ? 'border-b-4' : ''}`}
                    defaultValue={cell !== null ? cell.toString() : ''}
                    maxLength={1}
                    onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="col-span-1 mb-4">
          <button
            className="border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800"
            onClick={saveNewGameBoard}
          >SAVE</button>
        </div>
      </div>
    </form>
  )
}

export default NewSudokuBoard
