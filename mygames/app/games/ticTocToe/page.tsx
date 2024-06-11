'use client'
import PlayerAlias from '@/components/ticTacToe/PlayerAlias';
import GameBoard from './../../../components/ticTacToe/GameBoard';
import Log from '@/components/ticTacToe/Log';
import { useState } from 'react';
import { Turn } from '@/common/ticTacToe/interfaces';

const TicTacToe = () => {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {

    setActivePlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O'
      }

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

  return (
    <main>
      <div className="max-w-2xl mx-auto my-10 p-8 rounded-lg bg-gradient-to-b from-[#383624] to-[#282617] shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
        <ol className="flex justify-center items-center gap-x-32">
          <PlayerAlias initialName="player 1" symbol="X" isActive={activePlayer === 'X'}></PlayerAlias>
          <PlayerAlias initialName="player 2" symbol="O" isActive={activePlayer === 'O'}></PlayerAlias>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        <Log />
      </div>
    </main>
  )
}

export default TicTacToe;
