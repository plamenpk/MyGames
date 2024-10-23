import NewSudokuBoard from "@/components/sudoku/NewSudokuBoard";

const ShareSudoku = () => {
  return <>
    <header className="my-1 py-1 mx-auto w-[90%] lg:px-6 text-blue-800 serif text-3xl font-bold font-family: Montserrat, serif flex items-center justify-between">
      <h1 className="pb-1 border  border-opacity-0 ">Share you favorite Sudoku</h1>
    </header>
    <main className="my-6 mx-auto w-[90%] lg:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="lg:col-span-2">
        <NewSudokuBoard />
      </div>
      <div className="bg-white border rounded">add-on</div>
      <div className="bg-white border rounded">add-on</div>
    </main>
  </>
}

export default ShareSudoku;