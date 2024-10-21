'use client'
import PlayerAlias from '@/components/ticTacToe/PlayerAlias';
import GameBoard from '../../../components/ticTacToe/GameBoard';
import Log from '@/components/ticTacToe/Log';
import { useState } from 'react';
import { Turn } from '@/common/ticTacToe/interfaces';
import { deriveActivePlayer, deriveWinner } from '@/common/ticTacToe/helpers';
import { PLAYERS } from '@/common/ticTacToe/constants';
import GameOver from '@/components/ticTacToe/GameOver';
import { deriveGameBoard } from './../../../common/ticTacToe/helpers';

const TicTacToe = () => {
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const [players, setPlayers] = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {

    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns);
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

  const handleRestart = () => {
    setGameTurns([]);
  }

  const handlePlayerAlias = (symbol: string, alias: string) => {
    setPlayers(prevPlayer => {
      return {
        ...prevPlayer,
        [symbol]: alias
      }
    }
    )
  }
  console.log(gameTurns)
  return (
    <main>
      <div className="max-w-2xl mx-auto my-10 p-8 rounded-lg bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
        <ol className="flex justify-center items-center gap-x-32">
          <PlayerAlias
            initialName={PLAYERS.X}
            symbol="X"
            isActive={activePlayer === 'X'}
            onChangeAlias={handlePlayerAlias}
          >
          </PlayerAlias>
          <PlayerAlias
            initialName={PLAYERS.O}
            symbol="O"
            isActive={activePlayer === 'O'}
            onChangeAlias={handlePlayerAlias}
          >
          </PlayerAlias>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default TicTacToe;
