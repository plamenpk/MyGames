'use client'
import React, { FC, useState } from 'react';
import { SudokuBoardProps } from '@/common/sudoku/interfaces';
import { isBoardValid } from '@/common/sudoku/helpers';

const SudokuBoard: FC<SudokuBoardProps> = ({ board }) => {
  const [gameBoard, setGameBoard] = useState(board);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => {
    const value = e.target.value === '' ? null : Number(e.target.value);

    setGameBoard(prevBoard => {
      const newBoard = prevBoard.map((row) => [...row]);
      newBoard[row][col] = value;
      return newBoard;
    });
  };

  if (isBoardValid(gameBoard)) {
    return <h6>GameOver</h6>
  }

  return (
    <>
      <div id='SudokuBoard' className="flex justify-center items-center">
        {/* <div className="grid grid-cols-9 gap-1 p-4 bg-white border-4 border-black"> */}
        <div className="grid grid-cols-9 gap-0  border-2 border-blue-800 rounded-sm">
          {gameBoard.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <input
                  key={colIndex}
                  className={`w-12 h-12 text-center text-4xl font-medium rounded-sm border border-blue-800 ${colIndex === 2 || colIndex === 5 ? 'border-r-2 ' : ''
                    } ${rowIndex === 2 || rowIndex === 5 ? 'border-b-2' : ''}`}
                  defaultValue={cell !== null ? cell.toString() : ''}
                  maxLength={1}
                  onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
};



// import React, { FC } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '@/store/store';
// import { updateCell } from '@/slices/sudokuSlice';
// import GameBoard from './../ticTacToe/GameBoard';
// import { isFilled } from '@/common/sudoku/helpers';
// import GameOver from './../ticTacToe/GameOver';

// interface SudokuBoardProps {
//   board: (number | null)[][];
// }

// const SudokuBoard: FC<SudokuBoardProps> = () => {
//   const board = useSelector((state: RootState) => state.sudoku.board);
//   const dispatch = useDispatch();

//   const handleChange = (rowIndex: number, colIndex: number, value: string) => {
//     const newValue = value === '' ? null : parseInt(value, 10);
//     dispatch(updateCell({ row: rowIndex, col: colIndex, value: newValue }));
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen">
//         {/* <div className="grid grid-cols-9 gap-1 p-4 bg-white border-4 border-black"> */}
//         <div className="grid grid-cols-9 gap-1  border-4 border-blue-800 rounded-sm">
//           {board.map((row, rowIndex) => (
//             <React.Fragment key={rowIndex}>
//               {row.map((cell, colIndex) => (

//                 <input
//                   key={colIndex}
//                   className={`w-12 h-12 text-center text-4xl font-medium rounded-sm border border-blue-800 ${colIndex === 2 || colIndex === 5 ? 'border-r-4' : ''
//                     } ${rowIndex === 2 || rowIndex === 5 ? 'border-b-4' : ''}`}
//                   defaultValue={cell !== null ? cell.toString() : ''}
//                   maxLength={1}
//                   onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
//                 />

//               ))}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// };

export default SudokuBoard;
