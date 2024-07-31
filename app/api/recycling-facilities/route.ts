import { connectToDatabase } from "@/lib/mongodb";
import RecyclingFacilityModel from "@/models/RecyclingFacilities";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const searchParams = url.searchParams;

    const name = searchParams.get("name") || "";
    const location = searchParams.get("location") || "";
    const typesOfWaste = searchParams.get("typesOfWaste") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const filter: any = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (location) filter.location = { $regex: location, $options: "i" };
    if (typesOfWaste)
      filter.typesOfWaste = { $regex: typesOfWaste, $options: "i" };

    const skip = (page - 1) * limit;

    const facilities = await RecyclingFacilityModel.find(filter)
      .skip(skip)
      .limit(limit);

    const total = await RecyclingFacilityModel.countDocuments(filter);

    return NextResponse.json({
      data: facilities,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch recycling facilities" },
      { status: 500 }
    );
  }
}
