import mongoose, { Schema, Document, models } from 'mongoose';

export interface NewSudokuBoard extends Document {
  board: {
    author: string,
    board: (number | null)[][]
  }
}

const SudokuBoardSchema: Schema = new Schema({
  board: {
    author: {
      type: String,
      required: true, 
    },
    board: {
      type: [[Number]],
      required: true,
    },
  }
});

const SudokuBoard = models.sudokuBoard || mongoose.model<NewSudokuBoard>('sudokuBoard', SudokuBoardSchema);

export default SudokuBoard;

