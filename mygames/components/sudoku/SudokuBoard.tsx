'use client'
import React, { FC, useEffect, useState } from 'react';
import { SudokuBoardProps } from '@/common/sudoku/interfaces';
import { isBoardValid } from '@/common/sudoku/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { selectValue, resetSelectedNumber } from '@/slices/selectedNumberSlice';
import { selectBoard, updateCell, resetCell } from '@/slices/sudokuSlice';


const SudokuBoard: FC = () => {

  const [selectedCell, setSelectedCell] = useState<number[]>([]);
  const dispatch = useDispatch();
  const selectedNumber = useSelector(selectValue);
  const gameBoard = useSelector(selectBoard);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = e.target.value === '' ? null : Number(e.target.value);
    dispatch(updateCell({ row, col, value: value }));
  };

  const handleOnClick = (rowIndex: number, colIndex: number) => {
    dispatch(resetSelectedNumber());
    setSelectedCell([rowIndex, colIndex]);
  }

  useEffect(() => {
    const [row, col] = selectedCell;

    if (row !== undefined && col !== undefined) {
      dispatch(updateCell({ row, col, value: selectedNumber }));
    }
  }, [selectedNumber, selectedCell, dispatch]);

  if (isBoardValid(gameBoard)) {
    return <h6>GameOver</h6>
  }

  return (
    <>
      <div id='SudokuBoard' className="flex justify-start">
        <div className="grid grid-cols-9 gap-0  border-2 border-blue-800 rounded-sm">
          {gameBoard.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <input
                  key={colIndex}
                  className={`w-12 h-12 text-center text-4xl font-medium rounded-sm border border-blue-800 ${colIndex === 2 || colIndex === 5 ? 'border-r-2 ' : ''
                    } ${rowIndex === 2 || rowIndex === 5 ? 'border-b-2' : ''}`}
                  value={cell !== null ? cell.toString() : ''}
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                  onClick={() => handleOnClick(rowIndex, colIndex)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
};

export default SudokuBoard;
