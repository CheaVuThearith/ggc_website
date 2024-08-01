import mongoose, { Schema, Document } from "mongoose";

interface IBlogPost extends Document {
  title: string;
  content: string;
  image: string;
  author: string;
  catagories: string[];
}

const BlogPostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  catagories: [{ type: String, required: true }],
});

const BlogPostModel =
  mongoose.models.BlogPost ||
  mongoose.model<IBlogPost>("BlogPost", BlogPostSchema);

export default BlogPostModel;
