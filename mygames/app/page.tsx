import ImageSlideshow from "@/components/imagesSlideshow";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className="flex gap-40 mx-auto my-12 w-11/12 max-w-5xl">
        <div className="w-[25rem] h-[25rem] pl-10">
          <ImageSlideshow />
        </div>
        <div>
          <div className="text-blue-900 text-lg">
            <h1 className="text-3xl font-bold font-family: Montserrat, serif uppercase">Next Level Games for</h1>
            <h1 className="text-3xl font-bold font-family: Montserrat, serif uppercase">Next Level Gamers</h1>

            <p className="py-8">Try & enjoy games with all over the world.</p>
          </div>
          <div className="text-lg flex gap-4">
            <Link href="/community" className="mt-4 px-4 py-2 bg-gradient-to-r rounded from-[#77d5f1] to-[#2b8af7] text-white font-bold no-underline">Join the Community</Link>
            <Link href="/games" className="mt-4 px-4 py-2 bg-transparent font-normal text-blue-900 border rounded border-blue-600 no-underline">Explore Games</Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-blue-900 text-lg max-w-3xl w-11/12 mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold">How it works</h2>
          <p>
            The goal of Sudoku is to fill the cells with numbers from 1 to 9. The numbers are placed in 9 squares, 3x3 each, thus, in each row, in each column and in each small square there are 9 cells. The same digit can be used only once in each separate column, each line and in each small square. The level of difficulty depends on how many digits are already indicated in the cells. If you open plenty of numbers - then you have very easy Sudoku.
          </p>
        </section>

        <section className="flex flex-col text-blue-900  text-lg max-w-3xl w-11/12 mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold">Why NextLevel Games?</h2>
          <p>
            The advantage of online games on Sudoku.com is that the game is always available and you can use various useful features. You can receive hints, correct or delete the entered data, take notes and stop the time needed to solve the puzzle. If you need to interrupt the game, you can always press a pause button.
          </p>
          <p>
            NextLevel Games is a place to discover new games, and to connect
            with other game lovers.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
