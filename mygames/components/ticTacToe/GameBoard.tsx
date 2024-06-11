'use client'
import { initialGameBoard } from "@/common/ticTacToe/constants";
import { GameBoardMatrixProps, GameBoardProps } from "@/common/ticTacToe/interfaces";
import { useState } from "react";

// interface GameBoardProp {
//   onSelectSquare: (rowIndex: number, colIndex: number) => void;
// }

const GameBoard = ({ onSelectSquare, activePlayerSymbol }: GameBoardProps) => {
  const [gameBoard, setGameBoard] = useState<GameBoardMatrixProps>(initialGameBoard);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])]
      updatedBoard[rowIndex][colIndex] = activePlayerSymbol
      return updatedBoard
    })
    onSelectSquare();
  }
  return (
    <ol className="flex flex-col flex-wrap justify-center gap-5 my-6 p-0">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol className="flex flex-wrap justify-center gap-5 m-0 p-0">
          {row.map((playerSymbol, colIndex) => <li key={colIndex}>
            <button
              onClick={() => handleSelectSquare(rowIndex, colIndex)}
              className="w-20 h-20 border-none bg-blue-200 text-[#3f3b00] text-5xl cursor-pointer font-caprasimo p-4">
              {playerSymbol}
            </button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  )
}

export default GameBoard;
