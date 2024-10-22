import { WINNING_COMBINATIONS, INITIAL_GAME_BOARD } from "./constants";
import { GameBoardMatrixProps, PlayerSymbol, PlayersProps, Turn } from "./interfaces";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const deriveActivePlayer = (gameTurns: Turn[]): 'X' | 'O' => {
  let currentPlayer: 'X' | 'O' = 'X';

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

export const onRestart = (setGameTurns: Dispatch<SetStateAction<Turn[]>>) => () => setGameTurns([]);

export const handlePlayerAlias = (symbol: string, alias: string, setPlayers: Dispatch<SetStateAction<PlayersProps>>) => {
  setPlayers(prevPlayer => {
    return {
      ...prevPlayer,
      [symbol]: alias
    }
  }
  )
}

export const handleOnInputClick = (
  setIsEditing: Dispatch<SetStateAction<boolean>>,
  setPlayerAlias: Dispatch<SetStateAction<string>>
) => () => {
  setIsEditing(true);
  setPlayerAlias('');
}

export const handleChangeAlias = (
  setPlayerAlias: Dispatch<SetStateAction<string>>
) => (e: ChangeEvent<HTMLInputElement>) => {
  setPlayerAlias(e.target.value);
};
