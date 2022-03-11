import express from "express";
import { UploadImage, getImage } from "../controller/image-controller.js";
import {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
} from "../controller/post-controller.js";
import upload from "../utils/upload.js";

const Router = express.Router();

Router.post("/create", createPost);

Router.get("/posts", getAllPosts);

Router.get("/details/:id", getPost);

Router.post("/update/:id", updatePost);

Router.delete("/delete/:id", deletePost);

Router.post("/file/upload", upload.single("file"), UploadImage);

Router.get("/file/:filename", getImage);

export default Router;
