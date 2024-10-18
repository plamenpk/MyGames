'use client'
import React from "react";
import { numericKeypad } from "@/common/sudoku/data";
import { useDispatch } from "react-redux";
import { setSelectedNumber } from "@/slices/selectedNumberSlice";

const NumericKeypad = () => {
  const dispatch = useDispatch();
  const handleOnClick = (num: number) => {
    dispatch(setSelectedNumber(num));
  };

  return (
    <>
      <div id='SudokuBoard' className="mt-2 pt-2 w-full max-w-md">
        <div className="grid grid-cols-3 gap-0 aspect-square">
          {numericKeypad.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  className="w-full h-full text-center text-4xl text-blue-600 hover:text-blue-800 font-medium border rounded-sm border-blue-600"
                  onClick={() => handleOnClick(cell)}
                >{cell}</button>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default NumericKeypad;