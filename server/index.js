import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connection from "./database/db.js";
import Router from "./Routes/routes.js";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();

const URL = process.env.CONNECTION_URL;

app.get("/", (req, res) => {
  res.send("Hello to Blog Api");
});

const PORT = process.env.PORT || 8000;
app.use("/", Router);

app.listen(PORT, () => console.log("Server is running"));

connection(URL);
