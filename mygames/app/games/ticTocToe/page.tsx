'use client'
import PlayerAlias from '@/components/ticTacToe/PlayerAlias';
import GameBoard from './../../../components/ticTacToe/GameBoard';
import Log from '@/components/ticTacToe/Log';
import { useState } from 'react';
import { Turn } from '@/common/ticTacToe/interfaces';
import { deriveActivePlayer, deriveWinner } from '@/common/ticTacToe/helpers';
import { PLAYERS } from '@/common/ticTacToe/constants';
import GameOver from '@/components/ticTacToe/GameOver';
import { deriveGameBoard } from './../../../common/ticTacToe/helpers';

const TicTacToe = () => {
  //const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState<Turn[]>([]);
  const [players, setPlayers] = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns);

  // let gameBoard = [...initialGameBoard.map(arr => [...arr])];

  // for (const turn of gameTurns) {
  //   const { square, player } = turn;
  //   const { row, col } = square;
  //   gameBoard[row][col] = player;
  // }
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);

  const handleSelectSquare = (rowIndex: number, colIndex: number) => {

    // setActivePlayer(currentPlayer => currentPlayer === 'X' ? 'O' : 'X');

    setGameTurns(prevTurns => {
      // let currentPlayer = 'X';

      // if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
      //   currentPlayer = 'O'
      // }
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
