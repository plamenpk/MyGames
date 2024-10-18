import { newSudokuBoard } from "@/common/sudoku/data";
import { SudokuPageProp } from "@/common/sudoku/interfaces";
import SudokuBoard from "@/components/sudoku/SudokuBoard";

const SudokuGame: React.FC = () => {
  // const board = sudokuTemplates[+params.sudokuSlug - 1]

const board = newSudokuBoard
  return (
    <div>
      <SudokuBoard board={board} />
    </div>
  );
};

export default SudokuGame;