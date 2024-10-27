import { SudokuBoard } from '@/common/sudoku/interfaces';
import mongoose, { Schema, Document, models } from 'mongoose';

export interface NewSudokuBoard extends Document {
  board: {
    author: string,
    board: SudokuBoard
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

const NewSudokuBoard = models.sudokuBoard || mongoose.model<NewSudokuBoard>('sudokuBoard', SudokuBoardSchema);

export default NewSudokuBoard;

