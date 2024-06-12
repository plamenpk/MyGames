import { GameOverProps } from "@/common/ticTacToe/interfaces";

const GameOver = ({ winner, onRestart }: GameOverProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[rgba(40,38,23,0.95)] animate-pop-in">
      <h2 className="font-caprasimo text-4xl text-center text-[#fcd256] m-0">Game Over!</h2>
      {winner && <p className="text-2xl text-center text-[#a3973e]">{winner} won!</p>}
      {!winner && <p className="text-2xl text-center text-[#a3973e]">It&apos;s a draw!</p>}
      <p><button
        onClick={onRestart}
        className="block mx-auto text-xl border-2 border-[#fcd256] text-[#fcd256] bg-none p-2 px-4 rounded cursor-pointer transition-all duration-200 shadow-[0_0_8px_rgba(255,187,0,0.4)] hover:bg-[#fcd256] hover:text-[#3f3b00] hover:scale-110 hover:shadow-[0_0_20px_rgba(255,187,0,0.8)]">Rematch</button></p>
    </div>
  )
}

export default GameOver;
