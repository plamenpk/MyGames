import { initialGameBoard } from "@/common/ticTacToe/constants";
import { GameBoardProps } from "@/common/ticTacToe/interfaces";

const GameBoard = ({ onSelectSquare, turns }: GameBoardProps) => {
  // const [gameBoard, setGameBoard] = useState<GameBoardMatrixProps>(initialGameBoard);

  // const handleSelectSquare = (rowIndex: number, colIndex: number) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [...prevGameBoard.map(innerArr => [...innerArr])]
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol
  //     return updatedBoard
  //   })
  //   onSelectSquare();
  // }

  let gameBoard = initialGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  return (
    <ol className="flex flex-col flex-wrap justify-center gap-5 my-6 p-0">
      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol className="flex flex-wrap justify-center gap-5 m-0 p-0">
          {row.map((playerSymbol, colIndex) => <li key={colIndex}>
            <button
              onClick={() => onSelectSquare(rowIndex, colIndex)}
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
