import { NextRequest, NextResponse } from 'next/server';
import { connectMongoDB } from '@/lib/mongodb'; 
import sudokuBoard from '@/models/sudokuBoard'; 

export const POST = async (req: NextRequest,) => {

  try {
    const { board } = await req.json();
    await connectMongoDB();
    await sudokuBoard.create({ board });
    console.log(board)
    return NextResponse.json({ message: "New sudoku board saved." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while saving new sudoku board." },
      { status: 500 }
    );
  }
};
