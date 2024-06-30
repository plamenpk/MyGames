import mongoose, { Schema, Document, models } from 'mongoose';

interface INewSudokuBoard extends Document {
  board: (number | null)[][];
}

const SudokuBoardSchema: Schema = new Schema({
  board: {
    type: [[Number]], // 2D array of numbers
    required: true,
  },
});

const sudokuBoard = models.sudokuBoard || mongoose.model<INewSudokuBoard>('sudokuBoard', SudokuBoardSchema);

export default sudokuBoard;

