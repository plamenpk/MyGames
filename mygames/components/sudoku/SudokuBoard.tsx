'use client'
import React, { FC, useEffect, useState } from 'react';
import { isBoardValid } from '@/common/sudoku/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { selectValue, resetSelectedNumber } from '@/slices/selectedNumberSlice';
import { selectBoard, updateCell, resetCell } from '@/slices/sudokuSlice';
import SudokuGrid from './SudokuGrid';

const SudokuBoard: FC = () => {

  const [selectedCell, setSelectedCell] = useState<number[]>([]);
  const dispatch = useDispatch();
  const selectedNumber = useSelector(selectValue);
  const gameBoard = useSelector(selectBoard);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = e.target.value;
    
    if (value === '' || /^[1-9]$/.test(value)) {
      const numericValue = e.target.value === '' ? null : Number(e.target.value);
      dispatch(updateCell({ row, col, value: numericValue }));
    }
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
    <SudokuGrid
      gameBoard={gameBoard}
      handleInputChange={handleInputChange}
      handleOnClick={handleOnClick}
    />
  )
};

export default SudokuBoard;
