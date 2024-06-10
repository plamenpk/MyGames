import { FC } from 'react';

const SudokuBoard: FC = () => {
  const renderCell = (rowIndex: number, colIndex: number) => {
    return (
      <div
        key={`${rowIndex}-${colIndex}`}
        className="w-12 h-12 flex items-center justify-center border border-blue-600"
      >
        <input
          type="text"
          maxLength={1}
          className="w-full h-full text-center text-lg bg-transparent border-none outline-none"
        />
      </div>
    );
  };

  const renderRow = (rowIndex: number) => {
    return (
      <div key={rowIndex} className="flex">
        {Array.from({ length: 9 }, (_, colIndex) => renderCell(rowIndex, colIndex))}
      </div>
    );
  };

  return (
    <div className="grid gap-1 border  p-4 rounded-lg max-w-xl mx-auto">
      {Array.from({ length: 9 }, (_, rowIndex) => renderRow(rowIndex))}
    </div>
  );
};

export default SudokuBoard;
