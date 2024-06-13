import { GAMES } from "@/common/sudoku/data";
import CardForm from "@/components/UI/CardForm";
import Link from "next/link";

const Sudoku = () => {
  return (
    <>
      <header className="flex flex-col gap-12 my-10 mx-auto w-[90%] max-w-[75rem] text-blue-800 serif text-3xl font-bold font-family: Montserrat, serif">
        <h1> Sudoku</h1>
      </header>
      <main className="m-6 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <p><Link href='/games/sudoku/sudoku1'>Sudoku1</Link></p>
        <p><Link href='/games/sudoku/sudoku2'>Sudoku2</Link></p>
        {GAMES.map((game, i) => <CardForm key={i} slug="/games/sudoku/singleSudokuGame" id={game.id} img={game.img}>{game.name}</CardForm>)}
      </main>
    </>
  )
}

export default Sudoku;
