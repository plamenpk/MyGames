import CardForm from "@/components/UI/CardForm";
import logoTicTocToe from"@/assets/tic-tac-toe2.png";
import logoSudoku from "@/assets/sudoku6.png"

const GamesPage = () => {

  return (
    <>
      <header className="flex flex-col gap-8 my-4 mx-auto w-[90%] max-w-[75rem] text-blue-800 serif text-3xl font-bold font-family: Montserrat, serif">
        <h1 className="uppercase">
          Awesome games, created{'     '}
          <span className="text-blue-900 lowercase">for you</span>
        </h1>
        <p className="font-normal">Choose your favorite game and enjoy. It is easy and fun!</p>
      </header>
      <main className="m-6 px-8 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center items-center">
      <CardForm id="" slug="games/ticTocToe" img={logoTicTocToe}>Tic Toc Toe</CardForm>
      <CardForm id="" slug="games/sudoku" img={logoSudoku}>Sudoku</CardForm>
        {/* {GAMES.map((game, i) => <CardForm key={i} id={game.id} img={game.img}>{game.name}</CardForm>)} */}
      </main>
    </>
  )
}

export default GamesPage;