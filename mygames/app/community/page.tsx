import Image from "next/image";

const CommunityPage = () => {
  return (
    <>
      <header className="gap-12 mx-auto my-12 mb-20 w-[90%] max-w-[75rem] text-blue-800 text-3xl font-bold font-family: Montserrat, serif uppercase text-center">
        <h1>
          One shared passion: <span className="my-8">Game</span>
        </h1>
        <p className="my-8 text-lg">Join our community and share your opinions!!</p>
      </header>
      <main className="w-24 md:w-auto text-center text-blue-800 text-3xl">
        <h2 className="font-family: Montserrat, serif">Community Perks</h2>

        <ul className="flex flex-col items-center py-6">
          <li className="py-6">
            {/* <Image src={mealIcon} alt="A delicious meal" /> */}
            <p>An awesome games</p>
            <p>Share & discover recipes</p>
          </li>
          <li>
            {/* <Image src={communityIcon} alt="A crowd of people, cooking" /> */}
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            {/* <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            /> */}
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}

export default CommunityPage;