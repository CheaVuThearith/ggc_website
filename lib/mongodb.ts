import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI as string;

if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

let cachedClient: mongoose.Mongoose | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    cachedClient = await mongoose.connect(MONGO_URI, {
    });
    console.log('Connected to MongoDB');
    return cachedClient;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}
