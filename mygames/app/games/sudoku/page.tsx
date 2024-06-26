import { GAMES } from "@/common/sudoku/data";
import CardForm from "@/components/UI/CardForm";
import NavLink from "@/components/UI/NavLink";
import Link from "next/link";

const SudokuGrid = () => {
  const sudoku = ['1', '2']
  return (
    <>
      <header className="flex flex-col gap-12 my-10 mx-auto w-[90%] max-w-[75rem] text-blue-800 serif text-3xl font-bold font-family: Montserrat, serif">
        <h1> Sudoku</h1>
        <p><Link
          className="border rounded border-blue-600 text-blue-500 text-2xl font-normal px-4 py-2 hover:text-blue-800"
          href="/games/sudoku/shareSudoku"
        >Share Your Favorite Sudoku</Link></p>
      </header>
      <main className="m-6 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <p><Link href={`/games/sudoku/${sudoku[0]}`}>Sudoku1</Link></p>
        <p><Link href={`/games/sudoku/${sudoku[1]}`}>Sudoku9</Link></p>
        {/* {GAMES.map((game, i) => <CardForm key={i} slug="/games/sudoku/singleSudokuGame" id={game.id} img={game.img}>{game.name}</CardForm>)} */}
      </main>
    </>
  )
}

export default SudokuGrid;
