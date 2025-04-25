import express from "express";
import dotenv from "dotenv";
import connectionToDB from "./db/connection.mjs";
import { globalErr } from "./middlewares/handleErr.mjs";

// setup and config
const app = express();
dotenv.config();
const PORT = process.env.PORT;
connectionToDB();

// middlewares
app.use(express.json());

// routes

// global error handling
app.use(globalErr);

// listener
app.listen(PORT, (req, res) => {
  console.log(`Server runs on port: ${PORT}`);
});
