interface GameBoardRow extends Array<string | null> { };

export interface GameBoardMatrixProps extends Array<GameBoardRow> { };
interface Square {
  row: number;
  col: number
}
export interface Turn {
  square: Square;
  player: 'X' | 'O'
}
export interface GameBoardProps {
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
  board: GameBoardMatrixProps;
}

export interface LogProps {
  turns: Turn[];
  players: PlayersProps
}
export interface PlayersProps {
  X: string;
  O: string
}
export type PlayerSymbol = 'X' | 'O';


export interface PlayerAliasProps {
  initialName: string;
  symbol: string;
  onChangeAlias: (symbol: string, alias: string) => void
}
export interface GameOverProps {
  winner: string | undefined
  onRestart: () => void
}