'use client'
import { type PlayerAliasProps } from "@/common/ticTacToe/interfaces";
import { useState } from "react";

const PlayerAlias: React.FC<PlayerAliasProps> = ({ initialName, symbol, isActive, onChangeAlias }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerAlias, setPlayerAlias] = useState(initialName)

  const handelEdit = () => {
    setIsEditing(prevState => !prevState);
    if (isEditing) onChangeAlias(symbol, playerAlias);
  }

  const handleChangeAlias = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerAlias(e.target.value)
  }
  return (
    <li className={`list-none p-0 my-0 flex justify-center items-center gap-4`}>
      <span className="inline-block w-40 text-base text-blue-500 uppercase m-0 p-2 rounded text-ellipsis text-center">
        {isEditing ? (
          <input
            type="text"
            required
            defaultValue={initialName}
            onChange={handleChangeAlias}
            className="w-full p-2 text-base text-blue-500 uppercase bg-transparent border border-blue-500 rounded focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span className="h-full flex items-center">{playerAlias}</span>
        )}
      </span>
      <span className="ml-4 text-base text-blue-500">{symbol}</span>
      <button onClick={handelEdit} className=" text-blue-500 hover:text-blue-800">
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  )
}

export default PlayerAlias;
