import { fetchBoards } from "@/common/sudoku/helperFunctions/fetchBoards";
import NewGameButton from "./NewGameButton";

const NewGame = async () => {
  const boards = await fetchBoards()

  return (
    <>
      {boards && <NewGameButton boards={boards} />}
    </>
  )
};

export default NewGame;
