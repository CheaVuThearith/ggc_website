import { connectToDatabase } from "@/lib/mongodb";
import BlogPostModel from "@/models/BlogPosts";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    const data = await BlogPostModel.insertMany(body);

    return NextResponse.json(
      { message: "entry added", data: data },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET(requests: Request) {
  try {
    await connectToDatabase();

    const url = new URL(requests.url);
    const searchParams = url.searchParams;

    const title = searchParams.get("title") || "";
    const catagories = searchParams.get("category") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const filter: any = {};
    if (title) filter.title = { $regex: title, $options: "i" };
    if (catagories) {
      const typesArray = catagories.split(","); // Assuming catagories is a comma-separated string
      filter.catagories = { $in: typesArray };
    }

    const skip = (page - 1) * limit;

    const posts = await BlogPostModel.find(filter).skip(skip).limit(limit);
    const total = await BlogPostModel.countDocuments(filter);

    return NextResponse.json({
      data: posts,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch movies" },
      { status: 500 }
    );
  }
}
