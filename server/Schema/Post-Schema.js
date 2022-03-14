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
    type: Array,
    required: false,
  },
  googleID: {
    type: String,
    required: true,
  },
});

const post = mongoose.model("post", PostSchema);

export default post;
