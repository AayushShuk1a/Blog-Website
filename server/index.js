import express from "express";
import connection from "./database/db.js";

const app = express();

const PORT = 8000;

app.listen(8000, () => console.log("Server is running"));

connection();
