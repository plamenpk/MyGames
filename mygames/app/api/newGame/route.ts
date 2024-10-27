import { connectMongoDB } from "@/lib/mongodb";
import NewSudokuBoard from "@/models/sudokuBoard";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    await connectMongoDB();
    const boards = await NewSudokuBoard.find({});
    return NextResponse.json(boards);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while saving new sudoku board.", error },
      { status: 500 }
    );
  }
}
