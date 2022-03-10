import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controller/post-controller.js";

const Router = express.Router();

Router.post("/create", createPost);

Router.get("/posts", getAllPosts);

Router.get("/details/:id", getPost);

Router.post("/update/:id", updatePost);

export default Router;
