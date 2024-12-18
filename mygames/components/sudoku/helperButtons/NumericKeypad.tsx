'use client'
import React from "react";
import { NUMERIC_KEYPAD } from "@/common/sudoku/data";
import { useDispatch } from "react-redux";
import { setSelectedNumber } from "@/slices/selectedNumberSlice";

const NumericKeypad = () => {
  const dispatch = useDispatch();
  
  return (
    <>
      <div id='SudokuBoard' className="mt-2 pt-2 w-full max-w-md">
        <div className="grid grid-cols-3 gap-0 aspect-square">
          {NUMERIC_KEYPAD.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  className="w-full h-full text-center text-4xl text-blue-600 hover:text-blue-800 hover:bg-blue-100 font-medium border rounded border-blue-600"
                  onClick={() => dispatch(setSelectedNumber(cell))}
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