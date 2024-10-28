export interface SudokuPageProp {
  params: {
    sudokuSlug: string
  }
}
export interface SudokuGridProps {
  gameBoard: SudokuBoard;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClick?: (rowIndex: number, colIndex: number) => void;
}

export type SudokuCell = number | null;
export type SudokuBoard = SudokuCell[][];
