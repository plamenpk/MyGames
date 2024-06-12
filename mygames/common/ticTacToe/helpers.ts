import { WINNING_COMBINATIONS, INITIAL_GAME_BOARD } from "./constants";
import { GameBoardMatrixProps, PlayerSymbol, PlayersProps, Turn } from "./interfaces";


export const deriveActivePlayer = (gameTurns: Turn[]): string => {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer;
};

export const deriveWinner = (gameBoard: GameBoardMatrixProps, players: PlayersProps): string | undefined => {

  let winner: string | undefined;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol as PlayerSymbol];
    }
  }

  return winner;
}

export const deriveGameBoard = (gameTurns: Turn[]) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player
  }

  return gameBoard;
}