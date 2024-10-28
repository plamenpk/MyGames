import { NewSudokuBoard } from "@/models/sudokuBoard";

export  const fetchBoards = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
    const response = await fetch(`${baseUrl}/api/newGame`, { method: 'POST' });
    const data: NewSudokuBoard[] = await response.json();
    const arrOfBoards = data.map((obj: NewSudokuBoard) => obj.board.board);
    return arrOfBoards;
  } catch (error) {
    console.error('Failed to fetch boards', error);
    console.log(error)
  }
};