import React from "react";
import { SudokuGridProps } from "@/common/sudoku/interfaces";

const SudokuGrid: React.FC<SudokuGridProps> = ({ gameBoard, handleInputChange, handleOnClick }) => {
  return (
    <div id='SudokuBoard' className="flex justify-start">
      <div className="grid grid-cols-9 gap-0 ">
        {gameBoard.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                className={`w-12 h-12 text-center text-4xl font-normal text-blue-700 border-blue-600 rounded
                  ${colIndex === 2 || colIndex === 5 ? 'border-r-2 ' : 'border-r'} 
                  ${rowIndex === 2 || rowIndex === 5 ? 'border-b-2' : 'border-b'}
                  ${colIndex === 0 ? 'border-l' : ''}
                  ${rowIndex === 0 ? 'border-t' : ''}`}
                value={cell !== null ? cell.toString() : ''}
                maxLength={1}
                onChange={(e) => handleInputChange(e)}
                onClick={handleOnClick ? () => handleOnClick(rowIndex, colIndex) : undefined}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SudokuGrid;
