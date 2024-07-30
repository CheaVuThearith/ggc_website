import mongoose, { Document, Schema } from 'mongoose';

interface IAwards {
  wins: number;
  nominations: number;
  text: string;
}

interface IImdb {
  rating: number;
  votes: number;
  id: number;
}

interface ITomatoes {
  viewer: {
    rating: number;
    numReviews: number;
    meter: number;
  };
  fresh: number;
  critic: {
    rating: number;
    numReviews: number;
    meter: number;
  };
  rotten: number;
  lastUpdated: Date;
}

interface IMovie extends Document {
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  poster: string;
  title: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated: string;
  awards: IAwards;
  lastupdated: Date;
  year: number;
  imdb: IImdb;
  countries: string[];
  type: string;
  tomatoes: ITomatoes;
  num_mflix_comments: number;
}

const AwardsSchema: Schema = new Schema({
  wins: { type: Number, required: true },
  nominations: { type: Number, required: true },
  text: { type: String, required: true },
});

const ImdbSchema: Schema = new Schema({
  rating: { type: Number, required: true },
  votes: { type: Number, required: true },
  id: { type: Number, required: true },
});

const TomatoesSchema: Schema = new Schema({
  viewer: {
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    meter: { type: Number, required: true },
  },
  fresh: { type: Number, required: true },
  critic: {
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    meter: { type: Number, required: true },
  },
  rotten: { type: Number, required: true },
  lastUpdated: { type: Date, required: true },
});

const MovieSchema: Schema = new Schema({
  plot: { type: String, required: true },
  genres: [{ type: String, required: true }],
  runtime: { type: Number, required: true },
  cast: [{ type: String, required: true }],
  poster: { type: String, required: true },
  title: { type: String, required: true },
  fullplot: { type: String, required: true },
  languages: [{ type: String, required: true }],
  released: { type: Date, required: true },
  directors: [{ type: String, required: true }],
  rated: { type: String, required: true },
  awards: { type: AwardsSchema, required: true },
  lastupdated: { type: Date, required: true },
  year: { type: Number, required: true },
  imdb: { type: ImdbSchema, required: true },
  countries: [{ type: String, required: true }],
  type: { type: String, required: true },
  tomatoes: { type: TomatoesSchema, required: true },
  num_mflix_comments: { type: Number, required: true },
});

const MovieModel = mongoose.models.Movie || mongoose.model<IMovie>('Movie', MovieSchema);

export default MovieModel;
