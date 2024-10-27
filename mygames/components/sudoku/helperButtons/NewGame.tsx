'use client'

import { NewSudokuBoard } from "@/models/sudokuBoard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleNewGame } from "@/common/sudoku/helperFunctions/handleNewGame";
import { SudokuBoard } from "@/common/sudoku/interfaces";

const NewGame = () => {
  const [boards, setBoards] = useState<SudokuBoard[] | undefined>([]);
  const dispatch = useDispatch();

  const fetchBoards = async () => {
    try {
      const response = await fetch('/api/newGame', { method: 'POST' });
      const data: NewSudokuBoard[] = await response.json();
      const arrOfBoards = data.map((obj: NewSudokuBoard) => obj.board.board);
      setBoards(arrOfBoards);
    } catch (error) {
      console.error('Failed to fetch boards', error);
      console.log(error)
    }
  };

  useEffect(() => {
    fetchBoards();
  }, []);

  return (
    <>
      {boards && <button
        className="mt-2 border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800 hover:bg-blue-100 w-full max-w-md"
        onClick={() => handleNewGame(boards, dispatch)}>New Game</button>}
    </>
  )
};

export default NewGame;
