import express from "express";
import { createPost, getAllPosts } from "../controller/post-controller.js";

const Router = express.Router();

Router.post("/create", createPost);

Router.get("/posts", getAllPosts);

export default Router;
