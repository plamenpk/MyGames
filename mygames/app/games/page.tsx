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
      <header className="flex flex-col gap-12 my-10 mx-auto w-[90%] max-w-[75rem] text-blue-800 serif text-3xl font-bold font-family: Montserrat, serif">
        <h1 className="uppercase">
          Awesome games, created{'     '}
          <span className="text-blue-900 lowercase">for you</span>
        </h1>
        <p className="font-normal">Choose your favorite game and enjoy. It is easy and fun!</p>
      </header>
      <main className="m-6 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, i) => <CardForm key={i} img={game.img}>{game.name}</CardForm>)}
      </main>
    </>
  )
}

export default GamesPage;