import Link from "next/link";
import SudokuGame from "./sudokuGame/page";
import NumericKeypad from "@/components/sudoku/helperButtons/NumericKeypad";
import NewGame from "@/components/sudoku/helperButtons/NewGame";
import HelperButton from "@/components/sudoku/helperButtons/HelperButton";
import { ArrowUturnLeftIcon, ArrowUturnRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Sudoku = () => {

  return (
    <>
      <header className="my-1 mx-auto w-[90%] lg:px-6 text-blue-800 serif text-3xl font-bold font-family: Montserrat, serif flex items-center justify-between">
        <h1> Sudoku</h1>
        <Link
          className="border rounded border-blue-600 text-blue-500 text-2xl font-normal px-4 py-2 hover:text-blue-800"
          href="/games/sudoku/shareSudoku"
        >Share Your Favorite Sudoku</Link>
      </header>
      <main className="my-6 mx-auto w-[90%] lg:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2">
          <SudokuGame></SudokuGame>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-4 gap-0">
            <HelperButton><ArrowUturnLeftIcon /></HelperButton>
            <HelperButton><ArrowUturnRightIcon/></HelperButton>
            <HelperButton><XMarkIcon /></HelperButton>
            <HelperButton><ArrowUturnLeftIcon /></HelperButton>
          </div>
          <NumericKeypad></NumericKeypad>
          <NewGame></NewGame>
        </div>
        <div className="bg-white border rounded">add-on</div>
      </main>
    </>
  )
}

export default Sudoku;
