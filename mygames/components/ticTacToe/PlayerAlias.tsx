'use client'
import { type PlayerProps } from "@/common/sudoku/interfaces";
import { useState } from "react";

const PlayerAlias: React.FC<PlayerProps> = ({ initialName, symbol , isActive}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerAlias, setPlayerAlias] = useState(initialName)

  const handelEdit = () => {
    setIsEditing(prevState => !prevState);
  }

  const handleChangeAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerAlias(e.target.value)
  }
  return (
    <li className={`list-none p-0 my-0 flex justify-center items-center gap-4 ${isActive ? 'border' : ''}`}>
      <span className="inline-block w-40 text-base text-yellow-200 uppercase m-0 p-2 rounded text-ellipsis text-center">
        {isEditing ? (
          <input
            type="text"
            required
            defaultValue={initialName}
            onChange={handleChangeAlias}
            className="w-full p-2 text-base text-yellow-200 uppercase bg-transparent border border-yellow-200 rounded focus:outline-none focus:border-yellow-400"
          />
        ) : (
          <span className="h-full flex items-center">{playerAlias}</span>
        )}
      </span>
      <span className="ml-4 text-base text-[#e1dec7]">{symbol}</span>
      <button onClick={handelEdit} className=" text-white hover:text-yellow-200">
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  )
}

export default PlayerAlias;
