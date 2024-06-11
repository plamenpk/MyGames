interface GameBoardRow extends Array<string | null> { };

export interface GameBoardMatrixProps extends Array<GameBoardRow> { };
export interface GameBoardProps {
  onSelectSquare: () => void;
  activePlayerSymbol: string
}