export interface SudokuPageProp {
  params: {
    sudokuSlug: string
  }
}
export interface SudokuBoardProps {
  board: (number | null)[][];
}