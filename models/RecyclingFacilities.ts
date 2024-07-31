import mongoose, { Schema, Document } from "mongoose";

interface IRecyclingFacility extends Document {
  location: string;
  iframe: string;
  fee: boolean;
  name: string;
  description: string;
  typesOfWaste: string[];
  image: string;
  links: { [key: string]: string };
  startHour: Date;
  endHour: Date;
}

const stripSecondsAndMilliseconds = (date: Date): Date => {
  date.setSeconds(0, 0);
  date.setDate(1);
  date.setFullYear(2000);
  date.setMonth(0);
  return date;
};

const RecyclingFacilitySchema: Schema = new Schema({
  iframe: { type: String, required: true },
  location: { type: String, required: true },
  fee: { type: Boolean, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  typesOfWaste: [{ type: String, required: true }],
  image: { type: String, required: true },
  links: { type: Map, of: String, required: true },
  startHour: { type: Date, required: true, set: stripSecondsAndMilliseconds },
  endHour: { type: Date, required: true, set: stripSecondsAndMilliseconds },
});

const RecyclingFacilityModel =
  mongoose.models.RecyclingFacility ||
  mongoose.model<IRecyclingFacility>(
    "RecyclingFacility",
    RecyclingFacilitySchema
  );

export default RecyclingFacilityModel;
