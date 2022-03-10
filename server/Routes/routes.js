import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";

const Router = express.Router();

Router.post("/create", createPost);

Router.get("/posts", getAllPosts);

Router.get("/details/:id", getPost);

Router.post("/update/:id", updatePost);

Router.delete("/delete/:id", deletePost);

export default Router;
