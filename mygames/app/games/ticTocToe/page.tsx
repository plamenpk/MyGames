import PlayerAlias from '@/components/ticTacToe/PlayerAlias';

const TicTacToe = () => {
  return (
    // <div
    //   className="h-screen w-full bg-cover bg-center"
    //   style={{ backgroundImage: `url(${backgroundImg.src})` }}
    // >
    //   <div className="flex items-center justify-center h-full">
    //     <h1 className="text-4xl font-bold">TicTacToe</h1>
    //   </div>
    // </div>
    <main>
      <div className="max-w-2xl mx-auto my-12 p-8 rounded-lg bg-gradient-to-b from-[#383624] to-[#282617] shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
        <ol className="flex justify-center items-center gap-x-32">
          <PlayerAlias initialName="player 1" symbol="O"></PlayerAlias>
          <PlayerAlias initialName="player 2" symbol="X"></PlayerAlias>
        </ol>
      </div>
      log
    </main>
  )
}

export default TicTacToe;
