import express from "express";
import { createPost } from "../controller/post-controller.js";

const Router = express.Router();

Router.post("/create", createPost);

export default Router;
