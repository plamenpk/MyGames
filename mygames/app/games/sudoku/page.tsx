import Link from "next/link";
import SudokuGame from "./sudokuGame/page";
import NumericKeypad from "@/components/sudoku/helperFunctoins/NumericKeypad";
import NewGame from "@/components/sudoku/helperFunctoins/NewGame";
import HelperButtons from "@/components/sudoku/helperFunctoins/HelperButtons";
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
        <div className="h-full min-h-screen flex flex-col">
          <div className="grid grid-cols-4 gap-0 border rounded border-blue-600">
            <HelperButtons><ArrowUturnLeftIcon className="text-blue-500 hover:text-blue-800 hover:bg-blue-100 border-r border-blue-600" /></HelperButtons>
            <HelperButtons><ArrowUturnRightIcon className="text-blue-500 hover:text-blue-800 hover:bg-blue-100 border-r border-blue-600" /></HelperButtons>
            <HelperButtons><XMarkIcon className="text-blue-500 hover:text-blue-800 hover:bg-blue-100 border-r border-blue-600" /></HelperButtons>
            <HelperButtons><ArrowUturnLeftIcon className="text-blue-500 hover:text-blue-800 hover:bg-blue-100" /></HelperButtons>
          </div>
          <NumericKeypad></NumericKeypad>
          <NewGame></NewGame>
        </div>
        <div className="bg-white">add-on</div>
      </main>
    </>
  )
}

export default Sudoku;
