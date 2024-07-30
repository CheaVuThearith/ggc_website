import { connectToDatabase } from "@/lib/mongodb";
import MovieModel from "@/models/movies";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDatabase();
    const movies = await MovieModel.find({});
    return NextResponse.json(movies);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }
}
