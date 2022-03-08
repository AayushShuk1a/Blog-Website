import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  createData: {
    type: Date,
    required: true,
  },
  categories: {
    type: String,
    required: false,
  },
});

const post = mongoose.model("post", PostSchema);

export default post;
