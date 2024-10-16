'use client'

const NewGame = () => {
  const onClick = () => {
    console.log('new game')
  }
  return (
    <>
      <button 
      className="mt-2 pt-2 border rounded border-blue-600 text-blue-500 text-xl px-4 py-2 hover:text-blue-800 w-full max-w-md"
      onClick={onClick}>New Game</button>
    </>
  )
};

export default NewGame;
