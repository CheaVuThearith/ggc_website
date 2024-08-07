import { connectToDatabase } from "@/lib/mongodb";
import RecyclingFacilityModel from "@/models/RecyclingFacilities";
import { NextResponse } from "next/server";
//valid search params are name, location, typesOfWaste(array separated by ','), page, limit
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    for (let index = 0; index < body.length; index++) {
      const element = body[index];
      if (element.startHour) {
        element.startHour = new Date(element.startHour);
      }
      if (element.endHour) {
        element.endHour = new Date(element.endHour);
      }
    }
    const data = await RecyclingFacilityModel.insertMany(body);

    return NextResponse.json(
      { message: "entry added", data: data },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    await connectToDatabase();

    const url = new URL(request.url);
    const searchParams = url.searchParams;

    const name = searchParams.get("name") || "";
    const location = searchParams.get("location") || "";
    const typesOfWaste = searchParams.get("category") || "";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    const filter: any = {};
    if (name) filter.name = { $regex: name, $options: "i" };
    if (location) filter.location = { $regex: location, $options: "i" };
    if (typesOfWaste) {
      const typesArray = typesOfWaste.split(","); // Assuming typesOfWaste is a comma-separated string
      filter.typesOfWaste = { $in: typesArray };
    }
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
  } catch (error:any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
