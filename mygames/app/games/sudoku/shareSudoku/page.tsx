import NewSudokuBoard from "@/components/sudoku/NewSudokuBoard";

const ShareSudoku = () => {
  return <>
<header> 
  <h1 className="flex flex-col gap-12 my-8 mx-auto w-[90%] max-w-[75rem] text-blue-800 serif text-3xl font-bold font-family: Montserrat, serif">Share you favorite Sudoku</h1>
</header>

  <NewSudokuBoard />
  </>
}

export default ShareSudoku;