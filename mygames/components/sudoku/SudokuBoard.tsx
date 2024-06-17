import { SudokuBoardProps } from '@/common/sudoku/interfaces';
import React, { FC } from 'react';


const SudokuBoard: FC<SudokuBoardProps> = ({board}) => {
  console.log(board)
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
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
  // const renderCell = (rowIndex: number, colIndex: number) => {
  //   return (
  //     <div
  //       key={`${rowIndex}-${colIndex}`}
  //       className="w-12 h-12 flex items-center justify-center border border-blue-600"
  //     >
  //       <input
  //         type="text"
  //         maxLength={1}
  //         className="w-full h-full text-center text-lg bg-transparent border border-red-600 outline-none"
  //       />
  //     </div>
  //   );
  // };

  // const renderRow = (rowIndex: number) => {
  //   return (
  //     <div key={rowIndex} className="flex">
  //       {Array.from({ length: 9 }, (_, colIndex) => renderCell(rowIndex, colIndex))}
  //     </div>
  //   );
  // };

  // return (
  //   <div className="grid gap-1 border  p-4 rounded-lg max-w-xl mx-auto">
  //     {Array.from({ length: 9 }, (_, rowIndex) => renderRow(rowIndex))}
  //   </div>
  // );
};

export default SudokuBoard;
