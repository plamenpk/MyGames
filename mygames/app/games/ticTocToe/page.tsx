'use client'
import PlayerAlias from '@/components/ticTacToe/PlayerAlias';
import GameBoard from '../../../components/ticTacToe/GameBoard';
import Log from '@/components/ticTacToe/Log';
import { useState } from 'react';
import { Turn } from '@/common/ticTacToe/interfaces';
import { deriveActivePlayer, deriveWinner, deriveGameBoard, onRestart, handlePlayerAlias } from '@/common/ticTacToe/helpers';
import { PLAYER_SYMBOL, PLAYERS } from '@/common/ticTacToe/constants';
import GameOver from '@/components/ticTacToe/GameOver';

const TicTacToe = () => {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const [players, setPlayers] = useState(PLAYERS);

  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {

    setGameTurns(prevTurns => {
      const currentPlayer: 'X' | 'O' = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer
        },
        ...prevTurns,
      ]

      return updatedTurns;
    });
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  return (
    <main>
      <div className="max-w-2xl mx-auto my-10 p-8 rounded-lg bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
        <ol className="flex justify-center items-center gap-x-32">
          <PlayerAlias
            initialName={players[PLAYER_SYMBOL.X]}
            symbol={PLAYER_SYMBOL.X}
            onChangeAlias={(symbol, alias) => handlePlayerAlias(symbol, alias, setPlayers)}
          />
          <PlayerAlias
            initialName={players[PLAYER_SYMBOL.O]}
            symbol={PLAYER_SYMBOL.O}
            onChangeAlias={(symbol, alias) => handlePlayerAlias(symbol, alias, setPlayers)}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={onRestart(setGameTurns)} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  )
}

export default TicTacToe;
