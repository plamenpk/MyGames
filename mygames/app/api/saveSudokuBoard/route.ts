import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb';
import NewSudokuBoard from '@/models/sudokuBoard';

export const POST = async (req: NextRequest,) => {

  try {
    const { author, board } = await req.json();
    await connectMongoDB();
    await NewSudokuBoard.create({ board: { author, board } });
    
    return NextResponse.json({ message: "New sudoku board saved." }, { status: 201 });
  } catch (error) {
    // console.error('Error details:', error);
    return NextResponse.json(
      { message: "An error occurred while saving new sudoku board.", error },
      { status: 500 }
    );
  }
};
