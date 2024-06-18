'use client'
import React, { FC } from 'react';
import { SudokuBoardProps } from '@/common/sudoku/interfaces';

const SudokuBoard: FC<SudokuBoardProps> = ({ board }) => {

  return (
    <>
      <div id='SudokuBoard' className="flex justify-center items-center min-h-screen">
        {/* <div className="grid grid-cols-9 gap-1 p-4 bg-white border-4 border-black"> */}
        <div className="grid grid-cols-9 gap-1  border-4 border-blue-800 rounded-sm">
          {board.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <input
                  key={colIndex}
                  className={`w-12 h-12 text-center text-4xl font-medium rounded-sm border border-blue-800 ${colIndex === 2 || colIndex === 5 ? 'border-r-4' : ''
                    } ${rowIndex === 2 || rowIndex === 5 ? 'border-b-4' : ''}`}
                  defaultValue={cell !== null ? cell.toString() : ''}
                  maxLength={1}
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
