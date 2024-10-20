'use client';
import { newSudokuBoard } from "@/common/sudoku/data"
import { SudokuBoardType } from "@/common/sudoku/interfaces";
import React, { FC, useState } from "react"
import { useSelector } from "react-redux";
import { selectValue } from "@/slices/userStateSlice";


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

  // const handleOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
  //   e.target.select();
  // };

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
    <form>
      <div id='SudokuBoard' className="flex justify-between">
        <div className="grid grid-cols-9 gap-0">
          {gameBoard.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <input
                  key={colIndex}
                  className={`w-12 h-12 text-center text-4xl font-medium text-blue-700 border-blue-600 rounded
                  ${colIndex === 2 || colIndex === 5 ? 'border-r-2 ' : 'border-r'} 
                  ${rowIndex === 2 || rowIndex === 5 ? 'border-b-2' : 'border-b'}
                  ${colIndex === 0 && 'border-l'}
                  ${rowIndex === 0 && 'border-t'}`}
                  value={cell !== null ? cell.toString() : ''}
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                  // onFocus={handleOnFocus}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="">
          {boardSaved ? <div className="border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800">Board saved successfully</div>
            : savingBoard ? <div className="border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800">Saving board</div>
              : <button
                className="border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800"
                onClick={saveNewGameBoard}
              >SAVE</button>}
        </div>
      </div>


    </form >
  );
}

export default NewSudokuBoard;
