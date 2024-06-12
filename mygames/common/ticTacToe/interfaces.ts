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
  board: GameBoardMatrixProps;
}

export interface LogProps {
  turns: Turn[];
}
export interface PlayersProps {
  X: string;
  O: string
}
export type PlayerSymbol = 'X' | 'O';
export interface PlayerAliasProps {
  initialName: string;
  symbol: string;
  isActive: boolean;
  onChangeAlias: (symbol: string, alias: string) => void
}
export interface GameOverProps {
  winner: string | undefined
  onRestart: () => void
}