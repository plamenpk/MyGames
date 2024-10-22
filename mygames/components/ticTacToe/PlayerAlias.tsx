import { handleOnInputClick, handleChangeAlias } from "@/common/ticTacToe/helpers";
import { type PlayerAliasProps } from "@/common/ticTacToe/interfaces";
import { useState } from "react";

const PlayerAlias: React.FC<PlayerAliasProps> = ({ initialName, symbol, onChangeAlias }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerAlias, setPlayerAlias] = useState(initialName);

  const handleEdit = () => {
    if (isEditing && playerAlias.trim() === "") {
      alert("Alias cannot be empty.");
      return;
    }

    setIsEditing(prevState => !prevState);
    if (isEditing) {
      // Call the callback to update the alias in the parent
      onChangeAlias(symbol, playerAlias);
    }
  };

  return (
    <li className={`list-none p-0 my-0 flex justify-center items-center gap-4`}>
      <span className="inline-block w-40 text-base text-blue-500 m-0 p-2 rounded text-ellipsis text-center">
        {isEditing ? (
          <input
            type="text"
            value={playerAlias} // Controlled input
            onChange={handleChangeAlias(setPlayerAlias)}
            onClick={handleOnInputClick(setIsEditing, setPlayerAlias)}
            className="w-full p-2 text-base text-blue-500 bg-transparent border border-blue-500 rounded focus:outline-none focus:border-blue-500"
          />
        ) : (
          <span onClick={handleOnInputClick(setIsEditing, setPlayerAlias)} className="h-full flex items-center">
            {/* Show alias or fallback to symbol if alias not set */}
            {playerAlias || symbol}
          </span>
        )}
      </span>
      <span className="ml-4 text-base text-blue-500">{symbol}</span>
      <button onClick={handleEdit} className=" text-blue-500 hover:text-blue-800">
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

export default PlayerAlias;
