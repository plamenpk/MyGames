import { GameOverProps } from "@/common/ticTacToe/interfaces";

const GameOver = ({ winner, onRestart }: GameOverProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full rounded flex flex-col gap-2 justify-center items-center bg-[rgba(85,130,197,0.95)] animate-pop-in">
      <h2 className="font-caprasimo text-4xl text-center text-white">Game Over!</h2>
      {winner && <p className="text-2xl text-center text-white">{winner} won!</p>}
      {!winner && <p className="text-2xl text-center text-white">It&apos;s a draw!</p>}
      <p className="p-2"><button
        onClick={onRestart}
        className="block mx-auto text-xl border-2 border-white-200 text-white bg-none p-2 px-4 rounded cursor-pointer transition-all duration-200 shadow-[0_0_8px_rgba(255,187,0,0.4)] hover:bg-[#fcd256] hover:text-[#3f3b00] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,187,0,0.8)]">Rematch</button></p>
    </div>
  )
}

export default GameOver;
