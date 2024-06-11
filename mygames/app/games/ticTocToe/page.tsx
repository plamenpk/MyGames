'use client'
import PlayerAlias from '@/components/ticTacToe/PlayerAlias';
import GameBoard from './../../../components/ticTacToe/GameBoard';
import { useState } from 'react';

const TicTacToe = () => {
  const [activePlayer, setActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    setActivePlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X')
  }

  return (
    <main>
      <div className="max-w-2xl mx-auto my-10 p-8 rounded-lg bg-gradient-to-b from-[#383624] to-[#282617] shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
        <ol className="flex justify-center items-center gap-x-32">
          <PlayerAlias initialName="player 1" symbol="X" isActive={activePlayer === 'X'}></PlayerAlias>
          <PlayerAlias initialName="player 2" symbol="O" isActive={activePlayer === 'O'}></PlayerAlias>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      log
    </main>
  )
}

export default TicTacToe;
