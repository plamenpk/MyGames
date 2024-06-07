import Link from "next/link";

const Home = () => {
  return (
    <>
      <header className="flex gap-40 mx-auto my-12 w-11/12 max-w-5xl">
        <div className="w-[25rem] h-[25rem] pl-10">

        </div>
        <div>
          <div className="text-blue-900 text-lg">
            <h1 className="text-3xl font-bold font-family: Montserrat, serif uppercase">Next Level Games for</h1>
            <h1 className="text-3xl font-bold font-family: Montserrat, serif uppercase">Next Level Gamers</h1>

            <p className="py-8">Try & enjoy games with all over the world.</p>
          </div>
          <div className="text-lg flex gap-4">
            <Link href="/community" className="mt-4 px-4 py-2 rounded-lg bg-gradient-to-r rounded from-[#81d8f3] to-[#2b8af7] text-white font-bold no-underline">Join the Community</Link>
            <Link href="/meals" className="mt-4 px-4 py-2 bg-transparent font-normal text-blue-900 border rounded border-blue-600 no-underline">Explore Games</Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col text-blue-900 text-lg max-w-3xl w-11/12 mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold">How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="flex flex-col text-blue-900  text-lg max-w-3xl w-11/12 mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold">Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
