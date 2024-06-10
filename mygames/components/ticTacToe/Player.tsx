import { type Player } from "@/common/sudoku/interfaces";

const Player = ({name, symbol}: Player) => {
  return (
    <li className="list-none p-0 my-4 justify-center items-center gap-8">
      <span className="inline-block w-40 text-base text-yellow-200 uppercase m-0 p-2 rounded text-ellipsis text-center">
        {name}
        <span className="ml-4 text-base text-[#e1dec7]">{symbol}</span>
      </span>
      <button >edit</button>
    </li>
  )
}

export default Player;
