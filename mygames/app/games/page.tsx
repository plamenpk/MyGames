import CardForm from "@/components/UI/CardForm";
import sudokuImg1 from "@/assets/tic-tac-toe1.png";
import sudokuImg2 from "@/assets/tic-tac-toe2.png";

const games = [
  { name: 'Sudoku', img: sudokuImg1 },
  { name: 'Tic Toc Toe', img: sudokuImg2 },
  { name: 'Game', img: sudokuImg1 },
  { name: 'Sudoku', img: sudokuImg1 },
  { name: 'Tic Toc Toe', img: sudokuImg2 }
]

const GamesPage = () => {

  return (
    <>
      <header></header>
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
        {games.map((game, i) => <CardForm key={i}>{game.name}</CardForm>)}
      </main>
    </>
  )
}

export default GamesPage;