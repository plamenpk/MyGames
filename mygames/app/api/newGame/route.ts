import { connectMongoDB } from "@/lib/mongodb";
import SudokuBoard from "@/models/sudokuBoard";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectMongoDB();
    const boards = await SudokuBoard.find({});
    return NextResponse.json(boards);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "An error occurred while saving new sudoku board.", error },
      { status: 500 }
    );
  }
}
