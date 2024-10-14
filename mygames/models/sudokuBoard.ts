import mongoose, { Schema, Document, models } from 'mongoose';

interface NewSudokuBoard extends Document {
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

const sudokuBoard = models.sudokuBoard || mongoose.model<NewSudokuBoard>('sudokuBoard', SudokuBoardSchema);

export default sudokuBoard;

