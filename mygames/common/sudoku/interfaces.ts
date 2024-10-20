export interface SudokuPageProp {
  params: {
    sudokuSlug: string
  }
}
export interface SudokuGridProps {
  gameBoard: SudokuBoardType;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number) => void;
  handleOnClick?: (rowIndex: number, colIndex: number) => void;
}

type SudokuCell = number | null;
export type SudokuBoardType = SudokuCell[][];