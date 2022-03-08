import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";
import Router from "./Routes/routes.js";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 8000;
app.use("/", Router);

app.listen(PORT, () => console.log("Server is running"));

connection();
