import SudokuBoard from "@/components/sudoku/SudokuBoard";
import { SudokuPageProp } from "@/common/sudoku/interfaces";
import { sudokuTemplates } from "@/common/sudoku/data";

const SudokuPage: React.FC<SudokuPageProp> = ({ params }) => {
const board = sudokuTemplates[+params.sudokuSlug-1]

  return (
    <div className="flex justify-center text-red-600items-center h-screen">
      <SudokuBoard board={board}/>
    </div>
  );
};

export default SudokuPage;
