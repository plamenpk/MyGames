import { LogProps } from "@/common/ticTacToe/interfaces";

const Log: React.FC<LogProps> = ({ turns, players }) => {
  return (
    <ol className="max-w-sm text-[#3f3b00] list-none my-8 mx-auto p-0 text-center">
      {turns.map(turn => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {players[turn.player]} selected {turn.square.row+1}, {turn.square.col+1}
        </li>
      ))}
    </ol>
  )
}

export default Log;
