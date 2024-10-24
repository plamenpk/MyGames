'use client'
import React, { FC, useEffect, useState } from 'react';
import { isBoardResolved } from '@/common/sudoku/helperFunctions/isBoardResolved';
import { useSelector, useDispatch } from 'react-redux';
import { selectNumber, resetSelectedNumber, setSelectedNumber } from '@/slices/selectedNumberSlice';
import { selectBoard, updateCell, updateBoard, BoardState } from '@/slices/sudokuSlice';
import SudokuGrid from './SudokuGrid';
import { selectButton, resetSelectedButton } from '@/slices/selectedButtonSlice';

const SudokuBoard: FC = () => {

  const [selectedCell, setSelectedCell] = useState<number[]>([]);
  const [previousCell, setPreviousCell] = useState<number[]>([10, 10]);
  const dispatch = useDispatch();
  const selectedNumber = useSelector(selectNumber);
  const selectedButton = useSelector(selectButton);
  const gameBoard = useSelector(selectBoard);
  const [log, setLog] = useState<BoardState[]>([gameBoard]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = e.target.value;

    if (value === '' || /^[1-9]$/.test(value)) {
      const numericValue = value === '' ? null : Number(e.target.value);
      // dispatch(updateCell({ row, col, value: numericValue }));
      dispatch(setSelectedNumber(numericValue));
    }
  };

  const handleOnClick = (rowIndex: number, colIndex: number) => {
    const num = gameBoard[rowIndex][colIndex];

    dispatch(setSelectedNumber(num));
    setPreviousCell([selectedCell[0], selectedCell[1]]);
    setSelectedCell([rowIndex, colIndex]);
  }

  useEffect(() => {
    // Prevent update if undo is triggered
    if (selectedButton === 'undo') {
      return;
    }

    const [row, col] = selectedCell;
    if (row !== undefined && col !== undefined) {
      dispatch(updateCell({ row, col, value: selectedNumber }));

      if (selectedCell[0] !== previousCell[0] || selectedCell[1] !== previousCell[1]) {
        const newBoardState = gameBoard.map(row => [...row]);
        setLog((prevLog) => {
          const lastLogBoard = prevLog[prevLog.length - 1];
          const boardHasChanged = JSON.stringify(lastLogBoard) !== JSON.stringify(newBoardState);

          if (boardHasChanged) {
            return [...prevLog, newBoardState];
          } else {
            return prevLog;
          }
        });
      } else {
        setLog(prevLog => {
          const newLog = [...prevLog];
          newLog[newLog.length - 1] = gameBoard.map(row => [...row]);
          return newLog;
        });
      }
    }
  }, [selectedNumber, selectedButton, selectedCell, previousCell, gameBoard, dispatch]);

  useEffect(() => {
    if (log.length > 0 && selectedButton === 'undo') {
      console.log(selectedButton, log.length);
      const previousBoardState = log[log.length - 2];
      setLog(prevLog => {
        const newLog = [...prevLog];
        const redo = newLog.pop();
        return newLog;
      });
      // Dispatch an action to update the current board with the previous state
      if (previousBoardState) {
        dispatch(updateBoard(previousBoardState));

        // Reset selectedNumber and selectedCell to prevent immediate update
        dispatch(resetSelectedNumber());
        setSelectedCell([]);
        setPreviousCell([10, 10]);

        // Reset the undo button state
        dispatch(resetSelectedButton());
      }
    }
  }, [selectedButton, log, dispatch]);

  if (isBoardResolved(gameBoard)) {
    return <h6>GameOver</h6>
  }
  console.log(log);
  //console.log(true)
  return (
    <SudokuGrid
      gameBoard={gameBoard}
      handleInputChange={handleInputChange}
      handleOnClick={handleOnClick}
    />
  )
};

export default SudokuBoard;
