export interface SudokuPageProp {
  params: {
    sudokuSlug: string
  }
}
export interface SudokuBoardProps {
  board: (number | null)[][];
}

type SudokuCell = number | null;
export type SudokuBoardType = SudokuCell[][];