import SudokuBoard from "@/components/sudoku/SudokuBoard";
import { SudokuPageProp } from "@/common/sudoku/interfaces";
//import { sudokuTemplates } from "@/common/sudoku/data";

const SudokuPage: React.FC<SudokuPageProp> = ({ params }) => {
  //const board = sudokuTemplates[+params.sudokuSlug - 1]

  return (
    <div id='SudokuPage' className="flex justify-center items-center h-screen">
      <SudokuBoard />
    </div>
  );
};

export default SudokuPage;
