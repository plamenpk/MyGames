'use client'
import React, { FC, useEffect, useState } from 'react';
import { isBoardResolved } from '@/common/sudoku/helperFunctions/isBoardResolved';
import { useSelector, useDispatch } from 'react-redux';
import { selectNumber, resetSelectedNumber, setSelectedNumber } from '@/slices/selectedNumberSlice';
import { selectBoard, updateCell, updateBoard, BoardState } from '@/slices/sudokuSlice';
import SudokuGrid from './SudokuGrid';
import { selectButton, resetSelectedButton } from '@/slices/selectedButtonSlice';
import { REDO, UNDO } from '@/common/sudoku/constants';

const SudokuBoard: FC = () => {

  const [selectedCell, setSelectedCell] = useState<number[]>([]);
  const [previousCell, setPreviousCell] = useState<number[]>([]);
  const dispatch = useDispatch();
  const selectedNumber = useSelector(selectNumber);
  const selectedButton = useSelector(selectButton);
  const gameBoard = useSelector(selectBoard);
  const [logUndo, setLogUndo] = useState<BoardState[]>([gameBoard]);
  const [logRedo, setLogRedo] = useState<BoardState>([]);


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = e.target.value;

    if (value === '' || /^[1-9]$/.test(value)) {
      const numericValue = value === '' ? null : Number(e.target.value);
      dispatch(setSelectedNumber(numericValue));
    }
  };

  const handleOnClick = (rowIndex: number, colIndex: number) => {
    const num = gameBoard[rowIndex][colIndex];

    dispatch(setSelectedNumber(num));
    setPreviousCell([...selectedCell]);
    setSelectedCell([rowIndex, colIndex]);
  }

  useEffect(() => {
    const [row, col] = selectedCell;

    if (row !== undefined && col !== undefined) {
      dispatch(updateCell({ row, col, value: selectedNumber }));

      if (selectedCell[0] !== previousCell[0] || selectedCell[1] !== previousCell[1]) {
        const newBoardState = gameBoard.map(row => [...row]);

        setLogUndo((prevLog) => {
          const lastLogBoard = prevLog[prevLog.length - 1];
          const boardHasChanged = JSON.stringify(lastLogBoard) !== JSON.stringify(newBoardState);

          if (boardHasChanged) {
            return [...prevLog, newBoardState];
          } else {
            return prevLog;
          }
        });
      } else {
        setLogUndo(prevLog => {
          const newLog = [...prevLog];
          newLog[newLog.length - 1] = gameBoard.map(row => [...row]);
          return newLog;
        });
      }
    }
  }, [selectedNumber, selectedCell, selectedButton, previousCell, gameBoard, dispatch]);

  useEffect(() => {
    if (logUndo.length <= 1) dispatch(resetSelectedButton());
    if (logUndo.length > 1 && selectedButton === UNDO) {
      const previousBoardState = logUndo[logUndo.length - 2];

      setLogUndo(prevLog => {
        const newLog = [...prevLog];
        const redo = newLog.pop();
        
        if (redo) { setLogRedo(redo) }

        return newLog;
      });

      if (previousBoardState) {  // Dispatch an action to update the current board with the previous state

        dispatch(updateBoard(previousBoardState));
        dispatch(resetSelectedNumber());  // Reset selectedNumber and selectedCell to prevent immediate update
        setSelectedCell([]);
        setPreviousCell([]);
        dispatch(resetSelectedButton());// Reset the undo button state
      }
    }
  }, [selectedButton, logUndo, dispatch]);

  useEffect(() => {
    if (logRedo.length > 0 && selectedButton === REDO) {
      
      dispatch(updateBoard(logRedo));
      setLogUndo((prevLog) => {
        return [...prevLog, logRedo]
      })
      setLogRedo([]);
      dispatch(resetSelectedButton());
    }
  }, [selectedButton, logRedo,dispatch])
  
  if (isBoardResolved(gameBoard)) {
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
