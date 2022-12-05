import { Schema, Document, model } from 'mongoose';

export interface IPostDocument extends Document {
  title: string,
  body: string,
  createdAt: Date,
}

let PostSchema: Schema = new Schema({
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = model<IPostDocument>('Post', PostSchema);

export default Post;