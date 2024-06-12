import { GameBoardProps } from "@/common/ticTacToe/interfaces";

const GameBoard = ({ onSelectSquare, board }: GameBoardProps) => {

  return (
    <ol className="flex flex-col flex-wrap justify-center gap-5 my-6 p-0">
      {board.map((row, rowIndex) => <li key={rowIndex}>
        <ol className="flex flex-wrap justify-center gap-5 m-0 p-0">
          {row.map((playerSymbol, colIndex) => <li key={colIndex}>
            <button
              onClick={() => onSelectSquare(rowIndex, colIndex)}
              className="w-20 h-20 border-none bg-blue-200 text-[#3f3b00] text-5xl cursor-pointer font-caprasimo p-4"
              disabled={playerSymbol !== null}>
              {playerSymbol}
            </button>
          </li>)}
        </ol>
      </li>)}
    </ol>
  )
}

export default GameBoard;
