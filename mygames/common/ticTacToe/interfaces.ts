interface GameBoardRow extends Array<string | null> { };

export interface GameBoardMatrixProps extends Array<GameBoardRow> { };
interface Square {
  row: number;
  col: number
}
export interface Turn {
  square: Square;
  player: string
}
export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  turns: Turn[]
}